---
layout: page
title: Infos
permalink: /infos/
feature-img: "assets/img/garbage.jpg"
---

## Infobriefe

{% for file in site.static_files %}
    {% if file.path contains "/assets/infobriefe/" and file.path contains ".pdf" %}
1. [{{ file.path | split: ". " | last | remove: ".pdf" }}]({{ file.path | relative_url }})
    {% endif %}
{% endfor %}
