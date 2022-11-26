
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
require('./assets/script/persist_node');
require('./assets/script/scene1/attribute_panel');
require('./assets/script/scene1/bag');
require('./assets/script/scene1/bag_panel');
require('./assets/script/scene1/exit');
require('./assets/script/scene1/exp');
require('./assets/script/scene1/log');
require('./assets/script/scene1/log_panel');
require('./assets/script/scene1/player');
require('./assets/script/scene1/setup');
require('./assets/script/scene1/setup_panel');
require('./assets/script/scene1/xiuxian');
require('./assets/script/scene2/fanhui');

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
        //触摸返回主场景，延时0.1秒返回
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.schedule(function () {
                cc.director.loadScene("main");
            }, 0.5, 0, 0.1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGZhbmh1aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdCQztRQXJCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBaUJ2QixpQkFBaUI7SUFDckIsQ0FBQztJQWhCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFBQSxpQkFTQztRQVJHLGtCQUFrQjtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFDbEQsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVuQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0I1QjtJQUFELGVBQUM7Q0F4QkQsQUF3QkMsQ0F4QnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0JqRDtrQkF4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/op6bmkbjov5Tlm57kuLvlnLrmma/vvIzlu7bml7YwLjHnp5Lov5Tlm55cclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICAgICAgICAgIH0sMC41LCAwLCAwLjEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
        _this.shut_button = null;
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
            var panel = _this.node.getParent();
            panel.active = false;
        });
    };
    __decorate([
        property(cc.Prefab)
    ], exit.prototype, "shut_button", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGV4aXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsU0FBUztBQUNILElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBNkJDO1FBMUJHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFtQnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsb0JBQUssR0FBTDtRQUFBLGlCQVdDO1FBVEcsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFDOUMsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVsQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUd6QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VDQUNJO0lBR3ZCO1FBREMsUUFBUTtzQ0FDYztJQVROLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2QnhCO0lBQUQsV0FBQztDQTdCRCxBQTZCQyxDQTdCaUMsRUFBRSxDQUFDLFNBQVMsR0E2QjdDO2tCQTdCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbi8v5YWz6Zet6Z2i5p2/55qE6ISa5pysXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXhpdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNodXRfYnV0dG9uOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgLy/op6bmkbjlhbPpl63mjInpkq7lhbPpl63pnaLmnb9cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuICAgICAgICAgICAgbGV0IHBhbmVsID0gdGhpcy5ub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
        _this.beibao = null;
        _this.attribute_panel = null;
        _this.exp = null;
        _this.exp_inf = [0, 0];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    persist_node.prototype.exp_inf_message = function () {
        return this.exp_inf;
    };
    persist_node.prototype.onLoad = function () {
    };
    persist_node.prototype.start = function () {
        this.auto_save_time = 3; //设置自动保存时间
        cc.game.addPersistRootNode(this.node);
    };
    persist_node.prototype.update = function (dt) {
        //主场景中保存,先获取当前运行的场景名称
        if (cc.director.getScene().name == 'main') {
            this.exp = cc.find('exp');
            this.exp_inf = this.exp.getComponent('exp').exp_information();
            if (this.auto_save_time <= 0) {
                this.auto_save_time = 3;
                console.debug("自动保存");
                //自动得到并保存经验值
                this.exp_inf = this.exp.getComponent('exp').exp_information();
                console.debug(this.exp_inf_message());
            }
            else {
                this.auto_save_time -= dt;
            }
        }
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
        property
    ], persist_node.prototype, "auto_save_time", void 0);
    __decorate([
        property
    ], persist_node.prototype, "exp_inf", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwZXJzaXN0X25vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEwREM7UUF2REcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFXLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQVMsSUFBSSxDQUFDO1FBTWpCLGFBQU8sR0FBYSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7SUEyQzlCLENBQUM7SUF4Q0csd0JBQXdCO0lBRXhCLHNDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVBLDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUYsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUVsQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxDQUFDO0lBRUEsNkJBQU0sR0FBTixVQUFRLEVBQUU7UUFFUCxxQkFBcUI7UUFDckIsSUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUM7WUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFOUQsSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBQztnQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXRCLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDOUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUV6QztpQkFDRztnQkFDQSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQzthQUM3QjtTQUNKO0lBR0osQ0FBQztJQXRERjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRDtJQUdqQjtRQURDLFFBQVE7d0RBQ2U7SUFHeEI7UUFEQyxRQUFRO2lEQUNpQjtJQWZULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EwRGhDO0lBQUQsbUJBQUM7Q0ExREQsQUEwREMsQ0ExRHlDLEVBQUUsQ0FBQyxTQUFTLEdBMERyRDtrQkExRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcnNpc3Rfbm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZWliYW86IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXR0cmlidXRlX3BhbmVsOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZXhwOmNjLk5vZGU9bnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGF1dG9fc2F2ZV90aW1lIDogbnVtYmVyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZXhwX2luZjogbnVtYmVyW10gPSBbMCwwXTtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgZXhwX2luZl9tZXNzYWdlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwX2luZjtcclxuICAgIH1cclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmF1dG9fc2F2ZV90aW1lID0gMzsvL+iuvue9ruiHquWKqOS/neWtmOaXtumXtFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgLy/kuLvlnLrmma/kuK3kv53lrZgs5YWI6I635Y+W5b2T5YmN6L+Q6KGM55qE5Zy65pmv5ZCN56ewXHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdtYWluJyl7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwID0gY2MuZmluZCgnZXhwJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwX2luZiA9IHRoaXMuZXhwLmdldENvbXBvbmVudCgnZXhwJykuZXhwX2luZm9ybWF0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmF1dG9fc2F2ZV90aW1lIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvX3NhdmVfdGltZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwi6Ieq5Yqo5L+d5a2YXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvL+iHquWKqOW+l+WIsOW5tuS/neWtmOe7j+mqjOWAvFxyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBfaW5mID0gdGhpcy5leHAuZ2V0Q29tcG9uZW50KCdleHAnKS5leHBfaW5mb3JtYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5leHBfaW5mX21lc3NhZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvX3NhdmVfdGltZSAtPSBkdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgIH1cclxufVxyXG4iXX0=
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
            _this.log_panel.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQW9CQztRQWxCRyx5QkFBeUI7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQzs7UUFlMUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG1CQUFLLEdBQUw7UUFBQSxpQkFPQztRQUxHLFlBQVk7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLO1lBQzlDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNRO0lBSlQsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQW9CdkI7SUFBRCxVQUFDO0NBcEJELEFBb0JDLENBcEJnQyxFQUFFLENBQUMsU0FBUyxHQW9CNUM7a0JBcEJvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8v6K6+572u6Z2i5p2/6aKE5Yi25L2T77yM6ZyA6KaB5YaNY29jb3PkuK3lsIbpooTliLbkvZPmi5blhaVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nX3BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIC8v6Kem5pG46K6+572u5Ye6546w6K6+572u6Z2i5p2/XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMubG9nX3BhbmVsLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
    // onLoad () {}
    //游戏操作中日志的保存
    log_panel.prototype.log_add = function () {
    };
    log_panel.prototype.start = function () {
        //触摸日志
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGxvZ19wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFzQkEsQ0FBQztJQW5CRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLFlBQVk7SUFDWiwyQkFBTyxHQUFQO0lBRUEsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxNQUFNO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztRQUdsRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFuQmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzQjdCO0lBQUQsZ0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QnNDLEVBQUUsQ0FBQyxTQUFTLEdBc0JsRDtrQkF0Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvZ19wYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIC8v5ri45oiP5pON5L2c5Lit5pel5b+X55qE5L+d5a2YXHJcbiAgICBsb2dfYWRkKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+inpuaRuOaXpeW/l1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
        //触摸设置面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHNldHVwX3BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUJDO1FBcEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFnQnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBZkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBRUksUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7UUFHbEQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBakJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVCNUI7SUFBRCxlQUFDO0NBdkJELEFBdUJDLENBdkJxQyxFQUFFLENBQUMsU0FBUyxHQXVCakQ7a0JBdkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICAvL+inpuaRuOiuvue9rumdouadv1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
        //各类物品
        _this.item0 = 0;
        _this.item1 = 0;
        _this.item2 = 0;
        _this.item3 = 0;
        _this.item4 = 0;
        _this.item5 = 0;
        _this.item6 = 0;
        _this.item7 = 0;
        return _this;
        // update (dt) {}
    }
    //设置属性的数值，选中要更改的属性，然后设置数值
    bag.prototype.setitem = function (itemID, itemnum) {
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
        console.debug("属性值设置成功" + String(this.item7));
    };
    //获取属性值，返回属性值数组
    bag.prototype.getitem = function () {
        var itemarray = [this.item0, this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7];
        //console.debug("属性值获取成功"+ String(itemarray));
        return itemarray;
    };
    // onLoad () {}
    bag.prototype.start = function () {
        var _this = this;
        //set属性方法测试
        this.setitem(0, 10);
        //get属性方法测试
        //this.getitem();
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.item_panel.active = true;
        });
    };
    __decorate([
        property(cc.Node)
    ], bag.prototype, "item_panel", void 0);
    __decorate([
        property
    ], bag.prototype, "item0", void 0);
    __decorate([
        property
    ], bag.prototype, "item1", void 0);
    __decorate([
        property
    ], bag.prototype, "item2", void 0);
    __decorate([
        property
    ], bag.prototype, "item3", void 0);
    __decorate([
        property
    ], bag.prototype, "item4", void 0);
    __decorate([
        property
    ], bag.prototype, "item5", void 0);
    __decorate([
        property
    ], bag.prototype, "item6", void 0);
    __decorate([
        property
    ], bag.prototype, "item7", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQW1GQztRQWpGRyx3QkFBd0I7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsTUFBTTtRQUVFLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7UUE0RDFCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0RHLHlCQUF5QjtJQUN6QixxQkFBTyxHQUFQLFVBQVEsTUFBYSxFQUFFLE9BQWM7UUFFakMsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLE1BQU0sR0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxNQUFNLEdBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssTUFBTSxHQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLE1BQU0sR0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxNQUFNLEdBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssTUFBTSxHQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLE1BQU0sR0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxNQUFNLEdBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztnQkFDdEIsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZUFBZTtJQUNSLHFCQUFPLEdBQWQ7UUFDSSxJQUFJLFNBQVMsR0FBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNILDhDQUE4QztRQUM5QyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsZUFBZTtJQUVmLG1CQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpHLFdBQVc7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQixXQUFXO1FBQ1gsaUJBQWlCO1FBRWpCLGNBQWM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLO1lBRTlDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUVoQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUztJQUkzQjtRQURDLFFBQVE7c0NBQ2lCO0lBRTFCO1FBREMsUUFBUTtzQ0FDaUI7SUFFMUI7UUFEQyxRQUFRO3NDQUNpQjtJQUUxQjtRQURDLFFBQVE7c0NBQ2lCO0lBRTFCO1FBREMsUUFBUTtzQ0FDaUI7SUFFMUI7UUFEQyxRQUFRO3NDQUNpQjtJQUUxQjtRQURDLFFBQVE7c0NBQ2lCO0lBRTFCO1FBREMsUUFBUTtzQ0FDaUI7SUF0QlQsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQW1GdkI7SUFBRCxVQUFDO0NBbkZELEFBbUZDLENBbkZnQyxFQUFFLENBQUMsU0FBUyxHQW1GNUM7a0JBbkZvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYWcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8v5bGe5oCn6Z2i5p2/6IqC54K577yM6ZyA6KaB5YaNY29jb3PkuK3lsIbpooTliLbkvZPmi5blhaVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbV9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy/lkITnsbvnianlk4FcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMzogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNzogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvL+iuvue9ruWxnuaAp+eahOaVsOWAvO+8jOmAieS4reimgeabtOaUueeahOWxnuaAp++8jOeEtuWQjuiuvue9ruaVsOWAvFxyXG4gICAgc2V0aXRlbShpdGVtSUQ6bnVtYmVyLCBpdGVtbnVtOm51bWJlcil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChpdGVtSUQpIHtcclxuICAgICAgICAgICAgY2FzZSBpdGVtSUQ9MDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbTAgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGl0ZW1JRD0xOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtMSArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgaXRlbUlEPTI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0yICs9IGl0ZW1udW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBpdGVtSUQ9MzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbTMgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGl0ZW1JRD00OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtNCArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgaXRlbUlEPTU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW01ICs9IGl0ZW1udW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBpdGVtSUQ9NjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbTYgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGl0ZW1JRD03OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtNyArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIuWxnuaAp+WAvOiuvue9ruaIkOWKn1wiK1N0cmluZyh0aGlzLml0ZW03KSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8v6I635Y+W5bGe5oCn5YC877yM6L+U5Zue5bGe5oCn5YC85pWw57uEXHJcbiAgICBwdWJsaWMgZ2V0aXRlbSgpe1xyXG4gICAgICAgIGxldCBpdGVtYXJyYXk6IG51bWJlcltdID0gW3RoaXMuaXRlbTAsIHRoaXMuaXRlbTEsIHRoaXMuaXRlbTIsIHRoaXMuaXRlbTMsIHRoaXMuaXRlbTQsIHRoaXMuaXRlbTUsIHRoaXMuaXRlbTYsIHRoaXMuaXRlbTddO1xyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhcIuWxnuaAp+WAvOiOt+WPluaIkOWKn1wiKyBTdHJpbmcoaXRlbWFycmF5KSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9zZXTlsZ7mgKfmlrnms5XmtYvor5VcclxuICAgICAgICB0aGlzLnNldGl0ZW0oMCwgMTApO1xyXG4gICAgICAgIC8vZ2V05bGe5oCn5pa55rOV5rWL6K+VXHJcbiAgICAgICAgLy90aGlzLmdldGl0ZW0oKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+inpuaRuOS6uueJqeWHuueOsOS6uueJqeWxnuaAp+mdouadv1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtX3BhbmVsLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
        //触摸背包
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
        });
    };
    bag_panel.prototype.update = function (dt) {
        //获取bag物品数量,实时更新
        var item_array = cc.find('bag').getComponent("bag").getitem(); //由于player脚本初始化该节点父节点为cc.director.getScene()，所以用cc.find顺着根目录查找到player节点
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJhZ19wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXFFQztRQWxFRyxhQUFhO1FBRWIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQWEsSUFBSSxDQUFDOztJQWtEekIsQ0FBQztJQS9DRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7UUFHSSxNQUFNO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztRQUlsRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFQSwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUVQLGdCQUFnQjtRQUNoQixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLHVFQUF1RTtRQUV0SSxlQUFlO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhFLENBQUM7SUEvREY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNFO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0U7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNFO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0U7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNFO0lBbkJKLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxRTdCO0lBQUQsZ0JBQUM7Q0FyRUQsQUFxRUMsQ0FyRXNDLEVBQUUsQ0FBQyxTQUFTLEdBcUVsRDtrQkFyRW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhZ19wYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcbiAgICAvL+WxnuaAp+mdouadvzjkuKpsYWJlbFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXQwOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBpdDE6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGl0MjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXQzOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBpdDQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGl0NTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXQ2OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBpdDc6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcblxyXG4gICAgICAgIC8v6Kem5pG46IOM5YyFXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgLy/ojrflj5ZiYWfnianlk4HmlbDph48s5a6e5pe25pu05pawXHJcbiAgICAgICAgbGV0IGl0ZW1fYXJyYXkgPSBjYy5maW5kKCdiYWcnKS5nZXRDb21wb25lbnQoXCJiYWdcIikuZ2V0aXRlbSgpOyAvL+eUseS6jnBsYXllcuiEmuacrOWIneWni+WMluivpeiKgueCueeItuiKgueCueS4umNjLmRpcmVjdG9yLmdldFNjZW5lKCnvvIzmiYDku6XnlKhjYy5maW5k6aG6552A5qC555uu5b2V5p+l5om+5YiwcGxheWVy6IqC54K5XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/lsIblsZ7mgKflgLzmipXlsITliLDlsZ7mgKflgLzpnaLmnb/kuIpcclxuICAgICAgICB0aGlzLml0MCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW0wXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pdDAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIiArIGl0ZW1fYXJyYXlbMF07XHJcblxyXG4gICAgICAgIHRoaXMuaXQxID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbTFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLml0MS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiICsgaXRlbV9hcnJheVsxXTtcclxuXHJcbiAgICAgICAgdGhpcy5pdDIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaXQyLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIgKyBpdGVtX2FycmF5WzJdO1xyXG5cclxuICAgICAgICB0aGlzLml0MyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW0zXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pdDMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIiArIGl0ZW1fYXJyYXlbM107XHJcblxyXG4gICAgICAgIHRoaXMuaXQ0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbTRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLml0NC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiICsgaXRlbV9hcnJheVs0XTtcclxuXHJcbiAgICAgICAgdGhpcy5pdDUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtNVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaXQ1LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIgKyBpdGVtX2FycmF5WzVdO1xyXG5cclxuICAgICAgICB0aGlzLml0NiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW02XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5pdDYuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIiArIGl0ZW1fYXJyYXlbNl07XHJcblxyXG4gICAgICAgIHRoaXMuaXQ3ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbTdcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLml0Ny5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiICsgaXRlbV9hcnJheVs3XTtcclxuXHJcbiAgICAgfVxyXG59XHJcbiJdfQ==
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
        //人物等级
        _this.level = 0;
        //人物当前经验值
        _this.exp_now = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    exp.prototype.exp_init = function () {
        this.level = 0;
        this.exp_now = 0;
    };
    //用于自动保存节点获取当前的exp信息
    exp.prototype.exp_information = function () {
        return [this.level, this.exp_now];
    };
    //获取自动保存的exp信息
    exp.prototype.exp_auto_save = function (autosave) {
        var _this = this;
        this.level = autosave[0], this.exp_now = autosave[1];
        //拿到了自动保存的数值，再修改经验值进度条
        var exp = this.node.getComponent(cc.Sprite);
        this.schedule(function (as) {
            if (as === void 0) { as = exp; }
            exp.fillRange += (1 / _this.exp_required()); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1 / this.exp_required() / 25, this.exp_now);
    };
    //不同等级的所需经验
    exp.prototype.exp_required = function () {
        return (this.level + 1) * 200; //可以设置其他单调递增函数
    };
    //判断经验值是否溢出
    exp.prototype.exp_filled = function (exp_now, exp_add) {
        //如果经验值增长超过最大经验值，则设置为当前等级的最大经验值，否则直接相加作为当前经验值
        if ((exp_now + exp_add) <= this.exp_required()) {
            this.exp_now += exp_add;
        }
        else {
            this.exp_now = this.exp_required();
        }
    };
    //增长经验条的方法
    exp.prototype.exp_gain = function (event_ID, event_exp) {
        var _this = this;
        //获取到exp属性
        var exp = this.node.getComponent(cc.Sprite);
        //根据不同的事件获取不同的经验值
        switch (event_ID) {
            case event_ID = 0:
                //延时函数让经验条可以连续上涨
                this.schedule(function (as) {
                    if (as === void 0) { as = exp; }
                    exp.fillRange += (1 / _this.exp_required()); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
                }, 1 / this.exp_required() / 25, event_exp);
                this.exp_filled(this.exp_now, event_exp); //当前经验值数值增长
                break;
            default:
                break;
        }
    };
    exp.prototype.onLoad = function () {
        this.exp_init(); //初始化为exp各项属性值
    };
    exp.prototype.start = function () {
        var _this = this;
        //获取persisit_node中自动保存的经验值
        this.exp_auto_save(cc.find('persist_node').getComponent('persist_node').exp_inf_message());
        //触摸经验条面板，测试经验条增加
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.exp_gain(0, 100);
        });
    };
    exp.prototype.update = function (dt) {
        //如果经验值满，则可以进入修仙界面
        if (this.exp_now == this.exp_required()) {
            this.xiuxian.active = true;
        }
        else {
            this.xiuxian.active = false;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGV4cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQW9IQztRQWpIRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLE1BQU07UUFFTixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFNBQVM7UUFFVCxhQUFPLEdBQVcsQ0FBQyxDQUFDOztJQXlHeEIsQ0FBQztJQXZHRyx3QkFBd0I7SUFFeEIsc0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELG9CQUFvQjtJQUNwQiw2QkFBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxjQUFjO0lBQ2QsMkJBQWEsR0FBYixVQUFjLFFBQWlCO1FBQS9CLGlCQVNDO1FBUkksSUFBSSxDQUFDLEtBQUssR0FBa0IsUUFBUSxHQUExQixFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUksUUFBUSxHQUFaLENBQWE7UUFFdEMsc0JBQXNCO1FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQUMsRUFBTTtZQUFOLG1CQUFBLEVBQUEsUUFBTTtZQUNqQixH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b0h2QjtJQUFELFVBQUM7Q0FwSEQsQUFvSEMsQ0FwSGdDLEVBQUUsQ0FBQyxTQUFTLEdBb0g1QztrQkFwSG9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB4aXV4aWFuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvL+S6uueJqeetiee6p1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBsZXZlbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvL+S6uueJqeW9k+WJjee7j+mqjOWAvFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBleHBfbm93OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGV4cF9pbml0KCl7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5leHBfbm93ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvL+eUqOS6juiHquWKqOS/neWtmOiKgueCueiOt+WPluW9k+WJjeeahGV4cOS/oeaBr1xyXG4gICAgZXhwX2luZm9ybWF0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLmxldmVsLCB0aGlzLmV4cF9ub3ddO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W6Ieq5Yqo5L+d5a2Y55qEZXhw5L+h5oGvXHJcbiAgICBleHBfYXV0b19zYXZlKGF1dG9zYXZlOm51bWJlcltdKXtcclxuICAgICAgICBbdGhpcy5sZXZlbCwgdGhpcy5leHBfbm93XSA9IGF1dG9zYXZlO1xyXG5cclxuICAgICAgICAvL+aLv+WIsOS6huiHquWKqOS/neWtmOeahOaVsOWAvO+8jOWGjeS/ruaUuee7j+mqjOWAvOi/m+W6puadoVxyXG4gICAgICAgIGxldCBleHAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoYXM9ZXhwKT0+e1xyXG4gICAgICAgICAgICBleHAuZmlsbFJhbmdlKz0gKDEvdGhpcy5leHBfcmVxdWlyZWQoKSk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgfSwgMS90aGlzLmV4cF9yZXF1aXJlZCgpLzI1LCB0aGlzLmV4cF9ub3cpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+S4jeWQjOetiee6p+eahOaJgOmcgOe7j+mqjFxyXG4gICAgZXhwX3JlcXVpcmVkKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiAodGhpcy5sZXZlbCsxKSoyMDA7ICAvL+WPr+S7peiuvue9ruWFtuS7luWNleiwg+mAkuWinuWHveaVsFxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yik5pat57uP6aqM5YC85piv5ZCm5rqi5Ye6XHJcbiAgICBleHBfZmlsbGVkKGV4cF9ub3c6bnVtYmVyLCBleHBfYWRkOm51bWJlcil7XHJcbiAgICAgICAgLy/lpoLmnpznu4/pqozlgLzlop7plb/otoXov4fmnIDlpKfnu4/pqozlgLzvvIzliJnorr7nva7kuLrlvZPliY3nrYnnuqfnmoTmnIDlpKfnu4/pqozlgLzvvIzlkKbliJnnm7TmjqXnm7jliqDkvZzkuLrlvZPliY3nu4/pqozlgLxcclxuICAgICAgICBpZigoZXhwX25vdytleHBfYWRkKSA8PSB0aGlzLmV4cF9yZXF1aXJlZCgpKXtcclxuICAgICAgICAgICAgdGhpcy5leHBfbm93ICs9IGV4cF9hZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwX25vdyA9IHRoaXMuZXhwX3JlcXVpcmVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/lop7plb/nu4/pqozmnaHnmoTmlrnms5VcclxuICAgIGV4cF9nYWluKGV2ZW50X0lEOm51bWJlciwgZXZlbnRfZXhwOm51bWJlcil7XHJcbiAgICAgICAgLy/ojrflj5bliLBleHDlsZ7mgKdcclxuICAgICAgICBsZXQgZXhwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICAvL+agueaNruS4jeWQjOeahOS6i+S7tuiOt+WPluS4jeWQjOeahOe7j+mqjOWAvFxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnRfSUQpIHtcclxuICAgICAgICAgICAgY2FzZSBldmVudF9JRD0wOlxyXG4gICAgICAgICAgICAgICAgLy/lu7bml7blh73mlbDorqnnu4/pqozmnaHlj6/ku6Xov57nu63kuIrmtqhcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKGFzPWV4cCk9PntcclxuICAgICAgICAgICAgICAgICAgICBleHAuZmlsbFJhbmdlKz0gKDEvdGhpcy5leHBfcmVxdWlyZWQoKSk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgICAgICAgICB9LCAxL3RoaXMuZXhwX3JlcXVpcmVkKCkvMjUsIGV2ZW50X2V4cCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwX2ZpbGxlZCh0aGlzLmV4cF9ub3csIGV2ZW50X2V4cCk7ICAvL+W9k+WJjee7j+mqjOWAvOaVsOWAvOWinumVv1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5leHBfaW5pdCgpOyAvL+WIneWni+WMluS4umV4cOWQhOmhueWxnuaAp+WAvFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQgKCkgeyAgXHJcblxyXG4gICAgICAgIC8v6I635Y+WcGVyc2lzaXRfbm9kZeS4reiHquWKqOS/neWtmOeahOe7j+mqjOWAvFxyXG4gICAgICAgIHRoaXMuZXhwX2F1dG9fc2F2ZShjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9pbmZfbWVzc2FnZSgpKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy/op6bmkbjnu4/pqozmnaHpnaLmnb/vvIzmtYvor5Xnu4/pqozmnaHlop7liqBcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5leHBfZ2FpbigwLDEwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy/lpoLmnpznu4/pqozlgLzmu6HvvIzliJnlj6/ku6Xov5vlhaXkv67ku5nnlYzpnaJcclxuICAgICAgICBpZih0aGlzLmV4cF9ub3cgPT0gdGhpcy5leHBfcmVxdWlyZWQoKSl7XHJcbiAgICAgICAgICAgIHRoaXMueGl1eGlhbi5hY3RpdmU9dHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMueGl1eGlhbi5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfVxyXG59XHJcbiJdfQ==
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
        //属性面板预制体，需要再cocos中将预制体拖入
        _this.attribute_panel = null;
        _this.label = null;
        //人物的八种属性
        _this.attribute0 = 0;
        _this.attribute1 = 0;
        _this.attribute2 = 0;
        _this.attribute3 = 0;
        _this.attribute4 = 0;
        _this.attribute5 = 0;
        _this.attribute6 = 0;
        _this.attribute7 = 0;
        return _this;
        // update (dt) {}
    }
    //设置属性的数值，选中要更改的属性，然后设置数值
    player.prototype.setattribute = function (attID, attnum) {
        //写入日志的准备
        var content = cc.find('log_panel').getChildByName('log_ScrollView').getChildByName("view").getChildByName("content"); //找到要保存日志的父节点
        var new_content = new cc.Node('item' + attID); //初始化新节点为实例化的一个节点
        var log_text = new_content.addComponent(cc.Label); //增加label组件并赋给log_text
        new_content.color = cc.color(0, 0, 0); //将字体改为黑色
        //设置文本大小
        log_text.fontSize = 16;
        log_text.lineHeight = 20;
        new_content.setParent(content); //设置根节点为content
        new_content.x = -100;
        new_content.y = -50;
        switch (attID) {
            case attID = 0:
                this.attribute0 += attnum;
                log_text.string = "属性" + String(attID) + "得到改变" + String(attnum); //属性改变
                break;
            case attID = 1:
                this.attribute1 += attnum;
                break;
            case attID = 2:
                this.attribute2 += attnum;
                break;
            case attID = 3:
                this.attribute3 += attnum;
                break;
            case attID = 4:
                this.attribute4 += attnum;
                break;
            case attID = 5:
                this.attribute5 += attnum;
                break;
            case attID = 6:
                this.attribute6 += attnum;
                break;
            case attID = 7:
                this.attribute7 += attnum;
                break;
            default:
                break;
        }
        console.debug("属性值设置成功" + String(this.attribute0));
    };
    //获取属性值，返回属性值数组
    player.prototype.getattribute = function () {
        var attarray = [this.attribute0, this.attribute1, this.attribute2, this.attribute3, this.attribute4, this.attribute5, this.attribute6, this.attribute7];
        //console.debug("属性值获取成功"+ String(attarray));
        return attarray;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    player.prototype.start = function () {
        var _this = this;
        //set属性方法测试
        this.setattribute(0, 10);
        //get属性方法测试
        //this.getattribute();
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.attribute_panel.active = true;
        });
    };
    __decorate([
        property(cc.Node)
    ], player.prototype, "attribute_panel", void 0);
    __decorate([
        property(cc.Label)
    ], player.prototype, "label", void 0);
    __decorate([
        property
    ], player.prototype, "attribute0", void 0);
    __decorate([
        property
    ], player.prototype, "attribute1", void 0);
    __decorate([
        property
    ], player.prototype, "attribute2", void 0);
    __decorate([
        property
    ], player.prototype, "attribute3", void 0);
    __decorate([
        property
    ], player.prototype, "attribute4", void 0);
    __decorate([
        property
    ], player.prototype, "attribute5", void 0);
    __decorate([
        property
    ], player.prototype, "attribute6", void 0);
    __decorate([
        property
    ], player.prototype, "attribute7", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWdIQztRQTlHRyx5QkFBeUI7UUFFekIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFJaEMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixTQUFTO1FBRUQsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O1FBcUYvQixpQkFBaUI7SUFDckIsQ0FBQztJQW5GRyx5QkFBeUI7SUFDekIsNkJBQVksR0FBWixVQUFhLEtBQVksRUFBRSxNQUFhO1FBRXBDLFNBQVM7UUFDVCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ25JLElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDLENBQUMsQ0FBRSxp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QUUsQ0FBQyxJQUFJLENBQUM7bURBQ2M7SUFJaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDSTtJQUl2QjtRQURDLFFBQVE7OENBQ3NCO0lBRS9CO1FBREMsUUFBUTs4Q0FDc0I7SUFFL0I7UUFEQyxRQUFROzhDQUNzQjtJQUUvQjtRQURDLFFBQVE7OENBQ3NCO0lBRS9CO1FBREMsUUFBUTs4Q0FDc0I7SUFFL0I7UUFEQyxRQUFROzhDQUNzQjtJQUUvQjtRQURDLFFBQVE7OENBQ3NCO0lBRS9CO1FBREMsUUFBUTs4Q0FDc0I7SUExQmQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWdIMUI7SUFBRCxhQUFDO0NBaEhELEFBZ0hDLENBaEhtQyxFQUFFLENBQUMsU0FBUyxHQWdIL0M7a0JBaEhvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICAvL+WxnuaAp+mdouadv+mihOWItuS9k++8jOmcgOimgeWGjWNvY29z5Lit5bCG6aKE5Yi25L2T5ouW5YWlXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGF0dHJpYnV0ZV9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBcclxuICAgIC8v5Lq654mp55qE5YWr56eN5bGe5oCnXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgYXR0cmlidXRlMDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGUxOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGF0dHJpYnV0ZTI6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgYXR0cmlidXRlMzogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGU0OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGF0dHJpYnV0ZTU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgYXR0cmlidXRlNjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGU3OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIFxyXG4gICAgLy/orr7nva7lsZ7mgKfnmoTmlbDlgLzvvIzpgInkuK3opoHmm7TmlLnnmoTlsZ7mgKfvvIznhLblkI7orr7nva7mlbDlgLxcclxuICAgIHNldGF0dHJpYnV0ZShhdHRJRDpudW1iZXIsIGF0dG51bTpudW1iZXIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5YaZ5YWl5pel5b+X55qE5YeG5aSHXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBjYy5maW5kKCdsb2dfcGFuZWwnKS5nZXRDaGlsZEJ5TmFtZSgnbG9nX1Njcm9sbFZpZXcnKS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpOyAvL+aJvuWIsOimgeS/neWtmOaXpeW/l+eahOeItuiKgueCuVxyXG4gICAgICAgIGxldCBuZXdfY29udGVudCA9IG5ldyBjYy5Ob2RlKCdpdGVtJythdHRJRCk7ICAvL+WIneWni+WMluaWsOiKgueCueS4uuWunuS+i+WMlueahOS4gOS4quiKgueCuVxyXG4gICAgICAgIHZhciBsb2dfdGV4dCA9IG5ld19jb250ZW50LmFkZENvbXBvbmVudChjYy5MYWJlbCk7IC8v5aKe5YqgbGFiZWznu4Tku7blubbotYvnu5lsb2dfdGV4dFxyXG4gICAgICAgIG5ld19jb250ZW50LmNvbG9yID0gY2MuY29sb3IoMCwwLDApOyAvL+WwhuWtl+S9k+aUueS4uum7keiJslxyXG4gICAgICAgIC8v6K6+572u5paH5pys5aSn5bCPXHJcbiAgICAgICAgbG9nX3RleHQuZm9udFNpemUgPSAxNjtcclxuICAgICAgICBsb2dfdGV4dC5saW5lSGVpZ2h0PTIwO1xyXG5cclxuICAgICAgICBuZXdfY29udGVudC5zZXRQYXJlbnQoY29udGVudCk7ICAvL+iuvue9ruagueiKgueCueS4umNvbnRlbnRcclxuICAgICAgICBuZXdfY29udGVudC54ID0gLTEwMDtcclxuICAgICAgICBuZXdfY29udGVudC55ID0gLTUwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBzd2l0Y2ggKGF0dElEKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYXR0SUQ9MDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlMCArPSBhdHRudW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbG9nX3RleHQuc3RyaW5nID0gXCLlsZ7mgKdcIitTdHJpbmcoYXR0SUQpK1wi5b6X5Yiw5pS55Y+YXCIrU3RyaW5nKGF0dG51bSk7ICAvL+WxnuaAp+aUueWPmFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBhdHRJRD0xOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUxICs9IGF0dG51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGF0dElEPTI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZTIgKz0gYXR0bnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYXR0SUQ9MzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlMyArPSBhdHRudW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBhdHRJRD00OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGU0ICs9IGF0dG51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGF0dElEPTU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZTUgKz0gYXR0bnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYXR0SUQ9NjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlNiArPSBhdHRudW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBhdHRJRD03OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGU3ICs9IGF0dG51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCLlsZ7mgKflgLzorr7nva7miJDlip9cIitTdHJpbmcodGhpcy5hdHRyaWJ1dGUwKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8v6I635Y+W5bGe5oCn5YC877yM6L+U5Zue5bGe5oCn5YC85pWw57uEXHJcbiAgICBwdWJsaWMgZ2V0YXR0cmlidXRlKCl7XHJcbiAgICAgICAgbGV0IGF0dGFycmF5OiBudW1iZXJbXSA9IFt0aGlzLmF0dHJpYnV0ZTAsIHRoaXMuYXR0cmlidXRlMSwgdGhpcy5hdHRyaWJ1dGUyLCB0aGlzLmF0dHJpYnV0ZTMsIHRoaXMuYXR0cmlidXRlNCwgdGhpcy5hdHRyaWJ1dGU1LCB0aGlzLmF0dHJpYnV0ZTYsIHRoaXMuYXR0cmlidXRlN107XHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKFwi5bGe5oCn5YC86I635Y+W5oiQ5YqfXCIrIFN0cmluZyhhdHRhcnJheSkpO1xyXG4gICAgICAgIHJldHVybiBhdHRhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9zZXTlsZ7mgKfmlrnms5XmtYvor5VcclxuICAgICAgICB0aGlzLnNldGF0dHJpYnV0ZSgwLCAxMCk7XHJcbiAgICAgICAgLy9nZXTlsZ7mgKfmlrnms5XmtYvor5VcclxuICAgICAgICAvL3RoaXMuZ2V0YXR0cmlidXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/op6bmkbjkurrnianlh7rnjrDkurrnianlsZ7mgKfpnaLmnb9cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVfcGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
