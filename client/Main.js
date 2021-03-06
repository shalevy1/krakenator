var topLevelView;

var doResize = function() {
    topLevelView.doResize();
}

$(document).ready(function() {
    console.log("document ready");
    topLevelView = new TopLevelView($('#main'));
    topLevelView.setLeft   (new TestView(200, -1, "left"));
    topLevelView.setRight  (new AttributeView());
    topLevelView.setTop    (new TestView(-1, 100, "top"));
    topLevelView.setBottom (new TestView(-1, 200, "bottom"));
    topLevelView.setCenter (new ComponentView());
    $(window).resize(doResize);
});
