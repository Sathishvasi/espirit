$(document).ready(() => {
    $('#videoPlay').click(() => {
        var video = document.getElementById("myVideo");
        video.play()
    });

    $('.movie-carousel').slick({
        initialSlide: 6,
        slidesToShow: 6,
        slidesToScroll: 6,
    });
})