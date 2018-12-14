---
layout: project
title: "Solarmaps for Greenpeace Spain"
date: 2018-06-01
tags: vuejs, nuxtjs, frontend, backend, pybossa
type: frontend, backend, data analysis
home: https://solarmaps.greenpeace.es/
state: production
permalink: /projects/solarmaps
featured: yes
meta_description: "Crowsourcing the solar energy of Spain"
partners: [Greenpeace Spain, Factoría Cultural Madrid]
icon: sky
iconauthor: 
lang: en
role: "CTO, frontend developer, backend developer, data analysis"
---

Greenpeace Spain hired me via my company Scifabric to look about the awareness ofsolar energy. Greenpeace Spain wanted to demand to the Spanish goverment that it promotes and uses green energies among its citizens.

For achieving this goal, I designed a crowdsourcing project where we mapped the public buildings of Spain (via the transparent data portal), and we ask volunteers from all over the world to confirm the location of the buildings as well as measuring the square meters of the roofs.

For building the platform we used: PYBOSSA and NuxtJS. I build a Progressive Web Application that can be used from phones, tablets and desktops.

The project uses the real-time data analysis features of PYBOSSA, and the next sections explain the methodology that I developed for the client.

## Data capture: Public buildings from Spain´s Public Administration. 

To create this project we needed a database with all the public buildings belonging to the Central Public Administration.

The Spanish National Treasury has a [web portal](http://transparencia.gob.es/servicios-buscador/buscar.htm?categoria=bienesinmuebles_ind&categoriasPadre=conconvsub&ente=I00000179,EA0008567,E04585801,E00003901,E00003301,E04921301,E04990101,E00003801,E00003601,E04921401,E04921501,E04921601,E04990201,E04921701,E04990301,E00004101,E04990401,E04921801,E04990501,E04921901&lang=es&tipocibi=edificio) which we have used to obtain the list of public buildings used to build this project.

The data provided by the Spanish Government for each building is:

* Type: they are all buildings
* Location: their postal address
* Use: to what ministry or government department the building belongs to
* Surface: square meters of the building´s surface

The relevant data to us is the location, we want to measure the building's rooftop area.

### Building Geolocation

With the postal address of each building, we went to Google Maps and searched their coordinates (latitude and longitude) to place every building on a map.

Of the 9959 buildings displayed in the transparency portal, Google only has results for 5253 of these. This is mainly due to the fact that the provided addresses are badly formatted or simply wrong. This is why in only 5253 public buildings can be analysed in this first phase.

### Measuring rooftop areas and their solar panels

With the geolocated buildings, we then move on to the web project. For this project, we are using [PYBOSSA](https://scifabric.com/howitworks/), a technology that allows for each building to be analysed by several people at one time to then later statistically analyse all of the participants´ contributions to generate valid results for every building.

The steps to follow in this project are:

* A participant is asked to find a building for the address that we have.
* Once located, the area -rooftop outline, is drawn.
* The participant is then asked if there are solar panels if so he/she is requested to mark its outline, otherwise the analysis is complete.

By default each building is studied by 3 people. When the third person submits his/her analysis, the system statistically analyses the contributions and provides a result.


# Statistics analysis

In order to avoid participants who wish to send wrongful data, the system validates the data as follows:

* For each polygon -rooftop or solar panel area, it calculates the geometric center (centroid).
* With all centroids, it searches those groups that are within a circle in which the distance -or maximum error, is 20 meters.
* If the participants have correctly drawn the roof and/or solar panels, their centroids will be very close together and they will meet the previous step.
* Those that are within the cluster, will move on to the next phase: polygon area calculation, with those that are not inside being eliminated.
* For the area the standard deviation is calculated: the different quartiles (25%, 50%, 75% and 100%) as well as the maximum and minimum value sent by the participants.
* If the users answered that there are solar panels, then steps 1 to 5 -described here, are to be repeated for each solar panel.

This way we can eliminate those contributions that are not good  allowing us to focus on the data that we need

## Power, investment, CO2, etc. calculation

Once that the extension for each of the Central Government´s rooftops has been measured, the potential of photovoltaic electricity that could be generated in each one of those rooftops is calculated, as well as the CO2 emissions that could be avoided alongside with the financial savings that would mean for the Central Government and, therefore, for the citizens.

### Photovoltaic potential

* The roof extension is multiplied by 0.5 to take into account possible shadows and/or other elements that would avoid the installation of solar energy.
* It is considered that the other rooftop half is covered with photovoltaic panels and each square meter with 167 watts of power. The power that could be installed on the roof is multiplied by the average real annual photovoltaic production of the province in which the building is located according to the data provided by [Red Eléctrica de España](https://www.esios.ree.is/is/maps-of-interest/map-of-production-annual-media-photovoltaic). With this, we obtain the annual electricity production that could be generated if half of the measured roof was covered with solar panels.

### Public Coffers savings

We believe that the electricity that could be produced in the measured roof could be instantly used up in the same building and therefore saving money generated by the installation, which would be the difference between the electricity that the Central Government no longer has to buy to the electric company (€ 0.139 + VAT 21% and 5.11269% electricity tax) and the investment required to carry out the photovoltaic installation (€ 1.45 / W) - a lifetime of 25 years is considered per installation.

If the available roof area surface is less than 60m2 (<10kW) we consider that, what is known in Spain as, the Sun Tax (for a 3.0 A connection point) is not applicable as well as are the cases of the Canary Islands, Melilla, Ceuta, Ibiza, and Formentera.

In the other cases, the Sun Tax that should be paid for by the Administration on self-consumed electricity is instantly introduced (transitory charge for self-consumed energy for a 3.0 A connection point as established by the [Government](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2016-12464)


### Greenhouse Gas Emissions savings

To calculate the amount of greenhouse gas emissions that each installation would avoid from occurring, the production of renewable electricity is multiplied by the emission factor of the electrical system of the Spanish region in which the building is located according to the data provided by Red Eléctrica Española for the year [2017](http://www.ree.es/es/estadisticas-del-sistema-electrico-espanol/series-estadisticas/series-estadisticas-nacionales)

Mainland Spain: 0.269 kg CO2 / kWh
Balearic Islands: 0,714 kg CO2 / kWh
Ceuta and Melilla: 0,745 kg CO2 / kWh
Canary Islands: 0,775 kg CO2/kWh


### Equivalences

To calculate the necessary equivalences to make the data provided more understandable, the following information has been considered:

* Annual electricity consumption of an average Spanish household: 3,500 kWh / year
* Emissions of an average gasoline car from the current vehicle fleet 160 gCO2 / km
* Lawn surface of the Santiago Bernabéu football field: 105m * 68m

## Software used
For the analysis, the statistical package [Pandas](https://pandas.pydata.org/) is used, as well as the algorithm [DBSCAN](https://en.wikipedia.org/wiki/DBSCAN) to generate the clusters.

The rest is [PYBOSSA](https://scifabric.com) and [NuxtJS](https://nuxtjs.org/).

