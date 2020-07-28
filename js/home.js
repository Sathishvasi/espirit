$(document).ready(() => {
    var video = document.getElementById("myVideo2");

    $('#videoPlay').click(() => {
        $('body').addClass('hide-scroll');
        video.play();
        $('.videoModal').show();
    });
    $('.movie-carousel').slick({
        initialSlide: 6,
        slidesToShow: 6,
        slidesToScroll: 6,
    });
    $('.close-modal').click(() => {
        $('body').removeClass('hide-scroll');
        video.pause();
        $('.videoModal').hide();
    })
})