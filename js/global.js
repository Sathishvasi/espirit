function showSnackBar(msg) {
    $("#snackbar").addClass("show");
    $("#snackbar").text(msg);
    setTimeout(function () {
        $("#snackbar").removeClass("show");
    }, 3000);
}
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        $('.loader').hide()
        clearInterval(stateCheck);
        // document ready
    }
}, 2000);