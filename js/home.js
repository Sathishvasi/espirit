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

// .modal-backdrop classes

$(".modal-transparent").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-transparent");
    }, 0);
  });
  $(".modal-transparent").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  });
  
  $(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
  });
  $(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });
  