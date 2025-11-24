$(function () {

    $(window).resize(function () {
        let bodyWidth = $('body').width();
        if (bodyWidth > 770) {
            $("#nav").css("display", "block");
        } else {
            $("#nav").css("display", "none");
        }
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;
        if (blockId === "#features") {
            blockOffset -= 70;
        } else if (blockId === "#chapters") {
            blockOffset -= 50;
        }

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

        if ($(window).width() <= 770){
            let nav = $("#nav");
            $("#nav_toggle").toggleClass("active");
            nav.slideToggle();
        }
    });

    $("#nav_toggle").on("click", function (event){
        event.preventDefault();

        $(this).toggleClass("active");
        if ($(window).width() <= 770) {
            let $nav = $("#nav");

            $nav.slideToggle();
        }
    });

});

