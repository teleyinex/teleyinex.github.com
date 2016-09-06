var loading = {'heart': null, 'trigger': null};

loading.heart = Snap.select("#whiteblood");

loading.trigger = function trigger() {
    $(document).trigger("pageLoaded");
    $("#heart").fadeOut();
    $("#loading").css("background-color", "black");
}

$(document).on('pageLoaded', function(){
    console.log("document ready");
        $(".hideonload").show();
        $("footer").show();
        $("#loading").hide();
});


export default loading;
