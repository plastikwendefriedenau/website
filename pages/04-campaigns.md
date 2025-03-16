---
layout: page
title: Kampagnen
permalink: /kampagnen/
feature-img: "assets/img/garbage.jpg"
---

Friedenau Plastikfrei bemüht sich im Rahmen von Kampagnen für konkrete
Verbesserungen in unserem Kiez. Ziel der Kampagnen ist es, auf Missstände
aufmerksam zu machen und mit den Anwohnern in Kontakt zu kommen.

Die folgenden Kampagnen wurden von uns initiiert:

{% for campaign in site.campaigns %}
- [{{ campaign.title }}]({{ campaign.url }})
{% endfor %}
