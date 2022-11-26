"use strict";
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