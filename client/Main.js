$(document).ready(function() {
    console.log("document ready");
    var v = new TopLevelView($('#main'));
    v.setLeft   (new TestView(200, -1, "left"));
    v.setRight  (new TestView(200, -1, "right"));
    v.setTop    (new TestView(-1, 100, "top"));
    v.setBottom (new TestView(-1, 200, "bottom"));
    v.setCenter (new TestView(-1, -1, "center"));
});
