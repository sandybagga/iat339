var searchIsHidden;



$(document).ready(function () {

    //use window width to detect change in device width
    //solution from https://stackoverflow.com/a/17328813
    var width = $(window).width();

    if ($("#search-container").css("display") == "none") {
        searchIsHidden = true;
        $("#search").removeClass("show-search");
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
            $("body").toggleClass("stop-body-scroll");
            $("#nav-list").toggleClass("full-mobile-menu");
            $("#menu").toggleClass("mobi-fix");
        }

    });
    $("#search-container a").click(function () {
        if($("#menu").css("display") != "none"){
            $("#logo").toggleClass("hide");
        }
        $("#nav-list-wrap").toggleClass("hide");
        $("#search-container").toggleClass("show-search");
        if($("#search-container").hasClass("show-search")){
            $("#search-container a img").attr("src", "img/close.svg");
        } else {
            $("#search-container a img").attr("src", "img/search.svg");
        }
    });

    $(window).resize(function () {

        if ($(window).width() != width) {
            //menu will reset on resize
            $("#nav-list").removeClass("show-menu");
            $("#nav-list").removeClass("full-mobile-menu");
            $("#menu").removeClass("mobi-fix");
            $("#menu img").attr("src", "img/menu.svg");
            $("#search-container a img").attr("src", "img/search.svg");
            $("#search-container").removeClass("show-search");

            $("#logo").removeClass("hide");
            $("#nav-list-wrap").removeClass("hide");
            $("body").removeClass("stop-body-scroll");
        }

        if ($("#search-container").css("display") == "none") {
            searchIsHidden = true;
            $("#search").removeClass("show-search");
        } else {
            searchIsHidden = false;
        }
    });
});