function AttributeView() {
    View.call(this, 300, -1);
    this.div.addClass("attribute-view");
    this.blah = mkdiv("blah", "", this.div);
    this.blah.css("background-color", "gray");
    this.blah.css("position", "absolute");
    this.blah.css("left", "4px");
    this.blah.css("right", "0px");
    this.blah.css("top", "40px");
    this.blah.css("bottom", "4px");
    this.blah.css("overflow-y", "auto");
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
    $("<h1>Test</h1>").appendTo(this.blah);
}

AttributeView.prototype = Object.create(View.prototype);
AttributeView.prototype.constructor = AttributeView;

AttributeView.prototype.setHeight = function(height) {
    View.prototype.setHeight.call(this, height);
}
