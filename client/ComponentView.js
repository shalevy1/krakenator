function ComponentView() {
    View.call(this, -1, -1);
    this.div.addClass('component-view');
    $('<h2 style="text-align: center">' + "Component view" + '</h2>').appendTo(this.div);
}

ComponentView.prototype = Object.create(View.prototype);
ComponentView.prototype.constructor = ComponentView;

ComponentView.prototype.setWidth = function(width) {
    View.prototype.setWidth.call(this, width);
}

ComponentView.prototype.setHeight = function(height) {
    View.prototype.setHeight.call(this, height);
}
