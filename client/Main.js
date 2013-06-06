$(document).ready(function() {
    console.log("document ready");
    var v = new TopLevelView($('#main'));
    var left = new TestView(300, 0, "left");
    v.setLeft(left);
});
