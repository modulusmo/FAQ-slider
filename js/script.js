$(document).ready(function () {
    $(".q").click(function () {
        $(this).find("img").toggleClass("rotate");
        $(this).next(".a").slideToggle(360);
    });
});

