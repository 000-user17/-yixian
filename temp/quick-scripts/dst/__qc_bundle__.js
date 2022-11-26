
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/event_scripts/awakener');
require('./assets/script/event_scripts/bar');
require('./assets/script/event_scripts/event');
require('./assets/script/event_scripts/event_controller');
require('./assets/script/event_scripts/event_prompt');
require('./assets/script/event_scripts/exausted_prompt');
require('./assets/script/event_scripts/over');
require('./assets/script/music');
require('./assets/script/persist_node');
require('./assets/script/scene1/age');
require('./assets/script/scene1/attribute');
require('./assets/script/scene1/attribute_panel');
require('./assets/script/scene1/bag');
require('./assets/script/scene1/bag_panel');
require('./assets/script/scene1/beijing1');
require('./assets/script/scene1/bubble');
require('./assets/script/scene1/dazuo');
require('./assets/script/scene1/energy');
require('./assets/script/scene1/exit');
require('./assets/script/scene1/exp');
require('./assets/script/scene1/log');
require('./assets/script/scene1/log_panel');
require('./assets/script/scene1/player');
require('./assets/script/scene1/setup');
require('./assets/script/scene1/setup_panel');
require('./assets/script/scene1/shuoming');
require('./assets/script/scene1/upgrade');
require('./assets/script/scene1/xiuxian');
require('./assets/script/scene2/beijing2');
require('./assets/script/scene2/dantian');
require('./assets/script/scene2/danyao');
require('./assets/script/scene2/fanhui');
require('./assets/script/scene2/jinluo');
require('./assets/script/scene2/jinmai');
require('./assets/script/scene2/yichu');
require('./assets/script/start/start');
require('./assets/sdkhub/js-sdkhub');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/music.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef216jlb7FGPptx4T74N4sn', 'music');
// script/music.ts

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
var music = /** @class */ (function (_super) {
    __extends(music, _super);
    function music() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scene = 0;
        _this.audioID = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    music.prototype.start = function () {
        var _this = this;
        //要先在node添加audiosource组件
        var player = this.getComponent(cc.AudioSource); //获取音乐组件
        if (this.scene == 0) {
            cc.loader.loadRes("main", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playMusic(clip, true);
                _this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.6);
                //停止播放音乐
            });
        }
        else if (this.scene == 1) {
            cc.loader.loadRes("scene2", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playMusic(clip, true);
                _this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.4);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
        }
        else {
            cc.loader.loadRes("start", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playMusic(clip, true);
                _this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.6);
                //停止播放音乐
            });
        }
    };
    music.prototype.update = function (dt) {
    };
    __decorate([
        property
    ], music.prototype, "scene", void 0);
    __decorate([
        property
    ], music.prototype, "audioID", void 0);
    music = __decorate([
        ccclass
    ], music);
    return music;
}(cc.Component));
exports.default = music;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtdXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTBEQztRQXZERyxXQUFLLEdBQVUsQ0FBQyxDQUFDO1FBR2pCLGFBQU8sR0FBVSxDQUFDLENBQUM7O0lBb0R2QixDQUFDO0lBakRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYscUJBQUssR0FBTDtRQUFBLGlCQXVDQztRQXBDRyx3QkFBd0I7UUFDeEIsSUFBSSxNQUFNLEdBQWtCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUV2RSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFDO1lBQ2YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUMsSUFBSTtnQkFDN0MsTUFBTTtnQkFDTixJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVE7WUFDWixDQUFDLENBQUMsQ0FBQztTQUNOO2FBRUksSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBQztZQUdwQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMvQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDdEMsUUFBUTtnQkFDUiwrQkFBK0I7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUVJO1lBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUMsSUFBSTtnQkFDOUMsTUFBTTtnQkFDTixJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVE7WUFDWixDQUFDLENBQUMsQ0FBQztTQUNOO0lBRUwsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBUSxFQUFFO0lBR1YsQ0FBQztJQXRERDtRQURDLFFBQVE7d0NBQ1E7SUFHakI7UUFEQyxRQUFROzBDQUNVO0lBTkYsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTBEekI7SUFBRCxZQUFDO0NBMURELEFBMERDLENBMURrQyxFQUFFLENBQUMsU0FBUyxHQTBEOUM7a0JBMURvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtdXNpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzY2VuZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYXVkaW9JRDpudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG5cclxuICAgICAgICAvL+imgeWFiOWcqG5vZGXmt7vliqBhdWRpb3NvdXJjZee7hOS7tlxyXG4gICAgICAgIGxldCBwbGF5ZXI6Y2MuQXVkaW9Tb3VyY2UgPSB0aGlzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7IC8v6I635Y+W6Z+z5LmQ57uE5Lu2XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2NlbmUgPT0gMCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibWFpblwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gYXVkaW9JRDtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zY2VuZSA9PSAxKXtcclxuXHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNjZW5lMlwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gYXVkaW9JRDtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjQpXHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInN0YXJ0XCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvSUQgPSBhdWRpb0lEO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/danyao.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59655wNNudHe6t4t98Z+i1r', 'danyao');
// script/scene2/danyao.ts

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
var danyao = /** @class */ (function (_super) {
    __extends(danyao, _super);
    function danyao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.danyao_index = 0; //丹药类型,与persist_node里面的丹药顺序一一对应,需要在cocos界面更改不同丹药的索引,并且该变量使得不同丹药能够使用同一脚本
        _this.danyao_num = 0; //当前丹药数量
        _this.danyao_label = null; //用于表示丹药数量的label，用于动态生成
        //下面两个变量用于【丹药3】的撤回操作
        _this.chehui_effect = []; //用于保存之前的丹田值和超出值得变化栈
        _this.chehui_jinmai = []; //用于保存筋脉操作顺序的栈
        return _this;
    }
    //入栈方法，在突破筋脉时执行，保存筋脉的explosion+this.danmai的变化用于撤回数值操作
    danyao.prototype.push_chehui_effect = function (num) {
        this.chehui_effect.push(num);
    };
    //在突破时执行，用于保存筋脉的名称，用于将经脉再显示出来
    danyao.prototype.push_chehui_jinmai = function (jinmai) {
        this.chehui_jinmai.push(jinmai);
    };
    // LIFE-CYCLE CALLBACKS:
    danyao.prototype.get_double_effect = function () {
        return this.double_effect;
    };
    danyao.prototype.get_yuce_effect = function () {
        return this.yuce_effect;
    };
    danyao.prototype.set_yuce_effect = function (bool) {
        this.yuce_effect = bool;
    };
    danyao.prototype.onLoad = function () {
        this.double_effect = false; //初始化为false，即无双倍影响
        this.yuce_effect = false; //初始化是否能预测为false，即不能预测
        cc.find('persist_node').getComponent('persist_node').setitem(this.danyao_index, 9); //测试丹药效果，增加丹药【供测试】
        this.get_danyao_num(); //预载时获取对应丹药数量
        this.danyao_label = new cc.Node();
    };
    //获取对应的丹药数量
    danyao.prototype.get_danyao_num = function () {
        this.danyao_num = cc.find('persist_node').getComponent('persist_node').getitem()[this.danyao_index]; //获取对应顺序的丹药数
    };
    //丹药效果为增加100点丹田值
    danyao.prototype.danyao_effect0 = function () {
        var dantian = cc.find('dantian').getComponent('dantian');
        dantian.dantian_gain(dantian.dantian_max() / 2);
    };
    //丹药效果为减少100点丹田值
    danyao.prototype.danyao_effect1 = function () {
        var dantian = cc.find('dantian').getComponent('dantian');
        dantian.dantian_gain(-dantian.dantian_max() / 2);
    };
    //丹药效果，使得下次突破筋脉的作用效果翻倍
    danyao.prototype.danyao_effect2 = function () {
        this.double_effect = true;
    };
    //丹药效果，撤回上一次筋脉突破的效果,只能撤回筋脉突破的效果
    danyao.prototype.danyao_effect3 = function () {
        //console.debug(this.chehui_effect);
        //console.debug(this.chehui_jinmai);
        if (this.chehui_effect.length == this.chehui_jinmai.length && this.chehui_effect.length != 0) { //当两个栈同时放入进去之后并且不为空，才能执行撤回操作
            var len = this.chehui_effect.length;
            cc.find('jinmai').getChildByName(this.chehui_jinmai[len - 1]).getComponent('jinmai').appear();
            cc.find('jinmai').getChildByName(this.chehui_jinmai[len - 1]).getComponent('jinmai').is_click = false; //重置经脉的可点击性
            cc.find('dantian').getComponent('dantian').dantian_gain(-1 * this.chehui_effect.pop()); //撤回丹田的操作
            this.chehui_jinmai.pop();
        }
        else {
        }
    };
    //丹药效果，显示下一条要突破筋脉的信息
    danyao.prototype.danyao_effect4 = function () {
        this.yuce_effect = true;
    };
    //丹药效果，重置界面，重新开始突破
    danyao.prototype.danyao_effect5 = function () {
        cc.director.loadScene('scene2');
    };
    //丹药6效果，增加精力值
    danyao.prototype.danyao_effect6 = function () {
        cc.find('persist_node').getComponent('persist_node').changeEnergy(200);
    };
    //丹药7效果，增加经验值
    danyao.prototype.danyao_effect7 = function () {
        var persist = cc.find('persist_node').getComponent('persist_node');
        persist.exp_gain(persist.exp_required() / 3);
    };
    //丹药使用的提示效果
    danyao.prototype.danyao_tishi = function (name) {
        var danyaohaojin = new cc.Node();
        var tishi = danyaohaojin.addComponent(cc.Label); //增加label组件并赋给丹药数量
        danyaohaojin.color = cc.color(255, 255, 255); //将字体改为白色
        //设置文本大小
        tishi.fontSize = 40;
        tishi.lineHeight = 40;
        danyaohaojin.setParent(this.node); //父节点是this.node才能出来
        danyaohaojin.x = 0; //相对于父节点的横坐标位置不变
        danyaohaojin.y = 0; //相对于父节点的纵坐标在下面一点的位置
        tishi.string = name;
        this.schedule(function () {
            danyaohaojin.y += 5; //增加5和减少0.01都可以增快提示速度
        }, 0.01, 20);
        //延时最后的时间为ms,延时1秒销毁，如果在上面的schedule函数还没执行完就销毁，会报错
        setTimeout(function () {
            danyaohaojin.destroy();
        }, 1000);
    };
    //丹药使用时的方法选择
    danyao.prototype.danyao_use = function () {
        switch (this.danyao_index) { //保证不同的丹药执行不同的使用效果方法
            case 0:
                if (this.danyao_num > 0) { //判断丹药数量
                    this.danyao_effect0();
                    this.danyao_tishi('增加一半的丹田值'); //提示丹药使用成功
                }
                else {
                    this.danyao_tishi('丹药已耗尽'); //提示丹药耗尽
                }
                break;
            case 1:
                if (this.danyao_num > 0) {
                    this.danyao_effect1();
                    this.danyao_tishi('减少一半的丹田值');
                }
                else {
                    this.danyao_tishi('丹药已耗尽'); //提示丹药耗尽
                }
                break;
            case 2:
                if (this.danyao_num > 0) {
                    this.danyao_effect2();
                    this.danyao_tishi('下一条要突破的筋脉双倍效果');
                }
                else {
                    this.danyao_tishi('丹药已耗尽'); //提示丹药耗尽
                }
                break;
            case 3:
                if (this.danyao_num > 0) {
                    this.danyao_effect3();
                    this.danyao_tishi('撤回上一条筋脉突破效果');
                }
                else {
                    this.danyao_tishi('丹药已耗尽'); //提示丹药耗尽
                }
                break;
            case 4:
                if (this.danyao_num > 0) {
                    this.danyao_effect4();
                    this.danyao_tishi('预测下一条突破筋脉的数值');
                }
                else {
                    this.danyao_tishi('丹药已耗尽'); //提示丹药耗尽
                }
                break;
            case 5:
                if (this.danyao_num > 0) {
                    this.danyao_effect5();
                    this.danyao_tishi('已重置突破');
                }
                else {
                    this.danyao_tishi('丹药已耗尽'); //提示丹药耗尽
                }
                break;
            case 6:
                if (this.danyao_num > 0) {
                    this.danyao_effect6();
                    this.danyao_tishi('精力值增加');
                }
                else {
                    this.danyao_tishi('丹药已耗尽'); //提示丹药耗尽
                }
                break;
            case 7:
                if (this.danyao_num > 0) {
                    this.danyao_effect7();
                    this.danyao_tishi('经验值增加');
                }
                else {
                    this.danyao_tishi('丹药已耗尽'); //提示丹药耗尽
                }
                break;
            default:
                break;
        }
        cc.loader.loadRes("使用物品", cc.AudioClip, function (res, clip) {
            //播放音乐
            var audioID = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.05);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });
        cc.find('persist_node').getComponent('persist_node').setitem(this.danyao_index, -1); //人物背包丹药数目减少1
        this.get_danyao_num(); //实时回传到本界面节点的丹药数量
        this.danyao_ui(); //保证实时更新使用后的丹药数量
    };
    //用于在当前界面实时更新并显示丹药数量
    danyao.prototype.danyao_ui = function () {
        var danyao_num = this.danyao_label.addComponent(cc.Label); //增加label组件并赋给丹药数量
        this.danyao_label.color = cc.color(255, 255, 255); //将字体改为白色
        //设置文本大小
        danyao_num.fontSize = 40;
        danyao_num.lineHeight = 40;
        this.danyao_label.setParent(this.node); //父节点是this.node才能出来
        this.danyao_label.x = 0; //相对于父节点的横坐标位置不变
        this.danyao_label.y = -80; //相对于父节点的纵坐标在下面一点的位置
        danyao_num.string = 'X' + String(this.danyao_num);
    };
    danyao.prototype.start = function () {
        var _this = this;
        this.danyao_ui();
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            //触碰丹药后的效果
            _this.danyao_use();
        });
    };
    danyao.prototype.update = function (dt) {
    };
    __decorate([
        property
    ], danyao.prototype, "danyao_index", void 0);
    __decorate([
        property
    ], danyao.prototype, "danyao_num", void 0);
    __decorate([
        property
    ], danyao.prototype, "danyao_label", void 0);
    danyao = __decorate([
        ccclass
    ], danyao);
    return danyao;
}(cc.Component));
exports.default = danyao;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGRhbnlhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWlWQztRQTlVRyxrQkFBWSxHQUFVLENBQUMsQ0FBQyxDQUFNLHVFQUF1RTtRQUdyRyxnQkFBVSxHQUFVLENBQUMsQ0FBQyxDQUFPLFFBQVE7UUFHckMsa0JBQVksR0FBVyxJQUFJLENBQUMsQ0FBQyx1QkFBdUI7UUFTcEQsb0JBQW9CO1FBQ3BCLG1CQUFhLEdBQVksRUFBRSxDQUFDLENBQUMsb0JBQW9CO1FBQ2pELG1CQUFhLEdBQVksRUFBRSxDQUFDLENBQUEsY0FBYzs7SUE2VDlDLENBQUM7SUEzVEcscURBQXFEO0lBQ3JELG1DQUFrQixHQUFsQixVQUFtQixHQUFVO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCw2QkFBNkI7SUFDN0IsbUNBQWtCLEdBQWxCLFVBQW1CLE1BQWE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixrQ0FBaUIsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELGdDQUFlLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMs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TGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkYW55YW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGFueWFvX2luZGV4Om51bWJlciA9IDA7ICAgICAgLy/kuLnoja/nsbvlnoss5LiOcGVyc2lzdF9ub2Rl6YeM6Z2i55qE5Li56I2v6aG65bqP5LiA5LiA5a+55bqULOmcgOimgeWcqGNvY29z55WM6Z2i5pu05pS55LiN5ZCM5Li56I2v55qE57Si5byVLOW5tuS4lOivpeWPmOmHj+S9v+W+l+S4jeWQjOS4ueiNr+iDveWkn+S9v+eUqOWQjOS4gOiEmuacrFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGFueWFvX251bTpudW1iZXIgPSAwOyAgICAgICAvL+W9k+WJjeS4ueiNr+aVsOmHj1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGFueWFvX2xhYmVsOmNjLk5vZGUgPSBudWxsOyAvL+eUqOS6juihqOekuuS4ueiNr+aVsOmHj+eahGxhYmVs77yM55So5LqO5Yqo5oCB55Sf5oiQXHJcblxyXG5cclxuICAgIGRvdWJsZV9lZmZlY3Q6Ym9vbGVhbjsvL+acjeWKoeS6juS4ueiNrzLvvIzlpoLmnpzkvb/nlKjkuLnoja8y5YiZ5byA5ZCv5Y+M5YCN5pWI55uKXHJcblxyXG5cclxuICAgIHl1Y2VfZWZmZWN0OmJvb2xlYW47IC8v5pyN5Yqh5LqO44CQ5Li56I2vNOOAkSDngrnlh7vopoHpooTmtYvnmoTnrYvohInljbPlj6/mmL7npLrlhbblr7nkuLnnlLDnmoTlvbHlk41cclxuXHJcblxyXG4gICAgLy/kuIvpnaLkuKTkuKrlj5jph4/nlKjkuo7jgJDkuLnoja8z44CR55qE5pKk5Zue5pON5L2cXHJcbiAgICBjaGVodWlfZWZmZWN0Om51bWJlcltdID0gW107IC8v55So5LqO5L+d5a2Y5LmL5YmN55qE5Li555Sw5YC85ZKM6LaF5Ye65YC85b6X5Y+Y5YyW5qCIXHJcbiAgICBjaGVodWlfamlubWFpOnN0cmluZ1tdID0gW107Ly/nlKjkuo7kv53lrZjnrYvohInmk43kvZzpobrluo/nmoTmoIhcclxuXHJcbiAgICAvL+WFpeagiOaWueazle+8jOWcqOeqgeegtOeti+iEieaXtuaJp+ihjO+8jOS/neWtmOeti+iEieeahGV4cGxvc2lvbit0aGlzLmRhbm1haeeahOWPmOWMlueUqOS6juaSpOWbnuaVsOWAvOaTjeS9nFxyXG4gICAgcHVzaF9jaGVodWlfZWZmZWN0KG51bTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuY2hlaHVpX2VmZmVjdC5wdXNoKG51bSk7XHJcbiAgICB9XHJcbiAgICAvL+WcqOeqgeegtOaXtuaJp+ihjO+8jOeUqOS6juS/neWtmOeti+iEieeahOWQjeensO+8jOeUqOS6juWwhue7j+iEieWGjeaYvuekuuWHuuadpVxyXG4gICAgcHVzaF9jaGVodWlfamlubWFpKGppbm1haTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY2hlaHVpX2ppbm1haS5wdXNoKGppbm1haSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgZ2V0X2RvdWJsZV9lZmZlY3QoKXsgLy/ojrflj5bmmK/lkKblj4zlgI3mlYjnm4rmlrnms5VcclxuICAgICAgICByZXR1cm4gdGhpcy5kb3VibGVfZWZmZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldF95dWNlX2VmZmVjdCgpeyAgLy/ojrflj5bmmK/lkKbog73pooTmtYvnmoTmlrnms5VcclxuICAgICAgICByZXR1cm4gdGhpcy55dWNlX2VmZmVjdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRfeXVjZV9lZmZlY3QoYm9vbDpib29sZWFuKXtcclxuICAgICAgICB0aGlzLnl1Y2VfZWZmZWN0ID0gYm9vbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkgeyAgXHJcbiAgICAgICAgdGhpcy5kb3VibGVfZWZmZWN0ID0gZmFsc2U7IC8v5Yid5aeL5YyW5Li6ZmFsc2XvvIzljbPml6Dlj4zlgI3lvbHlk41cclxuXHJcbiAgICAgICAgdGhpcy55dWNlX2VmZmVjdCA9IGZhbHNlOyAvL+WIneWni+WMluaYr+WQpuiDvemihOa1i+S4umZhbHNl77yM5Y2z5LiN6IO96aKE5rWLXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuc2V0aXRlbSh0aGlzLmRhbnlhb19pbmRleCw5KTsgLy/mtYvor5XkuLnoja/mlYjmnpzvvIzlop7liqDkuLnoja/jgJDkvpvmtYvor5XjgJFcclxuXHJcbiAgICAgICAgdGhpcy5nZXRfZGFueWFvX251bSgpOyAvL+mihOi9veaXtuiOt+WPluWvueW6lOS4ueiNr+aVsOmHj1xyXG5cclxuICAgICAgICB0aGlzLmRhbnlhb19sYWJlbCA9IG5ldyBjYy5Ob2RlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5a+55bqU55qE5Li56I2v5pWw6YePXHJcbiAgICBnZXRfZGFueWFvX251bSgpe1xyXG4gICAgICAgIHRoaXMuZGFueWFvX251bSA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZ2V0aXRlbSgpW3RoaXMuZGFueWFvX2luZGV4XTsgLy/ojrflj5blr7nlupTpobrluo/nmoTkuLnoja/mlbBcclxuICAgIH1cclxuXHJcbiAgICAvL+S4ueiNr+aViOaenOS4uuWinuWKoDEwMOeCueS4ueeUsOWAvFxyXG4gICAgZGFueWFvX2VmZmVjdDAoKXtcclxuICAgICAgICBsZXQgZGFudGlhbiA9IGNjLmZpbmQoJ2RhbnRpYW4nKS5nZXRDb21wb25lbnQoJ2RhbnRpYW4nKVxyXG4gICAgICAgIGRhbnRpYW4uZGFudGlhbl9nYWluKGRhbnRpYW4uZGFudGlhbl9tYXgoKS8yKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+S4ueiNr+aViOaenOS4uuWHj+WwkTEwMOeCueS4ueeUsOWAvFxyXG4gICAgZGFueWFvX2VmZmVjdDEoKXtcclxuICAgICAgICBsZXQgZGFudGlhbiA9IGNjLmZpbmQoJ2RhbnRpYW4nKS5nZXRDb21wb25lbnQoJ2RhbnRpYW4nKVxyXG4gICAgICAgIGRhbnRpYW4uZGFudGlhbl9nYWluKC1kYW50aWFuLmRhbnRpYW5fbWF4KCkvMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v5Li56I2v5pWI5p6c77yM5L2/5b6X5LiL5qyh56qB56C0562L6ISJ55qE5L2c55So5pWI5p6c57+75YCNXHJcbiAgICBkYW55YW9fZWZmZWN0Migpe1xyXG4gICAgICAgIHRoaXMuZG91YmxlX2VmZmVjdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuLnoja/mlYjmnpzvvIzmkqTlm57kuIrkuIDmrKHnrYvohInnqoHnoLTnmoTmlYjmnpws5Y+q6IO95pKk5Zue562L6ISJ56qB56C055qE5pWI5p6cXHJcbiAgICBkYW55YW9fZWZmZWN0Mygpe1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcodGhpcy5jaGVodWlfZWZmZWN0KTtcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcodGhpcy5jaGVodWlfamlubWFpKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5jaGVodWlfZWZmZWN0Lmxlbmd0aCA9PSB0aGlzLmNoZWh1aV9qaW5tYWkubGVuZ3RoICYmIHRoaXMuY2hlaHVpX2VmZmVjdC5sZW5ndGghPTApeyAvL+W9k+S4pOS4quagiOWQjOaXtuaUvuWFpei/m+WOu+S5i+WQjuW5tuS4lOS4jeS4uuepuu+8jOaJjeiDveaJp+ihjOaSpOWbnuaTjeS9nFxyXG4gICAgICAgICAgICBsZXQgbGVuID0gdGhpcy5jaGVodWlfZWZmZWN0Lmxlbmd0aFxyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnamlubWFpJykuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jaGVodWlfamlubWFpW2xlbi0xXSkuZ2V0Q29tcG9uZW50KCdqaW5tYWknKS5hcHBlYXIoKTtcclxuICAgICAgICAgICAgY2MuZmluZCgnamlubWFpJykuZ2V0Q2hpbGRCeU5hbWUodGhpcy5jaGVodWlfamlubWFpW2xlbi0xXSkuZ2V0Q29tcG9uZW50KCdqaW5tYWknKS5pc19jbGljayA9IGZhbHNlOyAvL+mHjee9rue7j+iEieeahOWPr+eCueWHu+aAp1xyXG4gICAgICAgICAgICBjYy5maW5kKCdkYW50aWFuJykuZ2V0Q29tcG9uZW50KCdkYW50aWFuJykuZGFudGlhbl9nYWluKC0xKnRoaXMuY2hlaHVpX2VmZmVjdC5wb3AoKSk7IC8v5pKk5Zue5Li555Sw55qE5pON5L2cXHJcbiAgICAgICAgICAgIHRoaXMuY2hlaHVpX2ppbm1haS5wb3AoKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+S4ueiNr+aViOaenO+8jOaYvuekuuS4i+S4gOadoeimgeeqgeegtOeti+iEieeahOS/oeaBr1xyXG4gICAgZGFueWFvX2VmZmVjdDQoKXtcclxuICAgICAgICB0aGlzLnl1Y2VfZWZmZWN0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8v5Li56I2v5pWI5p6c77yM6YeN572u55WM6Z2i77yM6YeN5paw5byA5aeL56qB56C0XHJcbiAgICBkYW55YW9fZWZmZWN0NSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc2NlbmUyJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5Li56I2vNuaViOaenO+8jOWinuWKoOeyvuWKm+WAvFxyXG4gICAgZGFueWFvX2VmZmVjdDYoKXtcclxuICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmNoYW5nZUVuZXJneSgyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Li56I2vN+aViOaenO+8jOWinuWKoOe7j+mqjOWAvFxyXG4gICAgZGFueWFvX2VmZmVjdDcoKXtcclxuICAgICAgICBsZXQgcGVyc2lzdCA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJyk7XHJcbiAgICAgICAgcGVyc2lzdC5leHBfZ2FpbihwZXJzaXN0LmV4cF9yZXF1aXJlZCgpLzMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvL+S4ueiNr+S9v+eUqOeahOaPkOekuuaViOaenFxyXG4gICAgZGFueWFvX3Rpc2hpKG5hbWU6c3RyaW5nKXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGFueWFvaGFvamluID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICB2YXIgdGlzaGkgPSBkYW55YW9oYW9qaW4uYWRkQ29tcG9uZW50KGNjLkxhYmVsKTsgLy/lop7liqBsYWJlbOe7hOS7tuW5tui1i+e7meS4ueiNr+aVsOmHj1xyXG4gICAgICAgIGRhbnlhb2hhb2ppbi5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTsgLy/lsIblrZfkvZPmlLnkuLrnmb3oibJcclxuICAgICAgICAvL+iuvue9ruaWh+acrOWkp+Wwj1xyXG4gICAgICAgIHRpc2hpLmZvbnRTaXplID0gNDA7XHJcbiAgICAgICAgdGlzaGkubGluZUhlaWdodCA9IDQwO1xyXG4gXHJcbiAgICAgICAgZGFueWFvaGFvamluLnNldFBhcmVudCh0aGlzLm5vZGUpOyAgLy/niLboioLngrnmmK90aGlzLm5vZGXmiY3og73lh7rmnaVcclxuICAgICAgICBkYW55YW9oYW9qaW4ueCA9IDA7IC8v55u45a+55LqO54i26IqC54K555qE5qiq5Z2Q5qCH5L2N572u5LiN5Y+YXHJcbiAgICAgICAgZGFueWFvaGFvamluLnkgPSAwOy8v55u45a+55LqO54i26IqC54K555qE57q15Z2Q5qCH5Zyo5LiL6Z2i5LiA54K555qE5L2N572uXHJcbiAgICAgICAgdGlzaGkuc3RyaW5nID0gbmFtZTsgIFxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICBkYW55YW9oYW9qaW4ueSArPSA1OyAgICAvL+WinuWKoDXlkozlh4/lsJEwLjAx6YO95Y+v5Lul5aKe5b+r5o+Q56S66YCf5bqmXHJcbiAgICAgICAgfSwgMC4wMSwgMjApO1xyXG5cclxuICAgICAgICAvL+W7tuaXtuacgOWQjueahOaXtumXtOS4um1zLOW7tuaXtjHnp5LplIDmr4HvvIzlpoLmnpzlnKjkuIrpnaLnmoRzY2hlZHVsZeWHveaVsOi/mOayoeaJp+ihjOWujOWwsemUgOavge+8jOS8muaKpemUmVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgZGFueWFvaGFvamluLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy/kuLnoja/kvb/nlKjml7bnmoTmlrnms5XpgInmi6lcclxuICAgIGRhbnlhb191c2UoKXtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGFueWFvX2luZGV4KSB7ICAgLy/kv53or4HkuI3lkIznmoTkuLnoja/miafooYzkuI3lkIznmoTkvb/nlKjmlYjmnpzmlrnms5VcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYW55YW9fbnVtID4gMCl7ICAvL+WIpOaWreS4ueiNr+aVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFueWFvX2VmZmVjdDAoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhbnlhb190aXNoaSgn5aKe5Yqg5LiA5Y2K55qE5Li555Sw5YC8Jyk7IC8v5o+Q56S65Li56I2v5L2/55So5oiQ5YqfXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW55YW9fdGlzaGkoJ+S4ueiNr+W3suiAl+WwvScpOyAgLy/mj5DnpLrkuLnoja/ogJflsL1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhbnlhb19udW0gPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhbnlhb19lZmZlY3QxKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW55YW9fdGlzaGkoJ+WHj+WwkeS4gOWNiueahOS4ueeUsOWAvCcpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFueWFvX3Rpc2hpKCfkuLnoja/lt7LogJflsL0nKTsgIC8v5o+Q56S65Li56I2v6ICX5bC9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhbnlhb19udW0gPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhbnlhb19lZmZlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW55YW9fdGlzaGkoJ+S4i+S4gOadoeimgeeqgeegtOeahOeti+iEieWPjOWAjeaViOaenCcpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFueWFvX3Rpc2hpKCfkuLnoja/lt7LogJflsL0nKTsgIC8v5o+Q56S65Li56I2v6ICX5bC9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGFueWFvX251bSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFueWFvX2VmZmVjdDMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhbnlhb190aXNoaSgn5pKk5Zue5LiK5LiA5p2h562L6ISJ56qB56C05pWI5p6cJyk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW55YW9fdGlzaGkoJ+S4ueiNr+W3suiAl+WwvScpOyAgLy/mj5DnpLrkuLnoja/ogJflsL1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGFueWFvX251bSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFueWFvX2VmZmVjdDQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhbnlhb190aXNoaSgn6aKE5rWL5LiL5LiA5p2h56qB56C0562L6ISJ55qE5pWw5YC8Jyk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW55YW9fdGlzaGkoJ+S4ueiNr+W3suiAl+WwvScpOyAgLy/mj5DnpLrkuLnoja/ogJflsL1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYW55YW9fbnVtID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW55YW9fZWZmZWN0NSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFueWFvX3Rpc2hpKCflt7Lph43nva7nqoHnoLQnKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhbnlhb190aXNoaSgn5Li56I2v5bey6ICX5bC9Jyk7ICAvL+aPkOekuuS4ueiNr+iAl+WwvVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhbnlhb19udW0gPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhbnlhb19lZmZlY3Q2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW55YW9fdGlzaGkoJ+eyvuWKm+WAvOWinuWKoCcpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFueWFvX3Rpc2hpKCfkuLnoja/lt7LogJflsL0nKTsgIC8v5o+Q56S65Li56I2v6ICX5bC9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGFueWFvX251bSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFueWFvX2VmZmVjdDcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhbnlhb190aXNoaSgn57uP6aqM5YC85aKe5YqgJyk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYW55YW9fdGlzaGkoJ+S4ueiNr+W3suiAl+WwvScpOyAgLy/mj5DnpLrkuLnoja/ogJflsL1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuS9v+eUqOeJqeWTgVwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9JRCwgMC4wNSk7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLnNldGl0ZW0odGhpcy5kYW55YW9faW5kZXgsIC0xKTsgLy/kurrnianog4zljIXkuLnoja/mlbDnm67lh4/lsJExXHJcbiAgICAgICAgdGhpcy5nZXRfZGFueWFvX251bSgpOy8v5a6e5pe25Zue5Lyg5Yiw5pys55WM6Z2i6IqC54K555qE5Li56I2v5pWw6YePXHJcbiAgICAgICAgdGhpcy5kYW55YW9fdWkoKTsgLy/kv53or4Hlrp7ml7bmm7TmlrDkvb/nlKjlkI7nmoTkuLnoja/mlbDph49cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/nlKjkuo7lnKjlvZPliY3nlYzpnaLlrp7ml7bmm7TmlrDlubbmmL7npLrkuLnoja/mlbDph49cclxuICAgIGRhbnlhb191aSgpe1xyXG5cclxuICAgICAgICB2YXIgZGFueWFvX251bSA9IHRoaXMuZGFueWFvX2xhYmVsLmFkZENvbXBvbmVudChjYy5MYWJlbCk7IC8v5aKe5YqgbGFiZWznu4Tku7blubbotYvnu5nkuLnoja/mlbDph49cclxuICAgICAgICB0aGlzLmRhbnlhb19sYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTsgLy/lsIblrZfkvZPmlLnkuLrnmb3oibJcclxuICAgICAgICAvL+iuvue9ruaWh+acrOWkp+Wwj1xyXG4gICAgICAgIGRhbnlhb19udW0uZm9udFNpemUgPSA0MDtcclxuICAgICAgICBkYW55YW9fbnVtLmxpbmVIZWlnaHQgPSA0MDtcclxuIFxyXG4gICAgICAgIHRoaXMuZGFueWFvX2xhYmVsLnNldFBhcmVudCh0aGlzLm5vZGUpOyAgLy/niLboioLngrnmmK90aGlzLm5vZGXmiY3og73lh7rmnaVcclxuICAgICAgICB0aGlzLmRhbnlhb19sYWJlbC54ID0gMDsgLy/nm7jlr7nkuo7niLboioLngrnnmoTmqKrlnZDmoIfkvY3nva7kuI3lj5hcclxuICAgICAgICB0aGlzLmRhbnlhb19sYWJlbC55ID0gLTgwOy8v55u45a+55LqO54i26IqC54K555qE57q15Z2Q5qCH5Zyo5LiL6Z2i5LiA54K555qE5L2N572uXHJcbiAgICAgICAgZGFueWFvX251bS5zdHJpbmcgPSAnWCcrU3RyaW5nKHRoaXMuZGFueWFvX251bSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZGFueWFvX3VpKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIC8v6Kem56Kw5Li56I2v5ZCO55qE5pWI5p6cXHJcbiAgICAgICAgICAgIHRoaXMuZGFueWFvX3VzZSgpO1xyXG5cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/start/start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91856g/M1tHpKDcCStg+fQA', 'start');
// script/start/start.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("start1", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.5);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            //延时进入主场景
            setTimeout(function () {
                cc.director.loadScene("main");
            }, 1000);
        });
        // update (dt) {}
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzdGFydFxcc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBMkJBLENBQUM7SUF6Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUU5QyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMvQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxRQUFRO2dCQUNSLCtCQUErQjtZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUdILFNBQVM7WUFDVCxVQUFVLENBQUM7Z0JBQ1AsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWIsQ0FBQyxDQUFDLENBQUE7UUFFTixpQkFBaUI7SUFDakIsQ0FBQztJQTFCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJCNUI7SUFBRCxlQUFDO0NBM0JELEFBMkJDLENBM0JxQyxFQUFFLENBQUMsU0FBUyxHQTJCakQ7a0JBM0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzdGFydDFcIiwgY2MuQXVkaW9DbGlwLCAocmVzLGNsaXApPT57XHJcbiAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL+W7tuaXtui/m+WFpeS4u+WcuuaZr1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/exit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '665f0HsQzJG+qlmDhrP1nPY', 'exit');
// script/scene1/exit.ts

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
//关闭面板的脚本
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var exit = /** @class */ (function (_super) {
    __extends(exit, _super);
    function exit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    exit.prototype.start = function () {
        var _this = this;
        //触摸关闭按钮关闭面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("关闭", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            var panel = _this.node.getParent();
            panel.active = false;
            cc.find('persist_node').getComponent('persist_node').focus = null;
        });
    };
    __decorate([
        property(cc.Label)
    ], exit.prototype, "label", void 0);
    __decorate([
        property
    ], exit.prototype, "text", void 0);
    exit = __decorate([
        ccclass
    ], exit);
    return exit;
}(cc.Component));
exports.default = exit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGV4aXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsU0FBUztBQUNILElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBb0NDO1FBakNHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUE2QnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBNUJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsb0JBQUssR0FBTDtRQUFBLGlCQXFCQztRQW5CRyxZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUU5QyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMzQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxRQUFRO2dCQUNSLCtCQUErQjtZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUlyRSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FDSTtJQUd2QjtRQURDLFFBQVE7c0NBQ2M7SUFOTixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0N4QjtJQUFELFdBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBb0M3QztrQkFwQ29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG4vL+WFs+mXremdouadv+eahOiEmuacrFxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4aXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgLy/op6bmkbjlhbPpl63mjInpkq7lhbPpl63pnaLmnb9cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi5YWz6ZetXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgICAgIHBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmZvY3VzID0gbnVsbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sdkhub/js-sdkhub.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1de5y0PvJPj5LwB2t/h7Da', 'js-sdkhub');
// sdkhub/js-sdkhub.js

"use strict";

(function () {
  var _global = globalThis || window;

  _global.sdkhub = _global.sdkhub || {};
  var PluginType = {
    kPluginCustom: 1,
    kPluginUser: 2,
    kPluginFee: 4,
    kPluginAds: 8,
    kPluginPush: 16
  };
  var CustomResultCode = {
    kCustomExtension: 10000
  };
  var UserResultCode = {
    kInitSucceed: 0,
    kInitFailed: 1,
    kLoginSucceed: 2,
    kLoginNetworkError: 3,
    kLoginNoNeed: 4,
    kLoginFailed: 5,
    kLoginCancel: 6,
    kLogoutSucceed: 7,
    kLogoutFailed: 8,
    kPlatformEnter: 9,
    kPlatformBack: 10,
    kPausePage: 11,
    kExitPage: 12,
    kAntiAddictionQuery: 13,
    kRealNameRegister: 14,
    kAccountSwitchSucceed: 15,
    kAccountSwitchFailed: 16,
    kOpenShop: 17,
    kAccountSwitchCancel: 18,
    kGameExitPage: 19,
    kScoreSubmitSucceed: 20,
    kScoreSubmitFailed: 21,
    kAchUnlockSucceed: 22,
    kAchUnlockFailed: 23,
    kShowLeaderBoardSucceed: 24,
    kShowLeaderBoardFailed: 25,
    kShowAchievementSucceed: 26,
    kShowAchievementFailed: 27,
    kServerVerify: 28,
    kUserExtension: 20000
  };
  var ToolBarPlace = {
    kToolBarTopLeft: 1,
    kToolBarTopRight: 2,
    kToolBarMidLeft: 3,
    kToolBarMidRight: 4,
    kToolBarBottomLeft: 5,
    kToolBarBottomRight: 6
  };
  var FeeResultCode = {
    kFeeSucceed: 0,
    kFeeFailed: 1,
    kFeeCancel: 2,
    kFeeNetworkError: 3,
    kFeeProductionInforIncomplete: 4,
    kFeeInitSucceed: 5,
    kFeeInitFailed: 6,
    kFeeNowPaying: 7,
    kFeeRechargeSucceed: 8,
    kFeeExtension: 30000
  };
  var AdsResultCode = {
    kAdsReceived: 0,
    kAdsShown: 1,
    kAdsDismissed: 2,
    kPointsSpendSucceed: 3,
    kPointsSpendFailed: 4,
    kNetworkError: 5,
    kUnknownError: 6,
    kOfferWallOnPointsChanged: 7,
    kRewardedVideoWithReward: 8,
    kFeeFinished: 9,
    kAdsClicked: 10,
    kAdsFailed: 11,
    kAdsPreloadFailed: 12,
    kAdsShownFailed: 13,
    kAdsRetryPreload: 14,
    kAdsOnLeave: 15,
    kAdsOnAdImpression: 16,
    kAdsExtension: 40000
  };
  var AdsPos = {
    kPosBottom: 0,
    kPosCenter: 1,
    kPosTop: 2
  };
  var PushResultCode = {
    kPushReceiveMessage: 0,
    kStartPushSucceed: 1,
    kStartPushFailed: 2,
    kClosePushSucceed: 3,
    kClosePushFailed: 4,
    kSetAliasSucceed: 5,
    kSetAliasFailed: 6,
    kDelAliasSucceed: 7,
    kDelAliasFailed: 8,
    kSetTagsSucceed: 9,
    kSetTagsFailed: 10,
    kDelTagSucceed: 11,
    kDelTagsFailed: 12,
    kPushExtension: 50000
  };
  sdkhub.PluginType = PluginType;
  sdkhub.CustomResultCode = CustomResultCode;
  sdkhub.UserResultCode = UserResultCode;
  sdkhub.ToolBarPlace = ToolBarPlace;
  sdkhub.FeeResultCode = FeeResultCode;
  sdkhub.AdsResultCode = AdsResultCode;
  sdkhub.AdsPos = AdsPos;
  sdkhub.PushResultCode = PushResultCode;

  sdkhub.getCustomPlugins = function () {
    return [];
  };

  sdkhub.getUserPlugins = function () {
    return [];
  };

  sdkhub.getFeePlugins = function () {
    return [];
  };

  sdkhub.getCustomPlugin = function (pluginId) {
    if (pluginId === void 0) {
      pluginId = '';
    }

    return null;
  };

  sdkhub.getUserPlugin = function (pluginId) {
    if (pluginId === void 0) {
      pluginId = '';
    }

    return null;
  };

  sdkhub.getFeePlugin = function (pluginId) {
    if (pluginId === void 0) {
      pluginId = '';
    }

    return null;
  };

  sdkhub.getAdsPlugin = function () {
    return null;
  };

  sdkhub.getPushPlugin = function () {
    return null;
  };

  sdkhub.getFrameworkVersion = function () {
    return "";
  };

  sdkhub.getPluginMethods = function (plugin) {
    return "";
  };

  sdkhub.getSupportPluginIds = function () {
    return "";
  };

  sdkhub.getChannelId = function () {
    return "";
  };

  if (typeof SDKHub === 'undefined') return;

  sdkhub.getCustomPlugins = function () {
    return SDKHub.AgentManager.getInstance().getCustomPlugins();
  };

  sdkhub.getUserPlugins = function () {
    return SDKHub.AgentManager.getInstance().getUserPlugins();
  };

  sdkhub.getFeePlugins = function () {
    return SDKHub.AgentManager.getInstance().getFeePlugins();
  };

  sdkhub.getCustomPlugin = function (pluginId) {
    if (pluginId === void 0) {
      pluginId = '';
    }

    return SDKHub.AgentManager.getInstance().getCustomPlugin(pluginId || "");
  };

  sdkhub.getUserPlugin = function (pluginId) {
    if (pluginId === void 0) {
      pluginId = '';
    }

    return SDKHub.AgentManager.getInstance().getUserPlugin(pluginId || "");
  };

  sdkhub.getFeePlugin = function (pluginId) {
    if (pluginId === void 0) {
      pluginId = '';
    }

    return SDKHub.AgentManager.getInstance().getFeePlugin(pluginId || "");
  };

  sdkhub.getAdsPlugin = function () {
    return SDKHub.AgentManager.getInstance().getAdsPlugin();
  };

  sdkhub.getPushPlugin = function () {
    return SDKHub.AgentManager.getInstance().getPushPlugin();
  };

  sdkhub.getFrameworkVersion = function () {
    return SDKHub.AgentManager.getInstance().getFrameworkVersion();
  };

  sdkhub.getPluginMethods = function (plugin) {
    return SDKHub.AgentManager.getInstance().getPluginMethods(plugin);
  };

  sdkhub.getSupportPluginIds = function () {
    return SDKHub.AgentManager.getInstance().getSupportPluginIds();
  };

  sdkhub.getChannelId = function () {
    return SDKHub.AgentManager.getInstance().getChannelId();
  };
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2RraHViXFxqcy1zZGtodWIuanMiXSwibmFtZXMiOlsiX2dsb2JhbCIsImdsb2JhbFRoaXMiLCJ3aW5kb3ciLCJzZGtodWIiLCJQbHVnaW5UeXBlIiwia1BsdWdpbkN1c3RvbSIsImtQbHVnaW5Vc2VyIiwia1BsdWdpbkZlZSIsImtQbHVnaW5BZHMiLCJrUGx1Z2luUHVzaCIsIkN1c3RvbVJlc3VsdENvZGUiLCJrQ3VzdG9tRXh0ZW5zaW9uIiwiVXNlclJlc3VsdENvZGUiLCJrSW5pdFN1Y2NlZWQiLCJrSW5pdEZhaWxlZCIsImtMb2dpblN1Y2NlZWQiLCJrTG9naW5OZXR3b3JrRXJyb3IiLCJrTG9naW5Ob05lZWQiLCJrTG9naW5GYWlsZWQiLCJrTG9naW5DYW5jZWwiLCJrTG9nb3V0U3VjY2VlZCIsImtMb2dvdXRGYWlsZWQiLCJrUGxhdGZvcm1FbnRlciIsImtQbGF0Zm9ybUJhY2siLCJrUGF1c2VQYWdlIiwia0V4aXRQYWdlIiwia0FudGlBZGRpY3Rpb25RdWVyeSIsImtSZWFsTmFtZVJlZ2lzdGVyIiwia0FjY291bnRTd2l0Y2hTdWNjZWVkIiwia0FjY291bnRTd2l0Y2hGYWlsZWQiLCJrT3BlblNob3AiLCJrQWNjb3VudFN3aXRjaENhbmNlbCIsImtHYW1lRXhpdFBhZ2UiLCJrU2NvcmVTdWJtaXRTdWNjZWVkIiwia1Njb3JlU3VibWl0RmFpbGVkIiwia0FjaFVubG9ja1N1Y2NlZWQiLCJrQWNoVW5sb2NrRmFpbGVkIiwia1Nob3dMZWFkZXJCb2FyZFN1Y2NlZWQiLCJrU2hvd0xlYWRlckJvYXJkRmFpbGVkIiwia1Nob3dBY2hpZXZlbWVudFN1Y2NlZWQiLCJrU2hvd0FjaGlldmVtZW50RmFpbGVkIiwia1NlcnZlclZlcmlmeSIsImtVc2VyRXh0ZW5zaW9uIiwiVG9vbEJhclBsYWNlIiwia1Rvb2xCYXJUb3BMZWZ0Iiwia1Rvb2xCYXJUb3BSaWdodCIsImtUb29sQmFyTWlkTGVmdCIsImtUb29sQmFyTWlkUmlnaHQiLCJrVG9vbEJhckJvdHRvbUxlZnQiLCJrVG9vbEJhckJvdHRvbVJpZ2h0IiwiRmVlUmVzdWx0Q29kZSIsImtGZWVTdWNjZWVkIiwia0ZlZUZhaWxlZCIsImtGZWVDYW5jZWwiLCJrRmVlTmV0d29ya0Vycm9yIiwia0ZlZVByb2R1Y3Rpb25JbmZvckluY29tcGxldGUiLCJrRmVlSW5pdFN1Y2NlZWQiLCJrRmVlSW5pdEZhaWxlZCIsImtGZWVOb3dQYXlpbmciLCJrRmVlUmVjaGFyZ2VTdWNjZWVkIiwia0ZlZUV4dGVuc2lvbiIsIkFkc1Jlc3VsdENvZGUiLCJrQWRzUmVjZWl2ZWQiLCJrQWRzU2hvd24iLCJrQWRzRGlzbWlzc2VkIiwia1BvaW50c1NwZW5kU3VjY2VlZCIsImtQb2ludHNTcGVuZEZhaWxlZCIsImtOZXR3b3JrRXJyb3IiLCJrVW5rbm93bkVycm9yIiwia09mZmVyV2FsbE9uUG9pbnRzQ2hhbmdlZCIsImtSZXdhcmRlZFZpZGVvV2l0aFJld2FyZCIsImtGZWVGaW5pc2hlZCIsImtBZHNDbGlja2VkIiwia0Fkc0ZhaWxlZCIsImtBZHNQcmVsb2FkRmFpbGVkIiwia0Fkc1Nob3duRmFpbGVkIiwia0Fkc1JldHJ5UHJlbG9hZCIsImtBZHNPbkxlYXZlIiwia0Fkc09uQWRJbXByZXNzaW9uIiwia0Fkc0V4dGVuc2lvbiIsIkFkc1BvcyIsImtQb3NCb3R0b20iLCJrUG9zQ2VudGVyIiwia1Bvc1RvcCIsIlB1c2hSZXN1bHRDb2RlIiwia1B1c2hSZWNlaXZlTWVzc2FnZSIsImtTdGFydFB1c2hTdWNjZWVkIiwia1N0YXJ0UHVzaEZhaWxlZCIsImtDbG9zZVB1c2hTdWNjZWVkIiwia0Nsb3NlUHVzaEZhaWxlZCIsImtTZXRBbGlhc1N1Y2NlZWQiLCJrU2V0QWxpYXNGYWlsZWQiLCJrRGVsQWxpYXNTdWNjZWVkIiwia0RlbEFsaWFzRmFpbGVkIiwia1NldFRhZ3NTdWNjZWVkIiwia1NldFRhZ3NGYWlsZWQiLCJrRGVsVGFnU3VjY2VlZCIsImtEZWxUYWdzRmFpbGVkIiwia1B1c2hFeHRlbnNpb24iLCJnZXRDdXN0b21QbHVnaW5zIiwiZ2V0VXNlclBsdWdpbnMiLCJnZXRGZWVQbHVnaW5zIiwiZ2V0Q3VzdG9tUGx1Z2luIiwicGx1Z2luSWQiLCJnZXRVc2VyUGx1Z2luIiwiZ2V0RmVlUGx1Z2luIiwiZ2V0QWRzUGx1Z2luIiwiZ2V0UHVzaFBsdWdpbiIsImdldEZyYW1ld29ya1ZlcnNpb24iLCJnZXRQbHVnaW5NZXRob2RzIiwicGx1Z2luIiwiZ2V0U3VwcG9ydFBsdWdpbklkcyIsImdldENoYW5uZWxJZCIsIlNES0h1YiIsIkFnZW50TWFuYWdlciIsImdldEluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsWUFBWTtBQUNYLE1BQUlBLE9BQU8sR0FBR0MsVUFBVSxJQUFJQyxNQUE1Qjs7QUFDQUYsRUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCSCxPQUFPLENBQUNHLE1BQVIsSUFBa0IsRUFBbkM7QUFDQSxNQUFJQyxVQUFVLEdBQUc7QUFDZkMsSUFBQUEsYUFBYSxFQUFFLENBREE7QUFFZkMsSUFBQUEsV0FBVyxFQUFFLENBRkU7QUFHZkMsSUFBQUEsVUFBVSxFQUFFLENBSEc7QUFJZkMsSUFBQUEsVUFBVSxFQUFFLENBSkc7QUFLZkMsSUFBQUEsV0FBVyxFQUFFO0FBTEUsR0FBakI7QUFRQSxNQUFJQyxnQkFBZ0IsR0FBRztBQUNyQkMsSUFBQUEsZ0JBQWdCLEVBQUU7QUFERyxHQUF2QjtBQUlBLE1BQUlDLGNBQWMsR0FBRztBQUNuQkMsSUFBQUEsWUFBWSxFQUFFLENBREs7QUFFbkJDLElBQUFBLFdBQVcsRUFBRSxDQUZNO0FBR25CQyxJQUFBQSxhQUFhLEVBQUUsQ0FISTtBQUluQkMsSUFBQUEsa0JBQWtCLEVBQUUsQ0FKRDtBQUtuQkMsSUFBQUEsWUFBWSxFQUFFLENBTEs7QUFNbkJDLElBQUFBLFlBQVksRUFBRSxDQU5LO0FBT25CQyxJQUFBQSxZQUFZLEVBQUUsQ0FQSztBQVFuQkMsSUFBQUEsY0FBYyxFQUFFLENBUkc7QUFTbkJDLElBQUFBLGFBQWEsRUFBRSxD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QXBHLEVBQUFBLE1BQU0sQ0FBQ3VHLFlBQVAsR0FBc0I7QUFBQSxXQUFNTyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFdBQXBCLEdBQWtDVCxZQUFsQyxFQUFOO0FBQUEsR0FBdEI7O0FBQ0F2RyxFQUFBQSxNQUFNLENBQUN3RyxhQUFQLEdBQXVCO0FBQUEsV0FBTU0sTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxXQUFwQixHQUFrQ1IsYUFBbEMsRUFBTjtBQUFBLEdBQXZCOztBQUNBeEcsRUFBQUEsTUFBTSxDQUFDeUcsbUJBQVAsR0FBNkI7QUFBQSxXQUFNSyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFdBQXBCLEdBQWtDUCxtQkFBbEMsRUFBTjtBQUFBLEdBQTdCOztBQUNBekcsRUFBQUEsTUFBTSxDQUFDMEcsZ0JBQVAsR0FBMEIsVUFBQ0MsTUFBRDtBQUFBLFdBQVlHLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsV0FBcEIsR0FBa0NOLGdCQUFsQyxDQUFtREMsTUFBbkQsQ0FBWjtBQUFBLEdBQTFCOztBQUNBM0csRUFBQUEsTUFBTSxDQUFDNEcsbUJBQVAsR0FBNkI7QUFBQSxXQUFNRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFdBQXBCLEdBQWtDSixtQkFBbEMsRUFBTjtBQUFBLEdBQTdCOztBQUNBNUcsRUFBQUEsTUFBTSxDQUFDNkcsWUFBUCxHQUFzQjtBQUFBLFdBQU1DLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsV0FBcEIsR0FBa0NILFlBQWxDLEVBQU47QUFBQSxHQUF0QjtBQUNELENBbkpEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICBsZXQgX2dsb2JhbCA9IGdsb2JhbFRoaXMgfHwgd2luZG93O1xuICBfZ2xvYmFsLnNka2h1YiA9IF9nbG9iYWwuc2RraHViIHx8IHt9O1xuICBsZXQgUGx1Z2luVHlwZSA9IHtcbiAgICBrUGx1Z2luQ3VzdG9tOiAxLFxuICAgIGtQbHVnaW5Vc2VyOiAyLFxuICAgIGtQbHVnaW5GZWU6IDQsXG4gICAga1BsdWdpbkFkczogOCxcbiAgICBrUGx1Z2luUHVzaDogMTYsXG4gIH07XG5cbiAgbGV0IEN1c3RvbVJlc3VsdENvZGUgPSB7XG4gICAga0N1c3RvbUV4dGVuc2lvbjogMTAwMDBcbiAgfTtcblxuICBsZXQgVXNlclJlc3VsdENvZGUgPSB7XG4gICAga0luaXRTdWNjZWVkOiAwLFxuICAgIGtJbml0RmFpbGVkOiAxLFxuICAgIGtMb2dpblN1Y2NlZWQ6IDIsXG4gICAga0xvZ2luTmV0d29ya0Vycm9yOiAzLFxuICAgIGtMb2dpbk5vTmVlZDogNCxcbiAgICBrTG9naW5GYWlsZWQ6IDUsXG4gICAga0xvZ2luQ2FuY2VsOiA2LFxuICAgIGtMb2dvdXRTdWNjZWVkOiA3LFxuICAgIGtMb2dvdXRGYWlsZWQ6IDgsXG4gICAga1BsYXRmb3JtRW50ZXI6IDksXG4gICAga1BsYXRmb3JtQmFjazogMTAsXG4gICAga1BhdXNlUGFnZTogMTEsXG4gICAga0V4aXRQYWdlOiAxMixcbiAgICBrQW50aUFkZGljdGlvblF1ZXJ5OiAxMyxcbiAgICBrUmVhbE5hbWVSZWdpc3RlcjogMTQsXG4gICAga0FjY291bnRTd2l0Y2hTdWNjZWVkOiAxNSxcbiAgICBrQWNjb3VudFN3aXRjaEZhaWxlZDogMTYsXG4gICAga09wZW5TaG9wOiAxNyxcbiAgICBrQWNjb3VudFN3aXRjaENhbmNlbDogMTgsXG4gICAga0dhbWVFeGl0UGFnZTogMTksXG4gICAga1Njb3JlU3VibWl0U3VjY2VlZDogMjAsXG4gICAga1Njb3JlU3VibWl0RmFpbGVkOiAyMSxcbiAgICBrQWNoVW5sb2NrU3VjY2VlZDogMjIsXG4gICAga0FjaFVubG9ja0ZhaWxlZDogMjMsXG4gICAga1Nob3dMZWFkZXJCb2FyZFN1Y2NlZWQ6IDI0LFxuICAgIGtTaG93TGVhZGVyQm9hcmRGYWlsZWQ6IDI1LFxuICAgIGtTaG93QWNoaWV2ZW1lbnRTdWNjZWVkOiAyNixcbiAgICBrU2hvd0FjaGlldmVtZW50RmFpbGVkOiAyNyxcbiAgICBrU2VydmVyVmVyaWZ5OiAyOCxcbiAgICBrVXNlckV4dGVuc2lvbjogMjAwMDBcbiAgfTtcblxuICBsZXQgVG9vbEJhclBsYWNlID0ge1xuICAgIGtUb29sQmFyVG9wTGVmdDogMSxcbiAgICBrVG9vbEJhclRvcFJpZ2h0OiAyLFxuICAgIGtUb29sQmFyTWlkTGVmdDogMyxcbiAgICBrVG9vbEJhck1pZFJpZ2h0OiA0LFxuICAgIGtUb29sQmFyQm90dG9tTGVmdDogNSxcbiAgICBrVG9vbEJhckJvdHRvbVJpZ2h0OiA2XG4gIH07XG5cbiAgbGV0IEZlZVJlc3VsdENvZGUgPSB7XG4gICAga0ZlZVN1Y2NlZWQ6IDAsXG4gICAga0ZlZUZhaWxlZDogMSxcbiAgICBrRmVlQ2FuY2VsOiAyLFxuICAgIGtGZWVOZXR3b3JrRXJyb3I6IDMsXG4gICAga0ZlZVByb2R1Y3Rpb25JbmZvckluY29tcGxldGU6IDQsXG4gICAga0ZlZUluaXRTdWNjZWVkOiA1LFxuICAgIGtGZWVJbml0RmFpbGVkOiA2LFxuICAgIGtGZWVOb3dQYXlpbmc6IDcsXG4gICAga0ZlZVJlY2hhcmdlU3VjY2VlZDogOCxcbiAgICBrRmVlRXh0ZW5zaW9uOiAzMDAwMCxcbiAgfTtcblxuICBsZXQgQWRzUmVzdWx0Q29kZSA9IHtcbiAgICBrQWRzUmVjZWl2ZWQ6IDAsXG4gICAga0Fkc1Nob3duOiAxLFxuICAgIGtBZHNEaXNtaXNzZWQ6IDIsXG4gICAga1BvaW50c1NwZW5kU3VjY2VlZDogMyxcbiAgICBrUG9pbnRzU3BlbmRGYWlsZWQ6IDQsXG4gICAga05ldHdvcmtFcnJvcjogNSxcbiAgICBrVW5rbm93bkVycm9yOiA2LFxuICAgIGtPZmZlcldhbGxPblBvaW50c0NoYW5nZWQ6IDcsXG4gICAga1Jld2FyZGVkVmlkZW9XaXRoUmV3YXJkOiA4LFxuICAgIGtGZWVGaW5pc2hlZDogOSxcbiAgICBrQWRzQ2xpY2tlZDogMTAsXG4gICAga0Fkc0ZhaWxlZDogMTEsXG4gICAga0Fkc1ByZWxvYWRGYWlsZWQ6IDEyLFxuICAgIGtBZHNTaG93bkZhaWxlZDogMTMsXG4gICAga0Fkc1JldHJ5UHJlbG9hZDogMTQsXG4gICAga0Fkc09uTGVhdmU6IDE1LFxuICAgIGtBZHNPbkFkSW1wcmVzc2lvbjogMTYsXG4gICAga0Fkc0V4dGVuc2lvbjogNDAwMDBcbiAgfTtcblxuICBsZXQgQWRzUG9zID0ge1xuICAgIGtQb3NCb3R0b206IDAsXG4gICAga1Bvc0NlbnRlcjogMSxcbiAgICBrUG9zVG9wOiAyLFxuICB9O1xuXG4gIGxldCBQdXNoUmVzdWx0Q29kZSA9IHtcbiAgICBrUHVzaFJlY2VpdmVNZXNzYWdlOiAwLFxuICAgIGtTdGFydFB1c2hTdWNjZWVkOiAxLFxuICAgIGtTdGFydFB1c2hGYWlsZWQ6IDIsXG4gICAga0Nsb3NlUHVzaFN1Y2NlZWQ6IDMsXG4gICAga0Nsb3NlUHVzaEZhaWxlZDogNCxcbiAgICBrU2V0QWxpYXNTdWNjZWVkOiA1LFxuICAgIGtTZXRBbGlhc0ZhaWxlZDogNixcbiAgICBrRGVsQWxpYXNTdWNjZWVkOiA3LFxuICAgIGtEZWxBbGlhc0ZhaWxlZDogOCxcbiAgICBrU2V0VGFnc1N1Y2NlZWQ6IDksXG4gICAga1NldFRhZ3NGYWlsZWQ6IDEwLFxuICAgIGtEZWxUYWdTdWNjZWVkOiAxMSxcbiAgICBrRGVsVGFnc0ZhaWxlZDogMTIsXG4gICAga1B1c2hFeHRlbnNpb246IDUwMDAwXG4gIH07XG5cbiAgc2RraHViLlBsdWdpblR5cGUgPSBQbHVnaW5UeXBlO1xuICBzZGtodWIuQ3VzdG9tUmVzdWx0Q29kZSA9IEN1c3RvbVJlc3VsdENvZGU7XG4gIHNka2h1Yi5Vc2VyUmVzdWx0Q29kZSA9IFVzZXJSZXN1bHRDb2RlO1xuICBzZGtodWIuVG9vbEJhclBsYWNlID0gVG9vbEJhclBsYWNlO1xuICBzZGtodWIuRmVlUmVzdWx0Q29kZSA9IEZlZVJlc3VsdENvZGU7XG4gIHNka2h1Yi5BZHNSZXN1bHRDb2RlID0gQWRzUmVzdWx0Q29kZTtcbiAgc2RraHViLkFkc1BvcyA9IEFkc1BvcztcbiAgc2RraHViLlB1c2hSZXN1bHRDb2RlID0gUHVzaFJlc3VsdENvZGU7XG4gIHNka2h1Yi5nZXRDdXN0b21QbHVnaW5zID0gKCkgPT4gW107XG4gIHNka2h1Yi5nZXRVc2VyUGx1Z2lucyA9ICgpID0+IFtdO1xuICBzZGtodWIuZ2V0RmVlUGx1Z2lucyA9ICgpID0+IFtdO1xuICBzZGtodWIuZ2V0Q3VzdG9tUGx1Z2luID0gKHBsdWdpbklkID0gJycpID0+IG51bGw7XG4gIHNka2h1Yi5nZXRVc2VyUGx1Z2luID0gKHBsdWdpbklkID0gJycpID0+IG51bGw7XG4gIHNka2h1Yi5nZXRGZWVQbHVnaW4gPSAocGx1Z2luSWQgPSAnJykgPT4gbnVsbDtcbiAgc2RraHViLmdldEFkc1BsdWdpbiA9ICgpID0+IG51bGw7XG4gIHNka2h1Yi5nZXRQdXNoUGx1Z2luID0gKCkgPT4gbnVsbDtcbiAgc2RraHViLmdldEZyYW1ld29ya1ZlcnNpb24gPSAoKSA9PiBcIlwiO1xuICBzZGtodWIuZ2V0UGx1Z2luTWV0aG9kcyA9IChwbHVnaW4pID0+IFwiXCI7XG4gIHNka2h1Yi5nZXRTdXBwb3J0UGx1Z2luSWRzID0gKCkgPT4gXCJcIjtcbiAgc2RraHViLmdldENoYW5uZWxJZCA9ICgpID0+IFwiXCI7XG4gIGlmICh0eXBlb2YgU0RLSHViID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICBzZGtodWIuZ2V0Q3VzdG9tUGx1Z2lucyA9ICgpID0+IFNES0h1Yi5BZ2VudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDdXN0b21QbHVnaW5zKCk7XG4gIHNka2h1Yi5nZXRVc2VyUGx1Z2lucyA9ICgpID0+IFNES0h1Yi5BZ2VudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyUGx1Z2lucygpO1xuICBzZGtodWIuZ2V0RmVlUGx1Z2lucyA9ICgpID0+IFNES0h1Yi5BZ2VudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRGZWVQbHVnaW5zKCk7XG4gIHNka2h1Yi5nZXRDdXN0b21QbHVnaW4gPSAocGx1Z2luSWQgPSAnJykgPT4gU0RLSHViLkFnZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEN1c3RvbVBsdWdpbihwbHVnaW5JZCB8fCBcIlwiKTtcbiAgc2RraHViLmdldFVzZXJQbHVnaW4gPSAocGx1Z2luSWQgPSAnJykgPT4gU0RLSHViLkFnZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFVzZXJQbHVnaW4ocGx1Z2luSWQgfHwgXCJcIik7XG4gIHNka2h1Yi5nZXRGZWVQbHVnaW4gPSAocGx1Z2luSWQgPSAnJykgPT4gU0RLSHViLkFnZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEZlZVBsdWdpbihwbHVnaW5JZCB8fCBcIlwiKTtcbiAgc2RraHViLmdldEFkc1BsdWdpbiA9ICgpID0+IFNES0h1Yi5BZ2VudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRBZHNQbHVnaW4oKTtcbiAgc2RraHViLmdldFB1c2hQbHVnaW4gPSAoKSA9PiBTREtIdWIuQWdlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0UHVzaFBsdWdpbigpO1xuICBzZGtodWIuZ2V0RnJhbWV3b3JrVmVyc2lvbiA9ICgpID0+IFNES0h1Yi5BZ2VudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRGcmFtZXdvcmtWZXJzaW9uKCk7XG4gIHNka2h1Yi5nZXRQbHVnaW5NZXRob2RzID0gKHBsdWdpbikgPT4gU0RLSHViLkFnZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFBsdWdpbk1ldGhvZHMocGx1Z2luKTtcbiAgc2RraHViLmdldFN1cHBvcnRQbHVnaW5JZHMgPSAoKSA9PiBTREtIdWIuQWdlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3VwcG9ydFBsdWdpbklkcygpO1xuICBzZGtodWIuZ2V0Q2hhbm5lbElkID0gKCkgPT4gU0RLSHViLkFnZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldENoYW5uZWxJZCgpO1xufSkoKTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/beijing1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ac7dzxgGlM6awcBlJjLaIg', 'beijing1');
// script/scene1/beijing1.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp = [];
        _this.toward = 1;
        _this.yunduo_time = 4;
        _this.speed = 2;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    NewClass.prototype.start = function () {
        cc.loader.loadRes("风", cc.AudioClip, function (res, clip) {
            //播放音乐
            var audioID = cc.audioEngine.playEffect(clip, true);
            cc.audioEngine.setVolume(audioID, 1); //设置音量
        });
    };
    NewClass.prototype.update = function (dt) {
        //移动
        //遍历子物体
        /*
        for(let bgNode of this.node.children){
            //移动 帧 -> 秒
            bgNode.x += 200*dt*this.toward; //每秒向下移动100
            if(bgNode.x > 268 || bgNode.x < -448){  //如果都走出了界面，那么循环
                this.toward *= -1;
            }
        }*/
        var _this = this;
        if (this.yunduo_time <= 0) {
            var random1 = this.GetRandomNum(0, 4);
            var yunduo_1 = cc.instantiate(this.sp[random1]);
            yunduo_1.setParent(cc.find('player'));
            setTimeout(function () {
                yunduo_1.active = false;
            }, 6000);
            var random_x = this.GetRandomNum(-500, -300);
            var random_y = this.GetRandomNum(-100, 400);
            yunduo_1.x = random_x;
            yunduo_1.y = random_y;
            this.schedule(function () {
                yunduo_1.x += _this.speed; //云朵移动速度  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
            }, 0.01, 1000);
            this.yunduo_time = 4;
        }
        else {
            this.yunduo_time -= dt;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "sp", void 0);
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJlaWppbmcxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0ZDO1FBL0VHLFFBQUUsR0FBZSxFQUFFLENBQUM7UUFFcEIsWUFBTSxHQUFVLENBQUMsQ0FBQztRQUVsQixpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUd2QixXQUFLLEdBQVUsQ0FBQyxDQUFDOztJQXdFckIsQ0FBQztJQXBFRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVSLCtCQUFZLEdBQW5CLFVBQW9CLEdBQUcsRUFBRSxHQUFHO1FBQzlCLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUUsd0JBQUssR0FBTDtRQUVJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFDLElBQUk7WUFDMUMsTUFBTTtZQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBR2hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSTtRQUNKLE9BQU87UUFDUDs7Ozs7OztXQU9HO1FBVlAsaUJBOENDO1FBakNHLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUM7WUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxRQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDOUMsUUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFcEMsVUFBVSxDQUFDO2dCQUNQLFFBQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUdULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTNDLFFBQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQ3BCLFFBQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBR3BCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsUUFBTSxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsK0ZBQStGO1lBQzNILENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFHZCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUd4QjthQUVHO1lBQ0EsSUFBSSxDQUFDLFdBQVcsSUFBRSxFQUFFLENBQUM7U0FDeEI7SUFJTCxDQUFDO0lBOUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0E7SUFPcEI7UUFEQyxRQUFROzJDQUNRO0lBVkEsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtGNUI7SUFBRCxlQUFDO0NBbEZELEFBa0ZDLENBbEZxQyxFQUFFLENBQUMsU0FBUyxHQWtGakQ7a0JBbEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNwOmNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgdG93YXJkOm51bWJlciA9IDE7XHJcblxyXG4gICAgeXVuZHVvX3RpbWU6bnVtYmVyID0gNDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOm51bWJlciA9IDI7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgcHVibGljIEdldFJhbmRvbU51bShNaW4sIE1heCk6bnVtYmVyIHtcclxuXHRcdHZhciBSYW5nZSA9IE1heCAtIE1pbjtcclxuXHRcdHZhciBSYW5kID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHJldHVybiAoTWluICsgTWF0aC5yb3VuZChSYW5kICogUmFuZ2UpKTtcclxuXHR9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIumjjlwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAxKTsgLy/orr7nva7pn7Pph49cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvL+enu+WKqFxyXG4gICAgICAgIC8v6YGN5Y6G5a2Q54mp5L2TXHJcbiAgICAgICAgLypcclxuICAgICAgICBmb3IobGV0IGJnTm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAvL+enu+WKqCDluKcgLT4g56eSXHJcbiAgICAgICAgICAgIGJnTm9kZS54ICs9IDIwMCpkdCp0aGlzLnRvd2FyZDsgLy/mr4/np5LlkJHkuIvnp7vliqgxMDBcclxuICAgICAgICAgICAgaWYoYmdOb2RlLnggPiAyNjggfHwgYmdOb2RlLnggPCAtNDQ4KXsgIC8v5aaC5p6c6YO96LWw5Ye65LqG55WM6Z2i77yM6YKj5LmI5b6q546vXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvd2FyZCAqPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0qL1xyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy55dW5kdW9fdGltZSA8PSAwKXtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbTEgPSB0aGlzLkdldFJhbmRvbU51bSgwLDQpO1xyXG4gICAgICAgICAgICBsZXQgeXVuZHVvID0gY2MuaW5zdGFudGlhdGUodGhpcy5zcFtyYW5kb20xXSk7XHJcbiAgICAgICAgICAgIHl1bmR1by5zZXRQYXJlbnQoY2MuZmluZCgncGxheWVyJykpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgeXVuZHVvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA2MDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3ggPSB0aGlzLkdldFJhbmRvbU51bSgtNTAwLC0zMDApO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3kgPSB0aGlzLkdldFJhbmRvbU51bSgtMTAwLDQwMCk7XHJcblxyXG4gICAgICAgICAgICB5dW5kdW8ueCA9IHJhbmRvbV94O1xyXG4gICAgICAgICAgICB5dW5kdW8ueSA9IHJhbmRvbV95O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgICAgIHl1bmR1by54ICs9IHRoaXMuc3BlZWQ7IC8v5LqR5py156e75Yqo6YCf5bqmICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgICAgIH0sMC4wMSwgMTAwMCk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy55dW5kdW9fdGltZSA9IDQ7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMueXVuZHVvX3RpbWUtPWR0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/bubble.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33be2OCTXtH4acEXEToTusG', 'bubble');
// script/scene1/bubble.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_type = 0;
        _this.isclick = false; //气泡只能点击一次
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    //点击气泡后的提示
    /**
 * 生成范围随机数
 * @Min 最小值
 * @Max 最大值
 */
    NewClass.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    NewClass.prototype.bubble_ui = function (ui_name) {
        var bubble_touch = new cc.Node();
        var tishi = bubble_touch.addComponent(cc.Label); //增加label组件并赋给丹药数量
        if (this.bubble_type == 0) {
            bubble_touch.color = cc.color(0, 0, 0); //将字体改为白色
        }
        else if (this.bubble_type == 1) {
            bubble_touch.color = cc.color(147, 9, 247); //将字体改为橙色
        }
        else if (this.bubble_type == 2) {
            bubble_touch.color = cc.color(234, 139, 28); //将字体改为橙色
        }
        else if (this.bubble_type == 3) {
            bubble_touch.color = cc.color(39, 103, 208); //将字体改为蓝色
        }
        else if (this.bubble_type == 4) {
            bubble_touch.color = cc.color(247, 233, 10); //将字体改为黄色
        }
        else {
            bubble_touch.color = cc.color(241, 19, 23); //将字体改为红色
        }
        //设置文本大小
        tishi.fontSize = 30;
        tishi.lineHeight = 30;
        bubble_touch.setParent(this.node); //父节点是this.node才能出来
        bubble_touch.x = 0; //相对于父节点的横坐标位置不变
        bubble_touch.y = 60; //相对于父节点的纵坐标在下面一点的位置
        tishi.string = ui_name;
        //延时最后的时间为ms,延时1秒销毁，如果在上面的schedule函数还没执行完就销毁，会报错
        setTimeout(function () {
            bubble_touch.destroy();
        }, 800);
    };
    NewClass.prototype.bubble_effect = function () {
        var persist = cc.find('persist_node').getComponent('persist_node'); //获取常驻节点
        switch (this.bubble_type) {
            case 0:
                this.bubble_ui("无事发生");
                break;
            case 1:
                //点击增加精力值
                persist.changeEnergy(Math.abs(persist.max_energy()) / 10); //一个气泡恢复2%的精力条
                this.bubble_ui("精力增长~");
                break;
            case 2:
                var jingyan = this.GetRandomNum(5, 20); //随机提升一部分比例经验
                persist.exp_gain(persist.exp_required() / jingyan);
                this.bubble_ui("经验增长~");
                break;
            case 3:
                var att_id = this.GetRandomNum(0, 8); //随机提升某一项属性
                var att_name = persist.attribute_name[att_id]; //获得相应的属性名称
                persist.change_attr(att_name, 50); //改变对应的属性，增加一点
                this.bubble_ui(att_name + "+50");
                break;
            case 4:
                var item = this.GetRandomNum(0, 7); //随机获取一个物品
                persist.setitem(item, 1);
                this.bubble_ui("+1");
                break;
            case 5:
                //红色气泡惩罚(不会掉落物品)
                var x = this.GetRandomNum(0, 2); //控制随机试取疲劳值还是经验值或是属性,会出现0,1,2随机数
                if (x == 0) {
                    persist.changeEnergy(-1 * persist.max_energy() / 10); //一个气泡恢复2%的精力条
                    this.bubble_ui("精力降低ono");
                }
                else if (x == 1) {
                    var jingyan_1 = this.GetRandomNum(5, 20); //随机提升一部分比例经验
                    persist.exp_gain(-1 * persist.exp_required() / jingyan_1);
                    this.bubble_ui("经验下降ono");
                }
                else {
                    var att_id_1 = this.GetRandomNum(0, 8); //随机提升某一项属性
                    var att_name_1 = persist.attribute_name[att_id_1]; //获得相应的属性名
                    if (persist.get_attr(att_name_1) == 0) {
                        persist.change_attr(att_name_1, 0); //改变对应的属性，增加一点
                        this.bubble_ui(att_name_1 + "已减为0");
                    }
                    else {
                        persist.change_attr(att_name_1, -50); //改变对应的属性，增加一点
                        this.bubble_ui(att_name_1 + "-50");
                    }
                }
                break;
            default:
                break;
        }
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.isclick == false) {
                cc.loader.loadRes("气泡", cc.AudioClip, function (res, clip) {
                    //播放音乐
                    var audioID = cc.audioEngine.playEffect(clip, false);
                    cc.audioEngine.setVolume(audioID, 0.3);
                    //停止播放音乐
                    //cc.audioEngine.stop(audioID);
                });
                var player = cc.find('player').getComponent('player'); //点击气泡增加人物年龄
                if (player.click_bubble < 4) {
                    player.click_bubble += 1;
                }
                else {
                    player.click_bubble = 0;
                    cc.find('persist_node').getComponent('persist_node').addAge(1); //点击五次增加一岁
                }
                _this.bubble_effect(); //触发气泡效果
                _this.isclick = true;
                setTimeout(function () {
                    _this.node.active = false; //延时500ms消失,用destroy会导致schedule报错
                }, 500);
            }
        });
    };
    __decorate([
        property
    ], NewClass.prototype, "bubble_type", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJ1YmJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdMQztRQXJMRyxpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUV2QixhQUFPLEdBQVcsS0FBSyxDQUFDLENBQUMsVUFBVTs7UUFrTG5DLGlCQUFpQjtJQUNyQixDQUFDO0lBakxHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsVUFBVTtJQUVOOzs7O0dBSUo7SUFDSSwrQkFBWSxHQUFuQixVQUFvQixHQUFHLEVBQUUsR0FBRztRQUMzQixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdFLDRCQUFTLEdBQVQsVUFBVSxPQUFjO1FBR3BCLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1FBQ25FLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUM7WUFDckIsWUFBWSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFB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Q0FBQyxDQUFDO2dCQUVILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUUsWUFBWTtnQkFDbkUsSUFBRyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBQztvQkFDdkIsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7aUJBQzVCO3FCQUNHO29CQUNBLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxVQUFVO2lCQUM5RTtnQkFHRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBRSxRQUFRO2dCQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFFcEIsVUFBVSxDQUFDO29CQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFFLGlDQUFpQztnQkFDaEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7UUFJTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFsTEQ7UUFEQyxRQUFRO2lEQUNjO0lBSE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdMNUI7SUFBRCxlQUFDO0NBeExELEFBd0xDLENBeExxQyxFQUFFLENBQUMsU0FBUyxHQXdMakQ7a0JBeExvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBidWJibGVfdHlwZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIGlzY2xpY2s6Ym9vbGVhbiA9IGZhbHNlOyAvL+awlOazoeWPquiDveeCueWHu+S4gOasoVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIC8v54K55Ye75rCU5rOh5ZCO55qE5o+Q56S6XHJcblxyXG4gICAgICAgIC8qKlxyXG5cdCAqIOeUn+aIkOiMg+WbtOmaj+acuuaVsFxyXG5cdCAqIEBNaW4g5pyA5bCP5YC8XHJcblx0ICogQE1heCDmnIDlpKflgLxcclxuXHQgKi9cclxuXHRwdWJsaWMgR2V0UmFuZG9tTnVtKE1pbiwgTWF4KTpudW1iZXIge1xyXG5cdFx0dmFyIFJhbmdlID0gTWF4IC0gTWluO1xyXG5cdFx0dmFyIFJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0cmV0dXJuIChNaW4gKyBNYXRoLnJvdW5kKFJhbmQgKiBSYW5nZSkpO1xyXG5cdH1cclxuXHJcblxyXG4gICAgYnViYmxlX3VpKHVpX25hbWU6c3RyaW5nKXtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYnViYmxlX3RvdWNoID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICB2YXIgdGlzaGkgPSBidWJibGVfdG91Y2guYWRkQ29tcG9uZW50KGNjLkxhYmVsKTsgLy/lop7liqBsYWJlbOe7hOS7tuW5tui1i+e7meS4ueiNr+aVsOmHj1xyXG4gICAgICAgIGlmKHRoaXMuYnViYmxlX3R5cGUgPT0gMCl7XHJcbiAgICAgICAgICAgIGJ1YmJsZV90b3VjaC5jb2xvciA9IGNjLmNvbG9yKDAsMCwwKTsgLy/lsIblrZfkvZPmlLnkuLrnmb3oibJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmJ1YmJsZV90eXBlID09IDEpe1xyXG4gICAgICAgICAgICBidWJibGVfdG91Y2guY29sb3IgPSBjYy5jb2xvcigxNDcsOSwyNDcpOyAvL+WwhuWtl+S9k+aUueS4uuapmeiJslxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuYnViYmxlX3R5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIGJ1YmJsZV90b3VjaC5jb2xvciA9IGNjLmNvbG9yKDIzNCwxMzksMjgpOyAvL+WwhuWtl+S9k+aUueS4uuapmeiJslxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuYnViYmxlX3R5cGUgPT0gMyl7XHJcbiAgICAgICAgICAgIGJ1YmJsZV90b3VjaC5jb2xvciA9IGNjLmNvbG9yKDM5LDEwMywyMDgpOyAvL+WwhuWtl+S9k+aUueS4uuiTneiJslxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuYnViYmxlX3R5cGUgPT0gNCl7XHJcbiAgICAgICAgICAgIGJ1YmJsZV90b3VjaC5jb2xvciA9IGNjLmNvbG9yKDI0NywyMzMsMTApOyAvL+WwhuWtl+S9k+aUueS4uum7hOiJslxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnViYmxlX3RvdWNoLmNvbG9yID0gY2MuY29sb3IoMjQxLDE5LDIzKTsgLy/lsIblrZfkvZPmlLnkuLrnuqLoibJcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+iuvue9ruaWh+acrOWkp+Wwj1xyXG4gICAgICAgIHRpc2hpLmZvbnRTaXplID0gMzA7XHJcbiAgICAgICAgdGlzaGkubGluZUhlaWdodCA9IDMwO1xyXG4gICAgIFxyXG4gICAgICAgIGJ1YmJsZV90b3VjaC5zZXRQYXJlbnQodGhpcy5ub2RlKTsgIC8v54i26IqC54K55pivdGhpcy5ub2Rl5omN6IO95Ye65p2lXHJcbiAgICAgICAgYnViYmxlX3RvdWNoLnggPSAwOyAvL+ebuOWvueS6jueItuiKgueCueeahOaoquWdkOagh+S9jee9ruS4jeWPmFxyXG4gICAgICAgIGJ1YmJsZV90b3VjaC55ID0gNjA7Ly/nm7jlr7nkuo7niLboioLngrnnmoTnurXlnZDmoIflnKjkuIvpnaLkuIDngrnnmoTkvY3nva5cclxuICAgICAgICB0aXNoaS5zdHJpbmcgPSB1aV9uYW1lOyAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8v5bu25pe25pyA5ZCO55qE5pe26Ze05Li6bXMs5bu25pe2MeenkumUgOavge+8jOWmguaenOWcqOS4iumdoueahHNjaGVkdWxl5Ye95pWw6L+Y5rKh5omn6KGM5a6M5bCx6ZSA5q+B77yM5Lya5oql6ZSZXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBidWJibGVfdG91Y2guZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidWJibGVfZWZmZWN0KCl7XHJcblxyXG4gICAgICAgIGxldCBwZXJzaXN0ID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKTsgLy/ojrflj5bluLjpqbvoioLngrlcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmJ1YmJsZV90eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX3VpKFwi5peg5LqL5Y+R55SfXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgLy/ngrnlh7vlop7liqDnsr7lipvlgLxcclxuICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlRW5lcmd5KE1hdGguYWJzKHBlcnNpc3QubWF4X2VuZXJneSgpKS8xMCk7Ly/kuIDkuKrmsJTms6HmgaLlpI0yJeeahOeyvuWKm+adoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVfdWkoXCLnsr7lipvlop7plb9+XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgbGV0IGppbmd5YW4gPSB0aGlzLkdldFJhbmRvbU51bSg1LDIwKTsgLy/pmo/mnLrmj5DljYfkuIDpg6jliIbmr5Tkvovnu4/pqoxcclxuICAgICAgICAgICAgICAgIHBlcnNpc3QuZXhwX2dhaW4ocGVyc2lzdC5leHBfcmVxdWlyZWQoKS9qaW5neWFuKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX3VpKFwi57uP6aqM5aKe6ZW/flwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGxldCBhdHRfaWQgPSB0aGlzLkdldFJhbmRvbU51bSgwLDgpOyAvL+maj+acuuaPkOWNh+afkOS4gOmhueWxnuaAp1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dF9uYW1lID0gcGVyc2lzdC5hdHRyaWJ1dGVfbmFtZVthdHRfaWRdOyAgLy/ojrflvpfnm7jlupTnmoTlsZ7mgKflkI3np7BcclxuICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlX2F0dHIoYXR0X25hbWUsIDUwKTsgLy/mlLnlj5jlr7nlupTnmoTlsZ7mgKfvvIzlop7liqDkuIDngrlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZV91aShhdHRfbmFtZStcIis1MFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5HZXRSYW5kb21OdW0oMCw3KTsgLy/pmo/mnLrojrflj5bkuIDkuKrnianlk4FcclxuICAgICAgICAgICAgICAgIHBlcnNpc3Quc2V0aXRlbShpdGVtLDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVfdWkoXCIrMVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIC8v57qi6Imy5rCU5rOh5oOp572aKOS4jeS8muaOieiQveeJqeWTgSlcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gdGhpcy5HZXRSYW5kb21OdW0oMCwyKTsgLy/mjqfliLbpmo/mnLror5Xlj5bnlrLlirPlgLzov5jmmK/nu4/pqozlgLzmiJbmmK/lsZ7mgKcs5Lya5Ye6546wMCwxLDLpmo/mnLrmlbBcclxuXHJcbiAgICAgICAgICAgICAgICBpZih4PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmNoYW5nZUVuZXJneSgtMSpwZXJzaXN0Lm1heF9lbmVyZ3koKS8xMCk7Ly/kuIDkuKrmsJTms6HmgaLlpI0yJeeahOeyvuWKm+adoVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX3VpKFwi57K+5Yqb6ZmN5L2Ob25vXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoeD09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGppbmd5YW4gPSB0aGlzLkdldFJhbmRvbU51bSg1LDIwKTsgLy/pmo/mnLrmj5DljYfkuIDpg6jliIbmr5Tkvovnu4/pqoxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmV4cF9nYWluKC0xKnBlcnNpc3QuZXhwX3JlcXVpcmVkKCkvamluZ3lhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWJibGVfdWkoXCLnu4/pqozkuIvpmY1vbm9cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0X2lkID0gdGhpcy5HZXRSYW5kb21OdW0oMCw4KTsgLy/pmo/mnLrmj5DljYfmn5DkuIDpobnlsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0X25hbWUgPSBwZXJzaXN0LmF0dHJpYnV0ZV9uYW1lW2F0dF9pZF07ICAvL+iOt+W+l+ebuOW6lOeahOWxnuaAp+WQjVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBlcnNpc3QuZ2V0X2F0dHIoYXR0X25hbWUpID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmNoYW5nZV9hdHRyKGF0dF9uYW1lLCAwKTsgLy/mlLnlj5jlr7nlupTnmoTlsZ7mgKfvvIzlop7liqDkuIDngrlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWJibGVfdWkoYXR0X25hbWUrXCLlt7Llh4/kuLowXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmNoYW5nZV9hdHRyKGF0dF9uYW1lLCAtNTApOyAvL+aUueWPmOWvueW6lOeahOWxnuaAp++8jOWinuWKoOS4gOeCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZV91aShhdHRfbmFtZStcIi01MFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5pc2NsaWNrID09IGZhbHNlKXtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuawlOazoVwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9JRCwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBjYy5maW5kKCdwbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcicpICAvL+eCueWHu+awlOazoeWinuWKoOS6uueJqeW5tOm+hFxyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmNsaWNrX2J1YmJsZSA8IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5jbGlja19idWJibGUgKz0gMTtcclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2xpY2tfYnViYmxlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmFkZEFnZSgxKTsgIC8v54K55Ye75LqU5qyh5aKe5Yqg5LiA5bKBXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX2VmZmVjdCgpOyAgLy/op6blj5HmsJTms6HmlYjmnpxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNjbGljayA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8v5bu25pe2NTAwbXPmtojlpLEs55SoZGVzdHJveeS8muWvvOiHtHNjaGVkdWxl5oql6ZSZXHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/dazuo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5f0cX50IpN2JvQrfXFi7sq', 'dazuo');
// script/scene1/dazuo.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            var persist = cc.find('persist_node').getComponent('persist_node');
            persist.is_create_bubble = !persist.is_create_bubble; //点击取反是否进行打坐产生气泡
            if (persist.is_create_bubble)
                persist.focus = _this.node;
            else
                persist.focus = null;
        });
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGRhenVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0NDO1FBN0JHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUF5QnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLO1lBRTlDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFDLElBQUk7Z0JBQzNDLE1BQU07Z0JBQ04sSUFBSSxPQUFPLEdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVE7Z0JBQ1IsK0JBQStCO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkUsT0FBTyxDQUFDLGdCQUFnQixHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCO1lBQ3RFLElBQUksT0FBTyxDQUFDLGdCQUFnQjtnQkFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUE7O2dCQUNsRCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUExQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0M1QjtJQUFELGVBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NqRDtrQkFoQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuiPnOWNlVwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9JRCwgMC4zKTtcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBlcnNpc3QgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpO1xyXG4gICAgICAgICAgICBwZXJzaXN0LmlzX2NyZWF0ZV9idWJibGUgPSAhcGVyc2lzdC5pc19jcmVhdGVfYnViYmxlOyAvL+eCueWHu+WPluWPjeaYr+WQpui/m+ihjOaJk+WdkOS6p+eUn+awlOazoVxyXG4gICAgICAgICAgICBpZiAocGVyc2lzdC5pc19jcmVhdGVfYnViYmxlKSBwZXJzaXN0LmZvY3VzID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAgIGVsc2UgcGVyc2lzdC5mb2N1cyA9IG51bGxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/energy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f4d71QN+hCrLTmFWjg9wo7', 'energy');
// script/scene1/energy.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fatigue = 500;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        var src = this.fatigue;
        this.fatigue = cc.find('persist_node').getComponent('persist_node').getEnergy();
        this.fatigue = this.fatigue < 0 ? 0 : this.fatigue; //filtering
        this.schedule(function () {
            _this.node.getComponent(cc.ProgressBar).progress += 1;
        }, dt * 10, 5);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGVuZXJneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFCQztRQW5CRyxhQUFPLEdBQVUsR0FBRyxDQUFDOztJQW1CekIsQ0FBQztJQWxCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFBVixpQkFTQztRQVJHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUEsQ0FBQyxXQUFXO1FBRTlELElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQTtRQUN4RCxDQUFDLEVBQUUsRUFBRSxHQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUVoQixDQUFDO0lBcEJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBmYXRpZ3VlOm51bWJlciA9IDUwMDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGxldCBzcmMgPSB0aGlzLmZhdGlndWVcclxuICAgICAgICB0aGlzLmZhdGlndWUgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldEVuZXJneSgpXHJcbiAgICAgICAgdGhpcy5mYXRpZ3VlID0gdGhpcy5mYXRpZ3VlIDwgMCA/IDAgOiB0aGlzLmZhdGlndWUgLy9maWx0ZXJpbmdcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzICs9IDFcclxuICAgICAgICB9LCBkdCoxMCwgNSlcclxuXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/log_panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c4239f9exLQ7U2YaUfZolY', 'log_panel');
// script/scene1/log_panel.ts

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
var log_panel = /** @class */ (function (_super) {
    __extends(log_panel, _super);
    function log_panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    log_panel.prototype.onLoad = function () {
    };
    log_panel.prototype.start = function () {
        var _this = this;
        cc.find('persist_node').getComponent('persist_node').log_init(false); //新建立该节点时，将保存节点中的所有日志记录写入日志，分为两种情况，第一是初始化场景，第二是切换场景销毁了该节点，然后重新创建时
        //触摸日志
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.touch.getDelta(); //获得鼠标的位置变化坐标
            _this.node.x += delta.x;
            _this.node.y += delta.y;
        });
    };
    log_panel.prototype.update = function (dt) {
    };
    log_panel = __decorate([
        ccclass
    ], log_panel);
    return log_panel;
}(cc.Component));
exports.default = log_panel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGxvZ19wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUEyQkEsQ0FBQztJQXhCRyx3QkFBd0I7SUFFdkIsMEJBQU0sR0FBTjtJQUVBLENBQUM7SUFHRix5QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpRUFBaUU7UUFHdkksTUFBTTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLEtBQUs7WUFDN0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFHLGFBQWE7WUFDbkQsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQTFCZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJCN0I7SUFBRCxnQkFBQztDQTNCRCxBQTJCQyxDQTNCc0MsRUFBRSxDQUFDLFNBQVMsR0EyQmxEO2tCQTNCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9nX3BhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5sb2dfaW5pdChmYWxzZSk7IC8v5paw5bu656uL6K+l6IqC54K55pe277yM5bCG5L+d5a2Y6IqC54K55Lit55qE5omA5pyJ5pel5b+X6K6w5b2V5YaZ5YWl5pel5b+X77yM5YiG5Li65Lik56eN5oOF5Ya177yM56ys5LiA5piv5Yid5aeL5YyW5Zy65pmv77yM56ys5LqM5piv5YiH5o2i5Zy65pmv6ZSA5q+B5LqG6K+l6IqC54K577yM54S25ZCO6YeN5paw5Yib5bu65pe2XHJcblxyXG5cclxuICAgICAgICAvL+inpuaRuOaXpeW/l1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7ICAgLy/ojrflvpfpvKDmoIfnmoTkvY3nva7lj5jljJblnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gZGVsdGEueDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gZGVsdGEueTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/log.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41e27OIeRBBu79hbV5BHzjF', 'log');
// script/scene1/log.ts

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
var log = /** @class */ (function (_super) {
    __extends(log, _super);
    function log() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //设置面板预制体，需要再cocos中将预制体拖入
        _this.log_panel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    log.prototype.start = function () {
        var _this = this;
        //触摸设置出现设置面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            var persist = cc.find('persist_node').getComponent('persist_node');
            if (persist.focus == null) {
                persist.is_create_bubble = false; //点击关闭产生气泡
                _this.log_panel.active = true;
                persist.focus = _this.log_panel.active;
                cc.find('persist_node').getComponent('persist_node').log_init(true);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], log.prototype, "log_panel", void 0);
    log = __decorate([
        ccclass
    ], log);
    return log;
}(cc.Component));
exports.default = log;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQXVDQztRQXJDRyx5QkFBeUI7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQzs7UUFrQzFCLGlCQUFpQjtJQUNyQixDQUFDO0lBakNHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsbUJBQUssR0FBTDtRQUFBLGlCQTBCQztRQXhCRyxZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUU5QyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMzQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxRQUFRO2dCQUNSLCtCQUErQjtZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUdILElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ25FLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQ3pCO2dCQUNJLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxVQUFVO2dCQUU1QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUE7Z0JBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RTtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNRO0lBSlQsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXVDdkI7SUFBRCxVQUFDO0NBdkNELEFBdUNDLENBdkNnQyxFQUFFLENBQUMsU0FBUyxHQXVDNUM7a0JBdkNvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8v6K6+572u6Z2i5p2/6aKE5Yi25L2T77yM6ZyA6KaB5YaNY29jb3PkuK3lsIbpooTliLbkvZPmi5blhaVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nX3BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIC8v6Kem5pG46K6+572u5Ye6546w6K6+572u6Z2i5p2/XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuiPnOWNlVwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9JRCwgMC4zKTtcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBwZXJzaXN0ID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKTtcclxuICAgICAgICAgICAgaWYgKHBlcnNpc3QuZm9jdXMgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVyc2lzdC5pc19jcmVhdGVfYnViYmxlID0gZmFsc2U7IC8v54K55Ye75YWz6Zet5Lqn55Sf5rCU5rOhXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dfcGFuZWwuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICBwZXJzaXN0LmZvY3VzID0gdGhpcy5sb2dfcGFuZWwuYWN0aXZlXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmxvZ19pbml0KHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/setup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '069c4tboNJEF6Xd0gWptiNK', 'setup');
// script/scene1/setup.ts

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
var setup = /** @class */ (function (_super) {
    __extends(setup, _super);
    function setup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //设置面板预制体，需要再cocos中将预制体拖入
        _this.setup_panel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    setup.prototype.start = function () {
        var _this = this;
        //触摸设置出现设置面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            _this.setup_panel.active = true;
            var persist = cc.find('persist_node').getComponent('persist_node');
            persist.is_create_bubble = false; //点击关闭产生气泡
            /*
                let setup_panel = cc.instantiate(this.setup_panel);
                setup_panel.setParent(cc.director.getScene());  //初始化根节点为场景
                //设置到屏幕中央
                setup_panel.x = 240;
                setup_panel.y = 478;
                */
        });
    };
    __decorate([
        property(cc.Node)
    ], setup.prototype, "setup_panel", void 0);
    setup = __decorate([
        ccclass
    ], setup);
    return setup;
}(cc.Component));
exports.default = setup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHNldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBd0NDO1FBdENJLHlCQUF5QjtRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQzs7UUFtQzdCLGlCQUFpQjtJQUNyQixDQUFDO0lBbENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYscUJBQUssR0FBTDtRQUFBLGlCQTJCQztRQTFCRyxZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUdsRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMzQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxRQUFRO2dCQUNSLCtCQUErQjtZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUUvQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRSxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsVUFBVTtZQUM1Qzs7Ozs7O2tCQU1NO1FBRU4sQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBakNBO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUFKWixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBd0N6QjtJQUFELFlBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q2tDLEVBQUUsQ0FBQyxTQUFTLEdBd0M5QztrQkF4Q29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNldHVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAgLy/orr7nva7pnaLmnb/pooTliLbkvZPvvIzpnIDopoHlho1jb2Nvc+S4reWwhumihOWItuS9k+aLluWFpVxyXG4gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgIHNldHVwX3BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/op6bmkbjorr7nva7lh7rnjrDorr7nva7pnaLmnb9cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6I+c5Y2VXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjMpO1xyXG4gICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBfcGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHBlcnNpc3QgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpO1xyXG4gICAgICAgIHBlcnNpc3QuaXNfY3JlYXRlX2J1YmJsZSA9IGZhbHNlOyAvL+eCueWHu+WFs+mXreS6p+eUn+awlOazoVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIGxldCBzZXR1cF9wYW5lbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2V0dXBfcGFuZWwpO1xyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7ICAvL+WIneWni+WMluagueiKgueCueS4uuWcuuaZr1xyXG4gICAgICAgICAgICAvL+iuvue9ruWIsOWxj+W5leS4reWkrlxyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC54ID0gMjQwO1xyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC55ID0gNDc4O1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/exp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06db1Wsni1Cg5l5EETGGqXs', 'exp');
// script/scene1/exp.ts

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
var exp = /** @class */ (function (_super) {
    __extends(exp, _super);
    function exp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xiuxian = null;
        _this.level = 0;
        _this.exp_now = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    exp.prototype.start = function () {
        var _a;
        _a = cc.find('persist_node').getComponent('persist_node').exp_init(), this.level = _a[0], this.exp_now = _a[1]; //初始化已经保存的经验条
        //cc.find('persist_node').getComponent('persist_node').exp_gain(1000);  //测试时候用的，一开始就填满经验条 【供测试】
        //触摸经验条面板，测试经验条增加，【供测试】
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            //cc.find('persist_node').getComponent('persist_node').exp_gain(200);
            //cc.find('persist_node').getComponent('persist_node').log_write("经验值增加了~");
        });
    };
    exp.prototype.update = function (dt) {
        var _a;
        _a = cc.find('persist_node').getComponent('persist_node').exp_inf(), this.level = _a[0], this.exp_now = _a[1];
        var sub_level = cc.find('persist_node').getComponent('persist_node').get_sublevel();
        this.node.getComponentInChildren(cc.Label).string = Math.round(this.exp_now).toString() + '/' +
            Math.round(cc.find('persist_node').getComponent('persist_node').exp_required()).toString();
        //如果经验值满，则可以进入修仙界面
        if (this.exp_now >= cc.find('persist_node').getComponent('persist_node').exp_required() &&
            this.node.getComponent(cc.Sprite).fillRange >= 1) {
            if (sub_level == '后期') {
                this.node.getParent().getChildByName('upgrade').getComponent(cc.Button).interactable = true;
                this.node.getParent().getChildByName('upgrade').getChildByName('Background').color = cc.Color.GREEN;
            }
            else {
                cc.find('persist_node').getComponent('persist_node').exp_init();
                cc.find('persist_node').getComponent('persist_node').up_sublevel();
                //突破动画
            }
        }
        /*
        if(this.exp_now == cc.find('persist_node').getComponent('persist_node').exp_required() && this.node.getComponent(cc.Sprite).fillRange >= 1){
            this.xiuxian.active=true;

        }
        else{
            this.xiuxian.active=false;
        }
        */
    };
    __decorate([
        property(cc.Node)
    ], exp.prototype, "xiuxian", void 0);
    __decorate([
        property
    ], exp.prototype, "level", void 0);
    __decorate([
        property
    ], exp.prototype, "exp_now", void 0);
    exp = __decorate([
        ccclass
    ], exp);
    return exp;
}(cc.Component));
exports.default = exp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGV4cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQXFFQztRQWxFRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBVSxDQUFDLENBQUM7UUFHakIsYUFBTyxHQUFVLENBQUMsQ0FBQzs7SUE0RHZCLENBQUM7SUExREcsd0JBQXdCO0lBSXpCLGVBQWU7SUFHZCxtQkFBSyxHQUFMOztRQUVJLEtBQTZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUEzRixJQUFJLENBQUMsS0FBSyxRQUFBLEVBQUUsSUFBSSxDQUFDLE9BQU8sUUFBQSxDQUFvRSxDQUFFLGFBQWE7UUFFNUcsZ0dBQWdHO1FBRWhHLHVCQUF1QjtRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLO1lBQzlDLHFFQUFxRTtZQUNyRSw0RUFBNEU7UUFFaEYsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBRUEsb0JBQU0sR0FBTixVQUFRLEVBQUU7O1FBQ1AsS0FBNkIsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQTFGLElBQUksQ0FBQyxLQUFLLFFBQUEsRUFBRSxJQUFJLENBQUMsT0FBTyxRQUFBLENBQW1FO1FBQzVGLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHO1lBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUUvRixrQkFBa0I7UUFDbEIsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsRUFDcEQ7WUFDSSxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQ3JCO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtnQkFDM0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTthQUN0RztpQkFFRDtnQkFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDL0QsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2xFLE1BQU07YUFDVDtTQUNKO1FBQ0Q7Ozs7Ozs7O1VBUUU7SUFHTCxDQUFDO0lBakVGO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ007SUFHeEI7UUFEQyxRQUFRO3NDQUNRO0lBR2pCO1FBREMsUUFBUTt3Q0FDVTtJQVRGLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FxRXZCO0lBQUQsVUFBQztDQXJFRCxBQXFFQyxDQXJFZ0MsRUFBRSxDQUFDLFNBQVMsR0FxRTVDO2tCQXJFb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXhwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHhpdXhpYW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbGV2ZWw6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGV4cF9ub3c6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblxyXG5cclxuICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHsgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFt0aGlzLmxldmVsLCB0aGlzLmV4cF9ub3ddID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5leHBfaW5pdCgpOyAgLy/liJ3lp4vljJblt7Lnu4/kv53lrZjnmoTnu4/pqozmnaFcclxuXHJcbiAgICAgICAgLy9jYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9nYWluKDEwMDApOyAgLy/mtYvor5Xml7blgJnnlKjnmoTvvIzkuIDlvIDlp4vlsLHloavmu6Hnu4/pqozmnaEg44CQ5L6b5rWL6K+V44CRXHJcblxyXG4gICAgICAgIC8v6Kem5pG457uP6aqM5p2h6Z2i5p2/77yM5rWL6K+V57uP6aqM5p2h5aKe5Yqg77yM44CQ5L6b5rWL6K+V44CRXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIC8vY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5leHBfZ2FpbigyMDApO1xyXG4gICAgICAgICAgICAvL2NjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykubG9nX3dyaXRlKFwi57uP6aqM5YC85aKe5Yqg5LqGflwiKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBbdGhpcy5sZXZlbCwgdGhpcy5leHBfbm93XSA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZXhwX2luZigpO1xyXG4gICAgICAgIGxldCBzdWJfbGV2ZWwgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldF9zdWJsZXZlbCgpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5leHBfbm93KS50b1N0cmluZygpICsgJy8nICtcclxuICAgICAgICAgICAgIE1hdGgucm91bmQoY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5leHBfcmVxdWlyZWQoKSkudG9TdHJpbmcoKVxyXG5cclxuICAgICAgICAvL+WmguaenOe7j+mqjOWAvOa7oe+8jOWImeWPr+S7pei/m+WFpeS/ruS7meeVjOmdolxyXG4gICAgICAgIGlmKHRoaXMuZXhwX25vdyA+PSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9yZXF1aXJlZCgpICYmIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID49IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc3ViX2xldmVsID09ICflkI7mnJ8nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoJ3VwZ3JhZGUnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoJ3VwZ3JhZGUnKS5nZXRDaGlsZEJ5TmFtZSgnQmFja2dyb3VuZCcpLmNvbG9yID0gY2MuQ29sb3IuR1JFRU5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZXhwX2luaXQoKVxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS51cF9zdWJsZXZlbCgpXHJcbiAgICAgICAgICAgICAgICAvL+eqgeegtOWKqOeUu1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaWYodGhpcy5leHBfbm93ID09IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZXhwX3JlcXVpcmVkKCkgJiYgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA+PSAxKXtcclxuICAgICAgICAgICAgdGhpcy54aXV4aWFuLmFjdGl2ZT10cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy54aXV4aWFuLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcblxyXG4gICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/upgrade.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99f0bPzCmtLnqFwOHh1RsFl', 'upgrade');
// script/scene1/upgrade.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    NewClass.prototype.breakThrough = function () {
        cc.director.loadScene('scene2');
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.getComponent(cc.Button).interactable = false;
        this.node.getChildByName('Background').color = cc.Color.YELLOW;
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHVwZ3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyQkM7UUF4QkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQXFCM0IsQ0FBQztJQWxCRywrQkFBWSxHQUFaO1FBRUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtJQUVsRSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJCNUI7SUFBRCxlQUFDO0NBM0JELEFBMkJDLENBM0JxQyxFQUFFLENBQUMsU0FBUyxHQTJCakQ7a0JBM0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG5cclxuICAgIGJyZWFrVGhyb3VnaCgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzY2VuZTInKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdCYWNrZ3JvdW5kJykuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1dcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/xiuxian.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1683eqA3lxL440mVVw4K2ot', 'xiuxian');
// script/scene1/xiuxian.ts

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
var xiuxian = /** @class */ (function (_super) {
    __extends(xiuxian, _super);
    function xiuxian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    xiuxian.prototype.start = function () {
        //触摸修仙按钮
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("scene2");
        });
    };
    xiuxian = __decorate([
        ccclass
    ], xiuxian);
    return xiuxian;
}(cc.Component));
exports.default = xiuxian;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHhpdXhpYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFBakQ7O0lBaUJBLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHVCQUFLLEdBQUw7UUFDSSxRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUM5QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFkZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWlCM0I7SUFBRCxjQUFDO0NBakJELEFBaUJDLENBakJvQyxFQUFFLENBQUMsU0FBUyxHQWlCaEQ7a0JBakJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB4aXV4aWFuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v6Kem5pG45L+u5LuZ5oyJ6ZKuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lMlwiKTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0628b/zpR5FMb5lZYs9YAdB', 'player');
// script/scene1/player.ts

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
var player = /** @class */ (function (_super) {
    __extends(player, _super);
    function player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_inteval = 0; //产生气泡的时间间隔
        _this.bubble_time = 0; //计算气泡产生的时间
        _this.bubble_set = [null];
        _this.click_bubble = 0; //点击气泡的次数，点击五次增加1年寿命
        _this.frames = []; //或者 frames: cc.SpriteFrame[] = new Array();
        _this.sprite = null;
        _this.index = 1;
        _this.interval = 0.01;
        return _this;
    }
    player.prototype.set_bubble_time = function () {
        var persist = cc.find('persist_node').getComponent('persist_node');
        var num = persist.getEnergy() / persist.max_energy() + 0.6; //最快也是2秒产生一个气泡
        this.bubble_inteval = num;
        return this.bubble_inteval;
    };
    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     */
    player.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    //bubble_id:要产生哪种气泡，0，1，2，3，4，5分别代表，无用气泡，增加精力值气泡，增加经验修为气泡，增加属性气泡，增加物品气泡，心魔气泡
    player.prototype.bubble_loc = function (bubble_id, speed, exist_time) {
        var _this = this;
        var x_loc = this.GetRandomNum(-400, 700); //气泡产生的x轴位置，需要结合cocos面板进行调整，生成在人物两端
        //while(x_loc>-40 && x_loc<50){
        //    let x_loc = this.GetRandomNum(-100, 150);
        //}
        var y_loc = this.GetRandomNum(-600, 0); //气泡产生的y轴位置
        var bubble = cc.instantiate(this.bubble_set[bubble_id]);
        bubble.setParent(cc.director.getScene()); //把子弹放到当前节点的子节点上
        bubble.x = this.node.x + x_loc;
        bubble.y = this.node.y + y_loc;
        var x_change = 0;
        this.schedule(function () {
            if (x_loc < -200) { //靠左的时候向右边移动的多
                x_change = _this.GetRandomNum(0, 3);
            }
            else if (x_loc > 400) { //靠左的时候向右边移动的多
                x_change = _this.GetRandomNum(-3, 0);
            }
            else {
                x_change = _this.GetRandomNum(-1, 1);
            }
            bubble.x += x_change;
            bubble.y += speed; //气泡上升的速度
        }, 0.01, 600);
        setTimeout(function () {
            bubble.active = false; //延时500ms消失,用destroy会导致schedule报错
        }, exist_time);
    };
    player.prototype.bubble_create = function (min, max) {
        var x = this.GetRandomNum(min, max); //用于计算气泡出现的概率,因为产生的随机数值是离散的，所以需要扩大范围
        var y = this.GetRandomNum(0, 1400); //用于控制产生哪种气泡的概率
        //获取当前疲劳值所占总疲劳值的比例,目的是让疲劳值越空时，产生越多的气泡
        var persist = cc.find('persist_node').getComponent('persist_node');
        var exau_ratio = persist.getEnergy() / persist.max_energy(); //当前疲劳值占比，如果精力值为0，必定会产生气泡
        if (x > (min - max) * exau_ratio) { //产生气泡
            if (y < 600) { //产生收益气泡
                if (y < 300) {
                    //产生消除疲劳气泡
                    this.bubble_loc(1, 5, 4000);
                }
                else if (y < 450 && y >= 300) {
                    //产生经验值气泡
                    this.bubble_loc(2, 7, 3000);
                }
                else if (y < 550 && y >= 450) {
                    //产生属性气泡
                    this.bubble_loc(3, 8, 2000);
                }
                else {
                    //产生天才地宝
                    this.bubble_loc(4, 10, 1000);
                }
            }
            else if (y < 900 && y >= 600) {
                //产生无用气泡
                this.bubble_loc(0, 3, 6000);
            }
            else {
                //产生有害气泡
                this.bubble_loc(5, 2, 8000);
            }
        }
    };
    player.prototype.onLoad = function () {
        this.sprite = this.node.getComponent(cc.Sprite);
    };
    player.prototype.onTimer = function () {
        if (this.frames.length == 0)
            return;
        this.sprite.spriteFrame = this.frames[this.index];
        this.index++;
        if (this.index >= this.frames.length) //这里不适用取余，数字在不断增大超出表示范围
            this.index = 0;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    player.prototype.start = function () {
        this.schedule(this.onTimer, this.interval); //动态加载图片
        cc.find('persist_node').getComponent('persist_node').is_create_bubble = false; //每次返回到主页面时，都会让打坐修行关闭，从而不产生气泡
        this.set_bubble_time(); //计算新的气泡产生间隔时间
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
        });
    };
    player.prototype.update = function (dt) {
        var persist = cc.find('persist_node').getComponent('persist_node');
        if (this.bubble_time < this.bubble_inteval) {
            this.bubble_time += dt;
        }
        else {
            this.set_bubble_time(); //在气泡产生完毕后开始重新计算新的气泡产生间隔时间
            this.bubble_time = 0;
            if (persist.is_create_bubble) { //如果进行打坐修炼
                this.bubble_create(0, 100); //这里不用schedule函数产生，用update动态生成
            }
        }
    };
    __decorate([
        property
    ], player.prototype, "bubble_inteval", void 0);
    __decorate([
        property
    ], player.prototype, "bubble_time", void 0);
    __decorate([
        property(cc.Prefab) //存储不同的气泡类型
    ], player.prototype, "bubble_set", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], player.prototype, "frames", void 0);
    player = __decorate([
        ccclass
    ], player);
    return player;
}(cc.Component));
exports.default = player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWlNQztRQTdMRyxvQkFBYyxHQUFVLENBQUMsQ0FBQyxDQUFFLFdBQVc7UUFHdkMsaUJBQVcsR0FBUSxDQUFDLENBQUMsQ0FBTSxXQUFXO1FBR3RDLGdCQUFVLEdBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixrQkFBWSxHQUFVLENBQUMsQ0FBQSxDQUFFLG9CQUFvQjtRQXVIN0MsWUFBTSxHQUFxQixFQUFFLENBQUMsQ0FBQSw0Q0FBNEM7UUFDMUUsWUFBTSxHQUFXLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVEsQ0FBQyxDQUFDO1FBQ2YsY0FBUSxHQUFRLElBQUksQ0FBQzs7SUEyRHpCLENBQUM7SUFsTEcsZ0NBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsY0FBYztRQUV4RSxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUdEOzs7O09BSUE7SUFDSSw2QkFBWSxHQUFuQixVQUFvQixHQUFHLEVBQUUsR0FBRztR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QyxFQUFJLFVBQVU7Z0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQVEsOEJBQThCO2FBQ3BFO1NBRUo7SUFHTCxDQUFDO0lBNUxEO1FBREMsUUFBUTtrREFDaUI7SUFHMUI7UUFEQyxRQUFROytDQUNZO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBVyxXQUFXOzhDQUNaO0lBeUg5QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBRTswQ0FDQztJQW5JYixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaU0xQjtJQUFELGFBQUM7Q0FqTUQsQUFpTUMsQ0FqTW1DLEVBQUUsQ0FBQyxTQUFTLEdBaU0vQztrQkFqTW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYnViYmxlX2ludGV2YWw6bnVtYmVyID0gMDsgIC8v5Lqn55Sf5rCU5rOh55qE5pe26Ze06Ze06ZqUXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBidWJibGVfdGltZTpudW1iZXI9MDsgICAgICAvL+iuoeeul+awlOazoeS6p+eUn+eahOaXtumXtFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpICAgICAgICAgICAvL+WtmOWCqOS4jeWQjOeahOawlOazoeexu+Wei1xyXG4gICAgYnViYmxlX3NldDpjYy5QcmVmYWJbXT1bbnVsbF07XHJcblxyXG4gICAgY2xpY2tfYnViYmxlOm51bWJlciA9IDAgIC8v54K55Ye75rCU5rOh55qE5qyh5pWw77yM54K55Ye75LqU5qyh5aKe5YqgMeW5tOWvv+WRvVxyXG5cclxuXHJcbiAgICBzZXRfYnViYmxlX3RpbWUoKXsgIC8v6K6+572u55Sf5oiQ5rCU5rOh55qE5pe26Ze077yM5Lya6ZqP552A57K+5Yqb5YC855qE5LiL6ZmN6ICM5LiK5Y2HXHJcbiAgICAgICAgbGV0IHBlcnNpc3QgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpO1xyXG4gICAgICAgIGxldCBudW0gPSBwZXJzaXN0LmdldEVuZXJneSgpL3BlcnNpc3QubWF4X2VuZXJneSgpICsgMC42OyAvL+acgOW/q+S5n+aYrzLnp5LkuqfnlJ/kuIDkuKrmsJTms6FcclxuXHJcbiAgICAgICAgdGhpcy5idWJibGVfaW50ZXZhbCA9IG51bTtcclxuICAgICAgICByZXR1cm4gdGhpcy5idWJibGVfaW50ZXZhbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcblx0ICog55Sf5oiQ6IyD5Zu06ZqP5py65pWwXHJcblx0ICogQE1pbiDmnIDlsI/lgLxcclxuXHQgKiBATWF4IOacgOWkp+WAvFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBHZXRSYW5kb21OdW0oTWluLCBNYXgpOm51bWJlciB7XHJcblx0XHR2YXIgUmFuZ2UgPSBNYXggLSBNaW47XHJcblx0XHR2YXIgUmFuZCA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHRyZXR1cm4gKE1pbiArIE1hdGgucm91bmQoUmFuZCAqIFJhbmdlKSk7XHJcblx0fVxyXG5cclxuXHJcbiAgICAvL2J1YmJsZV9pZDropoHkuqfnlJ/lk6rnp43msJTms6HvvIww77yMMe+8jDLvvIwz77yMNO+8jDXliIbliKvku6PooajvvIzml6DnlKjmsJTms6HvvIzlop7liqDnsr7lipvlgLzmsJTms6HvvIzlop7liqDnu4/pqozkv67kuLrmsJTms6HvvIzlop7liqDlsZ7mgKfmsJTms6HvvIzlop7liqDnianlk4HmsJTms6HvvIzlv4PprZTmsJTms6FcclxuICAgIGJ1YmJsZV9sb2MoYnViYmxlX2lkOm51bWJlciwgc3BlZWQ6bnVtYmVyLCBleGlzdF90aW1lOm51bWJlcil7ICAgLy/mjqfliLbmsJTms6HkuqfnlJ/nmoTpmo/mnLrkvY3nva5cclxuXHJcbiAgICAgICAgbGV0IHhfbG9jID0gdGhpcy5HZXRSYW5kb21OdW0oLTQwMCwgNzAwKTsgIC8v5rCU5rOh5Lqn55Sf55qEeOi9tOS9jee9ru+8jOmcgOimgee7k+WQiGNvY29z6Z2i5p2/6L+b6KGM6LCD5pW077yM55Sf5oiQ5Zyo5Lq654mp5Lik56uvXHJcbiAgICAgICAgLy93aGlsZSh4X2xvYz4tNDAgJiYgeF9sb2M8NTApe1xyXG4gICAgICAgIC8vICAgIGxldCB4X2xvYyA9IHRoaXMuR2V0UmFuZG9tTnVtKC0xMDAsIDE1MCk7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgbGV0IHlfbG9jID0gdGhpcy5HZXRSYW5kb21OdW0oLTYwMCwgMCk7ICAvL+awlOazoeS6p+eUn+eahHnovbTkvY3nva5cclxuXHJcbiAgICAgICAgbGV0IGJ1YmJsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnViYmxlX3NldFtidWJibGVfaWRdKTtcclxuICAgICAgICBidWJibGUuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpOyAvL+aKiuWtkOW8ueaUvuWIsOW9k+WJjeiKgueCueeahOWtkOiKgueCueS4ilxyXG4gICAgICAgIGJ1YmJsZS54ID0gdGhpcy5ub2RlLngreF9sb2M7XHJcbiAgICAgICAgYnViYmxlLnkgPSB0aGlzLm5vZGUueSt5X2xvYztcclxuXHJcbiAgICAgICAgbGV0IHhfY2hhbmdlID0gMFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuXHJcbiAgICAgICAgICAgIGlmKHhfbG9jIDwgLTIwMCl7Ly/pnaDlt6bnmoTml7blgJnlkJHlj7Povrnnp7vliqjnmoTlpJpcclxuICAgICAgICAgICAgICAgIHhfY2hhbmdlID0gdGhpcy5HZXRSYW5kb21OdW0oMCwgMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSBpZih4X2xvYyA+IDQwMCl7Ly/pnaDlt6bnmoTml7blgJnlkJHlj7Povrnnp7vliqjnmoTlpJpcclxuICAgICAgICAgICAgICAgIHhfY2hhbmdlID0gdGhpcy5HZXRSYW5kb21OdW0oLTMsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB4X2NoYW5nZSA9IHRoaXMuR2V0UmFuZG9tTnVtKC0xLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBidWJibGUueCs9eF9jaGFuZ2U7XHJcbiAgICAgICAgICAgIGJ1YmJsZS55Kz1zcGVlZDsgICAvL+awlOazoeS4iuWNh+eahOmAn+W6plxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LCAwLjAxLCA2MDApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGJ1YmJsZS5hY3RpdmUgPSBmYWxzZTsgIC8v5bu25pe2NTAwbXPmtojlpLEs55SoZGVzdHJveeS8muWvvOiHtHNjaGVkdWxl5oql6ZSZXHJcbiAgICAgICAgfSwgZXhpc3RfdGltZSk7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYnViYmxlX2NyZWF0ZShtaW46bnVtYmVyLCBtYXg6bnVtYmVyKXtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuR2V0UmFuZG9tTnVtKG1pbixtYXgpOyAvL+eUqOS6juiuoeeul+awlOazoeWHuueOsOeahOamgueOhyzlm6DkuLrkuqfnlJ/nmoTpmo/mnLrmlbDlgLzmmK/nprvmlaPnmoTvvIzmiYDku6XpnIDopoHmianlpKfojIPlm7RcclxuXHJcbiAgICAgICAgbGV0IHkgPSB0aGlzLkdldFJhbmRvbU51bSgwLDE0MDApOyAvL+eUqOS6juaOp+WItuS6p+eUn+WTquenjeawlOazoeeahOamgueOh1xyXG5cclxuICAgICAgICAvL+iOt+WPluW9k+WJjeeWsuWKs+WAvOaJgOWNoOaAu+eWsuWKs+WAvOeahOavlOS+iyznm67nmoTmmK/orqnnlrLlirPlgLzotornqbrml7bvvIzkuqfnlJ/otorlpJrnmoTmsJTms6FcclxuICAgICAgICBsZXQgcGVyc2lzdCA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJyk7XHJcbiAgICAgICAgbGV0IGV4YXVfcmF0aW8gPSBwZXJzaXN0LmdldEVuZXJneSgpL3BlcnNpc3QubWF4X2VuZXJneSgpOy8v5b2T5YmN55ay5Yqz5YC85Y2g5q+U77yM5aaC5p6c57K+5Yqb5YC85Li6MO+8jOW/heWumuS8muS6p+eUn+awlOazoVxyXG5cclxuICAgICAgICBpZih4PihtaW4tbWF4KSpleGF1X3JhdGlvKXsgIC8v5Lqn55Sf5rCU5rOhXHJcblxyXG4gICAgICAgICAgICBpZih5PDYwMCl7ICAgLy/kuqfnlJ/mlLbnm4rmsJTms6FcclxuICAgICAgICAgICAgICAgIGlmKHk8MzAwKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+S6p+eUn+a2iOmZpOeWsuWKs+awlOazoVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX2xvYygxLDUsNDAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHk8NDUwICYmIHk+PTMwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kuqfnlJ/nu4/pqozlgLzmsJTms6FcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZV9sb2MoMiw3LDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih5PDU1MCAmJiB5Pj00NTAgKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+S6p+eUn+WxnuaAp+awlOazoVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX2xvYygzLDgsMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Lqn55Sf5aSp5omN5Zyw5a6dXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWJibGVfbG9jKDQsMTAsMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHk8OTAwICYmIHk+PTYwMCl7XHJcbiAgICAgICAgICAgICAgICAvL+S6p+eUn+aXoOeUqOawlOazoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVfbG9jKDAsMyw2MDAwKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL+S6p+eUn+acieWus+awlOazoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVfbG9jKDUsMiw4MDAwKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KCBbY2MuU3ByaXRlRnJhbWVdIClcclxuICAgIGZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdOy8v5oiW6ICFIGZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgc3ByaXRlOmNjLlNwcml0ZT1udWxsO1xyXG4gICAgaW5kZXg6bnVtYmVyPTE7XHJcbiAgICBpbnRlcnZhbDpudW1iZXI9MC4wMTtcclxuXHJcbiAgXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgdGhpcy5zcHJpdGU9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRpbWVyKCl7XHJcbiAgICBpZih0aGlzLmZyYW1lcy5sZW5ndGg9PTApcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID10aGlzLmZyYW1lc1t0aGlzLmluZGV4XTtcclxuICAgIHRoaXMuaW5kZXgrKztcclxuICAgIGlmKHRoaXMuaW5kZXggPj0gdGhpcy5mcmFtZXMubGVuZ3RoKS8v6L+Z6YeM5LiN6YCC55So5Y+W5L2Z77yM5pWw5a2X5Zyo5LiN5pat5aKe5aSn6LaF5Ye66KGo56S66IyD5Zu0XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5vblRpbWVyLHRoaXMuaW50ZXJ2YWwpIC8v5Yqo5oCB5Yqg6L295Zu+54mHXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuaXNfY3JlYXRlX2J1YmJsZSA9IGZhbHNlOyAvL+avj+asoei/lOWbnuWIsOS4u+mhtemdouaXtu+8jOmDveS8muiuqeaJk+WdkOS/ruihjOWFs+mXre+8jOS7juiAjOS4jeS6p+eUn+awlOazoVxyXG5cclxuICAgICAgICB0aGlzLnNldF9idWJibGVfdGltZSgpOyAgLy/orqHnrpfmlrDnmoTmsJTms6HkuqfnlJ/pl7TpmpTml7bpl7RcclxuICAgICAgICBcclxuICAgICAgICAvL+inpuaRuOS6uueJqeWHuueOsOS6uueJqeWxnuaAp+mdouadv1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgcGVyc2lzdCA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYnViYmxlX3RpbWUgPCB0aGlzLmJ1YmJsZV9pbnRldmFsKXsgIFxyXG4gICAgICAgICAgICB0aGlzLmJ1YmJsZV90aW1lKz1kdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2J1YmJsZV90aW1lKCk7ICAvL+WcqOawlOazoeS6p+eUn+WujOavleWQjuW8gOWni+mHjeaWsOiuoeeul+aWsOeahOawlOazoeS6p+eUn+mXtOmalOaXtumXtFxyXG4gICAgICAgICAgICB0aGlzLmJ1YmJsZV90aW1lID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmKHBlcnNpc3QuaXNfY3JlYXRlX2J1YmJsZSl7ICAgLy/lpoLmnpzov5vooYzmiZPlnZDkv67ngrxcclxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX2NyZWF0ZSgwLCAxMDApOyAgICAgICAgLy/ov5nph4zkuI3nlKhzY2hlZHVsZeWHveaVsOS6p+eUn++8jOeUqHVwZGF0ZeWKqOaAgeeUn+aIkFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/shuoming.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c592dWwVEVKCIUtITe0eRbJ', 'shuoming');
// script/scene1/shuoming.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板预制体，需要再cocos中将预制体拖入
        _this.shuoming_panel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            if (cc.find('persist_node').getComponent('persist_node').focus == null) {
                _this.shuoming_panel.active = true;
                cc.find('persist_node').getComponent('persist_node').focus = _this.shuoming_panel;
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "shuoming_panel", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHNodW9taW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0NDO1FBOUJPLHlCQUF5QjtRQUV6QixvQkFBYyxHQUFZLElBQUksQ0FBQzs7UUEyQm5DLGlCQUFpQjtJQUNyQixDQUFDO0lBMUJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLO1lBRTlDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFDLElBQUk7Z0JBQzNDLE1BQU07Z0JBQ04sSUFBSSxPQUFPLEdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVE7Z0JBQ1IsK0JBQStCO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxFQUN0RTtnQkFDSSxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFBO2FBQ25GO1FBR0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBekJHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ2E7SUFKbEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdDNUI7SUFBRCxlQUFDO0NBaENELEFBZ0NDLENBaENxQyxFQUFFLENBQUMsU0FBUyxHQWdDakQ7a0JBaENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgICAgIC8v5bGe5oCn6Z2i5p2/6aKE5Yi25L2T77yM6ZyA6KaB5YaNY29jb3PkuK3lsIbpooTliLbkvZPmi5blhaVcclxuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgICAgICBzaHVvbWluZ19wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLoj5zljZVcIiwgY2MuQXVkaW9DbGlwLCAocmVzLGNsaXApPT57XHJcbiAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmZvY3VzID09IG51bGwpICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaHVvbWluZ19wYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5mb2N1cyA9IHRoaXMuc2h1b21pbmdfcGFuZWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/setup_panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad4ba65JG1O5Kni87K101SA', 'setup_panel');
// script/scene1/setup_panel.ts

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
var setup_panel = /** @class */ (function (_super) {
    __extends(setup_panel, _super);
    function setup_panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isplay = true;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    //播放音乐
    setup_panel.prototype.start = function () {
        var _this = this;
        //触摸打开和关闭声音
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.isplay) {
                cc.audioEngine.pauseAll();
                _this.isplay = false;
            }
            else {
                cc.audioEngine.resumeAll();
                _this.isplay = true;
            }
        });
    };
    setup_panel.prototype.update = function (dt) {
    };
    setup_panel = __decorate([
        ccclass
    ], setup_panel);
    return setup_panel;
}(cc.Component));
exports.default = setup_panel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHNldHVwX3BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBZ0NDO1FBOUJHLFlBQU0sR0FBVyxJQUFJLENBQUM7O0lBOEIxQixDQUFDO0lBNUJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWxCLE1BQU07SUFHSCwyQkFBSyxHQUFMO1FBQUEsaUJBZUM7UUFkSSxXQUFXO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUMvQyxJQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ1gsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFFdkI7aUJBQ0c7Z0JBQ0EsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDdEI7UUFHRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUdWLENBQUM7SUEvQmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnQy9CO0lBQUQsa0JBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3dDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NwRDtrQkFoQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNldHVwX3BhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc3BsYXk6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG5cdC8v5pKt5pS+6Z+z5LmQXHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAgLy/op6bmkbjmiZPlvIDlkozlhbPpl63lo7Dpn7NcclxuICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNwbGF5KXtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzcGxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/dantian.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69dfbl7AdFA45f9E8Wvb4Gq', 'dantian');
// script/scene2/dantian.ts

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
var dantian = /** @class */ (function (_super) {
    __extends(dantian, _super);
    function dantian() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dantian_now = 0;
        _this.explosion = 0;
        _this.yichu = null;
        _this.tupo_num = 0; //突破的筋脉数量,突破筋脉时增加
        _this.dantian_label = new cc.Node(); //这里等于null会报错
        _this.yichu_label = new cc.Node();
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    dantian.prototype.get_dantian = function () {
        return this.dantian_now;
    };
    //丹田满时的数值
    dantian.prototype.dantian_max = function () {
        return 210;
    };
    dantian.prototype.dantian_ui = function () {
        var dantian_num = this.dantian_label.addComponent(cc.Label); //增加label组件并赋给丹药数量
        this.dantian_label.color = cc.color(255, 255, 255); //将字体改为白色
        //设置文本大小
        dantian_num.fontSize = 50;
        dantian_num.lineHeight = 50;
        this.dantian_label.setParent(this.node); //父节点是this.node才能出来
        this.dantian_label.x = 0; //相对于父节点的横坐标位置不变
        this.dantian_label.y = 0; //相对于父节点的纵坐标在下面一点的位置
        dantian_num.string = '丹田值: ' + String(this.get_dantian()) + '/' + String(this.dantian_max());
    };
    dantian.prototype.yichu_ui = function () {
        var yichu_num = this.yichu_label.addComponent(cc.Label); //增加label组件并赋给丹药数量
        this.yichu_label.color = cc.color(200, 0, 0); //将字体改为白色
        //设置文本大小
        yichu_num.fontSize = 50;
        yichu_num.lineHeight = 50;
        this.yichu_label.setParent(this.node); //父节点是this.node才能出来
        this.yichu_label.x = 0; //相对于父节点的横坐标位置不变
        this.yichu_label.y = 100; //相对于父节点的纵坐标在下面一点的位置
        yichu_num.string = '丹田溢出值: ' + String(this.explosion);
    };
    dantian.prototype.dantian_gain = function (dantian_add) {
        //延时函数让丹田条可以延时连续上涨
        var _this = this;
        var toward = dantian_add / Math.abs(dantian_add); //丹田增长的方向，可以是负增长
        if (dantian_add == 0) { //防止toward为0/0变成无限大，会有bug
            toward = 0;
        }
        if (this.explosion == 0 && this.dantian_now + dantian_add > this.dantian_max()) {
            this.explosion = this.dantian_now + dantian_add - this.dantian_max();
        }
        else if (this.explosion > 0) {
            if (toward > 0) {
                this.explosion += dantian_add;
            }
            else {
                if (this.explosion + dantian_add <= 0) { //如果丹田减少的比explosion当前数值更多
                    dantian_add += this.explosion;
                    this.explosion = 0;
                }
                else { //反之
                    this.explosion += dantian_add;
                    dantian_add = 0;
                }
            }
        }
        //丹田正常增长情况
        var end = this.dantian_now + dantian_add;
        if (end > this.dantian_max()) { //如果丹田爆了
            end = this.dantian_max();
        }
        else if (end < 0)
            end = 0; //如果减少到小于0的情况
        var gap = Math.abs(end - this.dantian_now); //改变的总量
        this.dantian_now = end;
        var dt = this.node.getComponent(cc.Sprite);
        this.schedule(function () {
            dt.fillRange += (1 / _this.dantian_max() * toward); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1 / this.dantian_max(), gap);
        if (this.explosion > 0) { //丹田爆满后的反应
            var yichu = cc.instantiate(this.yichu);
            yichu.setParent(cc.director.getScene()); //这里的溢出提示体用的animation和prefab实现的，所以设置坐标不管用，都会在预制体设置好的位置产生，修改位置直接拖动assets中yichu预制体位置，并修改动画
            if (this.explosion <= 255) { //保证丹田爆满不反复变化
                this.node.color = cc.color(255, 255 - this.explosion, 255 - this.explosion);
            }
        }
        else {
            this.node.color = cc.color(255, 255, 255);
        }
        //显示溢出值和丹田值
        this.dantian_ui();
        this.yichu_ui();
    };
    /*
    //丹田增加
    dantian_gain(dantian_add:number){// 此方法只在突破场景使用
        // 即level1满值200经验，传入参数代表增加经验值
        //延时函数让经验条可以延时连续上涨
        //dantian.get_dantian()返回当前丹田值 ， dantian.add_dantian(number)改变当前丹田值
        if(this.dantian_now) >

        let toward = dantian_add / Math.abs(dantian_add)  //丹田增长的方向，可以是负增长
        let end = this.dantian_now + dantian_add;
        let dantian_now = this.dantian_now; //存储改变前的丹田值，用于增长

        //保证丹田值不为负
        this.dantian_now = end>=0?end:0;
        let explosion = this.dantian_now - this.dantian_max(); //丹田超过的量
        

        if (end > this.dantian_max()) {  //如果丹田爆了
            end = this.dantian_max()
        
        }
        else if (end < 0) end = 0  //如果减少到小于0的情况
        let gap = Math.abs(end - dantian_now)  //改变的总量
        
        let dt = this.node.getComponent(cc.Sprite)
        this.schedule(()=>{
            dt.fillRange+= (1/this.dantian_max()*toward);  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1/this.dantian_max(), gap);


        //如果丹田爆炸了
        if(explosion>0){
            let yichu = cc.instantiate(this.yichu);
            yichu.setParent(cc.director.getScene());    //这里的溢出提示体用的animation和prefab实现的，所以设置坐标不管用，都会在预制体设置好的位置产生，修改位置直接拖动assets中yichu预制体位置，并修改动画

            let r_num = explosion>255?0:explosion;
            this.node.color = cc.color(255, 255-explosion, 255-explosion);
                
        }
        else{
            this.node.color = cc.color(255, 255, 255); //如果丹田恢复正常，则恢复本来的颜色
        }

    
    }
    */
    dantian.prototype.start = function () {
        //显示溢出值和丹田值
        this.dantian_ui();
        this.yichu_ui();
    };
    dantian.prototype.update = function (dt) {
    };
    __decorate([
        property
    ], dantian.prototype, "dantian_now", void 0);
    __decorate([
        property
    ], dantian.prototype, "explosion", void 0);
    __decorate([
        property(cc.Prefab)
    ], dantian.prototype, "yichu", void 0);
    dantian = __decorate([
        ccclass
    ], dantian);
    return dantian;
}(cc.Component));
exports.default = dantian;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGRhbnRpYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE4TEM7UUEzTFcsaUJBQVcsR0FBVSxDQUFDLENBQUM7UUFHdkIsZUFBUyxHQUFVLENBQUMsQ0FBQztRQUc3QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBVSxDQUFDLENBQUEsQ0FBQyxpQkFBaUI7UUFFckMsbUJBQWEsR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLGFBQWE7UUFDckQsaUJBQVcsR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFnTHhDLENBQUM7SUE5S0csd0JBQXdCO0lBRXhCLGVBQWU7SUFHZiw2QkFBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFHRCxTQUFTO0lBQ1QsNkJBQVcsR0FBWDtRQUNJLE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFFSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7UUFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUMzRCxRQUFRO1FBQ1IsV0FBVyxD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Q0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QztRQUVELFdBQVc7UUFDWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBR3BCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNFO0lBR0YsdUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUExTEQ7UUFEQyxRQUFRO2dEQUNzQjtJQUcvQjtRQURDLFFBQVE7OENBQ29CO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFUTixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBOEwzQjtJQUFELGNBQUM7Q0E5TEQsQUE4TEMsQ0E5TG9DLEVBQUUsQ0FBQyxTQUFTLEdBOExoRDtrQkE5TG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhbnRpYW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBkYW50aWFuX25vdzpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBleHBsb3Npb246bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgeWljaHU6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICB0dXBvX251bTpudW1iZXIgPSAwIC8v56qB56C055qE562L6ISJ5pWw6YePLOeqgeegtOeti+iEieaXtuWinuWKoFxyXG5cclxuICAgIGRhbnRpYW5fbGFiZWw6Y2MuTm9kZSA9IG5ldyBjYy5Ob2RlKCk7ICAvL+i/memHjOetieS6jm51bGzkvJrmiqXplJlcclxuICAgIHlpY2h1X2xhYmVsOmNjLk5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuIFxyXG4gICAgZ2V0X2RhbnRpYW4oKXsgLy/ojrflj5blvZPliY3kuLnnlLDlgLxcclxuICAgICAgICByZXR1cm4gdGhpcy5kYW50aWFuX25vdztcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8v5Li555Sw5ruh5pe255qE5pWw5YC8XHJcbiAgICBkYW50aWFuX21heCgpe1xyXG4gICAgICAgIHJldHVybiAyMTA7XHJcbiBcclxuICAgIH1cclxuXHJcbiAgICBkYW50aWFuX3VpKCl7ICAvL+aYvuekuuW9k+WJjeeahOS4ueeUsOWAvFxyXG5cclxuICAgICAgICB2YXIgZGFudGlhbl9udW0gPSB0aGlzLmRhbnRpYW5fbGFiZWwuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTsgLy/lop7liqBsYWJlbOe7hOS7tuW5tui1i+e7meS4ueiNr+aVsOmHj1xyXG4gICAgICAgIHRoaXMuZGFudGlhbl9sYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTsgLy/lsIblrZfkvZPmlLnkuLrnmb3oibJcclxuICAgICAgICAvL+iuvue9ruaWh+acrOWkp+Wwj1xyXG4gICAgICAgIGRhbnRpYW5fbnVtLmZvbnRTaXplID0gNTA7XHJcbiAgICAgICAgZGFudGlhbl9udW0ubGluZUhlaWdodCA9IDUwO1xyXG4gXHJcbiAgICAgICAgdGhpcy5kYW50aWFuX2xhYmVsLnNldFBhcmVudCh0aGlzLm5vZGUpOyAgLy/niLboioLngrnmmK90aGlzLm5vZGXmiY3og73lh7rmnaVcclxuICAgICAgICB0aGlzLmRhbnRpYW5fbGFiZWwueCA9IDA7IC8v55u45a+55LqO54i26IqC54K555qE5qiq5Z2Q5qCH5L2N572u5LiN5Y+YXHJcbiAgICAgICAgdGhpcy5kYW50aWFuX2xhYmVsLnkgPSAwOy8v55u45a+55LqO54i26IqC54K555qE57q15Z2Q5qCH5Zyo5LiL6Z2i5LiA54K555qE5L2N572uXHJcbiAgICAgICAgZGFudGlhbl9udW0uc3RyaW5nID0gJ+S4ueeUsOWAvDogJytTdHJpbmcodGhpcy5nZXRfZGFudGlhbigpKSsnLycrU3RyaW5nKHRoaXMuZGFudGlhbl9tYXgoKSk7ICBcclxuICAgIH1cclxuXHJcbiAgICB5aWNodV91aSgpeyAgLy/mmL7npLrlvZPliY3muqLlh7rnmoTkuLnnlLDlgLxcclxuXHJcblxyXG4gICAgICAgIHZhciB5aWNodV9udW0gPSB0aGlzLnlpY2h1X2xhYmVsLmFkZENvbXBvbmVudChjYy5MYWJlbCk7IC8v5aKe5YqgbGFiZWznu4Tku7blubbotYvnu5nkuLnoja/mlbDph49cclxuICAgICAgICB0aGlzLnlpY2h1X2xhYmVsLmNvbG9yID0gY2MuY29sb3IoMjAwLDAsMCk7IC8v5bCG5a2X5L2T5pS55Li655m96ImyXHJcbiAgICAgICAgLy/orr7nva7mlofmnKzlpKflsI9cclxuICAgICAgICB5aWNodV9udW0uZm9udFNpemUgPSA1MDtcclxuICAgICAgICB5aWNodV9udW0ubGluZUhlaWdodCA9IDUwO1xyXG4gXHJcbiAgICAgICAgdGhpcy55aWNodV9sYWJlbC5zZXRQYXJlbnQodGhpcy5ub2RlKTsgIC8v54i26IqC54K55pivdGhpcy5ub2Rl5omN6IO95Ye65p2lXHJcbiAgICAgICAgdGhpcy55aWNodV9sYWJlbC54ID0gMDsgLy/nm7jlr7nkuo7niLboioLngrnnmoTmqKrlnZDmoIfkvY3nva7kuI3lj5hcclxuICAgICAgICB0aGlzLnlpY2h1X2xhYmVsLnkgPSAxMDA7Ly/nm7jlr7nkuo7niLboioLngrnnmoTnurXlnZDmoIflnKjkuIvpnaLkuIDngrnnmoTkvY3nva5cclxuICAgICAgICB5aWNodV9udW0uc3RyaW5nID0gJ+S4ueeUsOa6ouWHuuWAvDogJytTdHJpbmcodGhpcy5leHBsb3Npb24pOyAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRhbnRpYW5fZ2FpbihkYW50aWFuX2FkZDpudW1iZXIpey8vIOatpOaWueazleWPquWcqOeqgeegtOWcuuaZr+S9v+eUqFxyXG4gICAgICAgIC8v5bu25pe25Ye95pWw6K6p5Li555Sw5p2h5Y+v5Lul5bu25pe26L+e57ut5LiK5raoXHJcblxyXG4gICAgICAgIGxldCB0b3dhcmQgPSBkYW50aWFuX2FkZCAvIE1hdGguYWJzKGRhbnRpYW5fYWRkKSAgLy/kuLnnlLDlop7plb/nmoTmlrnlkJHvvIzlj6/ku6XmmK/otJ/lop7plb9cclxuICAgICAgICBpZihkYW50aWFuX2FkZCA9PSAwKXsgIC8v6Ziy5q2idG93YXJk5Li6MC8w5Y+Y5oiQ5peg6ZmQ5aSn77yM5Lya5pyJYnVnXHJcbiAgICAgICAgICAgIHRvd2FyZCA9MCA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmV4cGxvc2lvbiA9PSAwICYmIHRoaXMuZGFudGlhbl9ub3cgKyBkYW50aWFuX2FkZCA+IHRoaXMuZGFudGlhbl9tYXgoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uID0gdGhpcy5kYW50aWFuX25vdyArIGRhbnRpYW5fYWRkIC0gdGhpcy5kYW50aWFuX21heCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5leHBsb3Npb24gPiAwKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRvd2FyZCA+IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb24gKz0gZGFudGlhbl9hZGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZXhwbG9zaW9uICsgZGFudGlhbl9hZGQgPD0gMCl7ICAvL+WmguaenOS4ueeUsOWHj+WwkeeahOavlGV4cGxvc2lvbuW9k+WJjeaVsOWAvOabtOWkmlxyXG4gICAgICAgICAgICAgICAgICAgIGRhbnRpYW5fYWRkICs9IHRoaXMuZXhwbG9zaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y+N5LmLXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb24gKz0gZGFudGlhbl9hZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGFudGlhbl9hZGQgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgXHJcblxyXG4gICAgICAgIC8v5Li555Sw5q2j5bi45aKe6ZW/5oOF5Ya1XHJcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuZGFudGlhbl9ub3cgKyBkYW50aWFuX2FkZDtcclxuICAgICAgICBpZiAoZW5kID4gdGhpcy5kYW50aWFuX21heCgpKSB7ICAvL+WmguaenOS4ueeUsOeIhuS6hlxyXG4gICAgICAgICAgICBlbmQgPSB0aGlzLmRhbnRpYW5fbWF4KClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVuZCA8IDApIGVuZCA9IDAgIC8v5aaC5p6c5YeP5bCR5Yiw5bCP5LqOMOeahOaDheWGtVxyXG4gICAgICAgIGxldCBnYXAgPSBNYXRoLmFicyhlbmQgLSB0aGlzLmRhbnRpYW5fbm93KSAgLy/mlLnlj5jnmoTmgLvph49cclxuICAgICAgICB0aGlzLmRhbnRpYW5fbm93ID0gZW5kO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZHQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIGR0LmZpbGxSYW5nZSs9ICgxL3RoaXMuZGFudGlhbl9tYXgoKSp0b3dhcmQpOyAgLy/nu4/pqoxleHAuZmlsbFJhbmdl5YiwMeihqOekuue7j+mqjOa7oe+8jOe7j+mqjOWAvOWinumVv+eahOWPr+inhuWMluaoquadoe+8jDEvdGhpcy5leHBfcmVxdWlyZWQoKeihqOekuuavj+mXtOmalOS4gOWumuaXtumXtOWinuWKoOi/meS5iOWkmueahOe7j+mqjOadoeaYvuekuu+8jOWunueOsOWKqOaAgeWinumVv1xyXG4gICAgICAgIH0sIDEvdGhpcy5kYW50aWFuX21heCgpLCBnYXApO1xyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5leHBsb3Npb24gPiAwKXsgIC8v5Li555Sw54iG5ruh5ZCO55qE5Y+N5bqUXHJcbiAgICAgICAgICAgIGxldCB5aWNodSA9IGNjLmluc3RhbnRpYXRlKHRoaXMueWljaHUpO1xyXG4gICAgICAgICAgICB5aWNodS5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7ICAgIC8v6L+Z6YeM55qE5rqi5Ye65o+Q56S65L2T55So55qEYW5pbWF0aW9u5ZKMcHJlZmFi5a6e546w55qE77yM5omA5Lul6K6+572u5Z2Q5qCH5LiN566h55So77yM6YO95Lya5Zyo6aKE5Yi25L2T6K6+572u5aW955qE5L2N572u5Lqn55Sf77yM5L+u5pS55L2N572u55u05o6l5ouW5YqoYXNzZXRz5LiteWljaHXpooTliLbkvZPkvY3nva7vvIzlubbkv67mlLnliqjnlLtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZXhwbG9zaW9uIDw9IDI1NSl7Ly/kv53or4HkuLnnlLDniIbmu6HkuI3lj43lpI3lj5jljJZcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LXRoaXMuZXhwbG9zaW9uLCAyNTUtdGhpcy5leHBsb3Npb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5pi+56S65rqi5Ye65YC85ZKM5Li555Sw5YC8XHJcbiAgICAgICAgdGhpcy5kYW50aWFuX3VpKCk7ICBcclxuICAgICAgICB0aGlzLnlpY2h1X3VpKCk7XHJcblxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIC8v5Li555Sw5aKe5YqgXHJcbiAgICBkYW50aWFuX2dhaW4oZGFudGlhbl9hZGQ6bnVtYmVyKXsvLyDmraTmlrnms5Xlj6rlnKjnqoHnoLTlnLrmma/kvb/nlKhcclxuICAgICAgICAvLyDljbNsZXZlbDHmu6HlgLwyMDDnu4/pqozvvIzkvKDlhaXlj4LmlbDku6Pooajlop7liqDnu4/pqozlgLxcclxuICAgICAgICAvL+W7tuaXtuWHveaVsOiuqee7j+mqjOadoeWPr+S7peW7tuaXtui/nue7reS4iua2qFxyXG4gICAgICAgIC8vZGFudGlhbi5nZXRfZGFudGlhbigp6L+U5Zue5b2T5YmN5Li555Sw5YC8IO+8jCBkYW50aWFuLmFkZF9kYW50aWFuKG51bWJlcinmlLnlj5jlvZPliY3kuLnnlLDlgLxcclxuICAgICAgICBpZih0aGlzLmRhbnRpYW5fbm93KSA+IFxyXG5cclxuICAgICAgICBsZXQgdG93YXJkID0gZGFudGlhbl9hZGQgLyBNYXRoLmFicyhkYW50aWFuX2FkZCkgIC8v5Li555Sw5aKe6ZW/55qE5pa55ZCR77yM5Y+v5Lul5piv6LSf5aKe6ZW/XHJcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuZGFudGlhbl9ub3cgKyBkYW50aWFuX2FkZDtcclxuICAgICAgICBsZXQgZGFudGlhbl9ub3cgPSB0aGlzLmRhbnRpYW5fbm93OyAvL+WtmOWCqOaUueWPmOWJjeeahOS4ueeUsOWAvO+8jOeUqOS6juWinumVv1xyXG5cclxuICAgICAgICAvL+S/neivgeS4ueeUsOWAvOS4jeS4uui0n1xyXG4gICAgICAgIHRoaXMuZGFudGlhbl9ub3cgPSBlbmQ+PTA/ZW5kOjA7XHJcbiAgICAgICAgbGV0IGV4cGxvc2lvbiA9IHRoaXMuZGFudGlhbl9ub3cgLSB0aGlzLmRhbnRpYW5fbWF4KCk7IC8v5Li555Sw6LaF6L+H55qE6YePXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLmRhbnRpYW5fbWF4KCkpIHsgIC8v5aaC5p6c5Li555Sw54iG5LqGXHJcbiAgICAgICAgICAgIGVuZCA9IHRoaXMuZGFudGlhbl9tYXgoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbmQgPCAwKSBlbmQgPSAwICAvL+WmguaenOWHj+WwkeWIsOWwj+S6jjDnmoTmg4XlhrVcclxuICAgICAgICBsZXQgZ2FwID0gTWF0aC5hYnMoZW5kIC0gZGFudGlhbl9ub3cpICAvL+aUueWPmOeahOaAu+mHj1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgZHQuZmlsbFJhbmdlKz0gKDEvdGhpcy5kYW50aWFuX21heCgpKnRvd2FyZCk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgfSwgMS90aGlzLmRhbnRpYW5fbWF4KCksIGdhcCk7XHJcblxyXG5cclxuICAgICAgICAvL+WmguaenOS4ueeUsOeIhueCuOS6hlxyXG4gICAgICAgIGlmKGV4cGxvc2lvbj4wKXtcclxuICAgICAgICAgICAgbGV0IHlpY2h1ID0gY2MuaW5zdGFudGlhdGUodGhpcy55aWNodSk7XHJcbiAgICAgICAgICAgIHlpY2h1LnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTsgICAgLy/ov5nph4znmoTmuqLlh7rmj5DnpLrkvZPnlKjnmoRhbmltYXRpb27lkoxwcmVmYWLlrp7njrDnmoTvvIzmiYDku6Xorr7nva7lnZDmoIfkuI3nrqHnlKjvvIzpg73kvJrlnKjpooTliLbkvZPorr7nva7lpb3nmoTkvY3nva7kuqfnlJ/vvIzkv67mlLnkvY3nva7nm7TmjqXmi5bliqhhc3NldHPkuK15aWNodemihOWItuS9k+S9jee9ru+8jOW5tuS/ruaUueWKqOeUu1xyXG5cclxuICAgICAgICAgICAgbGV0IHJfbnVtID0gZXhwbG9zaW9uPjI1NT8wOmV4cGxvc2lvbjsgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LWV4cGxvc2lvbiwgMjU1LWV4cGxvc2lvbik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSk7IC8v5aaC5p6c5Li555Sw5oGi5aSN5q2j5bi477yM5YiZ5oGi5aSN5pys5p2l55qE6aKc6ImyXHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v5pi+56S65rqi5Ye65YC85ZKM5Li555Sw5YC8XHJcbiAgICAgICAgdGhpcy5kYW50aWFuX3VpKCk7ICBcclxuICAgICAgICB0aGlzLnlpY2h1X3VpKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/age.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02226/9P2hCgYM+huAAHzXI', 'age');
// script/scene1/age.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.gameover = function () {
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        var data_node = cc.find('persist_node').getComponent('persist_node');
        if (data_node.getAge() > data_node.age_limited)
            this.gameover();
        this.node.setPosition(cc.find('player').position.x, cc.find('player').position.y + 150);
        this.node.getChildByName('age_num').getComponent(cc.Label).string =
            Math.round(cc.find('persist_node').getComponent('persist_node').getAge()).toString() + '岁 / ' +
                Math.round(cc.find('persist_node').getComponent('persist_node').age_limited).toString() + '岁 ' +
                '[' + cc.find('persist_node').getComponent('persist_node').get_level() +
                cc.find('persist_node').getComponent('persist_node').get_sublevel() + '] ';
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUF5QkEsQ0FBQztJQXZCRywyQkFBUSxHQUFSO0lBR0EsQ0FBQztJQUNELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBRXBFLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNO2dCQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUk7Z0JBQzlGLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQTtJQUNsRixDQUFDO0lBeEJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUI1QjtJQUFELGVBQUM7Q0F6QkQsQUF5QkMsQ0F6QnFDLEVBQUUsQ0FBQyxTQUFTLEdBeUJqRDtrQkF6Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBnYW1lb3ZlcigpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGRhdGFfbm9kZSA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJylcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGF0YV9ub2RlLmdldEFnZSgpID4gZGF0YV9ub2RlLmFnZV9saW1pdGVkKSB0aGlzLmdhbWVvdmVyKClcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2MuZmluZCgncGxheWVyJykucG9zaXRpb24ueCwgY2MuZmluZCgncGxheWVyJykucG9zaXRpb24ueSArIDE1MClcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2FnZV9udW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICBcclxuICAgICAgICAgICAgTWF0aC5yb3VuZChjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldEFnZSgpKS50b1N0cmluZygpICsgJ+WygSAvICcgKyBcclxuICAgICAgICAgICAgTWF0aC5yb3VuZChjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmFnZV9saW1pdGVkKS50b1N0cmluZygpICsgJ+WygSAnICtcclxuICAgICAgICAgICAgJ1snICsgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5nZXRfbGV2ZWwoKSArIFxyXG4gICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldF9zdWJsZXZlbCgpICsgJ10gJ1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/fanhui.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '332abk0t6hKE70wq8WLfYdO', 'fanhui');
// script/scene2/fanhui.ts

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
var fanhui = /** @class */ (function (_super) {
    __extends(fanhui, _super);
    function fanhui() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defeat = null;
        _this.success = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     * 给予不同节点相同的脚本，每个节点都会分别执行一次改脚本的start等方法
     */
    fanhui.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    //突破分支对应突破不同情况的效果
    fanhui.prototype.tupo = function () {
        var dantian = cc.find('dantian').getComponent('dantian');
        var persist = cc.find('persist_node').getComponent('persist_node'); //获取常驻节点
        //丹田值如果超过了最大丹田量的不良影响
        if (dantian.explosion > 0) {
            cc.find('persist_node').getComponent('persist_node').exp_now = 0; //如果丹田值爆满，会有惩罚,扣除一半经验值
            cc.find('persist_node').getComponent('persist_node').changeEnergy(-200); //扣除200点精力值
            cc.find('persist_node').getComponent('persist_node').log_write('丹田值爆炸，精力值和经验值都下降');
            //随机降低2次属性
            for (var i = 0; i < 2; ++i) {
                var att_id = this.GetRandomNum(0, 8); //随机提升某一项属性
                var att_name = persist.attribute_name[att_id]; //获得相应的属性名
                if (persist.get_attr(att_name) == 0) {
                    persist.change_attr(att_name, 0); //改变对应的属性，增加一点
                }
                else {
                    persist.change_attr(att_name, -30); //改变对应的属性，增加一点
                }
            }
            var defeat = cc.instantiate(this.defeat);
            defeat.setParent(cc.director.getScene());
            cc.loader.loadRes("失败", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.8);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
        }
        //如果丹田值没超
        else {
            var tupo_num = cc.find('dantian').getComponent('dantian').tupo_num;
            var levelup_prob = 0.6 * (dantian.get_dantian() / dantian.dantian_max()) + 0.4 * tupo_num / 9; //突破概率
            var random = this.GetRandomNum(0, 10000); //这边的随机值需要更改
            /*
            console.debug(random);
            console.debug(levelup_prob*10000);
            cc.find('persist_node').getComponent('persist_node').up_level()//突破成功等级加1
            cc.find('persist_node').getComponent('persist_node').log_write("成功突破,等级加1 !!!");
            cc.find('persist_node').getComponent('persist_node').exp_now = 0;
            */
            //突破成功
            if (random <= levelup_prob * 10000) {
                cc.find('persist_node').getComponent('persist_node').up_level(); //突破成功等级加1
                cc.find('persist_node').getComponent('persist_node').log_write("成功突破,等级加1 !!!");
                cc.find('persist_node').getComponent('persist_node').exp_now = 0;
                //所有属性随机增加
                for (var i = 0; i < 9; ++i) {
                    var att_add = this.GetRandomNum(50, 100); //随机提升某一项属性
                    var att_name = persist.attribute_name[i]; //获得相应的属性名
                    persist.change_attr(att_name, att_add); //改变对应的属性，增加一点
                }
                var success = cc.instantiate(this.success);
                success.setParent(cc.director.getScene());
                cc.loader.loadRes("成功", cc.AudioClip, function (res, clip) {
                    //播放音乐
                    var audioID = cc.audioEngine.playEffect(clip, false);
                    cc.audioEngine.setVolume(audioID, 0.8);
                    //停止播放音乐
                    //cc.audioEngine.stop(audioID);
                });
            }
            //突破失败
            else {
                cc.find('persist_node').getComponent('persist_node').log_write("突破失败,等级不变 !!!");
                cc.find('persist_node').getComponent('persist_node').exp_now /= 2; //如果丹田值爆满，会有惩罚,扣除一半经验值
                var defeat = cc.instantiate(this.defeat);
                defeat.setParent(cc.director.getScene());
                //随机降低2次属性
                for (var i = 0; i < 2; ++i) {
                    var att_id = this.GetRandomNum(0, 8); //随机提升某一项属性
                    var att_name = persist.attribute_name[att_id]; //获得相应的属性名
                    if (persist.get_attr(att_name) == 0) {
                        persist.change_attr(att_name, 0); //改变对应的属性，增加一点
                    }
                    else {
                        persist.change_attr(att_name, -30); //改变对应的属性，增加一点
                    }
                }
                cc.loader.loadRes("失败", cc.AudioClip, function (res, clip) {
                    //播放音乐
                    var audioID = cc.audioEngine.playEffect(clip, false);
                    cc.audioEngine.setVolume(audioID, 0.8);
                    //停止播放音乐
                    //cc.audioEngine.stop(audioID);
                });
            }
        }
    };
    fanhui.prototype.start = function () {
        var _this = this;
        //触摸返回主场景，延时0.1秒返回, 可以针对不同的突破效果产生不同的动画，就类似于抽卡动画
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.tupo();
            //延时进入主场景
            setTimeout(function () {
                cc.director.loadScene("main");
            }, 3000);
        });
    };
    __decorate([
        property(cc.Prefab)
    ], fanhui.prototype, "defeat", void 0);
    __decorate([
        property(cc.Prefab)
    ], fanhui.prototype, "success", void 0);
    fanhui = __decorate([
        ccclass
    ], fanhui);
    return fanhui;
}(cc.Component));
exports.default = fanhui;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGZhbmh1aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQStKQztRQTVKRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBYSxJQUFJLENBQUM7O1FBd0p6QixpQkFBaUI7SUFDckIsQ0FBQztJQXRKRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmOzs7OztPQUtBO0lBQ0ksNkJBQVksR0FBbkIsVUFBb0IsR0FBRyxFQUFFLEdBQUc7UUFDM0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRSxpQkFBaUI7SUFDakIscUJBQUksR0FBSjtRQUVJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUVwRSxvQkFBb0I7UUFDcEIsSUFBRyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQztZQUNyQixFQUFFLENBQUMs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QUEsaUJBYUM7UUFaRywrQ0FBK0M7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUM5QyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFWixTQUFTO1lBRVQsVUFBVSxDQUFDO2dCQUNQLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUF6SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNLO0lBTlIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStKMUI7SUFBRCxhQUFDO0NBL0pELEFBK0pDLENBL0ptQyxFQUFFLENBQUMsU0FBUyxHQStKL0M7a0JBL0pvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmYW5odWkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBkZWZlYXQ6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3VjY2VzczpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICAvKipcclxuXHQgKiDnlJ/miJDojIPlm7Tpmo/mnLrmlbBcclxuXHQgKiBATWluIOacgOWwj+WAvFxyXG5cdCAqIEBNYXgg5pyA5aSn5YC8XHJcbiAgICAgKiDnu5nkuojkuI3lkIzoioLngrnnm7jlkIznmoTohJrmnKzvvIzmr4/kuKroioLngrnpg73kvJrliIbliKvmiafooYzkuIDmrKHmlLnohJrmnKznmoRzdGFydOetieaWueazlVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBHZXRSYW5kb21OdW0oTWluLCBNYXgpOm51bWJlciB7XHJcblx0XHR2YXIgUmFuZ2UgPSBNYXggLSBNaW47XHJcblx0XHR2YXIgUmFuZCA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHRyZXR1cm4gKE1pbiArIE1hdGgucm91bmQoUmFuZCAqIFJhbmdlKSk7XHJcblx0fVxyXG5cclxuICAgIC8v56qB56C05YiG5pSv5a+55bqU56qB56C05LiN5ZCM5oOF5Ya155qE5pWI5p6cXHJcbiAgICB0dXBvKCl7XHJcblxyXG4gICAgICAgIGxldCBkYW50aWFuID0gY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpO1xyXG5cclxuICAgICAgICBsZXQgcGVyc2lzdCA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJyk7IC8v6I635Y+W5bi46am76IqC54K5XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL+S4ueeUsOWAvOWmguaenOi2hei/h+S6huacgOWkp+S4ueeUsOmHj+eahOS4jeiJr+W9seWTjVxyXG4gICAgICAgICAgICAgICAgaWYoZGFudGlhbi5leHBsb3Npb24gPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9ub3cgPSAwIDsgLy/lpoLmnpzkuLnnlLDlgLzniIbmu6HvvIzkvJrmnInmg6nnvZos5omj6Zmk5LiA5Y2K57uP6aqM5YC8XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5jaGFuZ2VFbmVyZ3koLTIwMCk7IC8v5omj6ZmkMjAw54K557K+5Yqb5YC8XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5sb2dfd3JpdGUoJ+S4ueeUsOWAvOeIhueCuO+8jOeyvuWKm+WAvOWSjOe7j+mqjOWAvOmDveS4i+mZjScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v6ZqP5py66ZmN5L2OMuasoeWxnuaAp1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0gMCA7IGk8MiA7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRfaWQgPSB0aGlzLkdldFJhbmRvbU51bSgwLDgpOyAvL+maj+acuuaPkOWNh+afkOS4gOmhueWxnuaAp1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXR0X25hbWUgPSBwZXJzaXN0LmF0dHJpYnV0ZV9uYW1lW2F0dF9pZF07ICAvL+iOt+W+l+ebuOW6lOeahOWxnuaAp+WQjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwZXJzaXN0LmdldF9hdHRyKGF0dF9uYW1lKSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlX2F0dHIoYXR0X25hbWUsIDApOyAvL+aUueWPmOWvueW6lOeahOWxnuaAp++8jOWinuWKoOS4gOeCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdC5jaGFuZ2VfYXR0cihhdHRfbmFtZSwgLTMwKTsgLy/mlLnlj5jlr7nlupTnmoTlsZ7mgKfvvIzlop7liqDkuIDngrlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVmZWF0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5kZWZlYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVhdC5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi5aSx6LSlXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOS4ueeUsOWAvOayoei2hVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHVwb19udW0gID0gY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLnR1cG9fbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbHVwX3Byb2IgPSAwLjYqKGRhbnRpYW4uZ2V0X2RhbnRpYW4oKS9kYW50aWFuLmRhbnRpYW5fbWF4KCkpICsgMC40KnR1cG9fbnVtLzkgOyAgLy/nqoHnoLTmpoLnjodcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbSA9IHRoaXMuR2V0UmFuZG9tTnVtKDAsMTAwMDApOyAvL+i/mei+ueeahOmaj+acuuWAvOmcgOimgeabtOaUuVxyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhyYW5kb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcobGV2ZWx1cF9wcm9iKjEwMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLnVwX2xldmVsKCkvL+eqgeegtOaIkOWKn+etiee6p+WKoDFcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmxvZ193cml0ZShcIuaIkOWKn+eqgeegtCznrYnnuqfliqAxICEhIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9ub3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAvL+eqgeegtOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJhbmRvbTw9bGV2ZWx1cF9wcm9iKjEwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS51cF9sZXZlbCgpLy/nqoHnoLTmiJDlip/nrYnnuqfliqAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykubG9nX3dyaXRlKFwi5oiQ5Yqf56qB56C0LOetiee6p+WKoDEgISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9ub3cgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/miYDmnInlsZ7mgKfpmo/mnLrlop7liqBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPSAwIDsgaTw5IDsgKytpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRfYWRkID0gdGhpcy5HZXRSYW5kb21OdW0oNTAsMTAwKTsgLy/pmo/mnLrmj5DljYfmn5DkuIDpobnlsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRfbmFtZSA9IHBlcnNpc3QuYXR0cmlidXRlX25hbWVbaV07ICAvL+iOt+W+l+ebuOW6lOeahOWxnuaAp+WQjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlX2F0dHIoYXR0X25hbWUsIGF0dF9hZGQpOyAvL+aUueWPmOWvueW6lOeahOWxnuaAp++8jOWinuWKoOS4gOeCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3MgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzLnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi5oiQ5YqfXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy/nqoHnoLTlpLHotKVcclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmxvZ193cml0ZShcIueqgeegtOWksei0pSznrYnnuqfkuI3lj5ggISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9ub3cgLz0gMiA7IC8v5aaC5p6c5Li555Sw5YC854iG5ruh77yM5Lya5pyJ5oOp572aLOaJo+mZpOS4gOWNiue7j+mqjOWAvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVmZWF0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5kZWZlYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlYXQuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/pmo/mnLrpmY3kvY4y5qyh5bGe5oCnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0gMCA7IGk8MiA7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXR0X2lkID0gdGhpcy5HZXRSYW5kb21OdW0oMCw4KTsgLy/pmo/mnLrmj5DljYfmn5DkuIDpobnlsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRfbmFtZSA9IHBlcnNpc3QuYXR0cmlidXRlX25hbWVbYXR0X2lkXTsgIC8v6I635b6X55u45bqU55qE5bGe5oCn5ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwZXJzaXN0LmdldF9hdHRyKGF0dF9uYW1lKSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmNoYW5nZV9hdHRyKGF0dF9uYW1lLCAwKTsgLy/mlLnlj5jlr7nlupTnmoTlsZ7mgKfvvIzlop7liqDkuIDngrlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlX2F0dHIoYXR0X25hbWUsIC0zMCk7IC8v5pS55Y+Y5a+55bqU55qE5bGe5oCn77yM5aKe5Yqg5LiA54K5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuWksei0pVwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9JRCwgMC44KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+inpuaRuOi/lOWbnuS4u+WcuuaZr++8jOW7tuaXtjAuMeenkui/lOWbniwg5Y+v5Lul6ZKI5a+55LiN5ZCM55qE56qB56C05pWI5p6c5Lqn55Sf5LiN5ZCM55qE5Yqo55S777yM5bCx57G75Ly85LqO5oq95Y2h5Yqo55S7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXBvKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8v5bu25pe26L+b5YWl5Li75Zy65pmvXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/yichu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b45d9s+4ZtMjquYuXBW4m7M', 'yichu');
// script/scene2/yichu.ts

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
var yichu = /** @class */ (function (_super) {
    __extends(yichu, _super);
    function yichu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    yichu.prototype.start = function () {
        var _this = this;
        this.schedule(function () {
            _this.node.destroy(); //动态消失
        }, 1, 0);
    };
    yichu = __decorate([
        ccclass
    ], yichu);
    return yichu;
}(cc.Component));
exports.default = yichu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXHlpY2h1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQWVBLENBQUM7SUFiRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHFCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUpHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUUsTUFBTTtRQUMvQixDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQVpnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZXpCO0lBQUQsWUFBQztDQWZELEFBZUMsQ0Fma0MsRUFBRSxDQUFDLFNBQVMsR0FlOUM7a0JBZm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHlpY2h1IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKSAgLy/liqjmgIHmtojlpLFcclxuICAgICAgICB9LDEsMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/jinluo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28a6akoBntGV6T3fm9Mu6IZ', 'jinluo');
// script/scene2/jinluo.ts

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
var jinluo = /** @class */ (function (_super) {
    __extends(jinluo, _super);
    function jinluo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    jinluo.prototype.onLoad = function () {
    };
    jinluo.prototype.start = function () {
    };
    jinluo = __decorate([
        ccclass
    ], jinluo);
    return jinluo;
}(cc.Component));
exports.default = jinluo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGppbmx1by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDs7SUFlQSxDQUFDO0lBWkcsd0JBQXdCO0lBRXZCLHVCQUFNLEdBQU47SUFHQSxDQUFDO0lBRUYsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFaZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWUxQjtJQUFELGFBQUM7Q0FmRCxBQWVDLENBZm1DLEVBQUUsQ0FBQyxTQUFTLEdBZS9DO2tCQWZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqaW5sdW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuXHJcblxyXG4gICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/jinmai.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fe5dzuNR1FeqnNB7k34if/', 'jinmai');
// script/scene2/jinmai.ts

"use strict";
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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
/*
该脚本存放在突破场景中，必须要从主场景中切换过来才能正常运行

*/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var jinmai = /** @class */ (function (_super) {
    __extends(jinmai, _super);
    function jinmai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jinmai_index = 0; //表示不同的筋脉，在cocos面板中调整，使得不同的筋脉节点可以使用同一个脚本
        _this.attribute = 0; //暂存本节点筋脉对应的人物属性
        _this.is_click = false; //控制筋脉消失前只能点击一次筋脉
        _this.sort_attr = []; //获取排序后属性索引的数组
        _this.random1 = 0; //随机数的产生，产生于start时，用于控制属性对丹田量的影响；丹药撤回操作将重置改随机数，而观察下一个突破经脉的值的丹药，是不会改变该随机数。从而区分不同【丹药】的效果
        _this.random2 = 0; //第二种情况的随机数，即当前丹田值大于110
        _this.jinmai_loc = []; //记录当前筋脉位置
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    jinmai.prototype.onLoad = function () {
        this.attributes_get(); //预载时就加载获取属性
    };
    //获取人物八项属性到数组中
    jinmai.prototype.attributes_get = function () {
        var persist = cc.find('persist_node').getComponent('persist_node');
        var att_name = persist.attribute_name; //获取属性名称
        this.attribute = persist.get_attr(att_name[this.jinmai_index]); //获取对应索引属性名称的属性值
    };
    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     * 给予不同节点相同的脚本，每个节点都会分别执行一次改脚本的start等方法
     */
    jinmai.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    jinmai.prototype.jinmai = function () {
        cc.loader.loadRes("突破", cc.AudioClip, function (res, clip) {
            //播放音乐
            var audioID = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.1);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });
        var att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        var double_effect = cc.find('danyao2').getComponent('danyao').get_double_effect(); //丹药2的效益为双倍效果，所以检测danyao2下脚本的double_effect组件
        var dantian_now = cc.find('dantian').getComponent('dantian').dantian_now;
        //将人物属性值和人物突破该筋脉带来的收益结合
        var dantian_add = 0; //突破该条筋脉的丹田增加量
        if (dantian_now <= 110) {
            dantian_add = (100 - att_order * 10) + this.random1;
        }
        else {
            dantian_add = (210 - dantian_now) + this.random2;
        }
        //用于【丹药2】效果
        if (double_effect) {
            dantian_add *= 2;
            cc.find('danyao2').getComponent('danyao').double_effect = false; //只能双倍一次
        }
        if (cc.find('danyao4').getComponent('danyao').get_yuce_effect()) { //【丹药4】效果，如果服用丹药，开启了预测效果
            this.jinmai_tishi('丹田量增加' + String(dantian_add)); //增加的ui显示，只显示，而不进行丹田量的增加
            cc.find('danyao4').getComponent('danyao').set_yuce_effect(false); //只能预测一次，重新设置为负数
            return; //预测完毕就直接返回，不执行下面的语句了
        }
        var pre_num = cc.find('dantian').getComponent('dantian').explosion + cc.find('dantian').getComponent('dantian').dantian_now; //操作前丹田和丹田爆炸的数值,【用于丹药3的效果】
        cc.find('dantian').getComponent('dantian').dantian_gain(dantian_add); //增加丹田量
        cc.find('dantian').getComponent('dantian').tupo_num += 1; //突破筋脉，突破筋脉数量+1
        this.jinmai_tishi('丹田量增加' + String(dantian_add)); //增加的ui显示
        cc.find('danyao3').getComponent('danyao').push_chehui_jinmai(this.node.name); //【用于丹药3效果的入栈】入栈突破的筋脉名字
        //【用于丹药3的效果】start
        var change_num = cc.find('dantian').getComponent('dantian').explosion + cc.find('dantian').getComponent('dantian').dantian_now - pre_num; //操作后丹田和丹田超出值的该变量，由于explosion只会再dantian_now满时增加，所以可以将该值放入danyao_3的栈中
        cc.find('danyao3').getComponent('danyao').push_chehui_effect(change_num);
        //另外一个栈的进入操作写在筋脉处
        //【用于丹药3的效果】end
    };
    //控制经脉消失
    jinmai.prototype.disappear = function () {
        var sp = this.node.getComponent(cc.Sprite);
        this.schedule(function () {
            sp.fillRange -= (1 / 10);
        }, 1 / 100, 10);
    };
    //控制经脉出现,用于【丹药2】的撤回操作
    jinmai.prototype.appear = function () {
        //撤回之后重置两种情况的随机数
        this.random1 = this.GetRandomNum(-10, 10);
        var att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        this.random2 = this.GetRandomNum((9 - att_order) * (-10), (9 - att_order) * 10);
        cc.find('dantian').getComponent('dantian').tupo_num -= 1; //撤回筋脉，突破数量减一
        var sp = this.node.getComponent(cc.Sprite);
        this.schedule(function () {
            sp.fillRange += (1 / 10);
        }, 1 / 100, 10);
    };
    //点击筋脉的提示效果
    jinmai.prototype.jinmai_tishi = function (name) {
        var jinmaitupo = new cc.Node();
        var tishi = jinmaitupo.addComponent(cc.Label); //增加label组件并赋给丹药数量
        jinmaitupo.color = cc.color(255, 255, 255); //将字体改为白色
        //设置文本大小
        tishi.fontSize = 40;
        tishi.lineHeight = 40;
        jinmaitupo.setParent(this.node); //父节点是this.node才能出来
        jinmaitupo.x = 0; //相对于父节点的横坐标位置不变
        jinmaitupo.y = 0; //相对于父节点的纵坐标在下面一点的位置
        tishi.string = name;
        this.schedule(function () {
            jinmaitupo.y += 5; //增加5和减少0.01都可以增快提示速度
        }, 0.01, 20);
        //延时最后的时间为ms,延时1秒销毁，如果在上面的schedule函数还没执行完就销毁，会报错
        setTimeout(function () {
            jinmaitupo.destroy();
        }, 1000);
    };
    jinmai.prototype.start = function () {
        var _this = this;
        this.jinmai_loc = [this.node.x, this.node.y]; //获取筋脉初始位置
        this.sort_attr = cc.find('persist_node').getComponent('persist_node').sort_attr(); //获取排序后属性索引的数组
        var att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        //根据排序改变颜色
        //this.node.color = cc.color(att_order*20,30,80);
        this.random1 = this.GetRandomNum(-10, 10); //获取-10到10的随机数
        this.random2 = this.GetRandomNum((9 - att_order) * (-10), (9 - att_order) * 10); //获取第二个随机数
        //只能点击一次静脉
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            //【丹药4】的效果，预测完毕直接返回
            if (cc.find('danyao4').getComponent('danyao').get_yuce_effect()) {
                _this.jinmai();
                return;
            }
            if (!_this.is_click) { //确保只能突破一次静脉，即点击一次还没消失时就不能点了
                _this.jinmai();
                _this.is_click = true;
            }
            _this.disappear();
        });
    };
    jinmai.prototype.move = function () {
        var att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        var random_loc_x = this.GetRandomNum(-1 * (9 - att_order), 9 - att_order); //排名越靠前的筋脉越不稳定
        var random_loc_y = this.GetRandomNum(-1 * (9 - att_order), 9 - att_order);
        if (this.node.x - this.jinmai_loc[0] < -4) {
            random_loc_x = 2;
        }
        else if (this.node.x - this.jinmai_loc[0] > 4) {
            random_loc_x = -2;
        }
        if (this.node.y - this.jinmai_loc[1] < -4) {
            random_loc_y = 2;
        }
        else if (this.node.y - this.jinmai_loc[1] > 4) {
            random_loc_y = -2;
        }
        this.node.x += random_loc_x;
        this.node.y += random_loc_y;
    };
    jinmai.prototype.update = function (dt) {
        this.move();
    };
    __decorate([
        property
    ], jinmai.prototype, "jinmai_index", void 0);
    __decorate([
        property
    ], jinmai.prototype, "is_click", void 0);
    jinmai = __decorate([
        ccclass
    ], jinmai);
    return jinmai;
}(cc.Component));
exports.default = jinmai;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGppbm1haS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRjs7O0VBR0U7QUFDSSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTZPQztRQTFPRyxrQkFBWSxHQUFVLENBQUMsQ0FBQyxDQUFJLHdDQUF3QztRQUVwRSxlQUFTLEdBQVUsQ0FBQyxDQUFDLENBQU0sZ0JBQWdCO1FBSzNDLGNBQVEsR0FBVyxLQUFLLENBQUMsQ0FBRSxpQkFBaUI7UUFFNUMsZUFBUyxHQUFZLEVBQUUsQ0FBQyxDQUFBLGNBQWM7UUFHOUIsYUFBTyxHQUFVLENBQUMsQ0FBQyxDQUFDLHNGQUFzRjtRQUUxRyxhQUFPLEdBQVUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBRW5ELGdCQUFVLEdBQVksRUFBRSxDQUFDLENBQUMsVUFBVTs7SUEwTnhDLENBQUM7SUF2Tkcsd0JBQXdCO0lBRXhCLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBRSxZQUFZO0lBRXhDLENBQUM7SUFJRCxjQUFjO0lBQ2QsK0JBQWMsR0FBZDtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRO1FBRS9DLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVks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OlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vKlxyXG7or6XohJrmnKzlrZjmlL7lnKjnqoHnoLTlnLrmma/kuK3vvIzlv4XpobvopoHku47kuLvlnLrmma/kuK3liIfmjaLov4fmnaXmiY3og73mraPluLjov5DooYxcclxuXHJcbiovIFxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGppbm1haSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBqaW5tYWlfaW5kZXg6bnVtYmVyID0gMDsgICAgLy/ooajnpLrkuI3lkIznmoTnrYvohInvvIzlnKhjb2Nvc+mdouadv+S4reiwg+aVtO+8jOS9v+W+l+S4jeWQjOeahOeti+iEieiKgueCueWPr+S7peS9v+eUqOWQjOS4gOS4quiEmuacrFxyXG5cclxuICAgIGF0dHJpYnV0ZTpudW1iZXIgPSAwOyAgICAgIC8v5pqC5a2Y5pys6IqC54K5562L6ISJ5a+55bqU55qE5Lq654mp5bGe5oCnXHJcblxyXG5cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlzX2NsaWNrOmJvb2xlYW4gPSBmYWxzZTsgIC8v5o6n5Yi2562L6ISJ5raI5aSx5YmN5Y+q6IO954K55Ye75LiA5qyh562L6ISJXHJcblxyXG4gICAgc29ydF9hdHRyOm51bWJlcltdID0gW107Ly/ojrflj5bmjpLluo/lkI7lsZ7mgKfntKLlvJXnmoTmlbDnu4RcclxuXHJcblxyXG4gICAgcHJpdmF0ZSByYW5kb20xOm51bWJlciA9IDA7IC8v6ZqP5py65pWw55qE5Lqn55Sf77yM5Lqn55Sf5LqOc3RhcnTml7bvvIznlKjkuo7mjqfliLblsZ7mgKflr7nkuLnnlLDph4/nmoTlvbHlk43vvJvkuLnoja/mkqTlm57mk43kvZzlsIbph43nva7mlLnpmo/mnLrmlbDvvIzogIzop4Llr5/kuIvkuIDkuKrnqoHnoLTnu4/ohInnmoTlgLznmoTkuLnoja/vvIzmmK/kuI3kvJrmlLnlj5jor6Xpmo/mnLrmlbDjgILku47ogIzljLrliIbkuI3lkIzjgJDkuLnoja/jgJHnmoTmlYjmnpxcclxuICAgIFxyXG4gICAgcHJpdmF0ZSByYW5kb20yOm51bWJlciA9IDA7IC8v56ys5LqM56eN5oOF5Ya155qE6ZqP5py65pWw77yM5Y2z5b2T5YmN5Li555Sw5YC85aSn5LqOMTEwXHJcblxyXG4gICAgamlubWFpX2xvYzpudW1iZXJbXSA9IFtdOyAvL+iusOW9leW9k+WJjeeti+iEieS9jee9rlxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlc19nZXQoKTsgIC8v6aKE6L295pe25bCx5Yqg6L296I635Y+W5bGe5oCnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8v6I635Y+W5Lq654mp5YWr6aG55bGe5oCn5Yiw5pWw57uE5LitXHJcbiAgICBhdHRyaWJ1dGVzX2dldCgpeyAgXHJcbiAgICAgICAgbGV0IHBlcnNpc3QgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpO1xyXG4gICAgICAgIGxldCBhdHRfbmFtZSA9IHBlcnNpc3QuYXR0cmlidXRlX25hbWU7IC8v6I635Y+W5bGe5oCn5ZCN56ewXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0gcGVyc2lzdC5nZXRfYXR0cihhdHRfbmFtZVt0aGlzLmppbm1haV9pbmRleF0pOyAvL+iOt+WPluWvueW6lOe0ouW8leWxnuaAp+WQjeensOeahOWxnuaAp+WAvFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG5cdCAqIOeUn+aIkOiMg+WbtOmaj+acuuaVsFxyXG5cdCAqIEBNaW4g5pyA5bCP5YC8XHJcblx0ICogQE1heCDmnIDlpKflgLxcclxuICAgICAqIOe7meS6iOS4jeWQjOiKgueCueebuOWQjOeahOiEmuacrO+8jOavj+S4quiKgueCuemDveS8muWIhuWIq+aJp+ihjOS4gOasoeaUueiEmuacrOeahHN0YXJ0562J5pa55rOVXHJcblx0ICovXHJcblx0cHVibGljIEdldFJhbmRvbU51bShNaW4sIE1heCk6bnVtYmVyIHtcclxuXHRcdHZhciBSYW5nZSA9IE1heCAtIE1pbjtcclxuXHRcdHZhciBSYW5kID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHJldHVybiAoTWluICsgTWF0aC5yb3VuZChSYW5kICogUmFuZ2UpKTtcclxuXHR9XHJcblxyXG5cclxuICAgIGppbm1haSgpe1xyXG5cclxuXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLnqoHnoLRcIiwgY2MuQXVkaW9DbGlwLCAocmVzLGNsaXApPT57XHJcbiAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDAuMSk7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGF0dF9vcmRlciA9IHRoaXMuc29ydF9hdHRyLmluZGV4T2YodGhpcy5qaW5tYWlfaW5kZXgpOyAvL+iOt+W+l+acrOWxnuaAp+eahOaOkuW6j+S9jee9rlxyXG5cclxuICAgICAgICBsZXQgZG91YmxlX2VmZmVjdCA9IGNjLmZpbmQoJ2RhbnlhbzInKS5nZXRDb21wb25lbnQoJ2RhbnlhbycpLmdldF9kb3VibGVfZWZmZWN0KCk7ICAvL+S4ueiNrzLnmoTmlYjnm4rkuLrlj4zlgI3mlYjmnpzvvIzmiYDku6Xmo4DmtYtkYW55YW8y5LiL6ISa5pys55qEZG91YmxlX2VmZmVjdOe7hOS7tlxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkYW50aWFuX25vdyA9IGNjLmZpbmQoJ2RhbnRpYW4nKS5nZXRDb21wb25lbnQoJ2RhbnRpYW4nKS5kYW50aWFuX25vdztcclxuICAgICAgICAvL+WwhuS6uueJqeWxnuaAp+WAvOWSjOS6uueJqeeqgeegtOivpeeti+iEieW4puadpeeahOaUtuebiue7k+WQiFxyXG5cclxuICAgICAgICBsZXQgZGFudGlhbl9hZGQgPSAwOy8v56qB56C06K+l5p2h562L6ISJ55qE5Li555Sw5aKe5Yqg6YePXHJcbiAgICAgICAgaWYoZGFudGlhbl9ub3cgPD0gMTEwKXtcclxuICAgICAgICAgICAgZGFudGlhbl9hZGQgPSAoMTAwLWF0dF9vcmRlcioxMCkgKyB0aGlzLnJhbmRvbTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGRhbnRpYW5fYWRkID0gKDIxMC1kYW50aWFuX25vdykrdGhpcy5yYW5kb20yO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+eUqOS6juOAkOS4ueiNrzLjgJHmlYjmnpxcclxuICAgICAgICBpZihkb3VibGVfZWZmZWN0KXtcclxuICAgICAgICAgICAgZGFudGlhbl9hZGQgKj0gMjtcclxuICAgICAgICAgICAgY2MuZmluZCgnZGFueWFvMicpLmdldENvbXBvbmVudCgnZGFueWFvJykuZG91YmxlX2VmZmVjdCA9IGZhbHNlOyAvL+WPquiDveWPjOWAjeS4gOasoVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmKGNjLmZpbmQoJ2RhbnlhbzQnKS5nZXRDb21wb25lbnQoJ2RhbnlhbycpLmdldF95dWNlX2VmZmVjdCgpKXsgIC8v44CQ5Li56I2vNOOAkeaViOaenO+8jOWmguaenOacjeeUqOS4ueiNr++8jOW8gOWQr+S6humihOa1i+aViOaenFxyXG5cclxuICAgICAgICAgICAgdGhpcy5qaW5tYWlfdGlzaGkoJ+S4ueeUsOmHj+WinuWKoCcrU3RyaW5nKGRhbnRpYW5fYWRkKSk7IC8v5aKe5Yqg55qEdWnmmL7npLrvvIzlj6rmmL7npLrvvIzogIzkuI3ov5vooYzkuLnnlLDph4/nmoTlop7liqBcclxuICAgICAgICAgICAgY2MuZmluZCgnZGFueWFvNCcpLmdldENvbXBvbmVudCgnZGFueWFvJykuc2V0X3l1Y2VfZWZmZWN0KGZhbHNlKTsgLy/lj6rog73pooTmtYvkuIDmrKHvvIzph43mlrDorr7nva7kuLrotJ/mlbBcclxuICAgICAgICAgICAgcmV0dXJuIDsgLy/pooTmtYvlrozmr5XlsLHnm7TmjqXov5Tlm57vvIzkuI3miafooYzkuIvpnaLnmoTor63lj6XkuoZcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHByZV9udW0gPSBjYy5maW5kKCdkYW50aWFuJykuZ2V0Q29tcG9uZW50KCdkYW50aWFuJykuZXhwbG9zaW9uICsgY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLmRhbnRpYW5fbm93OyAgLy/mk43kvZzliY3kuLnnlLDlkozkuLnnlLDniIbngrjnmoTmlbDlgLws44CQ55So5LqO5Li56I2vM+eahOaViOaenOOAkVxyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLmRhbnRpYW5fZ2FpbihkYW50aWFuX2FkZCk7Ly/lop7liqDkuLnnlLDph49cclxuXHJcbiAgICAgICAgY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLnR1cG9fbnVtICs9IDE7Ly/nqoHnoLTnrYvohInvvIznqoHnoLTnrYvohInmlbDph48rMVxyXG5cclxuICAgICAgICB0aGlzLmppbm1haV90aXNoaSgn5Li555Sw6YeP5aKe5YqgJytTdHJpbmcoZGFudGlhbl9hZGQpKTsgLy/lop7liqDnmoR1aeaYvuekulxyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZCgnZGFueWFvMycpLmdldENvbXBvbmVudCgnZGFueWFvJykucHVzaF9jaGVodWlfamlubWFpKHRoaXMubm9kZS5uYW1lKTsvL+OAkOeUqOS6juS4ueiNrzPmlYjmnpznmoTlhaXmoIjjgJHlhaXmoIjnqoHnoLTnmoTnrYvohInlkI3lrZdcclxuICAgICAgICAvL+OAkOeUqOS6juS4ueiNrzPnmoTmlYjmnpzjgJFzdGFydFxyXG4gICAgICAgIGxldCBjaGFuZ2VfbnVtID0gY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLmV4cGxvc2lvbiArIGNjLmZpbmQoJ2RhbnRpYW4nKS5nZXRDb21wb25lbnQoJ2RhbnRpYW4nKS5kYW50aWFuX25vdyAtIHByZV9udW07IC8v5pON5L2c5ZCO5Li555Sw5ZKM5Li555Sw6LaF5Ye65YC855qE6K+l5Y+Y6YeP77yM55Sx5LqOZXhwbG9zaW9u5Y+q5Lya5YaNZGFudGlhbl9ub3fmu6Hml7blop7liqDvvIzmiYDku6Xlj6/ku6XlsIbor6XlgLzmlL7lhaVkYW55YW9fM+eahOagiOS4rVxyXG4gICAgICAgIGNjLmZpbmQoJ2RhbnlhbzMnKS5nZXRDb21wb25lbnQoJ2RhbnlhbycpLnB1c2hfY2hlaHVpX2VmZmVjdChjaGFuZ2VfbnVtKTsgXHJcbiAgICAgICAgLy/lj6blpJbkuIDkuKrmoIjnmoTov5vlhaXmk43kvZzlhpnlnKjnrYvohInlpIRcclxuICAgICAgICAvL+OAkOeUqOS6juS4ueiNrzPnmoTmlYjmnpzjgJFlbmRcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/mjqfliLbnu4/ohInmtojlpLFcclxuICAgIGRpc2FwcGVhcigpe1xyXG4gICAgICAgIGxldCBzcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57ICAgICAgICAgIC8v5Yqo5oCB5raI5aSxXHJcbiAgICAgICAgICAgIHNwLmZpbGxSYW5nZSAtPSAoMS8xMClcclxuICAgICAgICB9LCAxLzEwMCwgMTApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+aOp+WItue7j+iEieWHuueOsCznlKjkuo7jgJDkuLnoja8y44CR55qE5pKk5Zue5pON5L2cXHJcbiAgICBhcHBlYXIoKXtcclxuICAgICAgICAvL+aSpOWbnuS5i+WQjumHjee9ruS4pOenjeaDheWGteeahOmaj+acuuaVsFxyXG4gICAgICAgIHRoaXMucmFuZG9tMSA9IHRoaXMuR2V0UmFuZG9tTnVtKC0xMCwxMCk7XHJcbiAgICAgICAgbGV0IGF0dF9vcmRlciA9IHRoaXMuc29ydF9hdHRyLmluZGV4T2YodGhpcy5qaW5tYWlfaW5kZXgpOyAvL+iOt+W+l+acrOWxnuaAp+eahOaOkuW6j+S9jee9rlxyXG4gICAgICAgIHRoaXMucmFuZG9tMiA9IHRoaXMuR2V0UmFuZG9tTnVtKCg5LWF0dF9vcmRlcikqKC0xMCksICg5LWF0dF9vcmRlcikqMTApO1xyXG5cclxuICAgICAgICBjYy5maW5kKCdkYW50aWFuJykuZ2V0Q29tcG9uZW50KCdkYW50aWFuJykudHVwb19udW0gLT0gMTsgLy/mkqTlm57nrYvohInvvIznqoHnoLTmlbDph4/lh4/kuIBcclxuXHJcbiAgICAgICAgbGV0IHNwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PnsgICAgICAgICAgLy/liqjmgIHlh7rnjrBcclxuICAgICAgICAgICAgc3AuZmlsbFJhbmdlICs9ICgxLzEwKVxyXG4gICAgICAgIH0sIDEvMTAwLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ngrnlh7vnrYvohInnmoTmj5DnpLrmlYjmnpxcclxuICAgIGppbm1haV90aXNoaShuYW1lOnN0cmluZyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGppbm1haXR1cG8gPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIHZhciB0aXNoaSA9IGppbm1haXR1cG8uYWRkQ29tcG9uZW50KGNjLkxhYmVsKTsgLy/lop7liqBsYWJlbOe7hOS7tuW5tui1i+e7meS4ueiNr+aVsOmHj1xyXG4gICAgICAgIGppbm1haXR1cG8uY29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7IC8v5bCG5a2X5L2T5pS55Li655m96ImyXHJcbiAgICAgICAgLy/orr7nva7mlofmnKzlpKflsI9cclxuICAgICAgICB0aXNoaS5mb250U2l6ZSA9IDQwO1xyXG4gICAgICAgIHRpc2hpLmxpbmVIZWlnaHQgPSA0MDtcclxuIFxyXG4gICAgICAgIGppbm1haXR1cG8uc2V0UGFyZW50KHRoaXMubm9kZSk7ICAvL+eItuiKgueCueaYr3RoaXMubm9kZeaJjeiDveWHuuadpVxyXG4gICAgICAgIGppbm1haXR1cG8ueCA9IDA7IC8v55u45a+55LqO54i26IqC54K555qE5qiq5Z2Q5qCH5L2N572u5LiN5Y+YXHJcbiAgICAgICAgamlubWFpdHVwby55ID0gMDsvL+ebuOWvueS6jueItuiKgueCueeahOe6teWdkOagh+WcqOS4i+mdouS4gOeCueeahOS9jee9rlxyXG4gICAgICAgIHRpc2hpLnN0cmluZyA9IG5hbWU7ICBcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgamlubWFpdHVwby55ICs9IDU7ICAgIC8v5aKe5YqgNeWSjOWHj+WwkTAuMDHpg73lj6/ku6Xlop7lv6vmj5DnpLrpgJ/luqZcclxuICAgICAgICB9LCAwLjAxLCAyMCk7XHJcblxyXG4gICAgICAgIC8v5bu25pe25pyA5ZCO55qE5pe26Ze05Li6bXMs5bu25pe2MeenkumUgOavge+8jOWmguaenOWcqOS4iumdoueahHNjaGVkdWxl5Ye95pWw6L+Y5rKh5omn6KGM5a6M5bCx6ZSA5q+B77yM5Lya5oql6ZSZXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBqaW5tYWl0dXBvLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuamlubWFpX2xvYyA9IFt0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnldOyAvL+iOt+WPlueti+iEieWIneWni+S9jee9rlxyXG4gICAgICAgIHRoaXMuc29ydF9hdHRyID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5zb3J0X2F0dHIoKTsgLy/ojrflj5bmjpLluo/lkI7lsZ7mgKfntKLlvJXnmoTmlbDnu4RcclxuICAgICAgICBsZXQgYXR0X29yZGVyID0gdGhpcy5zb3J0X2F0dHIuaW5kZXhPZih0aGlzLmppbm1haV9pbmRleCk7IC8v6I635b6X5pys5bGe5oCn55qE5o6S5bqP5L2N572uXHJcblxyXG4gICAgICAgIC8v5qC55o2u5o6S5bqP5pS55Y+Y6aKc6ImyXHJcbiAgICAgICAgLy90aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcihhdHRfb3JkZXIqMjAsMzAsODApO1xyXG5cclxuICAgICAgICB0aGlzLnJhbmRvbTEgPSB0aGlzLkdldFJhbmRvbU51bSgtMTAsMTApOyAvL+iOt+WPli0xMOWIsDEw55qE6ZqP5py65pWwXHJcbiAgICAgICAgdGhpcy5yYW5kb20yID0gdGhpcy5HZXRSYW5kb21OdW0oKDktYXR0X29yZGVyKSooLTEwKSwgKDktYXR0X29yZGVyKSoxMCk7Ly/ojrflj5bnrKzkuozkuKrpmo/mnLrmlbBcclxuXHJcbiAgICAgICAgLy/lj6rog73ngrnlh7vkuIDmrKHpnZnohIlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIC8v44CQ5Li56I2vNOOAkeeahOaViOaenO+8jOmihOa1i+WujOavleebtOaOpei/lOWbnlxyXG4gICAgICAgICAgICBpZihjYy5maW5kKCdkYW55YW80JykuZ2V0Q29tcG9uZW50KCdkYW55YW8nKS5nZXRfeXVjZV9lZmZlY3QoKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppbm1haSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzX2NsaWNrKXsgLy/noa7kv53lj6rog73nqoHnoLTkuIDmrKHpnZnohInvvIzljbPngrnlh7vkuIDmrKHov5jmsqHmtojlpLHml7blsLHkuI3og73ngrnkuoZcclxuICAgICAgICAgICAgICAgIHRoaXMuamlubWFpKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2NsaWNrID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRpc2FwcGVhcigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIG1vdmUoKXtcclxuXHJcbiAgICAgICAgbGV0IGF0dF9vcmRlciA9IHRoaXMuc29ydF9hdHRyLmluZGV4T2YodGhpcy5qaW5tYWlfaW5kZXgpOyAvL+iOt+W+l+acrOWxnuaAp+eahOaOkuW6j+S9jee9rlxyXG5cclxuICAgICAgICBsZXQgcmFuZG9tX2xvY194ID0gdGhpcy5HZXRSYW5kb21OdW0oLTEqKDktYXR0X29yZGVyKSwgOS1hdHRfb3JkZXIpOyAgLy/mjpLlkI3otorpnaDliY3nmoTnrYvohInotorkuI3nqLPlrppcclxuICAgICAgICBsZXQgcmFuZG9tX2xvY195ID0gdGhpcy5HZXRSYW5kb21OdW0oLTEqKDktYXR0X29yZGVyKSw5LWF0dF9vcmRlcik7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IC10aGlzLmppbm1haV9sb2NbMF0gPCAtNCl7XHJcbiAgICAgICAgICAgIHJhbmRvbV9sb2NfeCA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS54IC10aGlzLmppbm1haV9sb2NbMF0gPiA0KXtcclxuICAgICAgICAgICAgcmFuZG9tX2xvY194ID0gLTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMubm9kZS55IC10aGlzLmppbm1haV9sb2NbMV0gPCAtNCl7XHJcbiAgICAgICAgICAgIHJhbmRvbV9sb2NfeSA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS55IC10aGlzLmppbm1haV9sb2NbMV0gPiA0KXtcclxuICAgICAgICAgICAgcmFuZG9tX2xvY195ID0gLTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS54Kz1yYW5kb21fbG9jX3g7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkrPXJhbmRvbV9sb2NfeTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/persist_node.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c28eu67u9MVpWnau1ZfGx8', 'persist_node');
// script/persist_node.ts

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
var persist_node = /** @class */ (function (_super) {
    __extends(persist_node, _super);
    function persist_node() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.is_create_bubble = false; //是否要产生气泡，或者说是否打坐修炼
        _this.beibao = null;
        _this.attribute_panel = null;
        _this.exp = null;
        _this.event_lib = null;
        _this.focus = null;
        //lxt:精力条api
        _this.energy = 500;
        _this.event_permitted = true;
        _this.energy_recover = true;
        //寿命
        _this.age = 18;
        _this.age_limited = 0;
        //事件
        _this.event_grade_map = null;
        _this.grade_map = null;
        // lxt:属性
        _this.attribute_name = []; //记录属性的名称
        _this.attributes = null;
        //以上为快排函数****************
        //以下是背包属性
        //各类物品
        _this.item0 = 0;
        _this.item1 = 0;
        _this.item2 = 0;
        _this.item3 = 0;
        _this.item4 = 0;
        _this.item5 = 0;
        _this.item6 = 0;
        _this.item7 = 0;
        _this.item_name = [];
        //人物成长属性
        //人物等级
        _this.level = 0;
        _this.sub_level = 0;
        //人物当前经验值
        _this.exp_now = 0;
        //日志系统
        _this.log_loc = new cc.Vec2(0, 0);
        _this.log_freq = 1;
        _this.event_all = []; //存放所有的日志，日志节点初始化时写入
        _this.event_add = []; //存放新增加的日志，如果有新的，则日志节点被点开时写入
        return _this;
    }
    persist_node.prototype.gaussian_random = function (mean, sigma, n) {
        if (mean === void 0) { mean = 0; }
        if (sigma === void 0) { sigma = 1; }
        if (n === void 0) { n = 12; }
        var ret = 0.;
        for (var i = 0; i < n; ++i) {
            ret += Math.random();
        }
        return mean + (ret - (n / 2)) * sigma;
    };
    persist_node.prototype.max_energy = function () {
        return 500;
    };
    persist_node.prototype.setEnergy = function (e) {
        this.energy = e;
    };
    persist_node.prototype.changeEnergy = function (e) {
        this.energy = this.energy + e <= this.max_energy() ? this.energy + e : this.max_energy();
        //console.debug(this.energy)
    };
    persist_node.prototype.getEnergy = function () {
        return this.energy;
    };
    persist_node.prototype.addAge = function (n) {
        if (n === void 0) { n = 5; }
        this.age = this.age + n <= this.age_limited ? this.age + n : this.age_limited;
    };
    persist_node.prototype.getAge = function () {
        return this.age;
    };
    persist_node.prototype.initAge = function () {
        this.age_limited = Math.round(100 + this.gaussian_random(-20, 10));
    };
    persist_node.prototype.dispatch_event_without_requirement = function (group) {
        //先进行事件类型判断，类型为 1_2[_3], 123是不同属性名称， 1决定事件是否出现，2决定分支和收益系数，3决定事件是否只出现一次
        var group_name = Object.keys(this.event_lib)[group];
        var inconst_events = this.event_lib[group_name]['events'][1];
        var inconst_names = Object.keys(inconst_events);
        //console.debug(inconst_names)
        var t = new Array();
        var ret = [];
        for (var _i = 0, inconst_names_1 = inconst_names; _i < inconst_names_1.length; _i++) {
            var name = inconst_names_1[_i];
            var types = inconst_events[name][0].toString().split('，');
            //console.debug(types[0].trim())
            if (types[0].trim() == '0' || types[0].trim() == '_')
                t.push(name.trim());
        }
        //console.debug('detect:')
        //console.debug(t)
        t.sort(function () {
            return 0.5 - Math.random();
        });
        ret.push(t[0]);
        ret.push(inconst_events[t[0]][0]);
        ret.push(inconst_events[t[0]][1]);
        ret.push(inconst_events[t[0]][2]);
        //console.debug('return: ')
        //console.debug(t[0])
        //console.debug(ret)
        return ret;
    };
    persist_node.prototype.dispatch_event = function (group, num_0, num_1) {
        if (num_0 === void 0) { num_0 = 2; }
        if (num_1 === void 0) { num_1 = 3; }
        var ret = new Array();
        var group_name = Object.keys(this.event_lib)[group];
        var const_events = this.event_lib[group_name]['events'][0];
        var inconst_events = this.event_lib[group_name]['events'][1];
        var const_names = Object.keys(const_events);
        var inconst_names = Object.keys(inconst_events);
        const_names.sort(function () {
            return 0.5 - Math.random();
        });
        inconst_names.sort(function () {
            return 0.5 - Math.random();
        });
        // 分发的事件为一个数组[[title, type, reward, description], [title, type, reward, description]...]
        for (var i = 0; i < num_0; ++i) {
            var t = new Array(4);
            t[0] = const_names[i];
            t[1] = const_events[const_names[i]][0];
            t[2] = const_events[const_names[i]][1];
            t[3] = const_events[const_names[i]][2];
            //console.debug(t)
            ret.push(t);
        }
        for (var i = 0; i < num_1; ++i) {
            var t = new Array(4);
            t[0] = inconst_names[i];
            t[1] = inconst_events[inconst_names[i]][0];
            t[2] = inconst_events[inconst_names[i]][1];
            t[3] = inconst_events[inconst_names[i]][2];
            //console.debug(t)
            ret.push(t);
        }
        //console.debug(ret)
        return ret;
        //console.debug(typeof(const_names))
        //console.debug(Object.keys(const_events))
        //console.debug(Object.keys(inconst_events))
    };
    persist_node.prototype.match_event_grade = function () {
        //假设21点抽牌概率是均匀的，每张牌的期望消耗应该是7*500/21=167，
        //范围应该是1*500/21=24~13*500/21=310，牌的张数根据这个期望均匀分布
        var num_groups = Object.keys(this.event_lib).length;
        //console.debug(num_groups)
        this.grade_map = new Map();
        for (var i = 0; i < num_groups; ++i) {
            this.event_grade_map.set(i, new Map()); //为每个组都分配一个grade map,每个组的每个事件对应一个值(精力消耗)
            this.grade_map.set(i, new Map());
            var const_events = this.event_lib[Object.keys(this.event_lib)[i]]['events'][0];
            var inconst_events = this.event_lib[Object.keys(this.event_lib)[i]]['events'][1];
            var const_titles = Object.keys(const_events);
            var inconst_titles = Object.keys(inconst_events);
            //console.debug(const_titles)
            //console.debug(inconst_titles)
            const_titles.sort(function () {
                return 0.5 - Math.random();
            });
            inconst_titles.sort(function () {
                return 0.5 - Math.random();
            });
            var interval_const = const_titles.length < 13 ? (310 - 24) / (const_titles.length - 1) : (310 - 24) / 13;
            var interval_inconst = inconst_titles.length < 13 ? (310 - 24) / (inconst_titles.length - 1) : (310 - 24) / 13;
            var upper = const_titles.length <= 13 ? const_titles.length : 13;
            for (var j = 0; j < upper; ++j) {
                this.event_grade_map.get(i).set(const_titles[j], 24 + j * interval_const);
                this.grade_map.get(i).set(const_titles[j], j);
            }
            for (var j = upper; j < const_titles.length; ++j) {
                var grade = Math.round(Math.random() * 13);
                this.event_grade_map.get(i).set(const_titles[j], 24 + grade * interval_const);
                this.grade_map.get(i).set(const_titles[j], grade);
            }
            upper = inconst_titles.length <= 13 ? inconst_titles.length : 13;
            for (var j = 0; j < upper; ++j) {
                this.event_grade_map.get(i).set(inconst_titles[j], 24 + j * interval_inconst);
                this.grade_map.get(i).set(inconst_titles[j], j);
            }
            for (var j = upper; j < inconst_titles.length; ++j) {
                var grade = Math.round(Math.random() * 13);
                this.event_grade_map.get(i).set(inconst_titles[j], 24 + grade * interval_inconst);
                this.grade_map.get(i).set(inconst_titles[j], grade);
            }
        }
    };
    persist_node.prototype.get_event_energy = function (group_idx, event_title) {
        return this.event_grade_map.get(group_idx).get(event_title) + this.gaussian_random(0, 10);
    };
    persist_node.prototype.get_event_grade = function (group_idx, event_title) {
        return this.grade_map.get(group_idx).get(event_title);
    };
    persist_node.prototype.rec_gaussian = function (mean, sigma, lower, upper) {
        if (mean === void 0) { mean = 0.5; }
        if (sigma === void 0) { sigma = 0.2; }
        if (lower === void 0) { lower = 0.2; }
        if (upper === void 0) { upper = 1.0; }
        var a = cc.find('persist_node').getComponent('persist_node').gaussian_random(mean, sigma);
        if (a <= lower)
            return lower;
        else if (a >= upper)
            return upper;
        return a;
    };
    persist_node.prototype.set_attr = function (attr_name, attr_value) {
        this.attributes.set(attr_name, attr_value);
    };
    persist_node.prototype.change_attr = function (attr_name, attr_value) {
        if (this.attributes.has(attr_name) && attr_value + this.attributes.get(attr_name) < 0)
            this.attributes.set(attr_name, 0);
        else if (this.attributes.has(attr_name))
            this.attributes.set(attr_name, attr_value);
        else
            this.attributes.set(attr_name, attr_value + this.attributes.get(attr_name));
    };
    persist_node.prototype.get_attr = function (attr_name) {
        if (!this.attributes.get(attr_name))
            this.attributes.set(attr_name, Math.round(this.rec_gaussian() * 100));
        return this.attributes.get(attr_name);
    };
    persist_node.prototype.get_avg_attr = function () {
        //console.debug('getavg')
        var sum = 0;
        var attr = Array.from(this.attributes);
        //console.debug('attr')
        //console.debug(attr.length)
        for (var i = 0; i < attr.length; ++i) {
            sum += attr[i][1];
            //console.debug(sum.toString())
        }
        //sum += attr[i][1]
        return sum / attr.length;
    };
    persist_node.prototype.init_attr = function () {
        for (var i = 0; i < this.attribute_name.length; ++i) {
            var val = Math.round(this.rec_gaussian() * 100);
            this.set_attr(this.attribute_name[i], val);
            //console.debug(this.attribute_name[i])
            //console.debug('value: '+val.toString())
        }
    };
    persist_node.prototype.sort_attr = function () {
        var attr_value_array = [];
        var index = [];
        for (var i = 0; i < this.attribute_name.length; ++i) {
            attr_value_array.push(this.get_attr(this.attribute_name[i]));
            index.push(i); //保存下标，跟着快排一起排序
        }
        this.quick_sort(attr_value_array, index, 0, attr_value_array.length - 1); //进行排序
        return index; //index最后保存各个元素下标所在的位置，比如index[3] = 5，即第5号属性排第3+1=4位
    };
    //以下为快排函数*********
    persist_node.prototype.quick_sort = function (input, index, start, end) {
        if (start >= end) {
            return;
        }
        var pivotIndex = this.partition(input, index, start, end); // 1.
        this.quick_sort(input, index, start, pivotIndex - 1); // 2.
        this.quick_sort(input, index, pivotIndex + 1, end);
    };
    persist_node.prototype.partition = function (input, index, start, end) {
        var pivot = input[start]; // 1.
        var pivot_idx = index[start];
        var left = start; // 2.
        var right = end; // 3.
        while (left != right) {
            while (left < right && input[right] > pivot) { // 4.
                right--;
            }
            while (left < right && input[left] <= pivot) { // 5.
                left++;
            }
            if (left < right) { // 6.
                var tmp = input[left];
                input[left] = input[right];
                input[right] = tmp;
                var idx = index[left];
                index[left] = index[right];
                index[right] = idx;
            }
        }
        input[start] = input[left]; // 7.
        input[left] = pivot;
        index[start] = index[left];
        index[left] = pivot_idx;
        return left;
    };
    //设置属性的数值，选中要更改的属性，然后设置数值
    persist_node.prototype.setitem = function (itemID, itemnum) {
        var a = this.getitem();
        if (a[itemID] + itemnum < 0) {
            //防止小于0的情况
        }
        else {
            switch (itemID) {
                case itemID = 0:
                    this.item0 += itemnum;
                    break;
                case itemID = 1:
                    this.item1 += itemnum;
                    break;
                case itemID = 2:
                    this.item2 += itemnum;
                    break;
                case itemID = 3:
                    this.item3 += itemnum;
                    break;
                case itemID = 4:
                    this.item4 += itemnum;
                    break;
                case itemID = 5:
                    this.item5 += itemnum;
                    break;
                case itemID = 6:
                    this.item6 += itemnum;
                    break;
                case itemID = 7:
                    this.item7 += itemnum;
                    break;
                default:
                    break;
            }
        }
    };
    //获取属性值，返回属性值数组
    persist_node.prototype.getitem = function () {
        var itemarray = [this.item0, this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7];
        //console.debug("属性值获取成功"+ String(itemarray));
        return itemarray;
    };
    persist_node.prototype.get_level = function () {
        var level_name = ['练气', '筑基', '金丹', '元婴'];
        return level_name[this.level % 4];
    };
    persist_node.prototype.up_level = function () {
        this.level += 1;
        this.sub_level = 0;
        this.age_limited *= 2.5;
        this.age_limited -= this.gaussian_random(0, (this.level + 1) * 10);
    };
    persist_node.prototype.get_sublevel = function () {
        var level_name = ['初期', '中期', '后期'];
        return level_name[this.sub_level];
    };
    persist_node.prototype.up_sublevel = function () {
        this.sub_level += 1;
    };
    persist_node.prototype.exp_inf = function () {
        return [this.level, this.exp_now];
    };
    //用于exp节点初始化经验值条，以及返回等级和经验值，【lxt】：是不是初始化不太需要进度慢慢爬，直接显示经验值就好，否则怪怪的感觉
    persist_node.prototype.exp_init = function () {
        var exp = cc.find('exp').getComponent(cc.Sprite);
        /*
        this.schedule(()=>{
            exp.fillRange+= (1/this.exp_required());  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1/this.exp_required()/25, this.exp_now);
        */
        exp.fillRange = 0;
        var exp_now = this.exp_now;
        this.exp_now = 0;
        //this.exp_gain(-exp_now);   //【陈晟】修改了一个bug，每次初始化时需要重新执行一次exp_gain()方法，让经验重新上涨，直接改变fillRange不管用
        return [this.level, this.exp_now];
    };
    //不同等级的所需经验
    persist_node.prototype.exp_required = function () {
        return (Math.pow(2, (this.sub_level + 1))) * 100 * (Math.pow(10, this.level)); //可以设置其他单调递增函数
    };
    /*
    //判断经验值是否溢出
    exp_filled(exp_now:number, exp_add:number){
        //如果经验值增长超过最大经验值，则设置为当前等级的最大经验值，否则直接相加作为当前经验值
        if((exp_now+exp_add) <= this.exp_required()){
            this.exp_now += exp_add;
        }
        else{
            this.exp_now = this.exp_required();
        }
    }
    */
    //增长经验条的方法
    persist_node.prototype.exp_gain = function (event_exp, option) {
        //【刘鑫涛】：此处是否不在方法内判别事件类型呢，将此方法只作为操作数据之目的，要增加多少经验由外部逻辑指定，然后由此方法将经验条加到那个位置
        //【陈晟】涛哥这里改的挺好，控制增长时间为1秒
        // 即level1满值200经验，传入参数代表增加经验值
        //延时函数让经验条可以延时连续上涨
        var _this = this;
        if (option === void 0) { option = true; }
        var toward = event_exp / Math.abs(event_exp);
        if (event_exp == 0) { //【陈晟】这里修复了一个bug，即toward不能0/0无限大，不然fillRange会直接满
            toward = 0;
        }
        var end = this.exp_now + event_exp;
        if (end > this.exp_required())
            end = this.exp_required();
        else if (end < 0)
            end = 0;
        var gap = Math.abs(end - this.exp_now);
        //let toward = this.exp_now - begin > 0 ? 1 : -1 //如果经验正在减少
        this.exp_now = end;
        var exp = cc.find('exp').getComponent(cc.Sprite);
        if (option)
            this.schedule(function () {
                exp.fillRange += ((gap / 30) / _this.exp_required() * toward); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
            }, (gap / 30) / this.exp_required(), 30); //这里连续增长的gap要等于1/this.exp_required()*toward的倒数才能增长到，并且gap越小，前面的间隔时间也越小，则增长速度越快
    };
    //日志初始化并写入, isadd代表是不是再打开日志面板时写入新日志，如果是则一边写一边清空新增加的事件，防止重复写入
    persist_node.prototype.log_init = function (isadd) {
        if (isadd === void 0) { isadd = true; }
        if (isadd == true) {
            for (var i = 0; i < this.event_add.length; i++) {
                this.log_add(this.event_add[i]);
            }
            var len = this.event_add.length; //必须先得到长度，不然会少pop一个
            for (var i = 0; i < len; i++) {
                this.event_add.pop();
            }
        }
        else {
            this.log_loc.y = -200; //重新写的时候 要初始化写入文本的y轴位置
            for (var i = 0; i < this.event_all.length; i++) {
                this.log_add(this.event_all[i]);
            }
            var len = this.event_add.length; //如果初始化日志节点时新增事件中有事件，也要pop出去
            for (var i = 0; i < len; i++) {
                this.event_add.pop();
            }
        }
    };
    //保存日志内容
    persist_node.prototype.log_write = function (event) {
        var len = this.event_all.push(event);
        var len = this.event_add.push(event);
    };
    //日志初始化写入方阿飞
    persist_node.prototype.log_add = function (event) {
        //写入日志的准备
        var content = cc.find('log_panel').getChildByName('log_ScrollView').getChildByName("view").getChildByName("content"); //找到要保存日志的父节点
        var new_content = new cc.Node(); //初始化新节点为实例化的一个节点
        var log_text = new_content.addComponent(cc.Label); //增加label组件并赋给log_text
        new_content.color = cc.color(0, 0, 0); //将字体改为黑色
        //设置文本大小
        log_text.fontSize = 50;
        log_text.lineHeight = 50;
        log_text.enableBold = true;
        new_content.setParent(content); //设置根节点为content
        new_content.x = this.log_loc.x;
        new_content.y = this.log_loc.y;
        //将超过长度的字符串加上换行符
        var event_copy = [];
        var count_row = 1;
        for (var i = 0; i < event.length; i++) {
            var len = event_copy.push(event[i]);
            if (i % 16 == 0 && i != 0) { //每16个字符加一个换行符
                count_row += 1;
                var len = event_copy.push('\n');
                var len = event_copy.push('\n');
            }
        }
        this.log_loc.y -= (150 * count_row + 80); //下一次记录位置往下移动
        this.log_freq += 1; //记录日志数量+1
        content.setContentSize(900, 400 * this.log_freq); //日志高度增加
        log_text.string = event_copy.join(''); //属性改变
    };
    persist_node.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node); //设置本节点为常驻节点
        this.log_loc.y = -200;
        this.attribute_name = ['战力', '心境', '元神', '福源', '灵根', '悟性', '善', '恶', '特殊'];
        this.item_name = [];
        this.attributes = new Map();
        this.init_attr();
        this.initAge();
    };
    persist_node.prototype.start = function () {
        var _this = this;
        //console.debug(this.gaussian_random(0,20,100))
        cc.loader.loadRes('events.json', function (err, obj) {
            //console.debug('flag...')
            if (err) {
                //console.debug('err')
                console.debug(err);
                return;
            }
            console.debug('read...');
            _this.event_lib = obj.json;
            _this.event_grade_map = new Map();
        });
    };
    persist_node.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], persist_node.prototype, "beibao", void 0);
    __decorate([
        property(cc.Node)
    ], persist_node.prototype, "attribute_panel", void 0);
    __decorate([
        property(cc.Node)
    ], persist_node.prototype, "exp", void 0);
    __decorate([
        property(Object)
    ], persist_node.prototype, "event_lib", void 0);
    __decorate([
        property
    ], persist_node.prototype, "focus", void 0);
    __decorate([
        property
    ], persist_node.prototype, "energy", void 0);
    __decorate([
        property
    ], persist_node.prototype, "event_permitted", void 0);
    __decorate([
        property
    ], persist_node.prototype, "energy_recover", void 0);
    __decorate([
        property
    ], persist_node.prototype, "age", void 0);
    __decorate([
        property
    ], persist_node.prototype, "age_limited", void 0);
    __decorate([
        property
    ], persist_node.prototype, "event_grade_map", void 0);
    __decorate([
        property
    ], persist_node.prototype, "grade_map", void 0);
    __decorate([
        property
    ], persist_node.prototype, "attribute_name", void 0);
    __decorate([
        property
    ], persist_node.prototype, "attributes", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item0", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item1", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item2", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item3", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item4", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item5", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item6", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item7", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item_name", void 0);
    __decorate([
        property
    ], persist_node.prototype, "level", void 0);
    __decorate([
        property
    ], persist_node.prototype, "sub_level", void 0);
    __decorate([
        property
    ], persist_node.prototype, "exp_now", void 0);
    __decorate([
        property(cc.Vec2)
    ], persist_node.prototype, "log_loc", void 0);
    __decorate([
        property
    ], persist_node.prototype, "log_freq", void 0);
    __decorate([
        property
    ], persist_node.prototype, "event_all", void 0);
    __decorate([
        property
    ], persist_node.prototype, "event_add", void 0);
    persist_node = __decorate([
        ccclass
    ], persist_node);
    return persist_node;
}(cc.Component));
exports.default = persist_node;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwZXJzaXN0X25vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFncEJDO1FBcG9CRyxzQkFBZ0IsR0FBVyxLQUFLLENBQUMsQ0FBRSxtQkFBbUI7UUFJdEQsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFXLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQVMsSUFBSSxDQUFDO1FBR2pCLGVBQVMsR0FBVyxJQUFJLENBQUE7UUFHeEIsV0FBSyxHQUFHLElBQUksQ0FBQTtRQUdaLFlBQVk7UUFFWixZQUFNLEdBQVcsR0FBRyxDQUFBO1FBR3BCLHFCQUFlLEdBQVksSUFBSSxDQUFBO1FBRy9CLG9CQUFjLEdBQVksSUFBSSxDQUFBO1FBdUI5QixJQUFJO1FBRUosU0FBRyxHQUFXLEVBQUUsQ0FBQTtRQUdoQixpQkFBVyxHQUFXLENBQUMsQ0FBQTtRQWlCdkIsSUFBSTtRQUVKLHFCQUFlLEdBQUcsSUFBSSxDQUFBO1FBR3RCLGVBQVMsR0FBRyxJQUFJLENBQUE7UUFvSmhCLFNBQVM7UUFFVCxvQkFBYyxHQUFZLEVBQUUsQ0FBQyxDQUFDLFNBQVM7UUFHL0IsZ0JBQVUsR0FBRyxJQUFJLENBQUE7UUErR3pCLHlCQUF5QjtRQUd6QixTQUFTO1FBQ1QsTUFBTTtRQUVFLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFdBQUssR0FBVyxDQUFDLENB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QURDLFFBQVE7bURBQ2U7SUFHeEI7UUFEQyxRQUFRO21EQUNlO0lBN2hCUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBZ3BCaEM7SUFBRCxtQkFBQztDQWhwQkQsQUFncEJDLENBaHBCeUMsRUFBRSxDQUFDLFNBQVMsR0FncEJyRDtrQkFocEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzaXN0X25vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgZ2F1c3NpYW5fcmFuZG9tKG1lYW49MCwgc2lnbWE9MSwgbj0xMikgLy8gMC0x5LiK6auY5pav5YiG5biDXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJldCA9IDAuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXQgKz0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVhbiArIChyZXQtKG4vMikpICogc2lnbWFcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNfY3JlYXRlX2J1YmJsZTpib29sZWFuID0gZmFsc2U7ICAvL+aYr+WQpuimgeS6p+eUn+awlOazoe+8jOaIluiAheivtOaYr+WQpuaJk+WdkOS/rueCvFxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJlaWJhbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhdHRyaWJ1dGVfcGFuZWw6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBleHA6Y2MuTm9kZT1udWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShPYmplY3QpXHJcbiAgICBldmVudF9saWI6IE9iamVjdCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZvY3VzID0gbnVsbFxyXG5cclxuXHJcbiAgICAvL2x4dDrnsr7lipvmnaFhcGlcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZW5lcmd5OiBudW1iZXIgPSA1MDBcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGV2ZW50X3Blcm1pdHRlZDogYm9vbGVhbiA9IHRydWVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVuZXJneV9yZWNvdmVyOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICAgIG1heF9lbmVyZ3koKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiA1MDBcclxuICAgIH1cclxuXHJcbiAgICBzZXRFbmVyZ3koZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZW5lcmd5ID0gZVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVuZXJneShlOiBudW1iZXIpICAvL+aUueWPmOeyvuWKm+WAvFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZW5lcmd5ID0gdGhpcy5lbmVyZ3kgKyBlIDw9IHRoaXMubWF4X2VuZXJneSgpID8gdGhpcy5lbmVyZ3kgKyBlIDogdGhpcy5tYXhfZW5lcmd5KClcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcodGhpcy5lbmVyZ3kpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5lcmd5KCkgIC8v6L+U5Zue5b2T5YmN55qE57K+5Yqb5YC8XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lcmd5XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8v5a+/5ZG9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFnZTogbnVtYmVyID0gMThcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFnZV9saW1pdGVkOiBudW1iZXIgPSAwXHJcblxyXG4gICAgYWRkQWdlKG4gPSA1KSAvLyDmr4/mrKHpgInmi6nkuovku7bnu4/ov4dY5bm0XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSB0aGlzLmFnZSArIG4gPD0gdGhpcy5hZ2VfbGltaXRlZCA/IHRoaXMuYWdlICsgbiA6IHRoaXMuYWdlX2xpbWl0ZWRcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFnZSBcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWdlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFnZV9saW1pdGVkID0gTWF0aC5yb3VuZCgxMDAgKyB0aGlzLmdhdXNzaWFuX3JhbmRvbSgtMjAsMTApKSBcclxuICAgIH1cclxuXHJcbiAgICAvL+S6i+S7tlxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBldmVudF9ncmFkZV9tYXAgPSBudWxsXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZ3JhZGVfbWFwID0gbnVsbFxyXG5cclxuICAgIGRpc3BhdGNoX2V2ZW50X3dpdGhvdXRfcmVxdWlyZW1lbnQoZ3JvdXA6IG51bWJlcikgLy/liIbnu4TlhoXlj5HkuIvkuIDkuKrmsqHmnInopoHmsYLnmoTkuovku7bvvIjpnZ7luLjpqbvvvIzluLjpqbvpg73mmK/msqHmnInopoHmsYLnmoRcclxuICAgIHtcclxuICAgICAgICAvL+WFiOi/m+ihjOS6i+S7tuexu+Wei+WIpOaWre+8jOexu+Wei+S4uiAxXzJbXzNdLCAxMjPmmK/kuI3lkIzlsZ7mgKflkI3np7DvvIwgMeWGs+WumuS6i+S7tuaYr+WQpuWHuueOsO+8jDLlhrPlrprliIbmlK/lkozmlLbnm4rns7vmlbDvvIwz5Yaz5a6a5LqL5Lu25piv5ZCm5Y+q5Ye6546w5LiA5qyhXHJcbiAgICAgICAgbGV0IGdyb3VwX25hbWUgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50X2xpYilbZ3JvdXBdXHJcbiAgICAgICAgbGV0IGluY29uc3RfZXZlbnRzID0gdGhpcy5ldmVudF9saWJbZ3JvdXBfbmFtZV1bJ2V2ZW50cyddWzFdXHJcbiAgICAgICAgbGV0IGluY29uc3RfbmFtZXMgPSBPYmplY3Qua2V5cyhpbmNvbnN0X2V2ZW50cylcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoaW5jb25zdF9uYW1lcylcclxuICAgICAgICBsZXQgdCA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgbGV0IHJldCA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBpbmNvbnN0X25hbWVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHR5cGVzID0gaW5jb25zdF9ldmVudHNbbmFtZV1bMF0udG9TdHJpbmcoKS5zcGxpdCgn77yMJylcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHR5cGVzWzBdLnRyaW0oKSlcclxuICAgICAgICAgICAgaWYgKHR5cGVzWzBdLnRyaW0oKT09JzAnIHx8IHR5cGVzWzBdLnRyaW0oKT09J18nKSB0LnB1c2gobmFtZS50cmltKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZygnZGV0ZWN0OicpXHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKHQpXHJcbiAgICAgICAgdC5zb3J0KCgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUtTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0LnB1c2godFswXSlcclxuICAgICAgICByZXQucHVzaChpbmNvbnN0X2V2ZW50c1t0WzBdXVswXSlcclxuICAgICAgICByZXQucHVzaChpbmNvbnN0X2V2ZW50c1t0WzBdXVsxXSlcclxuICAgICAgICByZXQucHVzaChpbmNvbnN0X2V2ZW50c1t0WzBdXVsyXSlcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ3JldHVybjogJylcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcodFswXSlcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcocmV0KVxyXG4gICAgICAgIHJldHVybiByZXRcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaF9ldmVudChncm91cDogbnVtYmVyLCBudW1fMDogbnVtYmVyPTIsIG51bV8xOiBudW1iZXI9MykgXHJcbiAgICAvLyBncm91cDogMC3lh6HkuJbvvJsxLeWdiuW4gu+8mzIt5a6X6Zeo77ybMy3prZTlnLDvvJs0Lea1t+WkliwgXHJcbiAgICAvLyBudW1fMCwgbnVtXzE6IOWIhuWIq+aYr+W4uOmpu+WSjOmdnuW4uOmpu+mcgOimgeWIhuWPkeeahOS4quaVsFxyXG4gICAgLy8gZnVuY3Rpb2465LuO5a+55bqUZ3JvdXDkuK3pmo/mnLrlh7roi6XlubLkuKrkuovku7blj5HkuIss5bm25aSE55CG6YOo5YiG5YmN572u6YC76L6R5YWz57O7XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJldCA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgbGV0IGdyb3VwX25hbWUgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50X2xpYilbZ3JvdXBdXHJcbiAgICAgICAgbGV0IGNvbnN0X2V2ZW50cyA9IHRoaXMuZXZlbnRfbGliW2dyb3VwX25hbWVdWydldmVudHMnXVswXVxyXG4gICAgICAgIGxldCBpbmNvbnN0X2V2ZW50cyA9IHRoaXMuZXZlbnRfbGliW2dyb3VwX25hbWVdWydldmVudHMnXVsxXVxyXG4gICAgICAgIGxldCBjb25zdF9uYW1lcyA9IE9iamVjdC5rZXlzKGNvbnN0X2V2ZW50cylcclxuICAgICAgICBsZXQgaW5jb25zdF9uYW1lcyA9IE9iamVjdC5rZXlzKGluY29uc3RfZXZlbnRzKVxyXG4gICAgICAgIGNvbnN0X25hbWVzLnNvcnQoKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDAuNS1NYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbmNvbnN0X25hbWVzLnNvcnQoKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDAuNS1NYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgLy8g5YiG5Y+R55qE5LqL5Lu25Li65LiA5Liq5pWw57uEW1t0aXRsZSwgdHlwZSwgcmV3YXJkLCBkZXNjcmlwdGlvbl0sIFt0aXRsZSwgdHlwZSwgcmV3YXJkLCBkZXNjcmlwdGlvbl0uLi5dXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtXzA7ICsraSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdCA9IG5ldyBBcnJheSg0KVxyXG4gICAgICAgICAgICB0WzBdID0gY29uc3RfbmFtZXNbaV1cclxuICAgICAgICAgICAgdFsxXSA9IGNvbnN0X2V2ZW50c1tjb25zdF9uYW1lc1tpXV1bMF1cclxuICAgICAgICAgICAgdFsyXSA9IGNvbnN0X2V2ZW50c1tjb25zdF9uYW1lc1tpXV1bMV1cclxuICAgICAgICAgICAgdFszXSA9IGNvbnN0X2V2ZW50c1tjb25zdF9uYW1lc1tpXV1bMl1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHQpXHJcbiAgICAgICAgICAgIHJldC5wdXNoKHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtXzE7ICsraSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdCA9IG5ldyBBcnJheSg0KVxyXG4gICAgICAgICAgICB0WzBdID0gaW5jb25zdF9uYW1lc1tpXVxyXG4gICAgICAgICAgICB0WzFdID0gaW5jb25zdF9ldmVudHNbaW5jb25zdF9uYW1lc1tpXV1bMF1cclxuICAgICAgICAgICAgdFsyXSA9IGluY29uc3RfZXZlbnRzW2luY29uc3RfbmFtZXNbaV1dWzFdXHJcbiAgICAgICAgICAgIHRbM10gPSBpbmNvbnN0X2V2ZW50c1tpbmNvbnN0X25hbWVzW2ldXVsyXVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcodClcclxuICAgICAgICAgICAgcmV0LnB1c2godClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhyZXQpXHJcbiAgICAgICAgcmV0dXJuIHJldFxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1Zyh0eXBlb2YoY29uc3RfbmFtZXMpKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhPYmplY3Qua2V5cyhjb25zdF9ldmVudHMpKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhPYmplY3Qua2V5cyhpbmNvbnN0X2V2ZW50cykpXHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2hfZXZlbnRfZ3JhZGUoKSBcclxuICAgIC8vIOWwhuWQhOe7hOS6i+S7tuS4juWFtuWQhOenjeaUtuebiuWSjOa2iOiAl+WfuuacrOe7keWumu+8iOS4jeeul+aJsOWKqO+8iVxyXG4gICAgLy8g5pyA57uI5LiA5LiqdGl0bGXlr7nlupTkuIDkuKrplb/luqbkuLoxMueahOaVsOe7hO+8jOWvueW6lOWQhOe7hOaVsOWAvFxyXG4gICAge1xyXG4gICAgICAgIC8v5YGH6K6+MjHngrnmir3niYzmpoLnjofmmK/lnYfljIDnmoTvvIzmr4/lvKDniYznmoTmnJ/mnJvmtojogJflupTor6XmmK83KjUwMC8yMT0xNjfvvIxcclxuICAgICAgICAvL+iMg+WbtOW6lOivpeaYrzEqNTAwLzIxPTI0fjEzKjUwMC8yMT0zMTDvvIzniYznmoTlvKDmlbDmoLnmja7ov5nkuKrmnJ/mnJvlnYfljIDliIbluINcclxuICAgICAgICBsZXQgbnVtX2dyb3VwcyA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnRfbGliKS5sZW5ndGhcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcobnVtX2dyb3VwcylcclxuICAgICAgICB0aGlzLmdyYWRlX21hcCA9IG5ldyBNYXAoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtX2dyb3VwczsgKytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudF9ncmFkZV9tYXAuc2V0KGksIG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCkpIC8v5Li65q+P5Liq57uE6YO95YiG6YWN5LiA5LiqZ3JhZGUgbWFwLOavj+S4que7hOeahOavj+S4quS6i+S7tuWvueW6lOS4gOS4quWAvCjnsr7lipvmtojogJcpXHJcbiAgICAgICAgICAgIHRoaXMuZ3JhZGVfbWFwLnNldChpLCBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpKVxyXG4gICAgICAgICAgICBsZXQgY29uc3RfZXZlbnRzID0gdGhpcy5ldmVudF9saWJbT2JqZWN0LmtleXModGhpcy5ldmVudF9saWIpW2ldXVsnZXZlbnRzJ11bMF1cclxuICAgICAgICAgICAgbGV0IGluY29uc3RfZXZlbnRzID0gdGhpcy5ldmVudF9saWJbT2JqZWN0LmtleXModGhpcy5ldmVudF9saWIpW2ldXVsnZXZlbnRzJ11bMV1cclxuICAgICAgICAgICAgbGV0IGNvbnN0X3RpdGxlcyA9IE9iamVjdC5rZXlzKGNvbnN0X2V2ZW50cylcclxuICAgICAgICAgICAgbGV0IGluY29uc3RfdGl0bGVzID0gT2JqZWN0LmtleXMoaW5jb25zdF9ldmVudHMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoY29uc3RfdGl0bGVzKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoaW5jb25zdF90aXRsZXMpXHJcbiAgICAgICAgICAgIGNvbnN0X3RpdGxlcy5zb3J0KCgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMC41LU1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaW5jb25zdF90aXRsZXMuc29ydCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNS1NYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbF9jb25zdCA9IGNvbnN0X3RpdGxlcy5sZW5ndGggPCAxMyA/ICgzMTAtMjQpLyhjb25zdF90aXRsZXMubGVuZ3RoLTEpIDogKDMxMC0yNCkvMTNcclxuICAgICAgICAgICAgbGV0IGludGVydmFsX2luY29uc3QgPSBpbmNvbnN0X3RpdGxlcy5sZW5ndGggPCAxMyA/ICgzMTAtMjQpLyhpbmNvbnN0X3RpdGxlcy5sZW5ndGgtMSkgOiAoMzEwLTI0KS8xM1xyXG5cclxuICAgICAgICAgICAgbGV0IHVwcGVyID0gY29uc3RfdGl0bGVzLmxlbmd0aCA8PSAxMyA/IGNvbnN0X3RpdGxlcy5sZW5ndGggOiAxM1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVwcGVyOyArK2opIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50X2dyYWRlX21hcC5nZXQoaSkuc2V0KGNvbnN0X3RpdGxlc1tqXSwgMjQraippbnRlcnZhbF9jb25zdClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGVfbWFwLmdldChpKS5zZXQoY29uc3RfdGl0bGVzW2pdLCBqKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSB1cHBlcjsgaiA8IGNvbnN0X3RpdGxlcy5sZW5ndGg7ICsrailcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYWRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudF9ncmFkZV9tYXAuZ2V0KGkpLnNldChjb25zdF90aXRsZXNbal0sIDI0K2dyYWRlKmludGVydmFsX2NvbnN0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFkZV9tYXAuZ2V0KGkpLnNldChjb25zdF90aXRsZXNbal0sIGdyYWRlKVxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgdXBwZXIgPSBpbmNvbnN0X3RpdGxlcy5sZW5ndGggPD0gMTMgPyBpbmNvbnN0X3RpdGxlcy5sZW5ndGggOiAxM1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVwcGVyOyArK2opXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRfZ3JhZGVfbWFwLmdldChpKS5zZXQoaW5jb25zdF90aXRsZXNbal0sIDI0K2oqaW50ZXJ2YWxfaW5jb25zdClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGVfbWFwLmdldChpKS5zZXQoaW5jb25zdF90aXRsZXNbal0sIGopXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSB1cHBlcjsgaiA8IGluY29uc3RfdGl0bGVzLmxlbmd0aDsgKytqKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYWRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudF9ncmFkZV9tYXAuZ2V0KGkpLnNldChpbmNvbnN0X3RpdGxlc1tqXSwgMjQrZ3JhZGUqaW50ZXJ2YWxfaW5jb25zdClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGVfbWFwLmdldChpKS5zZXQoaW5jb25zdF90aXRsZXNbal0sIGdyYWRlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRfZXZlbnRfZW5lcmd5KGdyb3VwX2lkeDogbnVtYmVyLCBldmVudF90aXRsZSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmVudF9ncmFkZV9tYXAuZ2V0KGdyb3VwX2lkeCkuZ2V0KGV2ZW50X3RpdGxlKSArIHRoaXMuZ2F1c3NpYW5fcmFuZG9tKDAsMTApXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0X2V2ZW50X2dyYWRlKGdyb3VwX2lkeDogbnVtYmVyLCBldmVudF90aXRsZSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmFkZV9tYXAuZ2V0KGdyb3VwX2lkeCkuZ2V0KGV2ZW50X3RpdGxlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGx4dDrlsZ7mgKdcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYXR0cmlidXRlX25hbWU6c3RyaW5nW10gPSBbXTsgLy/orrDlvZXlsZ7mgKfnmoTlkI3np7BcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgYXR0cmlidXRlcyA9IG51bGxcclxuXHJcbiAgICByZWNfZ2F1c3NpYW4obWVhbj0wLjUsIHNpZ21hPTAuMiwgbG93ZXI9MC4yLCB1cHBlcj0xLjApXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGEgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdhdXNzaWFuX3JhbmRvbShtZWFuLCBzaWdtYSlcclxuICAgICAgICBpZiAoYSA8PSBsb3dlcikgcmV0dXJuIGxvd2VyXHJcbiAgICAgICAgZWxzZSBpZiAoYSA+PSB1cHBlcikgcmV0dXJuIHVwcGVyXHJcbiAgICAgICAgcmV0dXJuIGFcclxuICAgIH1cclxuXHJcbiAgICBzZXRfYXR0cihhdHRyX25hbWUsIGF0dHJfdmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnNldChhdHRyX25hbWUsIGF0dHJfdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlX2F0dHIoYXR0cl9uYW1lLCBhdHRyX3ZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMuaGFzKGF0dHJfbmFtZSkgJiYgYXR0cl92YWx1ZSArIHRoaXMuYXR0cmlidXRlcy5nZXQoYXR0cl9uYW1lKSA8IDApIHRoaXMuYXR0cmlidXRlcy5zZXQoYXR0cl9uYW1lLCAwKVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXR0cmlidXRlcy5oYXMoYXR0cl9uYW1lKSkgdGhpcy5hdHRyaWJ1dGVzLnNldChhdHRyX25hbWUsIGF0dHJfdmFsdWUpXHJcbiAgICAgICAgZWxzZSB0aGlzLmF0dHJpYnV0ZXMuc2V0KGF0dHJfbmFtZSwgYXR0cl92YWx1ZSArIHRoaXMuYXR0cmlidXRlcy5nZXQoYXR0cl9uYW1lKSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRfYXR0cihhdHRyX25hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZXMuZ2V0KGF0dHJfbmFtZSkpIHRoaXMuYXR0cmlidXRlcy5zZXQoYXR0cl9uYW1lLCBNYXRoLnJvdW5kKHRoaXMucmVjX2dhdXNzaWFuKCkqMTAwKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldChhdHRyX25hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0X2F2Z19hdHRyKClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ2dldGF2ZycpXHJcbiAgICAgICAgbGV0IHN1bSA9IDBcclxuICAgICAgICBsZXQgYXR0ciA9IEFycmF5LmZyb20odGhpcy5hdHRyaWJ1dGVzKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZygnYXR0cicpXHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKGF0dHIubGVuZ3RoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0ci5sZW5ndGg7ICsraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1bSArPSBhdHRyW2ldWzFdXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZyhzdW0udG9TdHJpbmcoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgIC8vc3VtICs9IGF0dHJbaV1bMV1cclxuICAgICAgICByZXR1cm4gc3VtL2F0dHIubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdF9hdHRyKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0cmlidXRlX25hbWUubGVuZ3RoOyArK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gTWF0aC5yb3VuZCh0aGlzLnJlY19nYXVzc2lhbigpKjEwMClcclxuICAgICAgICAgICAgdGhpcy5zZXRfYXR0cih0aGlzLmF0dHJpYnV0ZV9uYW1lW2ldLCB2YWwpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zyh0aGlzLmF0dHJpYnV0ZV9uYW1lW2ldKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ3ZhbHVlOiAnK3ZhbC50b1N0cmluZygpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzb3J0X2F0dHIoKXsgIC8v55So5LqO57uZ5bGe5oCn5YC85aSn5bCP5o6S5bqP77yM5bm25LiU6I635b6XWyfmiJjlipsnLCflv4PlooMnLCflhYPnpZ4nLCfnpo/mupAnLCfngbXmoLknLCfmgp/mgKcnLCflloQnLCfmgbYnLCfnibnmroonXeasoeW6j+eahOS7juWwj+WIsOWkp+aOkuW6j+aVsOe7hFxyXG4gICAgICAgIGxldCBhdHRyX3ZhbHVlX2FycmF5Om51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4Om51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaTx0aGlzLmF0dHJpYnV0ZV9uYW1lLmxlbmd0aCA7ICsraSl7XHJcbiAgICAgICAgICAgIGF0dHJfdmFsdWVfYXJyYXkucHVzaCh0aGlzLmdldF9hdHRyKHRoaXMuYXR0cmlidXRlX25hbWVbaV0pKTtcclxuICAgICAgICAgICAgaW5kZXgucHVzaChpKTsgLy/kv53lrZjkuIvmoIfvvIzot5/nnYDlv6vmjpLkuIDotbfmjpLluo9cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5xdWlja19zb3J0KGF0dHJfdmFsdWVfYXJyYXksIGluZGV4LCAwLCBhdHRyX3ZhbHVlX2FycmF5Lmxlbmd0aC0xKTsgLy/ov5vooYzmjpLluo9cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBpbmRleDsgIC8vaW5kZXjmnIDlkI7kv53lrZjlkITkuKrlhYPntKDkuIvmoIfmiYDlnKjnmoTkvY3nva7vvIzmr5TlpoJpbmRleFszXSA9IDXvvIzljbPnrKw15Y+35bGe5oCn5o6S56ysMysxPTTkvY1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/ku6XkuIvkuLrlv6vmjpLlh73mlbAqKioqKioqKipcclxuICAgIHF1aWNrX3NvcnQoaW5wdXQ6bnVtYmVyW10sIGluZGV4Om51bWJlcltdLCBzdGFydDpudW1iZXIsZW5kOm51bWJlcil7XHJcbiAgICAgICAgaWYoc3RhcnQ+PWVuZCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGl2b3RJbmRleD10aGlzLnBhcnRpdGlvbihpbnB1dCwgaW5kZXgsIHN0YXJ0LCBlbmQpIC8vIDEuXHJcbiAgICAgICAgdGhpcy5xdWlja19zb3J0KGlucHV0LGluZGV4LHN0YXJ0LHBpdm90SW5kZXgtMSkgLy8gMi5cclxuICAgICAgICB0aGlzLnF1aWNrX3NvcnQoaW5wdXQsaW5kZXgscGl2b3RJbmRleCsxLGVuZClcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0aXRpb24oaW5wdXQ6bnVtYmVyW10sIGluZGV4Om51bWJlcltdLCBzdGFydDpudW1iZXIsZW5kOm51bWJlcik6bnVtYmVyIHtcclxuICAgICAgICBsZXQgcGl2b3QgPSBpbnB1dFtzdGFydF0gLy8gMS5cclxuICAgICAgICBsZXQgcGl2b3RfaWR4ID0gaW5kZXhbc3RhcnRdO1xyXG5cclxuICAgICAgICBsZXQgbGVmdCA9IHN0YXJ0IC8vIDIuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gZW5kIC8vIDMuXHJcbiAgICAgICAgd2hpbGUgKGxlZnQgIT0gcmlnaHQpIHtcclxuICAgICAgICAgICAgd2hpbGUobGVmdDxyaWdodCYmaW5wdXRbcmlnaHRdPnBpdm90KXsgLy8gNC5cclxuICAgICAgICAgICAgICAgIHJpZ2h0LS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZShsZWZ0PHJpZ2h0JiZpbnB1dFtsZWZ0XTw9cGl2b3QpeyAvLyA1LlxyXG4gICAgICAgICAgICAgICAgbGVmdCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobGVmdDxyaWdodCl7IC8vIDYuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG1wPWlucHV0W2xlZnRdXHJcbiAgICAgICAgICAgICAgICBpbnB1dFtsZWZ0XT1pbnB1dFtyaWdodF1cclxuICAgICAgICAgICAgICAgIGlucHV0W3JpZ2h0XT10bXBcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4PWluZGV4W2xlZnRdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXhbbGVmdF09aW5kZXhbcmlnaHRdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXhbcmlnaHRdPWlkeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFtzdGFydF0gPSBpbnB1dFtsZWZ0XSAvLyA3LlxyXG4gICAgICAgIGlucHV0W2xlZnRdID0gcGl2b3RcclxuXHJcbiAgICAgICAgaW5kZXhbc3RhcnRdPWluZGV4W2xlZnRdO1xyXG4gICAgICAgIGluZGV4W2xlZnRdPXBpdm90X2lkeFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGxlZnRcclxuICAgIH1cclxuICAgIC8v5Lul5LiK5Li65b+r5o6S5Ye95pWwKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbiAgICAvL+S7peS4i+aYr+iDjOWMheWxnuaAp1xyXG4gICAgLy/lkITnsbvnianlk4FcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMzogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNzogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGl0ZW1fbmFtZTpzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8v6K6+572u5bGe5oCn55qE5pWw5YC877yM6YCJ5Lit6KaB5pu05pS555qE5bGe5oCn77yM54S25ZCO6K6+572u5pWw5YC8XHJcbiAgICBzZXRpdGVtKGl0ZW1JRDpudW1iZXIsIGl0ZW1udW06bnVtYmVyKXtcclxuICAgICAgICBsZXQgYSA9IHRoaXMuZ2V0aXRlbSgpO1xyXG4gICAgICAgIGlmKGFbaXRlbUlEXSArIGl0ZW1udW0gPCAwKXtcclxuICAgICAgICAgIC8v6Ziy5q2i5bCP5LqOMOeahOaDheWGtVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc3dpdGNoIChpdGVtSUQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgaXRlbUlEPTA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtMCArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBpdGVtSUQ9MTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0xICs9IGl0ZW1udW07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGl0ZW1JRD0yOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbTIgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgaXRlbUlEPTM6XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbTMgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgaXRlbUlEPTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtNCArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBpdGVtSUQ9NTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW01ICs9IGl0ZW1udW07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGl0ZW1JRD02OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbTYgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgaXRlbUlEPTc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtNyArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluWxnuaAp+WAvO+8jOi/lOWbnuWxnuaAp+WAvOaVsOe7hFxyXG4gICAgcHVibGljIGdldGl0ZW0oKXtcclxuICAgICAgICBsZXQgaXRlbWFycmF5OiBudW1iZXJbXSA9IFt0aGlzLml0ZW0wLCB0aGlzLml0ZW0xLCB0aGlzLml0ZW0yLCB0aGlzLml0ZW0zLCB0aGlzLml0ZW00LCB0aGlzLml0ZW01LCB0aGlzLml0ZW02LCB0aGlzLml0ZW03XTtcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoXCLlsZ7mgKflgLzojrflj5bmiJDlip9cIisgU3RyaW5nKGl0ZW1hcnJheSkpO1xyXG4gICAgICAgIHJldHVybiBpdGVtYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kurrnianmiJDplb/lsZ7mgKdcclxuICAgIC8v5Lq654mp562J57qnXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGxldmVsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3ViX2xldmVsOiBudW1iZXIgPSAwXHJcblxyXG4gICAgZ2V0X2xldmVsKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbGV2ZWxfbmFtZSA9IFsn57uD5rCUJywn562R5Z+6Jywn6YeR5Li5Jywn5YWD5am0J11cclxuICAgICAgICByZXR1cm4gbGV2ZWxfbmFtZVt0aGlzLmxldmVsJTRdXHJcbiAgICB9XHJcblxyXG4gICAgdXBfbGV2ZWwoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgKz0gMVxyXG4gICAgICAgIHRoaXMuc3ViX2xldmVsID0gMFxyXG4gICAgICAgIHRoaXMuYWdlX2xpbWl0ZWQgKj0gMi41XHJcbiAgICAgICAgdGhpcy5hZ2VfbGltaXRlZCAtPSB0aGlzLmdhdXNzaWFuX3JhbmRvbSgwLCh0aGlzLmxldmVsKzEpKjEwKVxyXG4gICAgfVxyXG5cclxuICAgIGdldF9zdWJsZXZlbCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxldmVsX25hbWUgPSBbJ+WIneacnycsJ+S4reacnycsJ+WQjuacnyddXHJcbiAgICAgICAgcmV0dXJuIGxldmVsX25hbWVbdGhpcy5zdWJfbGV2ZWxdXHJcbiAgICB9XHJcblxyXG4gICAgdXBfc3VibGV2ZWwoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3ViX2xldmVsICs9IDFcclxuICAgIH1cclxuXHJcbiAgICAvL+S6uueJqeW9k+WJjee7j+mqjOWAvFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBleHBfbm93OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGV4cF9pbmYoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMubGV2ZWwsIHRoaXMuZXhwX25vd107XHJcbiAgICB9XHJcblxyXG4gICAgLy/nlKjkuo5leHDoioLngrnliJ3lp4vljJbnu4/pqozlgLzmnaHvvIzku6Xlj4rov5Tlm57nrYnnuqflkoznu4/pqozlgLzvvIzjgJBseHTjgJHvvJrmmK/kuI3mmK/liJ3lp4vljJbkuI3lpKrpnIDopoHov5vluqbmhaLmhaLniKzvvIznm7TmjqXmmL7npLrnu4/pqozlgLzlsLHlpb3vvIzlkKbliJnmgKrmgKrnmoTmhJ/op4lcclxuICAgIGV4cF9pbml0KCl7XHJcbiAgICAgICAgbGV0IGV4cCA9IGNjLmZpbmQoJ2V4cCcpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICBleHAuZmlsbFJhbmdlKz0gKDEvdGhpcy5leHBfcmVxdWlyZWQoKSk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgfSwgMS90aGlzLmV4cF9yZXF1aXJlZCgpLzI1LCB0aGlzLmV4cF9ub3cpO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZXhwLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgbGV0IGV4cF9ub3cgPSB0aGlzLmV4cF9ub3c7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwX25vdyA9IDA7XHJcbiAgICAgICAgLy90aGlzLmV4cF9nYWluKC1leHBfbm93KTsgICAvL+OAkOmZiOaZn+OAkeS/ruaUueS6huS4gOS4qmJ1Z++8jOavj+asoeWIneWni+WMluaXtumcgOimgemHjeaWsOaJp+ihjOS4gOasoWV4cF9nYWluKCnmlrnms5XvvIzorqnnu4/pqozph43mlrDkuIrmtqjvvIznm7TmjqXmlLnlj5hmaWxsUmFuZ2XkuI3nrqHnlKhcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy5sZXZlbCwgdGhpcy5leHBfbm93XTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy/kuI3lkIznrYnnuqfnmoTmiYDpnIDnu4/pqoxcclxuICAgIGV4cF9yZXF1aXJlZCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gKDIqKih0aGlzLnN1Yl9sZXZlbCsxKSkqMTAwKigxMCoqdGhpcy5sZXZlbCk7ICAvL+WPr+S7peiuvue9ruWFtuS7luWNleiwg+mAkuWinuWHveaVsFxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAvL+WIpOaWree7j+mqjOWAvOaYr+WQpua6ouWHulxyXG4gICAgZXhwX2ZpbGxlZChleHBfbm93Om51bWJlciwgZXhwX2FkZDpudW1iZXIpe1xyXG4gICAgICAgIC8v5aaC5p6c57uP6aqM5YC85aKe6ZW/6LaF6L+H5pyA5aSn57uP6aqM5YC877yM5YiZ6K6+572u5Li65b2T5YmN562J57qn55qE5pyA5aSn57uP6aqM5YC877yM5ZCm5YiZ55u05o6l55u45Yqg5L2c5Li65b2T5YmN57uP6aqM5YC8XHJcbiAgICAgICAgaWYoKGV4cF9ub3crZXhwX2FkZCkgPD0gdGhpcy5leHBfcmVxdWlyZWQoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwX25vdyArPSBleHBfYWRkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmV4cF9ub3cgPSB0aGlzLmV4cF9yZXF1aXJlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICovXHJcblxyXG4gICAgLy/lop7plb/nu4/pqozmnaHnmoTmlrnms5VcclxuICAgIGV4cF9nYWluKGV2ZW50X2V4cDpudW1iZXIsIG9wdGlvbj10cnVlKXsvLyDmraTmlrnms5Xlj6rlnKhTY2VuZSBNYWlu5L2/55SoXHJcbiAgICAgICAgLy/jgJDliJjpkavmtpvjgJHvvJrmraTlpITmmK/lkKbkuI3lnKjmlrnms5XlhoXliKTliKvkuovku7bnsbvlnovlkaLvvIzlsIbmraTmlrnms5Xlj6rkvZzkuLrmk43kvZzmlbDmja7kuYvnm67nmoTvvIzopoHlop7liqDlpJrlsJHnu4/pqoznlLHlpJbpg6jpgLvovpHmjIflrprvvIznhLblkI7nlLHmraTmlrnms5XlsIbnu4/pqozmnaHliqDliLDpgqPkuKrkvY3nva5cclxuICAgICAgICAvL+OAkOmZiOaZn+OAkea2m+WTpei/memHjOaUueeahOaMuuWlve+8jOaOp+WItuWinumVv+aXtumXtOS4ujHnp5JcclxuICAgICAgICAvLyDljbNsZXZlbDHmu6HlgLwyMDDnu4/pqozvvIzkvKDlhaXlj4LmlbDku6Pooajlop7liqDnu4/pqozlgLxcclxuICAgICAgICAvL+W7tuaXtuWHveaVsOiuqee7j+mqjOadoeWPr+S7peW7tuaXtui/nue7reS4iua2qFxyXG5cclxuICAgICAgICBsZXQgdG93YXJkID0gZXZlbnRfZXhwIC8gTWF0aC5hYnMoZXZlbnRfZXhwKVxyXG5cclxuICAgICAgICBpZihldmVudF9leHAgPT0gMCl7IC8v44CQ6ZmI5pmf44CR6L+Z6YeM5L+u5aSN5LqG5LiA5LiqYnVn77yM5Y2zdG93YXJk5LiN6IO9MC8w5peg6ZmQ5aSn77yM5LiN54S2ZmlsbFJhbmdl5Lya55u05o6l5ruhXHJcbiAgICAgICAgICAgIHRvd2FyZD0wO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBlbmQgPSB0aGlzLmV4cF9ub3cgKyBldmVudF9leHBcclxuICAgICAgICBpZiAoZW5kID4gdGhpcy5leHBfcmVxdWlyZWQoKSkgZW5kID0gdGhpcy5leHBfcmVxdWlyZWQoKVxyXG4gICAgICAgIGVsc2UgaWYgKGVuZCA8IDApIGVuZCA9IDBcclxuICAgICAgICBsZXQgZ2FwID0gTWF0aC5hYnMoZW5kIC0gdGhpcy5leHBfbm93KVxyXG4gICAgICAgIC8vbGV0IHRvd2FyZCA9IHRoaXMuZXhwX25vdyAtIGJlZ2luID4gMCA/IDEgOiAtMSAvL+WmguaenOe7j+mqjOato+WcqOWHj+WwkVxyXG4gICAgICAgIHRoaXMuZXhwX25vdyA9IGVuZCBcclxuICAgICAgICBsZXQgZXhwID0gY2MuZmluZCgnZXhwJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICBpZiAob3B0aW9uKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgZXhwLmZpbGxSYW5nZSs9ICgoZ2FwLzMwKS90aGlzLmV4cF9yZXF1aXJlZCgpKnRvd2FyZCk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgfSwgKGdhcC8zMCkvdGhpcy5leHBfcmVxdWlyZWQoKSwgMzApOyAgLy/ov5nph4zov57nu63lop7plb/nmoRnYXDopoHnrYnkuo4xL3RoaXMuZXhwX3JlcXVpcmVkKCkqdG93YXJk55qE5YCS5pWw5omN6IO95aKe6ZW/5Yiw77yM5bm25LiUZ2Fw6LaK5bCP77yM5YmN6Z2i55qE6Ze06ZqU5pe26Ze05Lmf6LaK5bCP77yM5YiZ5aKe6ZW/6YCf5bqm6LaK5b+rXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5pel5b+X57O757ufXHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIGxvZ19sb2M6Y2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBsb2dfZnJlcTpudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZXZlbnRfYWxsOnN0cmluZ1tdID0gW107ICAgLy/lrZjmlL7miYDmnInnmoTml6Xlv5fvvIzml6Xlv5foioLngrnliJ3lp4vljJbml7blhpnlhaVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGV2ZW50X2FkZDpzdHJpbmdbXSA9IFtdOyAgIC8v5a2Y5pS+5paw5aKe5Yqg55qE5pel5b+X77yM5aaC5p6c5pyJ5paw55qE77yM5YiZ5pel5b+X6IqC54K56KKr54K55byA5pe25YaZ5YWlXHJcblxyXG4gICAgLy/ml6Xlv5fliJ3lp4vljJblubblhpnlhaUsIGlzYWRk5Luj6KGo5piv5LiN5piv5YaN5omT5byA5pel5b+X6Z2i5p2/5pe25YaZ5YWl5paw5pel5b+X77yM5aaC5p6c5piv5YiZ5LiA6L655YaZ5LiA6L655riF56m65paw5aKe5Yqg55qE5LqL5Lu277yM6Ziy5q2i6YeN5aSN5YaZ5YWlXHJcbiAgICBsb2dfaW5pdChpc2FkZDpib29sZWFuPXRydWUpe1xyXG4gICAgICAgIGlmKGlzYWRkID09IHRydWUpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyPTAgOyBpPHRoaXMuZXZlbnRfYWRkLmxlbmd0aCA7IGkrKyApe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nX2FkZCh0aGlzLmV2ZW50X2FkZFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMuZXZlbnRfYWRkLmxlbmd0aCAvL+W/hemhu+WFiOW+l+WIsOmVv+W6pu+8jOS4jeeEtuS8muWwkXBvcOS4gOS4qlxyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyPTAgOyBpPGxlbiA7IGkrKyApe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRfYWRkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sb2dfbG9jLnkgPSAtMjAwOy8v6YeN5paw5YaZ55qE5pe25YCZIOimgeWIneWni+WMluWGmeWFpeaWh+acrOeahHnovbTkvY3nva5cclxuICAgICAgICAgICAgZm9yKHZhciBpOm51bWJlcj0wIDsgaTx0aGlzLmV2ZW50X2FsbC5sZW5ndGggOyBpKysgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nX2FkZCh0aGlzLmV2ZW50X2FsbFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLmV2ZW50X2FkZC5sZW5ndGggICAvL+WmguaenOWIneWni+WMluaXpeW/l+iKgueCueaXtuaWsOWinuS6i+S7tuS4reacieS6i+S7tu+8jOS5n+imgXBvcOWHuuWOu1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyPTAgOyBpPGxlbiA7IGkrKyApe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRfYWRkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+S/neWtmOaXpeW/l+WGheWuuVxyXG4gICAgbG9nX3dyaXRlKGV2ZW50OnN0cmluZyl7XHJcblxyXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmV2ZW50X2FsbC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5ldmVudF9hZGQucHVzaChldmVudCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/ml6Xlv5fliJ3lp4vljJblhpnlhaXmlrnpmL/po55cclxuICAgIGxvZ19hZGQoZXZlbnQ6c3RyaW5nKXtcclxuICAgICAgICAvL+WGmeWFpeaXpeW/l+eahOWHhuWkh1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gY2MuZmluZCgnbG9nX3BhbmVsJykuZ2V0Q2hpbGRCeU5hbWUoJ2xvZ19TY3JvbGxWaWV3JykuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTsgLy/mib7liLDopoHkv53lrZjml6Xlv5fnmoTniLboioLngrlcclxuICAgICAgICBsZXQgbmV3X2NvbnRlbnQgPSBuZXcgY2MuTm9kZSgpOyAgLy/liJ3lp4vljJbmlrDoioLngrnkuLrlrp7kvovljJbnmoTkuIDkuKroioLngrlcclxuICAgICAgICB2YXIgbG9nX3RleHQgPSBuZXdfY29udGVudC5hZGRDb21wb25lbnQoY2MuTGFiZWwpOyAvL+WinuWKoGxhYmVs57uE5Lu25bm26LWL57uZbG9nX3RleHRcclxuICAgICAgICBuZXdfY29udGVudC5jb2xvciA9IGNjLmNvbG9yKDAsMCwwKTsgLy/lsIblrZfkvZPmlLnkuLrpu5HoibJcclxuICAgICAgICAvL+iuvue9ruaWh+acrOWkp+Wwj1xyXG4gICAgICAgIGxvZ190ZXh0LmZvbnRTaXplID0gNTA7XHJcbiAgICAgICAgbG9nX3RleHQubGluZUhlaWdodD01MDtcclxuICAgICAgICBsb2dfdGV4dC5lbmFibGVCb2xkID0gdHJ1ZTtcclxuIFxyXG4gICAgICAgIG5ld19jb250ZW50LnNldFBhcmVudChjb250ZW50KTsgIC8v6K6+572u5qC56IqC54K55Li6Y29udGVudFxyXG4gICAgICAgIG5ld19jb250ZW50LnggPSB0aGlzLmxvZ19sb2MueDtcclxuICAgICAgICBuZXdfY29udGVudC55ID0gdGhpcy5sb2dfbG9jLnk7XHJcblxyXG5cclxuICAgXHJcbiAgICAgICAgLy/lsIbotoXov4fplb/luqbnmoTlrZfnrKbkuLLliqDkuIrmjaLooYznrKZcclxuICAgICAgICBsZXQgZXZlbnRfY29weSA9IFtdO1xyXG4gICAgICAgIGxldCBjb3VudF9yb3cgPSAxO1xyXG4gICAgICAgIGZvcih2YXIgaSA6bnVtYmVyPTAgOyBpPGV2ZW50Lmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgICAgICAgdmFyIGxlbiA9IGV2ZW50X2NvcHkucHVzaChldmVudFtpXSk7XHJcbiAgICAgICAgICAgaWYoaSUxNiA9PSAwICYmIGkhPTApeyAgICAgICAgICAgICAgICAgICAgLy/mr48xNuS4quWtl+espuWKoOS4gOS4quaNouihjOesplxyXG4gICAgICAgICAgICBjb3VudF9yb3cgKz0gMTtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IGV2ZW50X2NvcHkucHVzaCgnXFxuJyk7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSBldmVudF9jb3B5LnB1c2goJ1xcbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5sb2dfbG9jLnkgLT0gKDE1MCpjb3VudF9yb3crODApOyAvL+S4i+S4gOasoeiusOW9leS9jee9ruW+gOS4i+enu+WKqFxyXG4gICAgICAgIHRoaXMubG9nX2ZyZXEgKz0gMTsgLy/orrDlvZXml6Xlv5fmlbDph48rMVxyXG4gICAgICAgIGNvbnRlbnQuc2V0Q29udGVudFNpemUoOTAwLCA0MDAqdGhpcy5sb2dfZnJlcSkvL+aXpeW/l+mrmOW6puWinuWKoFxyXG5cclxuICAgICAgICBsb2dfdGV4dC5zdHJpbmcgPSBldmVudF9jb3B5LmpvaW4oJycpOyAgLy/lsZ7mgKfmlLnlj5hcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7ICAvL+iuvue9ruacrOiKgueCueS4uuW4uOmpu+iKgueCuVxyXG4gICAgICAgIHRoaXMubG9nX2xvYy55ID0gLTIwMDtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZV9uYW1lID0gWyfmiJjlipsnLCflv4PlooMnLCflhYPnpZ4nLCfnpo/mupAnLCfngbXmoLknLCfmgp/mgKcnLCflloQnLCfmgbYnLCfnibnmroonXTtcclxuICAgICAgICB0aGlzLml0ZW1fbmFtZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcclxuICAgICAgICB0aGlzLmluaXRfYXR0cigpXHJcbiAgICAgICAgdGhpcy5pbml0QWdlKClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRoaXMuZ2F1c3NpYW5fcmFuZG9tKDAsMjAsMTAwKSlcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZXZlbnRzLmpzb24nLCAoZXJyLCBvYmopPT57XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZygnZmxhZy4uLicpXHJcbiAgICAgICAgICAgIGlmIChlcnIpe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKCdlcnInKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlcnIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdyZWFkLi4uJylcclxuICAgICAgICAgICAgdGhpcy5ldmVudF9saWIgPSBvYmouanNvblxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50X2dyYWRlX21hcCA9IG5ldyBNYXAoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgdXBkYXRlIChkdCkge1xyXG5cclxuXHJcblxyXG4gICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/beijing2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '369cdMMibVCwr/TZ6/t+7Bu', 'beijing2');
// script/scene2/beijing2.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp = [];
        _this.toward = 1;
        _this.shandian_time = 3;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        //移动
        //遍历子物体
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bgNode = _a[_i];
            //移动 帧 -> 秒
            bgNode.x += 500 * dt * this.toward; //每秒移动100
            if (bgNode.x > 1300 || bgNode.x < -1300) { //如果都走出了界面，那么循环
                this.toward *= -1;
            }
        }
        if (this.shandian_time <= 0) {
            var random1 = this.GetRandomNum(0, 4);
            var shandian_1 = cc.instantiate(this.sp[random1]);
            shandian_1.setParent(cc.director.getScene());
            setTimeout(function () {
                shandian_1.destroy();
            }, 3000);
            cc.loader.loadRes("下雨打雷", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 1); //设置音量
                setTimeout(function () {
                    cc.audioEngine.stop(audioID);
                }, 2000);
            });
            var random_x1 = this.GetRandomNum(0, 400);
            var random_x2 = this.GetRandomNum(800, 1400);
            var random_y = this.GetRandomNum(1000, 2500);
            var random2 = this.GetRandomNum(0, 1);
            if (random2 == 0) {
                shandian_1.x = random_x1;
            }
            else {
                shandian_1.x = random_x2;
            }
            shandian_1.y = random_y;
            this.shandian_time = 2;
        }
        else {
            this.shandian_time -= dt;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "sp", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGJlaWppbmcyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUZDO1FBOUVHLFFBQUUsR0FBZSxFQUFFLENBQUM7UUFFcEIsWUFBTSxHQUFVLENBQUMsQ0FBQztRQUVsQixtQkFBYSxHQUFVLENBQUMsQ0FBQzs7SUEwRTdCLENBQUM7SUF0RUcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFUiwrQkFBWSxHQUFuQixVQUFvQixHQUFHLEVBQUUsR0FBRztRQUM5QixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVFLHdCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJO1FBQ0osT0FBTztRQUNQLEtBQWtCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUM7WUFBakMsSUFBSSxNQUFNLFNBQUE7WUFDVixXQUFXO1lBQ1gsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTO1lBQ3pDLElBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxFQUFHLGVBQWU7Z0JBQ3JELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDckI7U0FDSjtRQUdELElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUM7WUFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxVQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEQsVUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFM0MsVUFBVSxDQUFDO2dCQUNQLFVBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFVCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUM3QyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtnQkFFNUMsVUFBVSxDQUFDO29CQUNQLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFYixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQzVDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUcsT0FBTyxJQUFJLENBQUMsRUFBQztnQkFDWixVQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUMxQjtpQkFDRztnQkFDQSxVQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUMxQjtZQUVELFVBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBRXRCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBRzFCO2FBRUc7WUFDQSxJQUFJLENBQUMsYUFBYSxJQUFFLEVBQUUsQ0FBQztTQUMxQjtJQUdMLENBQUM7SUE3RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDQTtJQUhILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRjVCO0lBQUQsZUFBQztDQWpGRCxBQWlGQyxDQWpGcUMsRUFBRSxDQUFDLFNBQVMsR0FpRmpEO2tCQWpGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzcDpjYy5QcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHRvd2FyZDpudW1iZXIgPSAxO1xyXG5cclxuICAgIHNoYW5kaWFuX3RpbWU6bnVtYmVyID0gMztcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBwdWJsaWMgR2V0UmFuZG9tTnVtKE1pbiwgTWF4KTpudW1iZXIge1xyXG5cdFx0dmFyIFJhbmdlID0gTWF4IC0gTWluO1xyXG5cdFx0dmFyIFJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0cmV0dXJuIChNaW4gKyBNYXRoLnJvdW5kKFJhbmQgKiBSYW5nZSkpO1xyXG5cdH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8v56e75YqoXHJcbiAgICAgICAgLy/pgY3ljoblrZDniankvZNcclxuICAgICAgICBmb3IobGV0IGJnTm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAvL+enu+WKqCDluKcgLT4g56eSXHJcbiAgICAgICAgICAgIGJnTm9kZS54ICs9IDUwMCpkdCp0aGlzLnRvd2FyZDsgLy/mr4/np5Lnp7vliqgxMDBcclxuICAgICAgICAgICAgaWYoYmdOb2RlLnggPiAxMzAwIHx8IGJnTm9kZS54IDwgLTEzMDApeyAgLy/lpoLmnpzpg73otbDlh7rkuobnlYzpnaLvvIzpgqPkuYjlvqrnjq9cclxuICAgICAgICAgICAgICAgIHRoaXMudG93YXJkICo9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5zaGFuZGlhbl90aW1lIDw9IDApe1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tMSA9IHRoaXMuR2V0UmFuZG9tTnVtKDAsNCk7XHJcbiAgICAgICAgICAgIGxldCBzaGFuZGlhbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3BbcmFuZG9tMV0pO1xyXG4gICAgICAgICAgICBzaGFuZGlhbi5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICBzaGFuZGlhbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLkuIvpm6jmiZPpm7dcIiwgY2MuQXVkaW9DbGlwLCAocmVzLGNsaXApPT57XHJcbiAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDEpOyAvL+iuvue9rumfs+mHj1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3gxID0gdGhpcy5HZXRSYW5kb21OdW0oMCw0MDApO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3gyID0gdGhpcy5HZXRSYW5kb21OdW0oODAwLCAxNDAwKVxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3kgPSB0aGlzLkdldFJhbmRvbU51bSgxMDAwLDI1MDApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJhbmRvbTIgPSB0aGlzLkdldFJhbmRvbU51bSgwLDEpO1xyXG4gICAgICAgICAgICBpZihyYW5kb20yID09IDApe1xyXG4gICAgICAgICAgICAgICAgc2hhbmRpYW4ueCA9IHJhbmRvbV94MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2hhbmRpYW4ueCA9IHJhbmRvbV94MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2hhbmRpYW4ueSA9IHJhbmRvbV95O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaGFuZGlhbl90aW1lID0gMjtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaGFuZGlhbl90aW1lLT1kdDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/bar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bdd6ia5FBBX7mC10oIrcBt', 'bar');
// script/event_scripts/bar.ts

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
var bar = /** @class */ (function (_super) {
    __extends(bar, _super);
    function bar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fatigue = 500;
        _this.recover_inteval = 3; //精力条每隔3秒恢复一次
        return _this;
    }
    bar.prototype.recover = function () {
        //+动画啥的
        cc.find('persist_node').getComponent('persist_node').event_permitted = true;
        this.node.getChildByName('prompt').color = cc.Color.GREEN;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    bar.prototype.start = function () {
        // for test
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            //cc.find('persist_node').getComponent('persist_node').changeEnergy(100)
        });
    };
    /*
    this.fatigue += val
    console.debug(this.fatigue)
    this.node.getComponent(cc.ProgressBar).progress = this.fatigue/500.
    if (this.fatigue >= 500.)
    {
        // this.settle() //结算再reset
        console.debug('fatigue bomb and BEGIN NEXT ROUND INSTANTLY !!!')
        this.node.dispatchEvent(new cc.Event.EventCustom("exausted", true))
        //this.node.getParent().getChildByName('button')
        // 暂时不进行：this.node.getParent().getChildByName('button').getComponent('next').next()
    }
    */
    //else this.getComponent(cc.ProgressBar).progress = this.fatigue / 500.
    //console.debug('SET')
    bar.prototype.update = function (dt) {
        var _this = this;
        var src = this.fatigue;
        this.fatigue = cc.find('persist_node').getComponent('persist_node').getEnergy();
        this.fatigue = this.fatigue < 0 ? 0 : this.fatigue; //filtering
        if (src != this.fatigue) //pn中的精力值发生了改变
         {
            //console.debug('Bar')
            //console.debug(cc.find('event_controller').getComponent('event_controller').event_permitted)
            //console.debug('target: '+String(this.fatigue))
            this.schedule(function () {
                _this.node.getComponent(cc.ProgressBar).progress += (_this.fatigue - src) / 500 / 5;
            }, dt, 5);
            if (src <= 0 && this.fatigue > 0)
                this.recover();
            /*
            if (this.fatigue <= 0) //energy 变化的结果是让当前值变成<=0
            {
                console.debug('target: '+String(cc.find('persist_node').getComponent('persist_node').getEnergy()))
                //this.getComponent(cc.ProgressBar) 变红一下：换个材质或红框的图
                cc.find('event_controller').emit('exausted')
            }
            else this.recover()//energy 变化的结果是让当前值变成>0
            */
        }
        //精力条随时间恢复
        if (this.recover_inteval >= 0) {
            this.recover_inteval -= dt;
        }
        else {
            cc.find('persist_node').getComponent('persist_node').changeEnergy(1);
            this.recover_inteval = 3;
        }
        //this.node.getChildByName('prompt').getComponent(cc.Label)
        this.getComponentInChildren(cc.Label).string = Math.round(this.fatigue).toString() + ' / 500';
        if (this.fatigue == 0)
            this.node.getChildByName('prompt').color = cc.Color.RED;
    };
    __decorate([
        property
    ], bar.prototype, "fatigue", void 0);
    __decorate([
        property
    ], bar.prototype, "recover_inteval", void 0);
    bar = __decorate([
        ccclass
    ], bar);
    return bar;
}(cc.Component));
exports.default = bar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUFzRkM7UUFuRkcsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUd0QixxQkFBZSxHQUFVLENBQUMsQ0FBQyxDQUFFLGFBQWE7O0lBZ0Y5QyxDQUFDO0lBN0VHLHFCQUFPLEdBQVA7UUFFSSxPQUFPO1FBQ1AsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDN0QsQ0FBQztJQUdELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsbUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUM7WUFDdkMsd0VBQXdFO1FBQzVFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7TUFZRTtJQUNFLHVFQUF1RTtJQUN2RSxzQkFBc0I7SUFFMUIsb0JBQU0sR0FBTixVQUFRLEVBQUU7UUFBVixpQkF5Q0M7UUF4Q0csSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFDLFdBQVc7UUFFOUQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjO1NBQ3ZDO1lBQ0ksc0JBQXNCO1lBQ3RCLDZGQUE2RjtZQUM3RixnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFBO1lBQy9FLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNoRDs7Ozs7Ozs7Y0FRRTtTQUNMO1FBR0QsVUFBVTtRQUNWLElBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLEVBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUE7U0FDN0I7YUFDRztZQUNBLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUlELDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUE7UUFDN0YsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUE7SUFFbEYsQ0FBQztJQWxGRDtRQURDLFFBQVE7d0NBQ2E7SUFHdEI7UUFEQyxRQUFRO2dEQUNrQjtJQU5WLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FzRnZCO0lBQUQsVUFBQztDQXRGRCxBQXNGQyxDQXRGZ0MsRUFBRSxDQUFDLFNBQVMsR0FzRjVDO2tCQXRGb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZhdGlndWU6IG51bWJlciA9IDUwMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJlY292ZXJfaW50ZXZhbDpudW1iZXIgPSAzOyAgLy/nsr7lipvmnaHmr4/pmpQz56eS5oGi5aSN5LiA5qyhXHJcblxyXG4gICAgXHJcbiAgICByZWNvdmVyKClcclxuICAgIHtcclxuICAgICAgICAvLyvliqjnlLvllaXnmoRcclxuICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV2ZW50X3Blcm1pdHRlZCA9IHRydWVcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3Byb21wdCcpLmNvbG9yID0gY2MuQ29sb3IuR1JFRU5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBmb3IgdGVzdFxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoKT0+e1xyXG4gICAgICAgICAgICAvL2NjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuY2hhbmdlRW5lcmd5KDEwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICB0aGlzLmZhdGlndWUgKz0gdmFsXHJcbiAgICBjb25zb2xlLmRlYnVnKHRoaXMuZmF0aWd1ZSlcclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gdGhpcy5mYXRpZ3VlLzUwMC5cclxuICAgIGlmICh0aGlzLmZhdGlndWUgPj0gNTAwLilcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnNldHRsZSgpIC8v57uT566X5YaNcmVzZXQgXHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnZmF0aWd1ZSBib21iIGFuZCBCRUdJTiBORVhUIFJPVU5EIElOU1RBTlRMWSAhISEnKVxyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImV4YXVzdGVkXCIsIHRydWUpKVxyXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENoaWxkQnlOYW1lKCdidXR0b24nKVxyXG4gICAgICAgIC8vIOaaguaXtuS4jei/m+ihjO+8mnRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZSgnYnV0dG9uJykuZ2V0Q29tcG9uZW50KCduZXh0JykubmV4dCgpXHJcbiAgICB9IFxyXG4gICAgKi9cclxuICAgICAgICAvL2Vsc2UgdGhpcy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gdGhpcy5mYXRpZ3VlIC8gNTAwLlxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZygnU0VUJylcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IHNyYyA9IHRoaXMuZmF0aWd1ZVxyXG4gICAgICAgIHRoaXMuZmF0aWd1ZSA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZ2V0RW5lcmd5KClcclxuICAgICAgICB0aGlzLmZhdGlndWUgPSB0aGlzLmZhdGlndWUgPCAwID8gMCA6IHRoaXMuZmF0aWd1ZSAvL2ZpbHRlcmluZ1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzcmMgIT0gdGhpcy5mYXRpZ3VlKSAvL3Bu5Lit55qE57K+5Yqb5YC85Y+R55Sf5LqG5pS55Y+YXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ0JhcicpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZyhjYy5maW5kKCdldmVudF9jb250cm9sbGVyJykuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuZXZlbnRfcGVybWl0dGVkKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ3RhcmdldDogJytTdHJpbmcodGhpcy5mYXRpZ3VlKSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgKz0gKHRoaXMuZmF0aWd1ZS1zcmMpLzUwMC81XHJcbiAgICAgICAgICAgIH0sIGR0LCA1KVxyXG4gICAgICAgICAgICBpZiAoc3JjIDw9IDAgJiYgdGhpcy5mYXRpZ3VlID4gMCkgdGhpcy5yZWNvdmVyKClcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmF0aWd1ZSA8PSAwKSAvL2VuZXJneSDlj5jljJbnmoTnu5PmnpzmmK/orqnlvZPliY3lgLzlj5jmiJA8PTBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygndGFyZ2V0OiAnK1N0cmluZyhjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldEVuZXJneSgpKSlcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpIOWPmOe6ouS4gOS4i++8muaNouS4quadkOi0qOaIlue6ouahhueahOWbvlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnZXZlbnRfY29udHJvbGxlcicpLmVtaXQoJ2V4YXVzdGVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHRoaXMucmVjb3ZlcigpLy9lbmVyZ3kg5Y+Y5YyW55qE57uT5p6c5piv6K6p5b2T5YmN5YC85Y+Y5oiQPjBcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v57K+5Yqb5p2h6ZqP5pe26Ze05oGi5aSNXHJcbiAgICAgICAgaWYodGhpcy5yZWNvdmVyX2ludGV2YWwgPj0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3Zlcl9pbnRldmFsIC09IGR0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuY2hhbmdlRW5lcmd5KDEpO1xyXG4gICAgICAgICAgICB0aGlzLnJlY292ZXJfaW50ZXZhbCA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3Byb21wdCcpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5mYXRpZ3VlKS50b1N0cmluZygpICsgJyAvIDUwMCdcclxuICAgICAgICBpZiAodGhpcy5mYXRpZ3VlID09IDApIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncHJvbXB0JykuY29sb3IgPSBjYy5Db2xvci5SRURcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/over.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e33c9SdhtJG764YK4/ydbk', 'over');
// script/event_scripts/over.ts

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
var over = /** @class */ (function (_super) {
    __extends(over, _super);
    function over() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.events = null;
        return _this;
        // update (dt) {}
    }
    //q_ents: cc.NodePool = null;
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    over.prototype.next = function () {
        cc.loader.loadRes("关闭", cc.AudioClip, function (res, clip) {
            //播放音乐
            var audioID = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.3);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });
        this.node.dispatchEvent(new cc.Event.EventCustom("over", true));
        cc.find('persist_node').getComponent('persist_node').focus = null;
    };
    __decorate([
        property(cc.Label)
    ], over.prototype, "label", void 0);
    __decorate([
        property
    ], over.prototype, "text", void 0);
    __decorate([
        property(cc.Prefab)
    ], over.prototype, "events", void 0);
    over = __decorate([
        ccclass
    ], over);
    return over;
}(cc.Component));
exports.default = over;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxvdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBa0NDO1FBL0JHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixZQUFNLEdBQWMsSUFBSSxDQUFDOztRQXdCekIsaUJBQWlCO0lBQ3JCLENBQUM7SUF2QkcsNkJBQTZCO0lBRzdCLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsbUJBQUksR0FBSjtRQUdJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFDLElBQUk7WUFDM0MsTUFBTTtZQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkMsUUFBUTtZQUNSLCtCQUErQjtRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDL0QsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtJQUNyRSxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRO3NDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0s7SUFUUixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa0N4QjtJQUFELFdBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBa0M3QztrQkFsQ29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBldmVudHM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy9xX2VudHM6IGNjLk5vZGVQb29sID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgbmV4dCgpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi5YWz6ZetXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjMpO1xyXG4gICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcIm92ZXJcIiwgdHJ1ZSkpXHJcbiAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5mb2N1cyA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d74fyDRVRFTaiPOLAQeCfz', 'event');
// script/event_scripts/event.ts

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
var event = /** @class */ (function (_super) {
    __extends(event, _super);
    function event() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ent = null;
        //@property(cc.Prefab)
        //description: cc.Prefab = null
        //_random_price: number = 0
        //_exp_gaining: number = 0
        _this.player = null;
        _this.benefit_total = 0;
        return _this;
    }
    event.prototype.show_event = function () {
    };
    event.prototype.open = function () {
        //打开事件之动画逻辑
    };
    event.prototype.diminish = function (tar) {
        var mv_action = cc.moveTo(0.5, tar);
        var sc_action = cc.scaleTo(0.5, 0, 0);
        this.node.runAction(mv_action);
        this.node.runAction(sc_action);
        //this.node.destroy()
    };
    event.prototype.clear = function () {
        this.destroy();
    };
    event.prototype.onLoad = function () {
        //this._random_price = Math.random() * 400
        //this._exp_gaining = Math.random() * 50 // 此处用这个随机数指代事件类型
        //this.player = this.node.getComponent(cc.Animation)
    };
    event.prototype.start = function () {
        var _this = this;
        /* dispatch one event to this node */
        this.ent = this.node.getParent().getComponent('event_controller').dispatch_event();
        var p_node = cc.find('persist_node').getComponent('persist_node');
        //console.debug('pop finished')
        //console.debug(this.ent)
        this.node.getComponentInChildren(cc.Label).string = p_node.get_event_grade(0, this.ent[0]) + ':' + this.ent[0];
        this.node.getChildByName('title').color = cc.Color.BLUE;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            cc.loader.loadRes("翻牌", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            if (p_node.event_permitted) {
                //console.debug(this.ent[0]+'map to '+p_node.get_event_energy(this.ent[0]).toString())
                //console.debug(this.ent)
                var price = Math.round(p_node.get_event_energy(0, _this.ent[0]));
                //this.ent[0] = 'GRADE: ' + p_node.get_event_grade(0, this.ent[0]) + this.ent[0]
                //console.debug('touch the event : '+price.toString())
                p_node.changeEnergy(-price);
                if (p_node.getEnergy() <= 0) // 点下去爆了精力条，不需要进行事件逻辑判断
                 {
                    //console.debug('exausted: '+String(cc.find('persist_node').getComponent('persist_node').getEnergy()))
                    //this.getComponent(cc.ProgressBar) 变红一下：换个材质或红框的图
                    cc.find('event_controller').emit('exausted');
                }
                else {
                    //先进行事件类型判断，类型为 1_2[_3], 123是不同属性名称， 1决定事件是否出现，2决定分支和收益系数，3决定事件是否只出现一次
                    //this.show_event()
                    /*
                    console.debug('show this event:')
                    console.debug(this.ent[0])
                    console.debug(this.ent[1])
                    console.debug(this.ent[2])
                    console.debug(this.ent[3])
                    console.debug('========end show========')
                    */
                    var type = _this.ent[1].split('，');
                    var settle_desc = '';
                    if (type.length >= 2 && type[1] != '_') //需要进行分支判断和收益放缩
                     {
                        var branchs = _this.ent[3].split('#');
                        var threld = p_node.get_avg_attr() * (1 - p_node.rec_gaussian(-0.1, 0.1, -0.3, 0.1));
                        //console.debug(threld)
                        //console.debug(threld.toString())
                        if (p_node.get_attr(type[1]) >= threld) {
                            //===>通过门槛, 事件总收益和price比例类近
                            console.debug('pass the threld');
                            _this.ent[3] = branchs[0] + branchs[1];
                            var scale = p_node.get_attr(type[1]) / threld;
                            var rewards = _this.ent[2].split('，');
                            _this.benefit_total = (price + p_node.gaussian_random(0, 5)) * rewards.length * scale;
                            price = price * (1 - (p_node.get_attr('灵根') - 50) / 100); // 代价需要跟着灵根有一定的浮动
                            var remain_por = 1;
                            for (var i = 0; i < rewards.length; ++i) {
                                if (rewards[i].split('：')[0] == '特殊') {
                                    _this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], 1);
                                    settle_desc += '\n得到' + rewards[i].split('：')[1] + '。';
                                }
                                else {
                                    var por = remain_por * p_node.rec_gaussian(0.4, 0.1, 0.2, 0.6);
                                    var reward = Math.round(_this.benefit_total * por / 500 * p_node.exp_required() / (Math.pow(2, p_node.level)));
                                    var cat = '+';
                                    if (type[0] == '1') {
                                        cat = '';
                                        reward = -reward;
                                    }
                                    if (!_this.node.getParent().getComponent('event_controller').benefit.has(rewards[i]))
                                        _this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], reward);
                                    else
                                        _this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], _this.node.getParent().getComponent('event_controller').benefit.get(rewards[i]) + reward);
                                    //因为寿命是指数级增加的，所以每个级别需要消耗的精力管数也是指数增加，而其他属性因为判定总是用均值所以无关紧要
                                    settle_desc += '\n' + rewards[i] + cat + ' ' + reward.toString();
                                    remain_por -= por;
                                }
                            }
                        }
                        else {
                            console.debug('not pass the threld');
                            _this.ent[3] = branchs[0] + branchs[2];
                        }
                    }
                    else //无分支的事件
                     {
                        console.debug('no branch');
                        var rewards = _this.ent[2].split('，');
                        _this.benefit_total = (price + p_node.gaussian_random(0, 5)) * rewards.length;
                        var norm = p_node.get_attr('灵根');
                        price = price * (1 - (norm - 50) / 100); // 代价需要跟着灵根有一定的浮动
                        var remain_por = 1;
                        for (var i = 0; i < rewards.length; ++i) {
                            if (rewards[i].split('：')[0] == '特殊') {
                                _this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], 1);
                                settle_desc += '\n得到' + rewards[i].split('：')[1] + '。';
                            }
                            else if (i < rewards.length - 1) {
                                var por = remain_por * p_node.rec_gaussian(0.5, 0.1, 0.2, 0.8);
                                var cat = '+';
                                var reward = Math.round(_this.benefit_total * por / 500 * p_node.exp_required() / (Math.pow(2, p_node.level)));
                                if (type[0] == '1') {
                                    cat = '';
                                    reward = -reward;
                                }
                                if (!_this.node.getParent().getComponent('event_controller').benefit.has(rewards[i]))
                                    _this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], reward);
                                else
                                    _this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], _this.node.getParent().getComponent('event_controller').benefit.get(rewards[i]) + reward);
                                settle_desc += '\n' + rewards[i] + cat + ' ' + reward.toString();
                                remain_por -= por;
                            }
                            else {
                                var cat = '+';
                                var reward = Math.round(_this.benefit_total * remain_por / 500 * p_node.exp_required() / (Math.pow(2, p_node.level)));
                                if (type[0] == '1') {
                                    cat = '';
                                    reward = -reward;
                                }
                                if (!_this.node.getParent().getComponent('event_controller').benefit.has(rewards[i]))
                                    _this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], reward);
                                else
                                    _this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], _this.node.getParent().getComponent('event_controller').benefit.get(rewards[i]) + reward);
                                settle_desc += '\n' + rewards[i] + cat + ' ' + reward.toString();
                            }
                        }
                    }
                    console.debug(settle_desc);
                    _this.node.getParent().getComponent('event_controller').event_describe(_this.ent[3] + settle_desc);
                    //console.debug(price)
                    //console.debug(this.benefit_total*(p_node.exp_required()/500))
                    p_node.getComponent('persist_node').log_write(_this.ent[3]);
                }
                _this.diminish(new cc.Vec2(cc.find('energyBar').getComponent(cc.ProgressBar).progress * 500 - 580, 210));
                //console.debug(this.node.getPosition().x, this.node.getPosition().y)
            }
            else
                console.debug('been exausted!');
        });
    };
    event.prototype.update = function (dt) {
    };
    __decorate([
        property
    ], event.prototype, "ent", void 0);
    __decorate([
        property
    ], event.prototype, "benefit_total", void 0);
    event = __decorate([
        ccclass
    ], event);
    return event;
}(cc.Component));
exports.default = event;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQW1OQztRQWpORyxTQUFHLEdBQUcsSUFBSSxDQUFBO1FBRVYsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUUvQiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBRTFCLFlBQU0sR0FBaUIsSUFBSSxDQUFBO1FBRzNCLG1CQUFhLEdBQVcsQ0FBQyxDQUFBOztJQXNNN0IsQ0FBQztJQXBNRywwQkFBVSxHQUFWO0lBR0EsQ0FBQztJQUdELG9CQUFJLEdBQUo7UUFFSSxXQUFXO0lBQ2YsQ0FBQztJQUVELHdCQUFRLEdBQVIsVUFBUyxHQUFZO1FBRWpCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ25DLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM5QixxQkFBcUI7SUFFekIsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVELHNCQUFNLEdBQU47UUFDSSwwQ0FBMEM7UUFDMUMs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LENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUM3RDtnQkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxHQUFDLEdBQUcsR0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDbkcscUVBQXFFO2FBQ3hFOztnQkFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFRLEVBQUU7SUFHVixDQUFDO0lBaE5EO1FBREMsUUFBUTtzQ0FDQztJQVdWO1FBREMsUUFBUTtnREFDZ0I7SUFiUixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBbU56QjtJQUFELFlBQUM7Q0FuTkQsQUFtTkMsQ0FuTmtDLEVBQUUsQ0FBQyxTQUFTLEdBbU45QztrQkFuTm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV2ZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZW50ID0gbnVsbFxyXG5cclxuICAgIC8vQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIC8vZGVzY3JpcHRpb246IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICAvL19yYW5kb21fcHJpY2U6IG51bWJlciA9IDBcclxuICAgIC8vX2V4cF9nYWluaW5nOiBudW1iZXIgPSAwXHJcblxyXG4gICAgcGxheWVyOiBjYy5BbmltYXRpb24gPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBiZW5lZml0X3RvdGFsOiBudW1iZXIgPSAwXHJcblxyXG4gICAgc2hvd19ldmVudCgpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9wZW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8v5omT5byA5LqL5Lu25LmL5Yqo55S76YC76L6RXHJcbiAgICB9XHJcblxyXG4gICAgZGltaW5pc2godGFyOiBjYy5WZWMyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdl9hY3Rpb24gPSBjYy5tb3ZlVG8oMC41LCB0YXIpXHJcbiAgICAgICAgbGV0IHNjX2FjdGlvbiA9IGNjLnNjYWxlVG8oMC41LCAwLCAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obXZfYWN0aW9uKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2NfYWN0aW9uKVxyXG4gICAgICAgIC8vdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy90aGlzLl9yYW5kb21fcHJpY2UgPSBNYXRoLnJhbmRvbSgpICogNDAwXHJcbiAgICAgICAgLy90aGlzLl9leHBfZ2FpbmluZyA9IE1hdGgucmFuZG9tKCkgKiA1MCAvLyDmraTlpITnlKjov5nkuKrpmo/mnLrmlbDmjIfku6Pkuovku7bnsbvlnotcclxuICAgICAgICAvL3RoaXMucGxheWVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvKiBkaXNwYXRjaCBvbmUgZXZlbnQgdG8gdGhpcyBub2RlICovXHJcbiAgICAgICAgdGhpcy5lbnQgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuZGlzcGF0Y2hfZXZlbnQoKVxyXG4gICAgICAgIGxldCBwX25vZGUgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpXHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKCdwb3AgZmluaXNoZWQnKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1Zyh0aGlzLmVudClcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gcF9ub2RlLmdldF9ldmVudF9ncmFkZSgwLCB0aGlzLmVudFswXSkgKyAnOicgKyB0aGlzLmVudFswXVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgndGl0bGUnKS5jb2xvciA9IGNjLkNvbG9yLkJMVUVcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpPT57XHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIue/u+eJjFwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9JRCwgMC4zKTtcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHBfbm9kZS5ldmVudF9wZXJtaXR0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zyh0aGlzLmVudFswXSsnbWFwIHRvICcrcF9ub2RlLmdldF9ldmVudF9lbmVyZ3kodGhpcy5lbnRbMF0pLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcodGhpcy5lbnQpXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBNYXRoLnJvdW5kKHBfbm9kZS5nZXRfZXZlbnRfZW5lcmd5KDAsIHRoaXMuZW50WzBdKSlcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5lbnRbMF0gPSAnR1JBREU6ICcgKyBwX25vZGUuZ2V0X2V2ZW50X2dyYWRlKDAsIHRoaXMuZW50WzBdKSArIHRoaXMuZW50WzBdXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ3RvdWNoIHRoZSBldmVudCA6ICcrcHJpY2UudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIHBfbm9kZS5jaGFuZ2VFbmVyZ3koLXByaWNlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHBfbm9kZS5nZXRFbmVyZ3koKSA8PSAwKSAvLyDngrnkuIvljrvniIbkuobnsr7lipvmnaHvvIzkuI3pnIDopoHov5vooYzkuovku7bpgLvovpHliKTmlq1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ2V4YXVzdGVkOiAnK1N0cmluZyhjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldEVuZXJneSgpKSlcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKSDlj5jnuqLkuIDkuIvvvJrmjaLkuKrmnZDotKjmiJbnuqLmoYbnmoTlm75cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdldmVudF9jb250cm9sbGVyJykuZW1pdCgnZXhhdXN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5YWI6L+b6KGM5LqL5Lu257G75Z6L5Yik5pat77yM57G75Z6L5Li6IDFfMltfM10sIDEyM+aYr+S4jeWQjOWxnuaAp+WQjeensO+8jCAx5Yaz5a6a5LqL5Lu25piv5ZCm5Ye6546w77yMMuWGs+WumuWIhuaUr+WSjOaUtuebiuezu+aVsO+8jDPlhrPlrprkuovku7bmmK/lkKblj6rlh7rnjrDkuIDmrKFcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2hvd19ldmVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdzaG93IHRoaXMgZXZlbnQ6JylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMuZW50WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5lbnRbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLmVudFsyXSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMuZW50WzNdKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJz09PT09PT09ZW5kIHNob3c9PT09PT09PScpXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMuZW50WzFdLnNwbGl0KCfvvIwnKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZXR0bGVfZGVzYyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUubGVuZ3RoID49IDIgJiYgdHlwZVsxXSE9J18nKS8v6ZyA6KaB6L+b6KGM5YiG5pSv5Yik5pat5ZKM5pS255uK5pS+57ypXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnJhbmNocyA9IHRoaXMuZW50WzNdLnNwbGl0KCcjJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRocmVsZCA9IHBfbm9kZS5nZXRfYXZnX2F0dHIoKSooMS1wX25vZGUucmVjX2dhdXNzaWFuKC0wLjEsIDAuMSwgLTAuMywgMC4xKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRocmVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRocmVsZC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocF9ub2RlLmdldF9hdHRyKHR5cGVbMV0pID49IHRocmVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PT0+6YCa6L+H6Zeo5qebLCDkuovku7bmgLvmlLbnm4rlkoxwcmljZeavlOS+i+exu+i/kVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygncGFzcyB0aGUgdGhyZWxkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW50WzNdID0gYnJhbmNoc1swXSticmFuY2hzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBwX25vZGUuZ2V0X2F0dHIodHlwZVsxXSkvdGhyZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkcyA9IHRoaXMuZW50WzJdLnNwbGl0KCfvvIwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZW5lZml0X3RvdGFsID0gKHByaWNlICsgcF9ub2RlLmdhdXNzaWFuX3JhbmRvbSgwLCA1KSkqcmV3YXJkcy5sZW5ndGgqc2NhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gcHJpY2UqKDEtKHBfbm9kZS5nZXRfYXR0cign54G15qC5JyktNTApLzEwMCkgLy8g5Luj5Lu36ZyA6KaB6Lef552A54G15qC55pyJ5LiA5a6a55qE5rWu5YqoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVtYWluX3BvciA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV3YXJkcy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV3YXJkc1tpXS5zcGxpdCgn77yaJylbMF09PSfnibnmroonKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZXZlbnRfY29udHJvbGxlcicpLmJlbmVmaXQuc2V0KHJld2FyZHNbaV0sIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRsZV9kZXNjICs9ICdcXG7lvpfliLAnK3Jld2FyZHNbaV0uc3BsaXQoJ++8micpWzFdKyfjgIInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3IgPSByZW1haW5fcG9yKnBfbm9kZS5yZWNfZ2F1c3NpYW4oMC40LCAwLjEsIDAuMiwgMC42KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkID0gTWF0aC5yb3VuZCh0aGlzLmJlbmVmaXRfdG90YWwqcG9yLzUwMCpwX25vZGUuZXhwX3JlcXVpcmVkKCkvKDIqKnBfbm9kZS5sZXZlbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXQgPSAnKydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVbMF0gPT0gJzEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gLXJld2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2V2ZW50X2NvbnRyb2xsZXInKS5iZW5lZml0LmhhcyhyZXdhcmRzW2ldKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuYmVuZWZpdC5zZXQocmV3YXJkc1tpXSwgcmV3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2V2ZW50X2NvbnRyb2xsZXInKS5iZW5lZml0LnNldChyZXdhcmRzW2ldLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuYmVuZWZpdC5nZXQocmV3YXJkc1tpXSkrcmV3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WboOS4uuWvv+WRveaYr+aMh+aVsOe6p+WinuWKoOeahO+8jOaJgOS7peavj+S4que6p+WIq+mcgOimgea2iOiAl+eahOeyvuWKm+euoeaVsOS5n+aYr+aMh+aVsOWinuWKoO+8jOiAjOWFtuS7luWxnuaAp+WboOS4uuWIpOWumuaAu+aYr+eUqOWdh+WAvOaJgOS7peaXoOWFs+e0p+imgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0bGVfZGVzYyArPSAnXFxuJytyZXdhcmRzW2ldK2NhdCsnICcrcmV3YXJkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluX3BvciAtPSBwb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdub3QgcGFzcyB0aGUgdGhyZWxkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW50WzNdID0gYnJhbmNoc1swXSticmFuY2hzWzJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZS8v5peg5YiG5pSv55qE5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdubyBicmFuY2gnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkcyA9IHRoaXMuZW50WzJdLnNwbGl0KCfvvIwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlbmVmaXRfdG90YWwgPSAocHJpY2UgKyBwX25vZGUuZ2F1c3NpYW5fcmFuZG9tKDAsIDUpKSpyZXdhcmRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9ybSA9IHBfbm9kZS5nZXRfYXR0cign54G15qC5JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBwcmljZSooMS0obm9ybS01MCkvMTAwKSAvLyDku6Pku7fpnIDopoHot5/nnYDngbXmoLnmnInkuIDlrprnmoTmta7liqhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbWFpbl9wb3IgPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV3YXJkcy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJld2FyZHNbaV0uc3BsaXQoJ++8micpWzBdPT0n54m55q6KJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuYmVuZWZpdC5zZXQocmV3YXJkc1tpXSwgMSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlX2Rlc2MgKz0gJ1xcbuW+l+WIsCcrcmV3YXJkc1tpXS5zcGxpdCgn77yaJylbMV0rJ+OAgidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPCByZXdhcmRzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvciA9IHJlbWFpbl9wb3IqcF9ub2RlLnJlY19nYXVzc2lhbigwLjUsIDAuMSwgMC4yLCAwLjgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhdCA9ICcrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmQgPSBNYXRoLnJvdW5kKHRoaXMuYmVuZWZpdF90b3RhbCpwb3IvNTAwKnBfbm9kZS5leHBfcmVxdWlyZWQoKS8oMioqcF9ub2RlLmxldmVsKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVswXSA9PSAnMScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSAtcmV3YXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2V2ZW50X2NvbnRyb2xsZXInKS5iZW5lZml0LmhhcyhyZXdhcmRzW2ldKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuYmVuZWZpdC5zZXQocmV3YXJkc1tpXSwgcmV3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2V2ZW50X2NvbnRyb2xsZXInKS5iZW5lZml0LnNldChyZXdhcmRzW2ldLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuYmVuZWZpdC5nZXQocmV3YXJkc1tpXSkrcmV3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRsZV9kZXNjICs9ICdcXG4nK3Jld2FyZHNbaV0rY2F0KycgJytyZXdhcmQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbl9wb3IgLT0gcG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhdCA9ICcrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmQgPSBNYXRoLnJvdW5kKHRoaXMuYmVuZWZpdF90b3RhbCpyZW1haW5fcG9yLzUwMCpwX25vZGUuZXhwX3JlcXVpcmVkKCkvKDIqKnBfbm9kZS5sZXZlbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVbMF0gPT0gJzEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gLXJld2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuYmVuZWZpdC5oYXMocmV3YXJkc1tpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZXZlbnRfY29udHJvbGxlcicpLmJlbmVmaXQuc2V0KHJld2FyZHNbaV0sIHJld2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuYmVuZWZpdC5zZXQocmV3YXJkc1tpXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZXZlbnRfY29udHJvbGxlcicpLmJlbmVmaXQuZ2V0KHJld2FyZHNbaV0pK3Jld2FyZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0bGVfZGVzYyArPSAnXFxuJytyZXdhcmRzW2ldK2NhdCsnICcrcmV3YXJkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKHNldHRsZV9kZXNjKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2V2ZW50X2NvbnRyb2xsZXInKS5ldmVudF9kZXNjcmliZSh0aGlzLmVudFszXStzZXR0bGVfZGVzYylcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcocHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRoaXMuYmVuZWZpdF90b3RhbCoocF9ub2RlLmV4cF9yZXF1aXJlZCgpLzUwMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcF9ub2RlLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykubG9nX3dyaXRlKHRoaXMuZW50WzNdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaW1pbmlzaChuZXcgY2MuVmVjMihjYy5maW5kKCdlbmVyZ3lCYXInKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKjUwMC01ODAsIDIxMCkpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueCwgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGNvbnNvbGUuZGVidWcoJ2JlZW4gZXhhdXN0ZWQhJylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/exausted_prompt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfcb8zXiZdIHJRusP0lvjrd', 'exausted_prompt');
// script/event_scripts/exausted_prompt.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.node.dispatchEvent(new cc.Event.EventCustom("over", true));
        });
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxleGF1c3RlZF9wcm9tcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBYUEsQ0FBQztJQVhHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBVmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FhNUI7SUFBRCxlQUFDO0NBYkQsQUFhQyxDQWJxQyxFQUFFLENBQUMsU0FBUyxHQWFqRDtrQkFib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBldmVudF9jb250cm9sbGVyIGZyb20gXCIuL2V2ZW50X2NvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwib3ZlclwiLCB0cnVlKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/event_controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1fecuOiNhGJLlqZsLLIlG2', 'event_controller');
// script/event_scripts/event_controller.ts

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
var event_controller = /** @class */ (function (_super) {
    __extends(event_controller, _super);
    function event_controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.event = null;
        //@property(cc.Prefab)
        //bar: cc.Prefab = null
        _this.button = null;
        _this.exausted_prompt = null;
        _this.event_description = null;
        _this.benefit_exp = 0;
        _this.benefit = null;
        _this.limited_event_record = null;
        _this.dispatched_events = [];
        _this.num_dispatched = 0;
        return _this;
        /*
        destroy(): boolean {
            let paren = this.node.getParent()
            let n = cc.instantiate(cc.find('event_control'))
            n.setParent(paren)
            return true
        }
        */
    }
    /*
    clear_event()
    {
        for (let i = 0; i < this.ents.length; ++i)
        {
            this.ents[i].destroy()
            console.debug('attempt to del '.concat(String(i)))
        }
    }
    */
    event_controller.prototype.trim_segm = function (text) {
        var c = 0;
        for (var i = 1; i < text.length + 1; ++i) {
            if (text[i - 1] == '\n')
                c = 0;
            c++;
            if (c % 12 == 0) {
                text = text.slice(0, i) + '\n' + text.slice(i);
            }
        }
        return text + '\n';
    };
    event_controller.prototype.dispatch_event = function () {
        this.num_dispatched += 1;
        //console.debug('pop from:')
        //console.debug(this.dispatched_events[this.num_dispatched-1])
        return this.dispatched_events[this.num_dispatched - 1];
    };
    event_controller.prototype.event_describe = function (description) {
        description = this.trim_segm(description);
        var node = cc.instantiate(this.event_description);
        node.setParent(this.node);
        node.setPosition(new cc.Vec2(-427, 950));
        node.setScale(new cc.Vec2(3, 3));
        node.getComponentInChildren(cc.Label).string = description;
        //node.getChildByName('event_prompt').color = cc.Color.ORANGE
    };
    event_controller.prototype.exausted = function () {
        //+动画啥的
        var node = cc.instantiate(this.exausted_prompt);
        node.setParent(this.node);
        node.setPosition(new cc.Vec2(-427, 950));
        node.setScale(new cc.Vec2(3, 3));
        //console.debug(node.parent.name)
        cc.find('persist_node').getComponent('persist_node').getComponent('persist_node').log_write('在' +
            cc.find('persist_node').getComponent('persist_node').getAge().toString() +
            '岁，你贪功好进，结果精疲力竭，元气大伤，殚精竭虑之事也一件不成。修炼虽好，可不要贪杯哦。');
        this.benefit_exp = 0;
        cc.find('persist_node').getComponent('persist_node').event_permitted = false;
    };
    event_controller.prototype.init_event = function () {
        //console.debug('Init Events...')
        //let cur = this.node.getPosition()
        var p_node = cc.find('persist_node').getComponent('persist_node');
        var test = p_node.dispatch_event_without_requirement(0);
        var pos = [new cc.Vec2(-727, 1180), new cc.Vec2(-427, 1180), new cc.Vec2(-127, 1180), new cc.Vec2(-560, 770), new cc.Vec2(-240, 770)];
        //在controller选定事件,在event选定分支及代价
        var events = p_node.dispatch_event(cc.find('awakener').getComponent('awakener').event_group, 2, 3);
        for (var i = 0; i < 5; ++i) {
            //还可以在此处处理事件前置关系
            var ent = events[i];
            //console.debug(typeof(ent[1]))
            var types = ent[1].toString().split('，');
            var threld = p_node.get_avg_attr() * (1 - p_node.rec_gaussian(0.2, 0.2, -0.1, 0.5));
            while ((types.length == 3 && this.limited_event_record.has(ent[0].trim())) ||
                (types[0].trim() != '0' && types[0].trim() != '_' && types[0].split('：')[0] != '特殊' && p_node.get_attr(types[0]) <= threld) ||
                (types[0].split('：')[0] == '特殊' && p_node.get_attr(types[0]) != 1)) 
            //如果其为单次出现的事件并且已经出现过，或者其不满足触发门槛
            //先进行事件类型判断，类型为 1_2[_3], 123是不同属性名称，1决定事件是否出现，2决定分支和收益系数，3决定事件是否只出现一次
            {
                console.debug('该事件不满足要求,重新发事件');
                ent = p_node.dispatch_event_without_requirement(cc.find('awakener').getComponent('awakener').event_group);
                //console.debug(ent)
                types = ent[1].toString().split('，');
            }
            var node = cc.instantiate(this.event);
            node.setParent(this.node);
            node.setPosition(pos[i]);
            node.setScale(new cc.Vec2(1, 1));
            //node.getChildByName('title').getComponent(cc.Label).string = ent[0]
            //console.debug('init dispatch:')
            //console.debug([ent[0].toString(), ent[1].toString(), ent[2].toString(), ent[3].toString()])
            this.dispatched_events.push([ent[0].toString(), ent[1].toString(), ent[2].toString(), ent[3].toString()]);
            if (ent[1].toString().split('，').length == 3)
                this.limited_event_record.set(ent[0].trim(), true);
            //console.debug(events[i][1])
            //console.debug(node.getContentSize().toString())
            //console.debug(node.getPosition().x)
            //this.ents.push(node)
            /**/
        }
    };
    event_controller.prototype.init_bar_button = function () {
        //console.debug('Init widgets...')
        /*
        let node = cc.instantiate(this.bar)
        node.setParent(this.node)
        node.setPosition(new cc.Vec2(-550, 210))
        node.setScale(new cc.Vec2(1,1))
        */
        var node = cc.instantiate(this.button);
        node.setParent(this.node);
        node.setPosition(new cc.Vec2(-150, 210));
        //node.setPosition()
        node.setScale(new cc.Vec2(1, 1));
    };
    /*
    next()
    {
        
        this.node.getChildByName('progressBar').getComponent('bar').reset()
    }
    */
    event_controller.prototype.gameover = function () {
    };
    // LIFE-CYCLE CALLBACKS:
    event_controller.prototype.onLoad = function () {
        this.benefit = new Map(); //记录所有事件结算得到的总收益
        this.limited_event_record = new Map(); //记录
        this.init_event();
        this.init_bar_button();
    };
    event_controller.prototype.start = function () {
        var _this = this;
        this.node.on('over', function () {
            //console.debug('over')
            var p_node = cc.find('persist_node').getComponent('persist_node');
            p_node.addAge();
            if (p_node.getAge() == p_node.age_limited)
                _this.gameover();
            if (cc.find('persist_node').getComponent('persist_node').event_permitted) // 并非是在exausted后才点击over按钮
             {
                //结算事件总收益
                if (_this.benefit.has('修为'))
                    p_node.exp_gain(_this.benefit.get('修为'));
                var attr = Array.from(_this.benefit);
                console.debug(attr);
                for (var i = 0; i < attr.length; ++i) {
                    if (attr[i][0] != '修为')
                        p_node.change_attr(attr[i][0], attr[i][1]);
                }
            }
            //放出事件唤醒按钮，回收事件
            p_node.focus = null;
            cc.find('awakener').active = true;
            _this.node.destroy();
        });
        this.node.on('exausted', function () {
            console.debug('exausted');
            _this.exausted();
        });
        /*
        this.node.on('recover', ()=>{
            console.debug('recover')
            this.recover()
        })
        
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            this.awake()
        })
        */
    };
    event_controller.prototype.update = function (dt) {
        //if (cc.find('persist_node').getComponent('persist_node').getEnergy() > 0)
    };
    __decorate([
        property(cc.Prefab)
    ], event_controller.prototype, "event", void 0);
    __decorate([
        property(cc.Prefab)
    ], event_controller.prototype, "button", void 0);
    __decorate([
        property(cc.Prefab)
    ], event_controller.prototype, "exausted_prompt", void 0);
    __decorate([
        property(cc.Prefab)
    ], event_controller.prototype, "event_description", void 0);
    __decorate([
        property
    ], event_controller.prototype, "benefit_exp", void 0);
    __decorate([
        property
    ], event_controller.prototype, "benefit", void 0);
    __decorate([
        property
    ], event_controller.prototype, "limited_event_record", void 0);
    event_controller = __decorate([
        ccclass
    ], event_controller);
    return event_controller;
}(cc.Component));
exports.default = event_controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxldmVudF9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc09DO1FBcE9HLFdBQUssR0FBYyxJQUFJLENBQUE7UUFFdkIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUd2QixZQUFNLEdBQWMsSUFBSSxDQUFBO1FBR3hCLHFCQUFlLEdBQWMsSUFBSSxDQUFBO1FBR2pDLHVCQUFpQixHQUFjLElBQUksQ0FBQTtRQUduQyxpQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUd2QixhQUFPLEdBQUcsSUFBSSxDQUFBO1FBR2QsMEJBQW9CLEdBQUcsSUFBSSxDQUFBO1FBRTNCLHVCQUFpQixHQUFHLEVBQUUsQ0FBQTtRQUN0QixvQkFBYyxHQUFHLENBQUMsQ0FBQTs7UUFtTWxCOzs7Ozs7O1VBT0U7SUFFTixDQUFDO0lBMU1HOzs7Ozs7Ozs7TUFTRTtJQUVGLG9DQUFTLEdBQVQsVUFBVSxJQUFZO1FBRWxCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDdEM7WUFDSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSTtnQkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLENBQUMsRUFBRSxDQUFDO1lBQ0osSUFBSSxDQUFDLEdBQUcs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ZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBldmVudF9jb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBldmVudDogY2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIC8vQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIC8vYmFyOiBjYy5QcmVmYWIgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJ1dHRvbjogY2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBleGF1c3RlZF9wcm9tcHQ6IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZXZlbnRfZGVzY3JpcHRpb246IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGJlbmVmaXRfZXhwOiBudW1iZXIgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBiZW5lZml0ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbGltaXRlZF9ldmVudF9yZWNvcmQgPSBudWxsXHJcblxyXG4gICAgZGlzcGF0Y2hlZF9ldmVudHMgPSBbXVxyXG4gICAgbnVtX2Rpc3BhdGNoZWQgPSAwXHJcblxyXG4gICAgLypcclxuICAgIGNsZWFyX2V2ZW50KClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW50cy5sZW5ndGg7ICsraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50c1tpXS5kZXN0cm95KClcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnYXR0ZW1wdCB0byBkZWwgJy5jb25jYXQoU3RyaW5nKGkpKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIHRyaW1fc2VnbSh0ZXh0OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGMgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGV4dC5sZW5ndGgrMTsgKytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRleHRbaS0xXT09J1xcbicpIGMgPSAwXHJcbiAgICAgICAgICAgIGMrKztcclxuICAgICAgICAgICAgaWYgKGMgJSAxMiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCBpKSArICdcXG4nICsgdGV4dC5zbGljZShpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0KydcXG4nXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2hfZXZlbnQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubnVtX2Rpc3BhdGNoZWQgKz0gMVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZygncG9wIGZyb206JylcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcodGhpcy5kaXNwYXRjaGVkX2V2ZW50c1t0aGlzLm51bV9kaXNwYXRjaGVkLTFdKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoZWRfZXZlbnRzW3RoaXMubnVtX2Rpc3BhdGNoZWQtMV1cclxuICAgIH1cclxuXHJcbiAgICBldmVudF9kZXNjcmliZShkZXNjcmlwdGlvbjogc3RyaW5nKVxyXG4gICAge1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbiA9IHRoaXMudHJpbV9zZWdtKGRlc2NyaXB0aW9uKVxyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ldmVudF9kZXNjcmlwdGlvbilcclxuICAgICAgICBub2RlLnNldFBhcmVudCh0aGlzLm5vZGUpXHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigtNDI3LCA5NTApKVxyXG4gICAgICAgIG5vZGUuc2V0U2NhbGUobmV3IGNjLlZlYzIoMywzKSlcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgLy9ub2RlLmdldENoaWxkQnlOYW1lKCdldmVudF9wcm9tcHQnKS5jb2xvciA9IGNjLkNvbG9yLk9SQU5HRVxyXG4gICAgfVxyXG5cclxuICAgIGV4YXVzdGVkKClcclxuICAgIHtcclxuICAgICAgICAvLyvliqjnlLvllaXnmoRcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhhdXN0ZWRfcHJvbXB0KVxyXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSlcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKC00MjcsIDk1MCkpXHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZShuZXcgY2MuVmVjMigzLDMpKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1Zyhub2RlLnBhcmVudC5uYW1lKVxyXG4gICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5sb2dfd3JpdGUoJ+WcqCcrXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZ2V0QWdlKCkudG9TdHJpbmcoKStcclxuICAgICAgICAgICAgJ+Wyge+8jOS9oOi0quWKn+Wlvei/m++8jOe7k+aenOeyvueWsuWKm+erre+8jOWFg+awlOWkp+S8pO+8jOaumueyvuerreiZkeS5i+S6i+S5n+S4gOS7tuS4jeaIkOOAguS/rueCvOiZveWlve+8jOWPr+S4jeimgei0quadr+WTpuOAgicpXHJcbiAgICAgICAgdGhpcy5iZW5lZml0X2V4cCA9IDBcclxuICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV2ZW50X3Blcm1pdHRlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdF9ldmVudCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKCdJbml0IEV2ZW50cy4uLicpXHJcbiAgICAgICAgLy9sZXQgY3VyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgICAgICBsZXQgcF9ub2RlID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKVxyXG4gICAgICAgIGxldCB0ZXN0ID0gcF9ub2RlLmRpc3BhdGNoX2V2ZW50X3dpdGhvdXRfcmVxdWlyZW1lbnQoMClcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcG9zID0gW25ldyBjYy5WZWMyKC03MjcsIDExODApLCBuZXcgY2MuVmVjMigtNDI3LCAxMTgwKSwgbmV3IGNjLlZlYzIoLTEyNywgMTE4MCksIG5ldyBjYy5WZWMyKC01NjAsIDc3MCksIG5ldyBjYy5WZWMyKC0yNDAsIDc3MCldXHJcbiAgICAgICAgLy/lnKhjb250cm9sbGVy6YCJ5a6a5LqL5Lu2LOWcqGV2ZW506YCJ5a6a5YiG5pSv5Y+K5Luj5Lu3XHJcbiAgICAgICAgbGV0IGV2ZW50cyA9IHBfbm9kZS5kaXNwYXRjaF9ldmVudChjYy5maW5kKCdhd2FrZW5lcicpLmdldENvbXBvbmVudCgnYXdha2VuZXInKS5ldmVudF9ncm91cCwgMiwgMylcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyArK2kpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/ov5jlj6/ku6XlnKjmraTlpITlpITnkIbkuovku7bliY3nva7lhbPns7tcclxuICAgICAgICAgICAgbGV0IGVudCA9IGV2ZW50c1tpXVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcodHlwZW9mKGVudFsxXSkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdHlwZXMgPSBlbnRbMV0udG9TdHJpbmcoKS5zcGxpdCgn77yMJylcclxuICAgICAgICAgICAgbGV0IHRocmVsZCA9IHBfbm9kZS5nZXRfYXZnX2F0dHIoKSooMS1wX25vZGUucmVjX2dhdXNzaWFuKDAuMiwgMC4yLCAtMC4xLCAwLjUpKVxyXG4gICAgICAgICAgICB3aGlsZSAoKHR5cGVzLmxlbmd0aD09MyAmJiB0aGlzLmxpbWl0ZWRfZXZlbnRfcmVjb3JkLmhhcyhlbnRbMF0udHJpbSgpKSkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVzWzBdLnRyaW0oKSE9JzAnICYmIHR5cGVzWzBdLnRyaW0oKSE9J18nICYmIHR5cGVzWzBdLnNwbGl0KCfvvJonKVswXSE9J+eJueauiicgJiYgcF9ub2RlLmdldF9hdHRyKHR5cGVzWzBdKTw9dGhyZWxkKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0eXBlc1swXS5zcGxpdCgn77yaJylbMF09PSfnibnmroonICYmIHBfbm9kZS5nZXRfYXR0cih0eXBlc1swXSkhPTEpKVxyXG4gICAgICAgICAgICAvL+WmguaenOWFtuS4uuWNleasoeWHuueOsOeahOS6i+S7tuW5tuS4lOW3sue7j+WHuueOsOi/h++8jOaIluiAheWFtuS4jea7oei2s+inpuWPkemXqOanm1xyXG4gICAgICAgICAgICAvL+WFiOi/m+ihjOS6i+S7tuexu+Wei+WIpOaWre+8jOexu+Wei+S4uiAxXzJbXzNdLCAxMjPmmK/kuI3lkIzlsZ7mgKflkI3np7DvvIwx5Yaz5a6a5LqL5Lu25piv5ZCm5Ye6546w77yMMuWGs+WumuWIhuaUr+WSjOaUtuebiuezu+aVsO+8jDPlhrPlrprkuovku7bmmK/lkKblj6rlh7rnjrDkuIDmrKFcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygn6K+l5LqL5Lu25LiN5ruh6Laz6KaB5rGCLOmHjeaWsOWPkeS6i+S7ticpXHJcbiAgICAgICAgICAgICAgICBlbnQgPSBwX25vZGUuZGlzcGF0Y2hfZXZlbnRfd2l0aG91dF9yZXF1aXJlbWVudChjYy5maW5kKCdhd2FrZW5lcicpLmdldENvbXBvbmVudCgnYXdha2VuZXInKS5ldmVudF9ncm91cClcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZyhlbnQpXHJcbiAgICAgICAgICAgICAgICB0eXBlcyA9IGVudFsxXS50b1N0cmluZygpLnNwbGl0KCfvvIwnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXZlbnQpXHJcbiAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSlcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3NbaV0pXHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUobmV3IGNjLlZlYzIoMSwxKSlcclxuICAgICAgICAgICAgLy9ub2RlLmdldENoaWxkQnlOYW1lKCd0aXRsZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZW50WzBdXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZygnaW5pdCBkaXNwYXRjaDonKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoW2VudFswXS50b1N0cmluZygpLCBlbnRbMV0udG9TdHJpbmcoKSwgZW50WzJdLnRvU3RyaW5nKCksIGVudFszXS50b1N0cmluZygpXSlcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVkX2V2ZW50cy5wdXNoKFtlbnRbMF0udG9TdHJpbmcoKSwgZW50WzFdLnRvU3RyaW5nKCksIGVudFsyXS50b1N0cmluZygpLCBlbnRbM10udG9TdHJpbmcoKV0pXHJcbiAgICAgICAgICAgIGlmIChlbnRbMV0udG9TdHJpbmcoKS5zcGxpdCgn77yMJykubGVuZ3RoPT0zKSB0aGlzLmxpbWl0ZWRfZXZlbnRfcmVjb3JkLnNldChlbnRbMF0udHJpbSgpLCB0cnVlKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoZXZlbnRzW2ldWzFdKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcobm9kZS5nZXRDb250ZW50U2l6ZSgpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zyhub2RlLmdldFBvc2l0aW9uKCkueClcclxuICAgICAgICAgICAgLy90aGlzLmVudHMucHVzaChub2RlKVxyXG4gICAgICAgICAgICAvKiovXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgaW5pdF9iYXJfYnV0dG9uKClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ0luaXQgd2lkZ2V0cy4uLicpXHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFyKVxyXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSlcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKC01NTAsIDIxMCkpXHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZShuZXcgY2MuVmVjMigxLDEpKVxyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1dHRvbilcclxuICAgICAgICBub2RlLnNldFBhcmVudCh0aGlzLm5vZGUpXHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigtMTUwLCAyMTApKVxyXG4gICAgICAgIC8vbm9kZS5zZXRQb3NpdGlvbigpXHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZShuZXcgY2MuVmVjMigxLDEpKVxyXG5cclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBuZXh0KClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3Byb2dyZXNzQmFyJykuZ2V0Q29tcG9uZW50KCdiYXInKS5yZXNldCgpXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIGdhbWVvdmVyKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYmVuZWZpdCA9IG5ldyBNYXAoKS8v6K6w5b2V5omA5pyJ5LqL5Lu257uT566X5b6X5Yiw55qE5oC75pS255uKXHJcbiAgICAgICAgdGhpcy5saW1pdGVkX2V2ZW50X3JlY29yZCA9IG5ldyBNYXAoKS8v6K6w5b2VXHJcbiAgICAgICAgdGhpcy5pbml0X2V2ZW50KClcclxuICAgICAgICB0aGlzLmluaXRfYmFyX2J1dHRvbigpICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbignb3ZlcicsICgpPT57XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zygnb3ZlcicpXHJcbiAgICAgICAgICAgIGxldCBwX25vZGUgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpXHJcbiAgICAgICAgICAgIHBfbm9kZS5hZGRBZ2UoKVxyXG4gICAgICAgICAgICBpZiAocF9ub2RlLmdldEFnZSgpPT1wX25vZGUuYWdlX2xpbWl0ZWQpIHRoaXMuZ2FtZW92ZXIoKVxyXG4gICAgICAgICAgICBpZiAoY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5ldmVudF9wZXJtaXR0ZWQpIC8vIOW5tumdnuaYr+WcqGV4YXVzdGVk5ZCO5omN54K55Ye7b3ZlcuaMiemSrlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+e7k+eul+S6i+S7tuaAu+aUtuebilxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmVuZWZpdC5oYXMoJ+S/ruS4uicpKSBwX25vZGUuZXhwX2dhaW4odGhpcy5iZW5lZml0LmdldCgn5L+u5Li6JykpXHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0ciA9IEFycmF5LmZyb20odGhpcy5iZW5lZml0KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhhdHRyKVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyW2ldWzBdIT0n5L+u5Li6JykgcF9ub2RlLmNoYW5nZV9hdHRyKGF0dHJbaV1bMF0sIGF0dHJbaV1bMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v5pS+5Ye65LqL5Lu25ZSk6YaS5oyJ6ZKu77yM5Zue5pS25LqL5Lu2XHJcbiAgICAgICAgICAgIHBfbm9kZS5mb2N1cyA9IG51bGxcclxuICAgICAgICAgICAgY2MuZmluZCgnYXdha2VuZXInKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vbignZXhhdXN0ZWQnLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdleGF1c3RlZCcpXHJcbiAgICAgICAgICAgIHRoaXMuZXhhdXN0ZWQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLypcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3JlY292ZXInLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdyZWNvdmVyJylcclxuICAgICAgICAgICAgdGhpcy5yZWNvdmVyKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmF3YWtlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvL2lmIChjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldEVuZXJneSgpID4gMClcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBkZXN0cm95KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBwYXJlbiA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKVxyXG4gICAgICAgIGxldCBuID0gY2MuaW5zdGFudGlhdGUoY2MuZmluZCgnZXZlbnRfY29udHJvbCcpKVxyXG4gICAgICAgIG4uc2V0UGFyZW50KHBhcmVuKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICAqL1xyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/attribute.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7ec6oONcdOQ5neclXz90ub', 'attribute');
// script/scene1/attribute.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板预制体，需要再cocos中将预制体拖入
        _this.attribute_panel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            if (cc.find('persist_node').getComponent('persist_node').focus == null) {
                _this.attribute_panel.active = true;
                cc.find('persist_node').getComponent('persist_node').focus = _this.attribute_panel;
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "attribute_panel", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdDQztRQTlCRyx5QkFBeUI7UUFFekIscUJBQWUsR0FBWSxJQUFJLENBQUM7O1FBMkJoQyxpQkFBaUI7SUFDckIsQ0FBQztJQTNCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUU5QyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMzQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxRQUFRO2dCQUNSLCtCQUErQjtZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksRUFDdEU7Z0JBQ0ksS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQTthQUNwRjtRQUdMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNjO0lBSmYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdDNUI7SUFBRCxlQUFDO0NBaENELEFBZ0NDLENBaENxQyxFQUFFLENBQUMsU0FBUyxHQWdDakQ7a0JBaENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy/lsZ7mgKfpnaLmnb/pooTliLbkvZPvvIzpnIDopoHlho1jb2Nvc+S4reWwhumihOWItuS9k+aLluWFpVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhdHRyaWJ1dGVfcGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLoj5zljZVcIiwgY2MuQXVkaW9DbGlwLCAocmVzLGNsaXApPT57XHJcbiAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmZvY3VzID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlX3BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmZvY3VzID0gdGhpcy5hdHRyaWJ1dGVfcGFuZWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/awakener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7eaa0nZLoNDc4wm+BA/Eg++', 'awakener');
// script/event_scripts/awakener.ts

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
var awakener = /** @class */ (function (_super) {
    __extends(awakener, _super);
    function awakener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.event_controller = null;
        _this.event_group = 0;
        return _this;
        // update (dt) {}
    }
    awakener.prototype.awake = function () {
        var node = cc.instantiate(this.event_controller);
        node.setParent(this.node.getParent());
        node.setPosition(new cc.Vec2(880, 570));
        node.setScale(new cc.Vec2(1, 1));
        //console.debug(node.getPosition().x)
        //node.getComponent('event_controller').awake()
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    awakener.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            var p_node = cc.find('persist_node').getComponent('persist_node');
            if (p_node.event_permitted && p_node.focus == null) {
                p_node.focus = _this.node;
                _this.awake();
                p_node.match_event_grade();
                //p_node.addAge() 改为退出卡牌选择的时候加岁数
                //p_node.changeEnergy(200)
                _this.node.active = false;
            }
        });
    };
    __decorate([
        property(cc.Label)
    ], awakener.prototype, "label", void 0);
    __decorate([
        property
    ], awakener.prototype, "text", void 0);
    __decorate([
        property(cc.Prefab)
    ], awakener.prototype, "event_controller", void 0);
    __decorate([
        property
    ], awakener.prototype, "event_group", void 0);
    awakener = __decorate([
        ccclass
    ], awakener);
    return awakener;
}(cc.Component));
exports.default = awakener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxhd2FrZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNEQztRQW5ERyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHdkIsc0JBQWdCLEdBQWMsSUFBSSxDQUFBO1FBR2xDLGlCQUFXLEdBQVUsQ0FBQyxDQUFBOztRQXlDdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Q0csd0JBQUssR0FBTDtRQUVJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IscUNBQXFDO1FBQ3JDLCtDQUErQztJQUNuRCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix3QkFBSyxHQUFMO1FBQUEsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFFOUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUMsSUFBSTtnQkFDM0MsTUFBTTtnQkFDTixJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsUUFBUTtnQkFDUiwrQkFBK0I7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFHSCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUNqRSxJQUFJLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLEtBQUssSUFBRSxJQUFJLEVBQ2hEO2dCQUNJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQTtnQkFDeEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNaLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO2dCQUMxQixnQ0FBZ0M7Z0JBQ2hDLDBCQUEwQjtnQkFDMUIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2FBRTNCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBaEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2M7SUFHbEM7UUFEQyxRQUFRO2lEQUNhO0lBWkwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNENUI7SUFBRCxlQUFDO0NBdERELEFBc0RDLENBdERxQyxFQUFFLENBQUMsU0FBUyxHQXNEakQ7a0JBdERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhd2FrZW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGV2ZW50X2NvbnRyb2xsZXI6IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGV2ZW50X2dyb3VwOiBudW1iZXI9IDBcclxuXHJcbiAgICBhd2FrZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV2ZW50X2NvbnRyb2xsZXIpXHJcbiAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlLmdldFBhcmVudCgpKVxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoODgwLCA1NzApKVxyXG4gICAgICAgIG5vZGUuc2V0U2NhbGUobmV3IGNjLlZlYzIoMSwxKSlcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcobm9kZS5nZXRQb3NpdGlvbigpLngpXHJcbiAgICAgICAgLy9ub2RlLmdldENvbXBvbmVudCgnZXZlbnRfY29udHJvbGxlcicpLmF3YWtlKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6I+c5Y2VXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHBfbm9kZSA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJylcclxuICAgICAgICAgICAgaWYgKHBfbm9kZS5ldmVudF9wZXJtaXR0ZWQgJiYgcF9ub2RlLmZvY3VzPT1udWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwX25vZGUuZm9jdXMgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXdha2UoKVxyXG4gICAgICAgICAgICAgICAgcF9ub2RlLm1hdGNoX2V2ZW50X2dyYWRlKClcclxuICAgICAgICAgICAgICAgIC8vcF9ub2RlLmFkZEFnZSgpIOaUueS4uumAgOWHuuWNoeeJjOmAieaLqeeahOaXtuWAmeWKoOWygeaVsFxyXG4gICAgICAgICAgICAgICAgLy9wX25vZGUuY2hhbmdlRW5lcmd5KDIwMClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/bag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f284kMB1hGgbCqWDtcgNQb', 'bag');
// script/scene1/bag.ts

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
var bag = /** @class */ (function (_super) {
    __extends(bag, _super);
    function bag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板节点，需要再cocos中将预制体拖入
        _this.item_panel = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    bag.prototype.start = function () {
        var _this = this;
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            var persist = cc.find('persist_node').getComponent('persist_node');
            if (persist.focus == null) {
                persist.is_create_bubble = false; //点击关闭产生气泡
                _this.item_panel.active = true;
                persist.focus = _this.item_panel;
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], bag.prototype, "item_panel", void 0);
    bag = __decorate([
        ccclass
    ], bag);
    return bag;
}(cc.Component));
exports.default = bag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQXFDQztRQW5DRyx3QkFBd0I7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O1FBZ0MzQixpQkFBaUI7SUFDckIsQ0FBQztJQTlCRyxlQUFlO0lBRWYsbUJBQUssR0FBTDtRQUFBLGlCQXlCQztRQXZCRyxjQUFjO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUU5QyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMzQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxRQUFRO2dCQUNSLCtCQUErQjtZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUdILElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRW5FLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQ3pCO2dCQUNJLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxVQUFVO2dCQUU1QyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQTthQUNsQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNTO0lBSlYsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXFDdkI7SUFBRCxVQUFDO0NBckNELEFBcUNDLENBckNnQyxFQUFFLENBQUMsU0FBUyxHQXFDNUM7a0JBckNvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYWcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8v5bGe5oCn6Z2i5p2/6IqC54K577yM6ZyA6KaB5YaNY29jb3PkuK3lsIbpooTliLbkvZPmi5blhaVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbV9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgICAgICAvL+inpuaRuOS6uueJqeWHuueOsOS6uueJqeWxnuaAp+mdouadv1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLoj5zljZVcIiwgY2MuQXVkaW9DbGlwLCAocmVzLGNsaXApPT57XHJcbiAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgcGVyc2lzdCA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGVyc2lzdC5mb2N1cyA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZXJzaXN0LmlzX2NyZWF0ZV9idWJibGUgPSBmYWxzZTsgLy/ngrnlh7vlhbPpl63kuqfnlJ/msJTms6FcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1fcGFuZWwuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICBwZXJzaXN0LmZvY3VzID0gdGhpcy5pdGVtX3BhbmVsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/event_prompt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53e97uqJC9HdarsMQggqXIK', 'event_prompt');
// script/event_scripts/event_prompt.ts

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
var event_prompt = /** @class */ (function (_super) {
    __extends(event_prompt, _super);
    function event_prompt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    event_prompt.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.node.destroy();
        });
    };
    __decorate([
        property(cc.Label)
    ], event_prompt.prototype, "label", void 0);
    __decorate([
        property
    ], event_prompt.prototype, "text", void 0);
    event_prompt = __decorate([
        ccclass
    ], event_prompt);
    return event_prompt;
}(cc.Component));
exports.default = event_prompt;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxldmVudF9wcm9tcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtQkM7UUFoQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVl2QixpQkFBaUI7SUFDckIsQ0FBQztJQVhHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNEJBQUssR0FBTDtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBYkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSTtJQUd2QjtRQURDLFFBQVE7OENBQ2M7SUFOTixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbUJoQztJQUFELG1CQUFDO0NBbkJELEFBbUJDLENBbkJ5QyxFQUFFLENBQUMsU0FBUyxHQW1CckQ7a0JBbkJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBldmVudF9wcm9tcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/attribute_panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73517Bhkx1GnJhWUm8OaZJf', 'attribute_panel');
// script/scene1/attribute_panel.ts

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
var attribute_panel = /** @class */ (function (_super) {
    __extends(attribute_panel, _super);
    function attribute_panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板8个label
        _this.a0 = null;
        _this.a1 = null;
        _this.a2 = null;
        _this.a3 = null;
        _this.a4 = null;
        _this.a5 = null;
        _this.a6 = null;
        _this.a7 = null;
        _this.a8 = null;
        _this.attr = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    attribute_panel.prototype.start = function () {
        var _this = this;
        this.attr = [this.a0, this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7, this.a8];
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.touch.getDelta(); //获得鼠标的位置变化坐标
            _this.node.x += delta.x;
            _this.node.y += delta.y;
        });
    };
    attribute_panel.prototype.update = function (dt) {
        var p_node = cc.find('persist_node').getComponent("persist_node");
        //获取player属性值
        for (var i = 0; i < this.attr.length; ++i) {
            this.attr[i].string = p_node.attribute_name[i] + ': ' + p_node.get_attr(p_node.attribute_name[i]);
        }
    };
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a0", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a1", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a2", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a3", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a4", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a5", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a6", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a7", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a8", void 0);
    __decorate([
        property
    ], attribute_panel.prototype, "attr", void 0);
    attribute_panel = __decorate([
        ccclass
    ], attribute_panel);
    return attribute_panel;
}(cc.Component));
exports.default = attribute_panel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGF0dHJpYnV0ZV9wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWdEQztRQTlDRyxhQUFhO1FBRWIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixRQUFFLEdBQWEsSUFBSSxDQUFDO1FBRXBCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFFcEIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixRQUFFLEdBQWEsSUFBSSxDQUFDO1FBRXBCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFFcEIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixRQUFFLEdBQWEsSUFBSSxDQUFDO1FBRXBCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFHcEIsVUFBSSxHQUFHLElBQUksQ0FBQTs7SUF5QmYsQ0FBQztJQXZCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLCtCQUFLLEdBQUw7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRTdGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLEtBQUs7WUFDN0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFHLGFBQWE7WUFDbkQsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVBLGdDQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ1AsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDakUsYUFBYTtRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFDekM7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksR0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNoRztJQUNKLENBQUM7SUEzQ0Y7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNDO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0M7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNDO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0M7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNDO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0M7SUFHcEI7UUFEQyxRQUFRO2lEQUNFO0lBdkJNLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FnRG5DO0lBQUQsc0JBQUM7Q0FoREQsQUFnREMsQ0FoRDRDLEVBQUUsQ0FBQyxTQUFTLEdBZ0R4RDtrQkFoRG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhdHRyaWJ1dGVfcGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8v5bGe5oCn6Z2i5p2/OOS4qmxhYmVsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhMDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYTE6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGEyOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhMzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYTQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGE1OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhNjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYTc6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGE4OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYXR0ciA9IG51bGxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyID0gW3RoaXMuYTAgLHRoaXMuYTEsIHRoaXMuYTIsIHRoaXMuYTMsIHRoaXMuYTQsIHRoaXMuYTUsIHRoaXMuYTYsIHRoaXMuYTcsIHRoaXMuYThdXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCk9PnsgIC8v5ouW5Yqo5bGe5oCn6Z2i5p2/XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7ICAgLy/ojrflvpfpvKDmoIfnmoTkvY3nva7lj5jljJblnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gZGVsdGEueDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gZGVsdGEueTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgcF9ub2RlID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KFwicGVyc2lzdF9ub2RlXCIpXHJcbiAgICAgICAgLy/ojrflj5ZwbGF5ZXLlsZ7mgKflgLxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0ci5sZW5ndGg7ICsraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cltpXS5zdHJpbmcgPSBwX25vZGUuYXR0cmlidXRlX25hbWVbaV0rJzogJytwX25vZGUuZ2V0X2F0dHIocF9ub2RlLmF0dHJpYnV0ZV9uYW1lW2ldKVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
