var searchIsHidden;



$(document).ready(function () {

    //use window width to detect change in device width
    //solution from https://stackoverflow.com/a/17328813
    var width = $(window).width();

    if ($("#search").css("display") == "none") {
        searchIsHidden = true;
    } else {
        searchIsHidden = false;
    }
    $("#menu").click(function () {

        if ($("#menu img").attr("src") == "img/menu.svg") {
            $("#menu img").attr("src", "img/close.svg");
        } else {
            $("#menu img").attr("src", "img/menu.svg");
        }

        if (!searchIsHidden) {
            $("#nav-list").toggleClass("show-menu");
        }

        if (searchIsHidden) {
            // $("#nav-list").toggleClass("show-menu");
            $("#nav-list").toggleClass("full-mobile-menu");
            $("#menu").toggleClass("mobi-fix");
        }

    });
    $(window).resize(function () {

        if ($(window).width() != width) {
            //menu will reset on resize
            $("#nav-list").removeClass("show-menu");
            $("#nav-list").removeClass("full-mobile-menu");
            $("#menu").removeClass("mobi-fix");
            $("#menu img").attr("src", "img/menu.svg");
        }

        if ($("#search").css("display") == "none") {
            searchIsHidden = true;
        } else {
            searchIsHidden = false;
        }
    });
});