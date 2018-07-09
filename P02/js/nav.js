var searchIsHidden;

if($("#search").css("display") == "none"){
    searchIsHidden = true;
} else {
    searchIsHidden = false;
}

$(document).ready(function () {
    $("#menu").click(function () {
        $("#nav-list").toggleClass("show-menu");
        if ($("#menu img").attr("src") == "img/menu.svg") {
            $("#menu img").attr("src", "img/close.svg");
        } else {
            $("#menu img").attr("src", "img/menu.svg");
        }

        if(searchIsHidden){
            $("#nav-list").toggleClass("full-mobile-menu");
            $("#menu").toggleClass("fix");
        }
        
    });
    $(window).resize(function(){
        //window size where the menu button is hidden
        if ($("#menu").css("display") == "none") {
            $("#nav-list").removeClass("show-menu");
        } else if($("#menu img").attr("src") == "img/close.svg"){
            $("#nav-list").addClass("show-menu");
        }
        
        
        if($("#search").css("display") == "none"){
            searchIsHidden = true;
        } else {
            searchIsHidden = false;
        }
       
        if(!searchIsHidden) {
            $("#nav-list").removeClass("full-mobile-menu");
            $("#menu").removeClass("fix");
        } else if (searchIsHidden && $("#menu img").attr("src") == "img/close.svg"){
            $("#nav-list").addClass("full-mobile-menu");
            $("#menu").addClass("fix");
        }
        
    });
});

