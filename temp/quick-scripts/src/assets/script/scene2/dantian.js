"use strict";
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