$(document).ready(() => {
    $('#videoPlay').click(() => {
        var video = document.getElementById("myVideo");
        video.play()
    })
})
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        $('.loader').hide()
      clearInterval(stateCheck);
      // document ready
    }
  }, 2000);