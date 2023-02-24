+++
title = "💻 On FOSS Licenses"
date = 2022-12-24
description = "How I choose Open Source Licenses"
+++

# How I choose Open Source Licenses

## The Four Freedoms

The four freedoms are what makes free software free.
They are defined by the [Free Software Foundation](https://www.fsf.org/), pioneered by Richard Stallman.

1. Use: Free Software can be used for any purpose and is free of restrictions such as licence expiry or geographic limitations.
2. Study: Free Software and its code can be studied by anyone, without non-disclosure agreements or similar restrictions.
3. Share: Free Software can be shared and copied at virtually no cost.
4. Improve: Free Software can be modified by anyone, and these improvements can be shared publicly.

[More verbosely elaborated on by the FSF](https://www.gnu.org/philosophy/free-sw.en.html)

The open source definition has a few more clauses, but broadly aligns with free software.
You can read up on the ten clauses [here](https://opensource.org/osd)

## Permissive vs Copyleft

Permissive licenses pose very limited restrictions at best.
Copyleft denotes a type of FOSS license that prevents the "propietization" of FOSS code.
Permissive licenses mostly let people do whatever they want with the software.
Copyleft licenses aim to protect the software from ill intent, protecting it's freedom.

In the following I'll treat public domain licenses as permissive licenses.
I call less restrictive licenses weak and more restrictive licenses strong.

### Permissive Licenses

1. CC0: The best public domain dedication
2. MIT/BSD: License copy must be included
3. Apache: License copy + changes must be documented

### Copyleft Licenses

1. Mozilla: Modifications of existing files have same license
2. GPLv2: Actual full copyleft
3. LGPLv3: GPLv3 unless used as a library, if used as a library no copyleft.
4. GPLv3: GPLv2 + anti tivoization + drm protection + minor improvements. [good stack overflow post](https://stackoverflow.com/questions/41460/what-are-the-differences-between-gpl-v2-and-gpl-v3-licenses)
5. AGPLv3: GPLv3 + network use is distribution. protects back end software. [reasoning by the fsf](https://www.gnu.org/licenses/why-affero-gpl.en.html)

### Choosing between Apache, Mit and CC0

- Don't care at all? Use CC0
- Need license copy on distribution? Use MIT
- Also want changes to be listed? Use Apache

### Choosing between The GPLs

- Writing a library? Use the LGPLv3
- Writing a backend service? Use the AGPLv3
- Otherwise use the GPLv3

## Do I care about this Software?

If I care about the software I'm writing and plan to invest significant time and ressources into it's development.
If the Software is or could be useful to other people and get actual users.
If my Software has value beyond the code, beyond being a subject of education.
Then I'll license it under a GPLv3, or a derivative if applicable.

If the Software has been a coding exercise or educational resource.
If the Software is small in scope and didn't require much time or effort.
If the Software is useful to me but to few others.
Then I'll license it under the CC0 and dedicate it under the public domain.

CC0 and GPLv3 are polar opposites, yet I use both. I hope I was able to explain why.

If you hold different views and want to explore the alternatives, check out [choosalicense.com](https://choosealicense.com/)
