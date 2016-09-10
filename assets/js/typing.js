$(function () {
    $("#element").typed({
        strings: ["a^1000 student.", "a web developer.", "a web designer.", "an app developer.", "a freelancer.", "a geek.", "Shubham Arora."]
        , showCursor: true
        , typeSpeed: 20
        , backDelay: 1500
        , startDelay: 200
        , callback: function () {
            //noinspection JSJQueryEfficiency
            $("#sub-tag").css('opacity', '1');
            //noinspection JSJQueryEfficiency
            $("#sub-tag").addClass("animated zoomIn");
        }
    });

});