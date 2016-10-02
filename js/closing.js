var closing;

$(document).on('pageLoaded',  function(){
    if ($("#page").length) {
        console.log("Closing ready!");
        function goHome(link){
            window.location.href = link;
        }

        //$(".top50").addClass("animated fadeIn");
        function showCloseBar(){
            $(".navbar-close").css("width", "100vw");
        }

        function showContent() {
            $(".top50").css("opacity", "1");
            $(".jumbotron-full").css("opacity", "1");
        }

        setTimeout(showCloseBar, 500);
        setTimeout(showContent, 1500);

        $("#closebtn").click(function(evt){
            evt.preventDefault();
            $(".close-items").css("opacity", "0");
            $(".navbar-close").css("width", "0px");
            $(".top50").css("opacity", "0");
            $(".jumbotron-full").css("opacity", "0");
            var data = $("#closebtn").data();
            console.log(data.link);
            setTimeout(goHome.bind(null, data.link), 1000);
        });

        $(".curtain").hide();

        }
});



export default closing;



