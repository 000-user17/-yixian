
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/bag_panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0664Gp3gNMXaOeqdI0qBc7', 'bag_panel');
// script/scene1/bag_panel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bag_panel = /** @class */ (function (_super) {
    __extends(bag_panel, _super);
    function bag_panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板8个label
        _this.it0 = null;
        _this.it1 = null;
        _this.it2 = null;
        _this.it3 = null;
        _this.it4 = null;
        _this.it5 = null;
        _this.it6 = null;
        _this.it7 = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    bag_panel.prototype.start = function () {
        var _this = this;
        //触摸背包
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.touch.getDelta(); //获得鼠标的位置变化坐标
            _this.node.x += delta.x;
            _this.node.y += delta.y;
        });
    };
    bag_panel.prototype.update = function (dt) {
        //获取bag物品数量,实时更新
        var item_array = cc.find('persist_node').getComponent("persist_node").getitem(); //由于player脚本初始化该节点父节点为cc.director.getScene()，所以用cc.find顺着根目录查找到player节点
        //将属性值投射到属性值面板上
        this.it0 = this.node.getChildByName("item0").getComponent(cc.Label);
        this.it0.getComponent(cc.Label).string = " " + item_array[0];
        this.it1 = this.node.getChildByName("item1").getComponent(cc.Label);
        this.it1.getComponent(cc.Label).string = " " + item_array[1];
        this.it2 = this.node.getChildByName("item2").getComponent(cc.Label);
        this.it2.getComponent(cc.Label).string = " " + item_array[2];
        this.it3 = this.node.getChildByName("item3").getComponent(cc.Label);
        this.it3.getComponent(cc.Label).string = " " + item_array[3];
        this.it4 = this.node.getChildByName("item4").getComponent(cc.Label);
        this.it4.getComponent(cc.Label).string = " " + item_array[4];
        this.it5 = this.node.getChildByName("item5").getComponent(cc.Label);
        this.it5.getComponent(cc.Label).string = " " + item_array[5];
        this.it6 = this.node.getChildByName("item6").getComponent(cc.Label);
        this.it6.getComponent(cc.Label).string = " " + item_array[6];
        this.it7 = this.node.getChildByName("item7").getComponent(cc.Label);
        this.it7.getComponent(cc.Label).string = " " + item_array[7];
    };
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it0", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it1", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it2", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it3", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it4", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it5", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it6", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it7", void 0);
    bag_panel = __decorate([
        ccclass
    ], bag_panel);
    return bag_panel;
}(cc.Component));
exports.default = bag_panel;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJhZ19wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXNFQztRQW5FRyxhQUFhO1FBRWIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQWEsSUFBSSxDQUFDOztJQW1EekIsQ0FBQztJQWhERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7UUFBQSxpQkFXQztRQVJHLE1BQU07UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBQzdDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBRyxhQUFhO1lBQ25ELEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUzQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFQSwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUVQLGdCQUFnQjtRQUNoQixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLHVFQUF1RTtRQUV4SixlQUFlO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhFLENBQUM7SUFoRUY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNFO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0U7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNFO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0U7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNFO0lBbkJKLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzRTdCO0lBQUQsZ0JBQUM7Q0F0RUQsQUFzRUMsQ0F0RXNDLEVBQUUsQ0FBQyxTQUFTLEdBc0VsRDtrQkF0RW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhZ19wYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcbiAgICAvL+WxnuaAp+mdouadvzjkuKpsYWJlbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXQwOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBpdDE6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGl0MjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXQzOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBpdDQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGl0NTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXQ2OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBpdDc6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcblxyXG4gICAgICAgIC8v6Kem5pG46IOM5YyFXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCk9PnsgIC8v5ouW5Yqo5bGe5oCn6Z2i5p2/XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7ICAgLy/ojrflvpfpvKDmoIfnmoTkvY3nva7lj5jljJblnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gZGVsdGEueDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gZGVsdGEueTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgICAgIC8v6I635Y+WYmFn54mp5ZOB5pWw6YePLOWunuaXtuabtOaWsFxyXG4gICAgICAgIGxldCBpdGVtX2FycmF5ID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KFwicGVyc2lzdF9ub2RlXCIpLmdldGl0ZW0oKTsgLy/nlLHkuo5wbGF5ZXLohJrmnKzliJ3lp4vljJbor6XoioLngrnniLboioLngrnkuLpjYy5kaXJlY3Rvci5nZXRTY2VuZSgp77yM5omA5Lul55SoY2MuZmluZOmhuuedgOagueebruW9leafpeaJvuWIsHBsYXllcuiKgueCuVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5bCG5bGe5oCn5YC85oqV5bCE5Yiw5bGe5oCn5YC86Z2i5p2/5LiKXHJcbiAgICAgICAgdGhpcy5pdDAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtMFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaXQwLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIgKyBpdGVtX2FycmF5WzBdO1xyXG5cclxuICAgICAgICB0aGlzLml0MSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW0xXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pdDEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIiArIGl0ZW1fYXJyYXlbMV07XHJcblxyXG4gICAgICAgIHRoaXMuaXQyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbTJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLml0Mi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiICsgaXRlbV9hcnJheVsyXTtcclxuXHJcbiAgICAgICAgdGhpcy5pdDMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtM1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaXQzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIgKyBpdGVtX2FycmF5WzNdO1xyXG5cclxuICAgICAgICB0aGlzLml0NCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW00XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pdDQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIiArIGl0ZW1fYXJyYXlbNF07XHJcblxyXG4gICAgICAgIHRoaXMuaXQ1ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbTVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLml0NS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiICsgaXRlbV9hcnJheVs1XTtcclxuXHJcbiAgICAgICAgdGhpcy5pdDYgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtNlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaXQ2LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIgKyBpdGVtX2FycmF5WzZdO1xyXG5cclxuICAgICAgICB0aGlzLml0NyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW03XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pdDcuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIiArIGl0ZW1fYXJyYXlbN107XHJcblxyXG4gICAgIH1cclxufVxyXG4iXX0=