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
var Pen = (function (_super) {
    __extends(Pen, _super);
    function Pen() {
        var _this = _super.call(this) || this;
        _this.anchorOffsetX = _this.width;
        _this.anchorOffsetY = _this.height;
        return _this;
    }
    Pen.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Pen.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Pen;
}(eui.Component));
__reflect(Pen.prototype, "Pen", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Pen.js.map