function TestView(width, height, name) {
    View.call(this, width, height);

    $('<h2 style="text-align: center">' + name + '</h2>').appendTo(this.div);
    this.sizeText = $('<p style="text-align: center">abc</p>');
    this.sizeText.appendTo(this.div);
    this.updateSizeText();
}

TestView.prototype = Object.create(View.prototype);
TestView.prototype.constructor = TestView;

TestView.prototype.setWidth = function(width) {
    View.prototype.setWidth.call(this, width);
    this.updateSizeText();
}

TestView.prototype.setHeight = function(height) {
    View.prototype.setHeight.call(this, height);
    this.updateSizeText();
}

TestView.prototype.updateSizeText = function() {
    this.sizeText.text(this.width + "x" + this.height);
}
