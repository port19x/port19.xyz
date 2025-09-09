+++
title = "💻 Easy Lockscreen Autoreboot"
date = 2025-09-09
description = "feds in shambles"
+++

## Why

Full Disk Encryption is more secure than any lockscreen.
My FDE password is much more secure than my lockscreen password.
If my laptop is stolen while in lockscreen, whether by criminals or feds, I want it to move into a more secure state eventually to circumvent brute-force attacks.

Also I guess this is neat to save power if you go on vacation or sth.

## How

On arch based distros with [polkit](https://wiki.archlinux.org/title/Polkit), an unpriviledged user can execute power management commands like `reboot` and `poweroff`.
I use [slock](https://wiki.archlinux.org/title/Slock) as my lockscreen, any alternative should work.
Modify the number of seconds to sleep as needed. I use 12 hours, but I can see anything from 1-24 hours being useful depending on threat model.

### Emacs Lisp
```lisp
(defun launch (command)
      (interactive (list (read-shell-command "$ ")))
      (start-process-shell-command command nil command))

(defun slock () (interactive)
         (launch "sleep 43200 && reboot") ;12 hours
         (launch "slock && killall sleep"))
```

### Shell
```bash
(sleep 43200 && reboot) &
slock && killall sleep
```