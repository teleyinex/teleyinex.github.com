---
date: 2012-01-01
title: ForestWatchers.net
github: http://github.com/ForestWatchers
github: http://forestwatchers.net
tags: volunteer thinking, PyBossa, deforestation, damage assessment, biology
type: volunteer thinking
state: alpha
slug: forestwatchers
summary: a citizen project for forest monitoring
partners: ['<a href="http://www.inpe.br"><span itemprop="creator">Brazil National Institute for Space Research</span></a>', '<a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a>']
funders: '<a href="http://soros.org"><span itemprop="contributor">Open Society Foundation</span></a>'
icon: forest
iconauthor: '<a href="http://www.flickr.com/photos/vinothchandar/6820565620/">Vinoth Chandar</a>'
lang: en
role: core developer, researcher
layout: project
---

ForestWatchers.net is a citizen cyberscience project where volunteers from all over the world can help in assessing deforestation from satellite images.
The project uses the open source [PyBossa](http://daniellombrana.es/pybossa.html) framework and has currently two running web applications:
<ul class="angle-list">
<li>**Best Tile**. Volunteers help selecting the less cloudy image for the same are from satellite images.</li>
<li>**Deforested Areas**. Volunteers help to identify deforested areas (even in indigenous or federal protected areas) by drawing polygons.</li>
 </ul>


## Best Tile

This application was developed to help the researchers to clean satellite images from clouds. Basically, the application shows pictures of the same area but taken on different days, so the users can actually select the best tile, or in other words, the tile with less clouds.

<a target="_blank" class="btn" href="http://forestwatchers.net/pybossa/app/besttile"><i class="fa fa-cog"></i> Check the application</a>
<a target="_blank" class="btn" href="https://github.com/ForestWatchers/timeline"><i class="fa fa-github"></i> Source Code</a>

## Deforested Areas

This application builds on top of the previous one, using the cleaned images, to allow the users to mark deforested areas by drawing polygons on top of the deforested areas. This application shows also information in different layers regarding:
<ul class="angle-list">
 <li>**Indigenous areas**</li>
 <li>**Federal protected areas**</li>
 <li>**Hydrography**</li>
</ul>

<a target="_blank" class="btn" href="http://forestwatchers.net/pybossa/app/deforestedareas"><i class="icon-cog"></i> Check the application</a>
<a target="_blank" class="btn" href="https://github.com/ForestWatchers/deforestation"><i class="icon-github"></i> Source Code</a>

### Video

<div class="videoWrapper">
    <iframe src="http://www.youtube.com/embed/syyJ_bEbAtI?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

<a target="_blank" href="http://forestwatchers.net" class="btn btn-large btn-primary"><i class="icon-globe"></i> Check the project!</a>
