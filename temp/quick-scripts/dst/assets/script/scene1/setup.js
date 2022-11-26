
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
            var setup_panel = cc.instantiate(_this.setup_panel);
            setup_panel.setParent(cc.director.getScene()); //初始化根节点为场景
            //设置到屏幕中央
            setup_panel.x = 240;
            setup_panel.y = 478;
        });
    };
    __decorate([
        property(cc.Prefab)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHNldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBd0JDO1FBdEJJLHlCQUF5QjtRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQzs7UUFtQjdCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYscUJBQUssR0FBTDtRQUFBLGlCQVdDO1FBVkcsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFDOUMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBRSxXQUFXO1lBQzNELFNBQVM7WUFDVCxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNwQixXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUV4QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFqQkE7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUTtJQUpaLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F3QnpCO0lBQUQsWUFBQztDQXhCRCxBQXdCQyxDQXhCa0MsRUFBRSxDQUFDLFNBQVMsR0F3QjlDO2tCQXhCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2V0dXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgICAvL+iuvue9rumdouadv+mihOWItuS9k++8jOmcgOimgeWGjWNvY29z5Lit5bCG6aKE5Yi25L2T5ouW5YWlXHJcbiAgICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgICBzZXR1cF9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v6Kem5pG46K6+572u5Ye6546w6K6+572u6Z2i5p2/XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGxldCBzZXR1cF9wYW5lbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2V0dXBfcGFuZWwpO1xyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7ICAvL+WIneWni+WMluagueiKgueCueS4uuWcuuaZr1xyXG4gICAgICAgICAgICAvL+iuvue9ruWIsOWxj+W5leS4reWkrlxyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC54ID0gMjQwO1xyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC55ID0gNDc4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==