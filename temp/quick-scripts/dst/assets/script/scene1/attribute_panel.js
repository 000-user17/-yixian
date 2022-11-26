
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
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    attribute_panel.prototype.start = function () {
        //触摸面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.find('player').getComponent('player').setattribute(1, 30); //测试是否能实时增加
        });
    };
    attribute_panel.prototype.update = function (dt) {
        //获取player属性值
        var attribute_array = cc.find('player').getComponent("player").getattribute(); //由于player脚本初始化该节点父节点为cc.director.getScene()，所以用cc.find顺着根目录查找到player节点
        //将属性值投射到属性值面板上
        this.a0 = this.node.getChildByName("a0").getComponent(cc.Label);
        this.a0.getComponent(cc.Label).string = " " + attribute_array[0];
        this.a1 = this.node.getChildByName("a1").getComponent(cc.Label);
        this.a1.getComponent(cc.Label).string = " " + attribute_array[1];
        this.a2 = this.node.getChildByName("a2").getComponent(cc.Label);
        this.a2.getComponent(cc.Label).string = " " + attribute_array[2];
        this.a3 = this.node.getChildByName("a3").getComponent(cc.Label);
        this.a3.getComponent(cc.Label).string = " " + attribute_array[3];
        this.a4 = this.node.getChildByName("a4").getComponent(cc.Label);
        this.a4.getComponent(cc.Label).string = " " + attribute_array[4];
        this.a5 = this.node.getChildByName("a5").getComponent(cc.Label);
        this.a5.getComponent(cc.Label).string = " " + attribute_array[5];
        this.a6 = this.node.getChildByName("a6").getComponent(cc.Label);
        this.a6.getComponent(cc.Label).string = " " + attribute_array[6];
        this.a7 = this.node.getChildByName("a7").getComponent(cc.Label);
        this.a7.getComponent(cc.Label).string = " " + attribute_array[7];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGF0dHJpYnV0ZV9wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXVFQztRQXJFRyxhQUFhO1FBRWIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixRQUFFLEdBQWEsSUFBSSxDQUFDO1FBRXBCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFFcEIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixRQUFFLEdBQWEsSUFBSSxDQUFDO1FBRXBCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFFcEIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixRQUFFLEdBQWEsSUFBSSxDQUFDOztJQXFEeEIsQ0FBQztJQWpERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLCtCQUFLLEdBQUw7UUFFSSxNQUFNO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUc1RSxDQUFDLENBQUMsQ0FBQztJQUtQLENBQUM7SUFFQSxnQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUVQLGFBQWE7UUFDYixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEs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RUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNDO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0M7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNDO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0M7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNDO0lBbEJILGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F1RW5DO0lBQUQsc0JBQUM7Q0F2RUQsQUF1RUMsQ0F2RTRDLEVBQUUsQ0FBQyxTQUFTLEdBdUV4RDtrQkF2RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhdHRyaWJ1dGVfcGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8v5bGe5oCn6Z2i5p2/OOS4qmxhYmVsXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhMDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYTE6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGEyOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhMzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYTQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGE1OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhNjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYTc6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIC8v6Kem5pG46Z2i5p2/XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3BsYXllcicpLmdldENvbXBvbmVudCgncGxheWVyJykuc2V0YXR0cmlidXRlKDEsMzApOyAvL+a1i+ivleaYr+WQpuiDveWunuaXtuWinuWKoFxyXG5cclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgICAgIC8v6I635Y+WcGxheWVy5bGe5oCn5YC8XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZV9hcnJheSA9IGNjLmZpbmQoJ3BsYXllcicpLmdldENvbXBvbmVudChcInBsYXllclwiKS5nZXRhdHRyaWJ1dGUoKTsgLy/nlLHkuo5wbGF5ZXLohJrmnKzliJ3lp4vljJbor6XoioLngrnniLboioLngrnkuLpjYy5kaXJlY3Rvci5nZXRTY2VuZSgp77yM5omA5Lul55SoY2MuZmluZOmhuuedgOagueebruW9leafpeaJvuWIsHBsYXllcuiKgueCuVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5bCG5bGe5oCn5YC85oqV5bCE5Yiw5bGe5oCn5YC86Z2i5p2/5LiKXHJcbiAgICAgICAgdGhpcy5hMCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImEwXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5hMC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiICsgYXR0cmlidXRlX2FycmF5WzBdO1xyXG5cclxuICAgICAgICB0aGlzLmExID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYTFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmExLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIgKyBhdHRyaWJ1dGVfYXJyYXlbMV07XHJcblxyXG4gICAgICAgIHRoaXMuYTIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuYTIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIiArIGF0dHJpYnV0ZV9hcnJheVsyXTtcclxuXHJcbiAgICAgICAgdGhpcy5hMyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImEzXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5hMy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiICsgYXR0cmlidXRlX2FycmF5WzNdO1xyXG5cclxuICAgICAgICB0aGlzLmE0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYTRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmE0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIgKyBhdHRyaWJ1dGVfYXJyYXlbNF07XHJcblxyXG4gICAgICAgIHRoaXMuYTUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhNVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuYTUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIiArIGF0dHJpYnV0ZV9hcnJheVs1XTtcclxuXHJcbiAgICAgICAgdGhpcy5hNiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImE2XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5hNi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiICsgYXR0cmlidXRlX2FycmF5WzZdO1xyXG5cclxuICAgICAgICB0aGlzLmE3ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYTdcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmE3LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIgKyBhdHRyaWJ1dGVfYXJyYXlbN107XHJcblxyXG4gICAgIH1cclxufVxyXG4iXX0=