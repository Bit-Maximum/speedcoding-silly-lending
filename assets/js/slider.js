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
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
    });

    // let prevScrollpos = window["pageYOffset"];
    // window.onscroll = function() {
    //     let currentScrollPos = window["pageYOffset"];
    //     if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("header").style.opacity = "1";
    //     } else {
    //         document.getElementById("header").style.opacity = ".1";
    //     }
    //     prevScrollpos = currentScrollPos;
    // };

    let lastScrollTop = 0;
    const header = document.getElementById("header");
    const delta = 5; // Минимальное изменение скролла для реакции
    const headerHeight = header.offsetHeight;

    header.style.transition = "transform 0.3s ease";

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Игнорируем маленькие изменения скролла
        if (Math.abs(lastScrollTop - scrollTop) <= delta) {
            return;
        }

        // Если прокрутка в самом верху - всегда показываем
        if (scrollTop < 100) {
            header.style.transform = "translateY(0)";
        }
        // Если скроллим вниз и проскроллили больше чем высота header
        else if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
            // Скролл вниз - скрываем
            header.style.transform = "translateY(-100%)";
        }
        // Если скроллим вверх
        else {
            // Скролл вверх - показываем
            if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
                header.style.transform = "translateY(0)";
            }
        }

        lastScrollTop = scrollTop;

    }, false);


});

