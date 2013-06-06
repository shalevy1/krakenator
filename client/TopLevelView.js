var mkdiv = function(id, cls, owner) {
    return $('<div id="' + id + '" class="' + cls + '"></div>').appendTo(owner);
}

function TopLevelView(container) {
    View.call(this, 0, 0);

    this.div.css("position", "relative");
    this.div.css("width", "100%");
    this.div.css("height", "100%");

    this.divTop    = mkdiv("top", "view", this.div);
    this.divRight  = mkdiv("right", "view", this.div);
    this.divBottom = mkdiv("bottom", "view", this.div);
    this.divLeft   = mkdiv("left", "view", this.div);
    this.divCenter = mkdiv("center", "view", this.div);

    this.topHeight    = 100;
    this.bottomHeight = 200;
    this.leftWidth    = 200;
    this.rightWidth   = 200;

    this.divTop.css("top", "0");
    this.divTop.css("left", "0");
    this.divTop.css("right", "0");

    this.divLeft.css("left", "0");
    this.divLeft.css("bottom", "0");

    this.divRight.css("right", "0");

    this.divBottom.css("right", "0");
    this.divBottom.css("bottom", "0");

    this.doResize();

    if (container != null) {
        this.div.appendTo(container);
    }
}

TopLevelView.prototype = Object.create(View.prototype);
TopLevelView.prototype.constructor = TopLevelView;

TopLevelView.prototype.doResize = function() {
    this.divTop.css("height", this.topHeight);
    this.divLeft.css("top", this.topHeight);
    this.divLeft.css("width", this.leftWidth);
    this.divRight.css("top", this.topHeight);
    this.divRight.css("width", this.rightWidth);
    this.divRight.css("bottom", this.bottomHeight);
    this.divBottom.css("height", this.bottomHeight);
    this.divBottom.css("left", this.leftWidth);
    this.divCenter.css("top", this.topHeight + 1);
    this.divCenter.css("left", this.leftWidth + 1);
    this.divCenter.css("right", this.rightWidth + 1);
    this.divCenter.css("bottom", this.bottomHeight + 1);
}

TopLevelView.prototype.setLeft = function(left) {
    if (this.left != null) {
        this.left.div.remove();
    }

    this.left = left;

    if (left != null) {
        this.left.div.appendTo(this.divLeft);
        this.leftWidth = this.left.width;
    } else {
        this.leftWidth = 0;
    }

    this.doResize();
}
