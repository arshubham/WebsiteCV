if ("addEventListener" in window) {
    window.addEventListener('load', function () {
        document.body.className = document.body.className.replace(/\bloading\b/, '');
    });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
    $(".social").addClass("animated zoomIn");
    $("#resume").addClass("animated slideInUp");
    $(".avatar").addClass("animated tada");
    $("#hi").addClass("animated zoomInUp");
}

document.getElementById("res121").disabled = true;
$("#res_a").addClass("not-active");

 function enableBtn(){
    document.getElementById("res121").disabled = false;
     $("#res_a").removeClass("not-active");

   }