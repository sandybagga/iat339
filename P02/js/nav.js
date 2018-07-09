var searchIsHidden;



$(document).ready(function () {
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

        //menu will reset on resize
        $("#nav-list").removeClass("show-menu");
        $("#nav-list").removeClass("full-mobile-menu");
        $("#menu").removeClass("mobi-fix");
        $("#menu img").attr("src", "img/menu.svg");

        if ($("#search").css("display") == "none") {
            searchIsHidden = true;
        } else {
            searchIsHidden = false;
        }
    });
});