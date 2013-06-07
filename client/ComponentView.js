function ComponentView() {
    View.call(this, -1, -1);
    this.div.addClass('component-view');
    this.div.selectable();
    $('<h2 style="text-align: center">' + "Component view" + '</h2>').appendTo(this.div);
}

ComponentView.prototype = Object.create(View.prototype);
ComponentView.prototype.constructor = ComponentView;

ComponentView.prototype.setSize = function(width, height) {
    View.prototype.setSize.call(this, width, height);
}
