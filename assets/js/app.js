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
            blockOffset -= 20;
        } else if (blockId === "#chapters") {
            blockOffset -= 50;
        }

        $("html, body").animate({
            scrollTop: blockOffset
        }, 0);

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

// Функционал модальных окон
$(document).ready(function() {
    // Открытие модальных окон
    $('[href="mailto:edtech@yandex.ru?subject=Вход в платформу"], .auth-btn.login-btn, .modal__link[data-modal="login"]').on('click', function(e) {
        e.preventDefault();
        $('#loginModal').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('[href="mailto:edtech@yandex.ru?subject=Регистрация на платформу"], .auth-btn.register-btn, .btn--primary, .modal__link[data-modal="register"]').on('click', function(e) {
        e.preventDefault();
        $('#registerModal').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    // Закрытие модальных окон
    $('.modal__close, .modal__overlay').on('click', function() {
        $('.modal').removeClass('active');
        $('body').css('overflow', 'auto');
    });

    // Закрытие по ESC
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('.modal').removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });

    // Переключение видимости пароля
    $('.password-toggle').on('click', function() {
        const input = $(this).siblings('input');
        const icon = $(this).find('i');

        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            input.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    // Обработка форм
    $('#loginForm, #registerForm').on('submit', function(e) {
        e.preventDefault();
        const submitBtn = $(this).find('.form__submit');
        const submitText = submitBtn.find('.submit__text');

        // Показываем загрузку
        submitBtn.addClass('loading');

        // Имитация отправки
        setTimeout(function() {
            // Перезагружаем страницу
            window.location.reload();
        }, 2000);
    });

    // Предотвращаем закрытие при клике на контент
    $('.modal__content').on('click', function(e) {
        e.stopPropagation();
    });
});