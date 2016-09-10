$(function () {
    $.contextMenu({
        selector: '.context-menu-one'
        , callback: function (key, options) {}
        , items: {
            "cut": {
                name: "Cut"
                , icon: "/assets/fonts/cut.svg"
                , callback: function (key, options) {
                    var text = window.getSelection().toString();
                    document.execCommand('copy');
                }
                , accesskey: "u"
            }
            , copy: {
                name: "Copy"
                , icon: "/assets/fonts/copy.svg"
                , callback: function (key, options) {
                    var text2 = window.getSelection().toString();
                    document.execCommand('copy');
                }
                , accesskey: "c"
            }
            , "source": {
                name: "View Source"
                , icon: "source"
                , callback: function (key, options) {
                    //                            alert("Check Github for Source")
                    if (navigator.userAgent.match(/Chrome|AppleWebKit/)) {
                        window.location.href = "#modal_view_source";
                        window.location.href = "#modal_view_source"; /* these take twice */
                    } else {
                        window.location.hash = "modal_view_source";
                    }
                }
                , accesskey: "s"

            }
            , "sep1": "---------"
            , "close": {
                name: "Close"
                , icon: ""
                , accesskey: "l"
            }
        }
    });

    $('.context-menu-one').on('click', function (e) {
        console.log('clicked', this);
    })
});



$(function () {
    $.contextMenu({
        selector: '.context-menu-two'
        , callback: function (key, options) {

        }
        , items: {
            "cut": {
                name: "Cut"
                , icon: "/assets/fonts/cut.svg"
                , callback: function (key, options) {
                    var text = window.getSelection().toString();
                    document.execCommand('copy');
                }
                , accesskey: "u"
            }
            , copy: {
                name: "Copy"
                , icon: "/assets/fonts/copy.svg"
                , callback: function (key, options) {
                    var text2 = window.getSelection().toString();
                    document.execCommand('copy');
                }
                , accesskey: "c"

            }
            , "sep1": "---------"
            , "close": {
                name: "Close"
                , icon: ""
                , accesskey: "l"
            }
        }
    });

    $('.context-menu-one').on('click', function (e) {
        console.log('clicked', this);
    })
});