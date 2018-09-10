var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Board = (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super.call(this) || this;
        _this.lines = [];
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.drawBegin, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.drawMove, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.drawEnd, _this);
        _this.addEventListener(egret.TouchEvent.FOCUS_OUT, _this.drawCancel, _this);
        return _this;
    }
    Board.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Board.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.pen.visible = false;
    };
    Board.prototype.drawBegin = function (evt) {
        this.current_line = new Line();
        this.current_line.graphics.lineStyle(3, 0xff00ff);
        var point = this.globalToLocal(evt.stageX, evt.stageY);
        this.pen.x = point.x;
        this.pen.y = point.y;
        this.current_line.push(point);
        this.pen.visible = true;
        this.addChild(this.current_line);
    };
    Board.prototype.drawMove = function (evt) {
        var point = this.globalToLocal(evt.stageX, evt.stageY);
        this.pen.x = point.x;
        this.pen.y = point.y;
        this.current_line.push(point);
        this.current_line.link_last_two();
    };
    Board.prototype.drawEnd = function (evt) {
        var point = this.globalToLocal(evt.stageX, evt.stageY);
        this.pen.x = point.x;
        this.pen.y = point.y;
        this.current_line.push(point);
        this.pen.visible = false;
        this.lines.push(this.current_line);
        this.current_line.link_last_two();
        console.log(this.current_line.point_set);
        this.lines.push(this.current_line);
    };
    Board.prototype.drawCancel = function () {
        console.log(123);
    };
    return Board;
}(eui.Component));
__reflect(Board.prototype, "Board", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Board.js.map