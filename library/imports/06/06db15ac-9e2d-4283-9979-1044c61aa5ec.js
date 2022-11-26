"use strict";
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