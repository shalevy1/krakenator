var mkdiv = function(id, cls, owner) {
    var result = $('<div id="' + id + '" class="' + cls + '"></div>').appendTo(owner);
    result.css("background-color", Color.DARK);
    return result;
}

function TopLevelView(container) {
    View.call(this, 0, 0);

    //this.div.resize(this.doResize);

    this.div.css("position", "relative");
    this.div.css("width", "100%");
    this.div.css("height", "100%");

    this.subViews = [];
    this.subDivs  = [];

    var center = mkdiv("center", "view tlv-center", this.div);
    var top    = mkdiv("top", "view tlv-top", this.div);
    var right  = mkdiv("right", "view tlv-right", this.div);
    var bottom = mkdiv("bottom", "view tlv-bottom", this.div);
    var left   = mkdiv("left", "view tlv-left", this.div);

    this.subDivs[this.ViewID.TOP]    = top;
    this.subDivs[this.ViewID.RIGHT]  = right;
    this.subDivs[this.ViewID.BOTTOM] = bottom;
    this.subDivs[this.ViewID.LEFT]   = left;
    this.subDivs[this.ViewID.CENTER] = center;

    this.topHeight    = 100;
    this.bottomHeight = 200;
    this.leftWidth    = 200;
    this.rightWidth   = 200;

    var that = this;

    top.resizable({ handles: "s" , resize: function(event, ui) { that.resizeTop(event, ui); } });
    left.resizable({ handles: "e" , resize: function(event, ui) { that.resizeLeft(event, ui); } });
    right.resizable({ handles: "w" , resize: function(event, ui) { that.resizeRight(event, ui); } });
    bottom.resizable({ handles: "n" , resize: function(event, ui) { that.resizeBottom(event, ui); } });

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

    this.subDivs[this.ViewID.BOTTOM].css("height", this.bottomHeight - 1);
    this.subDivs[this.ViewID.BOTTOM].css("left", this.leftWidth);
    this.subDivs[this.ViewID.BOTTOM].css('top', this.height - this.bottomHeight);
    this.subDivs[this.ViewID.CENTER].css("bottom", this.bottomHeight);
    this.subDivs[this.ViewID.CENTER].css("left", this.leftWidth);
    this.subDivs[this.ViewID.CENTER].css("right", this.rightWidth);
    this.subDivs[this.ViewID.CENTER].css("top", this.topHeight);
    this.subDivs[this.ViewID.LEFT].css('right', this.leftWidth);
    this.subDivs[this.ViewID.LEFT].css("top", this.topHeight);
    this.subDivs[this.ViewID.LEFT].css("width", this.leftWidth - 1);
    this.subDivs[this.ViewID.RIGHT].css("bottom", this.bottomHeight);
    this.subDivs[this.ViewID.RIGHT].css('left', this.width - this.rightWidth);
    this.subDivs[this.ViewID.RIGHT].css("top", this.topHeight);
    this.subDivs[this.ViewID.RIGHT].css("width", this.rightWidth - 1);
    this.subDivs[this.ViewID.TOP].css('bottom', this.height - this.topHeight);
    this.subDivs[this.ViewID.TOP].css("height", this.topHeight - 1);

    if (this.subViews[this.ViewID.TOP] != null) {
        this.subViews[this.ViewID.TOP].setSize(this.width, this.topHeight);
    }
    if (this.subViews[this.ViewID.LEFT] != null) {
        this.subViews[this.ViewID.LEFT].setSize(this.leftWidth, this.height - this.topHeight);
    }
    if (this.subViews[this.ViewID.RIGHT] != null) {
        this.subViews[this.ViewID.RIGHT].setSize(this.rightWidth, this.height - this.topHeight - this.bottomHeight);
    }
    if (this.subViews[this.ViewID.BOTTOM] != null) {
        this.subViews[this.ViewID.BOTTOM].setSize(this.width - this.leftWidth, this.bottomHeight);
    }
    if (this.subViews[this.ViewID.CENTER] != null) {
        this.subViews[this.ViewID.CENTER].setSize(this.width - this.leftWidth - this.rightWidth, this.height - this.topHeight - this.bottomHeight);
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

TopLevelView.prototype.resizeLeft = function(event, ui) {
    this.leftWidth = ui.size.width;
    doResize();
}

TopLevelView.prototype.resizeRight = function(event, ui) {
    this.rightWidth = ui.size.width;
    doResize();
}

TopLevelView.prototype.resizeTop = function(event, ui) {
    this.topHeight = ui.size.height;
    doResize();
}

TopLevelView.prototype.resizeBottom = function(event, ui) {
    this.bottomHeight = ui.size.height;
    doResize();
}
