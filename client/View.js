function View(width, height) {
    this.width  = width;
    this.height = height;
    this.div    = $('<div></div>');
}

View.prototype.setWidth = function(width) {
    this.width = width;
}

View.prototype.setHeight = function(height) {
    this.height = height;
}
