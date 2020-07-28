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
    let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
            $('.loader').hide()
            clearInterval(stateCheck);
            // document ready
        }
    }, 2000);
})