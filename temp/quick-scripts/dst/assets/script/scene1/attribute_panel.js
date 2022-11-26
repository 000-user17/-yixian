
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