"use strict";
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