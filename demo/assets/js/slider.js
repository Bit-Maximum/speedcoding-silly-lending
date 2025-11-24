$(document).ready(function (){
    $('.slider').slick({
        infinite: true,
        easing: 'ease',
        initialSlide: 0,
        variableWidth: true,
        arrows: true,
        threshold: 15,
        dots: true,
        slidesToScroll: 1,
        centerMode: true,
        speed: 500,
    });

    let prevScrollpos = window["pageYOffset"];
    window.onscroll = function() {
        let currentScrollPos = window["pageYOffset"];
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.opacity = "1";
        } else {
            document.getElementById("header").style.opacity = ".1";
        }
        prevScrollpos = currentScrollPos;
    };

});

