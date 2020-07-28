$(document).ready(() => {
    var video = document.getElementById("myVideo2");

    $('#videoPlay').click(() => {
        video.play();
        $('.videoModal').show();
    });
    $('.movie-carousel').slick({
        initialSlide: 6,
        slidesToShow: 6,
        slidesToScroll: 6,
    });
    $('.close-modal').click(() => {
        video.pause();
        $('.videoModal').hide();
    })
})