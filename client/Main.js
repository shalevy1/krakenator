var topLevelView;

var doResize = function() {
    topLevelView.doResize();
}

$(document).ready(function() {
    console.log("document ready");
    topLevelView = new TopLevelView($('#main'));
    topLevelView.setLeft   (new TestView(200, -1, "left"));
    topLevelView.setRight  (new TestView(200, -1, "right"));
    topLevelView.setTop    (new TestView(-1, 100, "top"));
    topLevelView.setBottom (new TestView(-1, 200, "bottom"));
    topLevelView.setCenter (new TestView(-1, -1, "center"));
    $(window).resize(doResize);
});
