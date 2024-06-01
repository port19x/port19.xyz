+++
title = "💻 GPN CTF 2024 Writeup"
date = 2024-06-02
description = "Support your local flag hunters"
+++

# GPN CTF 2024 Writeup

This weekend I participated in the [GPN CTF](https://ctftime.org/event/2257), organised by the CTF team of the Karlsruhe Institute of Technology.
I focused on the challenges tagged "Introduction", solving all except the Pwning one.
For my readers unfamiliar with CTFs, I recently wrote [this post](https://port19.xyz/tech/ctf/) about their role in my career so far.
The flags are listed in the order I got them.

## Sanity Check: You know the rules and so do I

It's customary for CTF organisers to include at least one trivially easy flag to alleviate the participants worries that subsequent flags are rejected due to the system not working.
As hinted at in the title, the flag was present in full on the site listing the rules for the event.

## Web: Never gonna tell a lie and type you

*This challenge gave a Dockerfile and some PHP code.*

The Dockerfile told me there was a file called `flag.txt` under the root directory, making the objective pretty obvious.
What was less obvious was how to talk to the server and how the hell this PHP worked.

Talking to the server turned out to be not too complicated after looking up the appropriate curl options to arrive at something like this: \
`curl -A "friendlyHuman" --data 'data={"user": "admin🤠", "password": "something"}`

The PHP wanted me to meet the strange condition that my supplied password be equal to the result of applying the function `securePassword` to it.
```perl
function securePassword($user_secret){
    if ($user_secret < 10000){
        die("nope don't cheat");
    }
    $o = (integer) (substr(hexdec(md5(strval($user_secret))),0,7)*123981337);
    return $user_secret * $o ;
}
```

So my first intuition was that `0*x=0` and surely that must be useful to find this flag.
I ended up spending about two hours first doing some napkin math of how long it would take my iGPU to find an md5 hash that starts with seven zeroes, followed by some [Hashcat](https://hashcat.net/hashcat/) related research and ultimately finding the [hashgame](https://beneri.se/hashgame/).

Somewhere along the way I heard about PHP type juggling and that in PHP, due to it, `md5('240610708')` equals `md5('QNKCDZO')`.
After a short break I fired up another instance to get the communication rolling again.
In my infinite wisdom, I supply the password "11e777777" and am surprised to be greeted as admin.

From here I just had to add "cat /flag.txt" to the "command" field of my json POST data.

## Reversing: Never gonna run around and reverse you

*This challenge gave a binary that runs a hash function as well as the hashed flag.*

At first I ran the binary through `strings` and `xxd`, and with `strace` and `ltrace` to no avail.

I then tested various inputs, quickly noticing that the hashing function is linear. What do I mean by that?
Well, a character in the input string maps to a fixed number of digits in the output string, usually two.
The early characters influence later characters, but not the other way around.
If there was no influence at all, we could quickly build a substitution table, but this is still fine.

To get the flag I wrote a python script that builds up the flag, checking each character for matching hash output as it appends it.
The code speaks for itself:

```python
import subprocess
target_hash = "4717591a4e08732410215579264e7e0956320367384171045b28187402316e1a7243300f501946325a6a1f7810643b0a7e21566257083c63043404603f5763563e43"
flag = "GPNCTF{"
local_hash = ""

while not local_hash == target_hash:
    for x in range(32, 127):
        local_flag = flag + chr(x)
        local_hash = subprocess.check_output(["./hasher", local_flag]).decode()[:-1]
        if(all(x == y for x,y in zip(local_hash, target_hash))):
            flag += chr(x)
            break

print(flag)
```

## Crypto: Never gonna let you crypto

*This challenge gave a `chal.py` and a file with the encrypted flag.*

`chal.py` contained an implementation of the [XOR cipher](https://en.wikipedia.org/wiki/XOR_cipher), with the notable weakness being the key length of 5.
The XOR cipher is uniquely symmetric in that it's not just a symmetric cipher, but one where the encryption function is identical to the decryption function.
Since the flag format was known to match `GPNCTF{.*}`, we had a known plaintext.
With this, and after fighting pythons type system for a little, I was able to derive the key and then use that to decrypt the flag.
Check out the code:

```python
flag_enc = "d24fe00395d364e12ea4ca4b9f2da4ca6f9a24b2ca729a399efb2cd873b3ca7d9d1fb3a66a9b73a5b43e8f3d"
kpt = "GPNCT"

# convert to bytes
b_flag_enc = bytes.fromhex(flag_enc)
b_kpt = kpt.encode("utf8")

# derive the key
key = []
for i in range(len(b_kpt)):
    key += [b_flag_enc[i]^b_kpt[i]]
key = bytes(key)

# get flag
flag = []
for i in range(len(b_flag_enc)):
    flag += [b_flag_enc[i]^key[i%len(key)]]
print(bytes(flag).decode())
```

## Misc: A full solve's what I'm thinking of

*With this challenge you're tasked with uploading a file to a website.*

The website then executes the uploaded file, with a `catflag` binary available in the root directory of the server.
I'm not sure I could have done this challenge without hints.

First order of business was to write a hello world program in C, which went well.
Then, after a little digging, I thought `execl` would do the trick, calling `/catflag` from within my binary.
While it worked locally to the extend testable, it did not yield a flag.

Checking the chat logs, I came across the recommendation to use `patchelf`.
So I thought to add `/catflag` as a dependency via `patchelf --add-needed "/catflag" a.out`, but that wasn't enough.
What was actually necessary was to use `--set-interpreter` instead of `--add-needed`.
The idea for that came from [this post](https://klamp.works/2016/04/15/code-exec-ldd.html), but I'm sure the patchelf hint would have been sufficient with a little more perseverance.
