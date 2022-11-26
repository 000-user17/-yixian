
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