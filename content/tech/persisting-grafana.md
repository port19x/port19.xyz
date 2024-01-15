+++
title = "💻 Persisting Grafana"
date = 2024-01-15
description = "4 whole config files 😠"
+++

## Prerequisites

- install [`grafana`](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)
- install [`prometheus`](https://prometheus.io/docs/prometheus/latest/installation/)
- install [`prometheus-node-exporter`](https://prometheus.io/docs/guides/node-exporter/)
- install [`docker-compose`](https://docs.docker.com/compose/install/)

### docker-compose.yml

I'm using docker-compose, both on my server as well as for this article. \
You should be able to extrapolate to your preferred infrastructure-as-code solution.

```yml
version: '3'

networks:
  default:
    internal: true
  proxy:
    internal: false

services:
  grafana:
    image: grafana/grafana:10.2.3
    networks:
      - default
      - proxy
    ports:
      - "3000:3000"
    volumes:
      - ./grafana.ini:/etc/grafana/grafana.ini
      - ./grafana-datasources.yml:/etc/grafana/provisioning/datasources/datasources.yml
      - ./grafana-dashboard.yml:/etc/grafana/provisioning/dashboards/dashboard.yml
      - ./grafana-dashboard.json:/etc/grafana/provisioning/dashboards/dashboard.json

  prometheus:
    image: prom/prometheus:v2.49.0
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  node-exporter:
    image: prom/node-exporter:v1.7.0
    command:
      - '--path.rootfs=/host'
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
      - --collector.filesystem.ignored-mount-points
      - "^/(sys|proc|dev|host|etc|rootfs/var/lib/docker/containers|rootfs/var/lib/docker/overlay2|rootfs/run/docker/netns|rootfs/var/lib/docker/aufs)($$|/)"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
      - /:/host:ro,rslave
```

### prometheus.yml

```yml
scrape_configs:
  - job_name: "node-exporter"
    static_configs:
      - targets: ["node-exporter:9100"]
```


## The Global Config

Make sure to check the docker-compose file for where these files need to go.

### grafana.ini

```ini
[server]
serve_from_sub_path = true
root_url = http://example.com/
#[auth]
#disable_login_form = true
[auth.anonymous]
enabled = true
org_role = Viewer
[dashboards]
default_home_dashboard_path = /etc/grafana/provisioning/dashboards/dashboard.json
[analytics]
enabled = false
check_for_updates = false
```

The server section is necessary to get Grafana to return, this doesn't matter on localhost. \
I recommend terminating TLS on a reverse proxy in front of Grafana. \
`serve_from_sub_path` is only necessary if you locate your dashboard on a subpath like `example.com/grafana`. \
`default_home_dashboard_path` sets the default dashboard to display. \
Also, since this is corporate software, you have to opt-out of update checks and analytics. \

`disable_login_form = true` is a useful setting for when your dashboard is exposed to the public. \
If it is, also add the `[auth.anonymous]` block. Otherwise you're locking yourself out of Grafana. \
`disable_login_form` is commented out so we can edit the dashboard, but I recommend it for "production".
The default Grafana login credentials are `admin` `admin`.

### grafana-datasources.yml

The url will differ if you're not using my docker-compose setup.

```yml
apiVersion: 1
datasources:
  - name: Prometheus
    type: prometheus
    access: proxy
    url: http://prometheus:9090
```

### grafana-dashboard.yml

```yml
apiVersion: 1
providers:
  - name: 'Node Load'
    options:
      path: /etc/grafana/provisioning/dashboards
```

## Persisting a dashboard

Dashboards can be exported and imported as a large json blob. \
In this example it lives in a [`dashboard.json`](https://github.com/port19x/persisting-grafana/blob/master/grafana-dashboard.json), remember that you can set the default dashboard in the `grafana.ini`.
You can browse your available dashboards from the Grafana web ui.

When you are done editing your dashboard, persist it back into a version controlled json file as follows:
- click the cog *(top right)*
- save as *(top right)*
- name it whatever¹
- click the share icon *(top left)*
- export *(top middle)*
- toggle on "Export for sharing externally"
- save to file *(select the previous iteration, overwriting it)*

¹I recommend adding a timestamp, as you can't have two dashboards of the same name. \
Alternatively, you can find the dashboard name in your git diff and manually revert the name back.

## What now?

You can browse public dashboards on [Grafanas website](https://grafana.com/grafana/dashboards/). \
You can also check out [my vps setup](https://github.com/port19x/rapture) \
The code for this article is available [here](https://github.com/port19x/persisting-grafana)

If you run into any problems, feel free to reach out.
