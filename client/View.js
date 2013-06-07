function View(width, height) {
    this.width  = width;
    this.height = height;
    this.div    = $('<div></div>');
    this.div.css("position", "absolute");
    this.div.css("width", "100%");
    this.div.css("height", "100%");
}

View.prototype.setSize = function(width, height) {
    this.width = width;
    this.height = height;
}
