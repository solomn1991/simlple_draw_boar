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
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        var _this = _super.call(this) || this;
        _this.point_set = [];
        return _this;
    }
    Line.prototype.push = function (point) {
        this.point_set.push(point);
    };
    Object.defineProperty(Line.prototype, "length", {
        get: function () {
            return this.point_set.length;
        },
        enumerable: true,
        configurable: true
    });
    Line.prototype.link_last_two = function () {
        if (this.length > 1) {
            var point_start = this.point_set[this.point_set.length - 2];
            var point_end = this.point_set[this.point_set.length - 1];
            this.graphics.moveTo(point_start.x, point_start.y);
            this.graphics.lineTo(point_end.x, point_end.y);
        }
    };
    return Line;
}(egret.Shape));
__reflect(Line.prototype, "Line");
//# sourceMappingURL=Line.js.map