---
layout: page
title: Infobriefe
subtitle: Alle Infobriefe zum herunterladen
permalink: /infobriefe/
feature-img: "assets/img/garbage.jpg"
---

<div>
{% for file in site.static_files %}
  {% if file.path contains "/assets/infobriefe/" and file.path contains ".pdf" %}
    <p><i class="fa fa-file-download-o" aria-hidden="true"></i><a href="{{ file.path | relative_url }}">{{ file.path | split: "/" | last }}</a></p>
  {% endif %}
{% endfor %}
</div>
