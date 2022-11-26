
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