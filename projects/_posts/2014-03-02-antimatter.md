---
layout: project
title: Antimatter
date: 2013-08-03
tags: crowdcrafting, PyBossa, CERN, science, antimatter, physics
type: volunteer thinking
github: https://github.com/PyBossa/app-tweetclassification
home: http://crowdcrafting.org/app/antimatter
state: alpha
permalink: /projects/antimatter
featured: no
summary: "Does antimatter fall down or up?"
partners: ['<a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a>', '<a href="http://aegis.web.cern.ch/aegis/"><span itemprop="creator"> AEgIS Experiment</span>', '<a href="http://cern.ch/"><span itemprop="creator">CERN</span></a>']
icon: antimatter
iconauthor: <a href="https://mediastream.cern.ch/MediaArchive/Photo/Public/2010/1011301/1011301_14/1011301_14-A5-at-72-dpi.jpg">CERN</a>
lang: en
role: "lead developer"
---

This [PyBossa](http://daniellombrana.es/pybossa.html) application was created as a prototype for the [2nd CERN Summer Webfest](http://daniellombrana.es/blog/2013/08/06/cernsummerwebfest2013.html) at CERN with 8 summer students. 

The [AEgIS experiment at CERN](http://aegis.web.cern.ch/aegis/) shoots antihydrogen atoms horizontally - whereupon they fly and fall - at a wall made of matter. On hitting the wall the antihydrogen annihilates with a matter nucleus in the wall to produce a burst of mostly pions and some heavier particles. These particles travel through a special gel called an emulsion which makes their tracks visible. Pions leave thin tracks while heavier particles leave much fatter tracks.

Tracing these tracks to their point of origin tells the AEgIS team exactly where the annihilation occurred, which in turn allows them to calculate how far each particle travels. They can then work out - from the distance each particle flew and fell - how antimatter interacts with gravity.

The PyBossa application deployed in [CrowdCrafting.org](http://crowdcrafting.org/app/antimatter) loads a set of pictures of the gel (each area has 40 layers, being the zero layer the top one, and 39 the deepest one), playing them like a movie. The goal: allow the volunteers to draw the tracks of the particles:

<img class="img-polaroid" src="https://pbs.twimg.com/media/BQ1etHwCYAAwwX1.png"/>

The information contributed by the users is then showed in the info page of the application as a 3D model using the WebGL technology (note if you cannot see the 3D model, then your browsers or computer does not support WebGL):

<div class="row-fluid">
    <div id="antimatter-visualization" class="span12"></div>
</div>
<script src="https://rawgithub.com/mrdoob/three.js/master/build/three.min.js"></script>
<script src="https://rawgithub.com/CERNSummerWebfest/antimatter/master/js/antimatter.js"></script>

<a target="_blank" class="btn" href="http://crowdcrafting.org/app/antimatter"><i class="fa fa-cog"></i> Check the application</a>
<a target="_blank" class="btn" href="https://github.com/CERNSummerWebfest/antimatter"><i class="fa fa-github"></i> Source Code</a>