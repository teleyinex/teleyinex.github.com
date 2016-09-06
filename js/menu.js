var menu = {'about': {'line': null, 'state': 1, 'drawn': false}, 
            'blog': {'line': null, 'state': 1, 'drawn': false}, 
            'projects': {'line': null, 'state': 1, 'drawn': false}, 
            'photography': {'line': null, 'state': 1, 'drawn': false},
            'ingeniare': {'line': null, 'state': 1, 'drawn': false},
            'ingenium': {'line': null, 'state': 1, 'drawn': false},
            'est': {'line': null, 'state': 1, 'drawn': false},
            'deco1': {'line': null, 'state': 1, 'drawn': false},
            'deco2': {'line': null, 'state': 1, 'drawn': false},
};

function animate(id, type){
    if (type === 'fadeIn') {
        $("#" + id).css("visibility", 'visible');
        $('#' + id).addClass('animated ' + type);
        $("#" + id).on('animationend', function(){
            menu[id].line.play();
        });
    }
    else {
        var tmp = Snap.select("#" + id);
        tmp.animate({opacity: 1}, 500, mina.easeIn);
    }
};

function showCurtain(id) {
    if (id === 'about') {
        console.log("about curtain");
        $(".curtain.curtain-left").addClass("center");
    }

    if (id === 'blog') {
        $(".curtain.curtain-top").addClass("center");
    }

    if (id === 'projects') {
        $(".curtain.curtain-right").addClass("center");
    }

    if (id === 'photography') {
        $(".curtain.curtain-down").addClass("center");
    }
}

function delayLinkClick(link) {
    window.location.href = link;
    console.log(link);
    console.log("clicked!");
}

$(document).on('pageLoaded',  function(){
    if ($("#homepage").length) {
        console.log("Menu ready!");
        $(".background-home").css("background", "black");
        menu['about'].line = new Vivus('llr', {duration: 30, start: 'manual'});
        menu['blog'].line = new Vivus('ltb', {duration: 30, start: 'manual'});
        menu['projects'].line = new Vivus('lrl', {duration: 30, start: 'manual'});
        menu['photography'].line = new Vivus('lbt', {duration: 30, start: 'manual'});

        for (var key in menu) {
            new $("#" + key).on('click', function(evt){
                var id = ($(this).attr("id"));
                var link = $(this).data("link");
                showCurtain(id);
                if (menu[id].state === 1) {
                    menu[id].line.play(-3);
                    menu[id].state = 0;
                }
                else {
                    menu[id].line.play();
                    menu[id].state = 1;
                }
                setTimeout(delayLinkClick.bind(null, id, link), 1000);
            });

        }

        $(".menulink").click(function(evt){
            evt.preventDefault();
        });

        setTimeout(animate.bind(null, 'about', 'fadeIn'), 0);
        setTimeout(animate.bind(null, 'blog', 'fadeIn'), 2000);
        setTimeout(animate.bind(null, 'projects', 'fadeIn'), 4000);
        setTimeout(animate.bind(null, 'photography', 'fadeIn'), 6000);

        setTimeout(animate.bind(null, 'deco1', 'snap'), 1000);
        setTimeout(animate.bind(null, 'deco2', 'snap'), 1000);
        setTimeout(animate.bind(null, 'ingeniare', 'snap'), 3000);
        setTimeout(animate.bind(null, 'ingenium', 'snap'), 5000);
        setTimeout(animate.bind(null, 'est', 'snap'), 7000);
    }
});


export default menu;

