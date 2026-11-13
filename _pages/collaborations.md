---
layout: portfolio
title: Collaborations
permalink: /collaborations/
body_class: collaborations-page
scripts: [album.js]
---
<div class="page-head"><div class="page-title-group"><h1>Collaborations</h1><span class="page-title-sticker" aria-hidden="true">{% include portfolio/icon.html name="network" class="title-icon" %}</span></div></div><nav class="subnav" aria-label="Collaboration sections"><a href="#projects">Projects</a><a href="#stays">Research stays & collaborations</a></nav>
<section class="collab-section album-section" id="projects"><h2>{% include portfolio/icon.html name="flask" class="heading-icon" %}Projects</h2><div class="album-projects">{% for item in site.data.collaborations.projects %}{% include portfolio/collaboration.html item=item %}{% endfor %}</div></section>
<section class="collab-section album-section" id="stays"><h2>{% include portfolio/icon.html name="pin" class="heading-icon" %}Research stays & collaborations</h2><div class="album-stays">{% for item in site.data.collaborations.research_collaborations %}{% include portfolio/collaboration.html item=item stay=true %}{% endfor %}</div></section>
