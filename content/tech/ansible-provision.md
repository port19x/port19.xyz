+++
title = "💻 DigitalOcean Provisioning with Ansible"
date = 2023-08-04
description = "Because clicking through a web interface is highly cringe"
+++

## Prerequisites

- Have ansible installed [(docs)](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
- Have a digital ocean account [(ref link)](https://m.do.co/c/e3fad703cc9b)
- Create an API token [(docs)](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
- Save the API token in a file with the name `.token`
- Add `.token` as a line to your `.gitignore` file
- Prepare ssh key pair or use the same you use for git [(docs)](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/create-with-openssh/)

### requirements.yml

```yml
---
collections:
  - name: community.digitalocean
```

### inventory.yml

```yml
---
digitalocean:
  hosts:
    megamind.example.com:
```

### ansible.cfg

```ini
[defaults]
inventory = inventory.yml
```

## The Playbooks

First, run `ansible-galaxy install -r requirements.yml` to install the digital ocean module. \
In the following, `~/.ssh/digital-ocean.pub` points to my public key. \
You may need to adapt that path.

### provision.yml

```yml
---
- name: Provision Digital Ocean Ressources
  hosts: localhost
  vars:
    oauth_token: "{{ lookup('ansible.builtin.file', '.token') }}"
  tasks:

    - name: Register SSH Public Key
      community.digitalocean.digital_ocean_sshkey:
        name: "Digital Ocean SSH Key"
        oauth_token: "{{ oauth_token }}"
        ssh_pub_key: "{{ lookup('ansible.builtin.file',
                         '~/.ssh/digital-ocean.pub') }}"
        state: present
      register: sshkey_result

    - name: Create Droplet
      community.digitalocean.digital_ocean_droplet:
        state: present
        oauth_token: "{{ oauth_token }}"
        name: "{{ item }}"
        size: s-1vcpu-512mb-10gb
        region: fra1
        image: debian-12-x64
        unique_name: true
        ssh_keys: ["{{ sshkey_result.data.ssh_key.id }}"]
      with_inventory_hostnames:
        - digitalocean
      register: droplet_result

    - name: Persist IP address in hostfile
      become: true
      ansible.builtin.lineinfile:
        dest: /etc/hosts
        regexp: '.*{{ item.data.droplet.name }}$'
        line: "{{ item.data.droplet.networks.v4.0.ip_address }}
               {{ item.data.droplet.name }}"
        state: present
      with_items: "{{ droplet_result.results }}"
```

Please refer to the [api docs](https://slugs.do-api.dev/) for regions, image and size shorthands. \
To provision your droplet now run `ansible-playbook provision.yml` \
Congrats, you should now have a virtual private server in the cloud.



### destroy.yml

```yml
---
- hosts: localhost
  name: Cleanup
  vars:
    oauth_token: "{{ lookup('ansible.builtin.file', '.token') }}"
  tasks:

    - name: Destroy Droplet
      community.digitalocean.digital_ocean_droplet:
        state: absent
        oauth_token: "{{ oauth_token }}"
        name: "{{ item }}"
        unique_name: true
      with_inventory_hostnames:
        - digitalocean

    - name: Retrieve DigitalOcean Customer Balance
      community.digitalocean.digital_ocean_balance_info:
        oauth_token: "{{ oauth_token }}"
      register: balance

    - name: Display balance
      ansible.builtin.debug:
        msg: |
          Total|MTD: {{ balance.data.account_balance }}|
                     {{ balance.data.month_to_date_usage }}
```

Let's save some bucks while we're learning systems administration and deprovision our servers when we're done playing with them for the day. \
Run `ansible-playbook destroy.yml` to squash your cloud infrastructure. \
This playbook will also display your current account balance and usage in the running month.

## Common Errors

If the playbook run fails at the "Persist IP address in hostfile" step, it spits out a large error message.
This can be fixed by running `sudo echo hi` and then retrying. You need root privileges to write to your hostfile after all.

If the playbook run fails at the "Register SSH public key" step, it will fail with an HTTP 401 status code.
Seeing this error message indicates your api token has expired.

## What now?

To dive further into ansible, I recommend Jeff Geerlings book [Ansible for Devops](https://www.ansiblefordevops.com/) \
You can also check out [my vps setup](https://github.com/port19x/rapture) \
The code for this article is available [here](https://github.com/port19x/digitalocean-provisioning-with-ansible)

If you run into any problems, feel free to reach out.
