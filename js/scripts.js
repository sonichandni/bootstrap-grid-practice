$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if($("#carouselButton").children("span").hasClass("fa-pause")) {
            $('#mycarousel').carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause").addClass("fa-play")
        } else if($("#carouselButton").children("span").hasClass("fa-play")) {
            $('#mycarousel').carousel('cycle');
            $("#carouselButton").children("span").addClass("fa-pause").removeClass("fa-play")
        }
    })

    // Open Login modal
    $("#openLoginModal").click(function () {
        $("#loginmodal").modal();
    })

    // Open Reseve table modal
    $("#openReserveModal").click(function () {
        $("#reservemodal").modal();
    })
})