$(document).ready(function () {
    // Функція перевірки видимості елемента
    function checkVisibility() {
        $(".hidden").each(function () {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom - 50) {
                $(this).addClass("visible");
            }
        });
    }

    // Виклик функції при завантаженні сторінки та прокрутці
    $(window).on("scroll", checkVisibility);
    checkVisibility(); // Для початкового стану
});
