function View(width, height) {
    this.width  = width;
    this.height = height;
    this.div    = $('<div></div>');
    this.div.css("position", "absolute");
    this.div.css("width", "100%");
    this.div.css("height", "100%");
}

View.prototype.setWidth = function(width) {
    this.width = width;
}

View.prototype.setHeight = function(height) {
    this.height = height;
}
