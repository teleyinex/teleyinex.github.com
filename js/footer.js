var footer; 

if ($(".navbar-about").length) {
    console.log($(".navbar-about").length);
    footer = $("<footer/>", {'class': 'footer about'});
    $("body").append(footer);
}

if ($(".navbar-blog").length) {
    console.log($(".navbar-blog").length);
    footer = $("<footer/>", {'class': 'footer blog'});
    $("body").append(footer);
}

if ($(".navbar-blogpost").length) {
    console.log($(".navbar-blogpost").length);
    footer = $("<footer/>", {'class': 'footer blogpost'});
    $("body").append(footer);
}

if ($(".navbar-project").length) {
    console.log($(".navbar-project").length);
    footer = $("<footer/>", {'class': 'footer project'});
    $("body").append(footer);
}

if ($(".navbar-project-info").length) {
    console.log($(".navbar-project-info").length);
    footer = $("<footer/>", {'class': 'footer project-info'});
    $("body").append(footer);
}

if ($(".navbar-photography").length) {
    console.log($(".navbar-photography").length);
    footer = $("<footer/>", {'class': 'footer photography'});
    $("body").append(footer);
}



export default footer;
