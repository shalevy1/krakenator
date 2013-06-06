var mkdiv = function(id, cls, owner) {
    return $('<div id="' + id + '" class="' + cls + '"></div>').appendTo(owner);
}

function TopLevelView(container) {
    View.call(this, 0, 0);

    this.div.css("position", "relative");
    this.div.css("width", "100%");
    this.div.css("height", "100%");

    this.subViews = [];
    this.subDivs  = [];

    this.subDivs[this.ViewID.TOP]    = mkdiv("top", "view", this.div);
    this.subDivs[this.ViewID.RIGHT]  = mkdiv("right", "view", this.div);
    this.subDivs[this.ViewID.BOTTOM] = mkdiv("bottom", "view", this.div);
    this.subDivs[this.ViewID.LEFT]   = mkdiv("left", "view", this.div);
    this.subDivs[this.ViewID.CENTER] = mkdiv("center", "view", this.div);

    this.topHeight    = 100;
    this.bottomHeight = 200;
    this.leftWidth    = 200;
    this.rightWidth   = 200;

    this.subDivs[this.ViewID.TOP].css("top", "0");
    this.subDivs[this.ViewID.TOP].css("left", "0");
    this.subDivs[this.ViewID.TOP].css("right", "0");

    this.subDivs[this.ViewID.LEFT].css("left", "0");
    this.subDivs[this.ViewID.LEFT].css("bottom", "0");

    this.subDivs[this.ViewID.RIGHT].css("right", "0");

    this.subDivs[this.ViewID.BOTTOM].css("right", "0");
    this.subDivs[this.ViewID.BOTTOM].css("bottom", "0");

    this.doResize();

    if (container != null) {
        this.div.appendTo(container);
    }
}

TopLevelView.prototype = Object.create(View.prototype);
TopLevelView.prototype.constructor = TopLevelView;

TopLevelView.prototype.ViewID = {
    LEFT:       0,
    RIGHT:      1,
    TOP:        2,
    BOTTOM:     3,
    CENTER:     4,
    ENUM_COUNT: 5
};

TopLevelView.prototype.doResize = function() {
    this.subDivs[this.ViewID.TOP].css("height", this.topHeight);
    this.subDivs[this.ViewID.LEFT].css("top", this.topHeight);
    this.subDivs[this.ViewID.LEFT].css("width", this.leftWidth);
    this.subDivs[this.ViewID.RIGHT].css("top", this.topHeight);
    this.subDivs[this.ViewID.RIGHT].css("width", this.rightWidth);
    this.subDivs[this.ViewID.RIGHT].css("bottom", this.bottomHeight);
    this.subDivs[this.ViewID.BOTTOM].css("height", this.bottomHeight);
    this.subDivs[this.ViewID.BOTTOM].css("left", this.leftWidth);
    this.subDivs[this.ViewID.CENTER].css("top", this.topHeight + 1);
    this.subDivs[this.ViewID.CENTER].css("left", this.leftWidth + 1);
    this.subDivs[this.ViewID.CENTER].css("right", this.rightWidth + 1);
    this.subDivs[this.ViewID.CENTER].css("bottom", this.bottomHeight + 1);
}

TopLevelView.prototype.setSubView = function(id, subView) {
    if (this.subViews[id] != null) {
        this.subViews[id].div.remove();
    }

    this.subViews[id] = subView;

    if (subView != null) {
        subView.div.appendTo(this.subDivs[id]);
        if (id == this.ViewID.LEFT) {
            this.leftWidth = subView.width;
        } else if (id == this.ViewID.RIGHT) {
            this.rightWidth = subView.width;
        } else if (id == this.ViewID.TOP) {
            this.topHeight = subView.height;
        } else if (id == this.ViewID.BOTTOM) {
            this.bottomHeight = subView.height;
        }
    } else {
        if (id == this.ViewID.LEFT) {
            this.leftWidth = 0;
        } else if (id == this.ViewID.RIGHT) {
            this.rightWidth = 0;
        } else if (id == this.ViewID.TOP) {
            this.topHeight = 0;
        } else if (id == this.ViewID.BOTTOM) {
            this.bottomHeight = 0;
        }
    }

    this.doResize();
}

TopLevelView.prototype.setLeft = function(left) {
    this.setSubView(this.ViewID.LEFT, left);
}

TopLevelView.prototype.setRight = function(right) {
    this.setSubView(this.ViewID.RIGHT, right);
}

TopLevelView.prototype.setBottom = function(bottom) {
    this.setSubView(this.ViewID.BOTTOM, bottom);
}

TopLevelView.prototype.setTop = function(top) {
    this.setSubView(this.ViewID.TOP, top);
}

TopLevelView.prototype.setCenter = function(center) {
    this.setSubView(this.ViewID.CENTER, center);
}

