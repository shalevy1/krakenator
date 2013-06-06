var mkdiv = function(id, cls, owner) {
    return $('<div id="' + id + '" class="' + cls + '"></div>').appendTo(owner);
}

function TopLevelView(container) {
    View.call(this, 0, 0);

    //this.div.resize(this.doResize);

    this.div.css("position", "relative");
    this.div.css("width", "100%");
    this.div.css("height", "100%");

    this.subViews = [];
    this.subDivs  = [];

    var top    = mkdiv("top", "view", this.div);
    var right  = mkdiv("right", "view", this.div);
    var bottom = mkdiv("bottom", "view", this.div);
    var left   = mkdiv("left", "view", this.div);
    var center = mkdiv("center", "view", this.div);

    this.subDivs[this.ViewID.TOP]    = top;
    this.subDivs[this.ViewID.RIGHT]  = right;
    this.subDivs[this.ViewID.BOTTOM] = bottom;
    this.subDivs[this.ViewID.LEFT]   = left;
    this.subDivs[this.ViewID.CENTER] = center;

    this.topHeight    = 100;
    this.bottomHeight = 200;
    this.leftWidth    = 200;
    this.rightWidth   = 200;

    top.css("top", "0");
    top.css("left", "0");
    top.css("right", "0");

    left.css("left", "0");
    left.css("bottom", "0");

    right.css("right", "0");

    bottom.css("right", "0");
    bottom.css("bottom", "0");

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
    this.width  = this.div.width();
    this.height = this.div.height();

    this.subDivs[this.ViewID.TOP].css("height", this.topHeight);
    this.subDivs[this.ViewID.LEFT].css("top", this.topHeight);
    this.subDivs[this.ViewID.LEFT].css("width", this.leftWidth);
    this.subDivs[this.ViewID.RIGHT].css("top", this.topHeight);
    this.subDivs[this.ViewID.RIGHT].css("width", this.rightWidth);
    this.subDivs[this.ViewID.RIGHT].css("bottom", this.bottomHeight);
    this.subDivs[this.ViewID.BOTTOM].css("height", this.bottomHeight);
    this.subDivs[this.ViewID.BOTTOM].css("left", this.leftWidth);
    this.subDivs[this.ViewID.CENTER].css("top", this.topHeight);
    this.subDivs[this.ViewID.CENTER].css("left", this.leftWidth);
    this.subDivs[this.ViewID.CENTER].css("right", this.rightWidth);
    this.subDivs[this.ViewID.CENTER].css("bottom", this.bottomHeight);

    if (this.subViews[this.ViewID.TOP] != null) {
        this.subViews[this.ViewID.TOP].setWidth(this.width);
    }
    if (this.subViews[this.ViewID.LEFT] != null) {
        this.subViews[this.ViewID.LEFT].setHeight(this.height - this.topHeight);
    }
    if (this.subViews[this.ViewID.RIGHT] != null) {
        this.subViews[this.ViewID.RIGHT].setHeight(this.height - this.topHeight - this.bottomHeight);
    }
    if (this.subViews[this.ViewID.BOTTOM] != null) {
        this.subViews[this.ViewID.BOTTOM].setWidth(this.width - this.leftWidth);
    }
    if (this.subViews[this.ViewID.CENTER] != null) {
        this.subViews[this.ViewID.CENTER].setWidth(this.width - this.leftWidth - this.rightWidth);
        this.subViews[this.ViewID.CENTER].setHeight(this.height - this.topHeight - this.bottomHeight);
    }
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

