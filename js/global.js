function showSnackBar(msg) {
    $("#snackbar").addClass("show");
    $("#snackbar").text(msg);
    setTimeout(function () {
        $("#snackbar").removeClass("show");
    }, 3000);
}
