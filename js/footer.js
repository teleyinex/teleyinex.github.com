var footer; 

if ($(".navbar-about").length) {
    footer = $("<footer/>", {'class': 'footer about'});
    $("body").append(footer);
}

if ($(".navbar-blog").length) {
    footer = $("<footer/>", {'class': 'footer blog'});
    $("body").append(footer);
}

if ($(".navbar-blogpost").length) {
    footer = $("<footer/>", {'class': 'footer blogpost'});
    $("body").append(footer);
}

if ($(".navbar-project").length) {
    footer = $("<footer/>", {'class': 'footer project'});
    $("body").append(footer);
}

if ($(".navbar-project-info").length) {
    footer = $("<footer/>", {'class': 'footer project-info'});
    $("body").append(footer);
}

if ($(".navbar-photography").length) {
    footer = $("<footer/>", {'class': 'footer photography'});
    $("body").append(footer);
}



export default footer;
