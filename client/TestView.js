function TestView(width, height, name) {
    View.call(this, width, height);

    $('<h2>' + name + '</h2>').appendTo(this.div);
}

TestView.prototype = Object.create(View.prototype);
TestView.prototype.constructor = TopLevelView;
