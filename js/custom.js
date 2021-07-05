$(function () {
    $("#sidebar").show();

    $(".menu_toggler").click(function () {
        $("#sidebar").toggle("slow");
        $("main").toggleClass("active_side");
        $("footer").toggleClass("active_side");        
    });



    // preloader
    $(window).on('load', function () {
        $('#preloader').delay(2000).fadeOut(2000);
    });

});