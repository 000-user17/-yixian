
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/event_controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1fecuOiNhGJLlqZsLLIlG2', 'event_controller');
// script/event_scripts/event_controller.ts

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
var event_controller = /** @class */ (function (_super) {
    __extends(event_controller, _super);
    function event_controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.event = null;
        //@property(cc.Prefab)
        //bar: cc.Prefab = null
        _this.button = null;
        _this.exausted_prompt = null;
        _this.event_description = null;
        _this.benefit_exp = 0;
        _this.benefit = null;
        _this.limited_event_record = null;
        _this.dispatched_events = [];
        _this.num_dispatched = 0;
        return _this;
        /*
        destroy(): boolean {
            let paren = this.node.getParent()
            let n = cc.instantiate(cc.find('event_control'))
            n.setParent(paren)
            return true
        }
        */
    }
    /*
    clear_event()
    {
        for (let i = 0; i < this.ents.length; ++i)
        {
            this.ents[i].destroy()
            console.debug('attempt to del '.concat(String(i)))
        }
    }
    */
    event_controller.prototype.trim_segm = function (text) {
        var c = 0;
        for (var i = 1; i < text.length + 1; ++i) {
            if (text[i - 1] == '\n')
                c = 0;
            c++;
            if (c % 12 == 0) {
                text = text.slice(0, i) + '\n' + text.slice(i);
            }
        }
        return text + '\n';
    };
    event_controller.prototype.dispatch_event = function () {
        this.num_dispatched += 1;
        //console.debug('pop from:')
        //console.debug(this.dispatched_events[this.num_dispatched-1])
        return this.dispatched_events[this.num_dispatched - 1];
    };
    event_controller.prototype.event_describe = function (description) {
        description = this.trim_segm(description);
        var node = cc.instantiate(this.event_description);
        node.setParent(this.node);
        node.setPosition(new cc.Vec2(-427, 950));
        node.setScale(new cc.Vec2(3, 3));
        node.getComponentInChildren(cc.Label).string = description;
        //node.getChildByName('event_prompt').color = cc.Color.ORANGE
    };
    event_controller.prototype.exausted = function () {
        //+动画啥的
        var node = cc.instantiate(this.exausted_prompt);
        node.setParent(this.node);
        node.setPosition(new cc.Vec2(-427, 950));
        node.setScale(new cc.Vec2(3, 3));
        //console.debug(node.parent.name)
        cc.find('persist_node').getComponent('persist_node').getComponent('persist_node').log_write('在' +
            cc.find('persist_node').getComponent('persist_node').getAge().toString() +
            '岁，你贪功好进，结果精疲力竭，元气大伤，殚精竭虑之事也一件不成。修炼虽好，可不要贪杯哦。');
        this.benefit_exp = 0;
        cc.find('persist_node').getComponent('persist_node').event_permitted = false;
    };
    event_controller.prototype.init_event = function () {
        //console.debug('Init Events...')
        //let cur = this.node.getPosition()
        var p_node = cc.find('persist_node').getComponent('persist_node');
        var test = p_node.dispatch_event_without_requirement(0);
        var pos = [new cc.Vec2(-727, 1180), new cc.Vec2(-427, 1180), new cc.Vec2(-127, 1180), new cc.Vec2(-560, 770), new cc.Vec2(-240, 770)];
        //在controller选定事件,在event选定分支及代价
        var events = p_node.dispatch_event(cc.find('awakener').getComponent('awakener').event_group, 2, 3);
        for (var i = 0; i < 5; ++i) {
            //还可以在此处处理事件前置关系
            var ent = events[i];
            //console.debug(typeof(ent[1]))
            var types = ent[1].toString().split('，');
            var threld = p_node.get_avg_attr() * (1 - p_node.rec_gaussian(0.2, 0.2, -0.1, 0.5));
            while ((types.length == 3 && this.limited_event_record.has(ent[0].trim())) ||
                (types[0].trim() != '0' && types[0].trim() != '_' && types[0].split('：')[0] != '特殊' && p_node.get_attr(types[0]) <= threld) ||
                (types[0].split('：')[0] == '特殊' && p_node.get_attr(types[0]) != 1)) 
            //如果其为单次出现的事件并且已经出现过，或者其不满足触发门槛
            //先进行事件类型判断，类型为 1_2[_3], 123是不同属性名称，1决定事件是否出现，2决定分支和收益系数，3决定事件是否只出现一次
            {
                console.debug('该事件不满足要求,重新发事件');
                ent = p_node.dispatch_event_without_requirement(cc.find('awakener').getComponent('awakener').event_group);
                //console.debug(ent)
                types = ent[1].toString().split('，');
            }
            var node = cc.instantiate(this.event);
            node.setParent(this.node);
            node.setPosition(pos[i]);
            node.setScale(new cc.Vec2(1, 1));
            //node.getChildByName('title').getComponent(cc.Label).string = ent[0]
            //console.debug('init dispatch:')
            //console.debug([ent[0].toString(), ent[1].toString(), ent[2].toString(), ent[3].toString()])
            this.dispatched_events.push([ent[0].toString(), ent[1].toString(), ent[2].toString(), ent[3].toString()]);
            if (ent[1].toString().split('，').length == 3)
                this.limited_event_record.set(ent[0].trim(), true);
            //console.debug(events[i][1])
            //console.debug(node.getContentSize().toString())
            //console.debug(node.getPosition().x)
            //this.ents.push(node)
            /**/
        }
    };
    event_controller.prototype.init_bar_button = function () {
        //console.debug('Init widgets...')
        /*
        let node = cc.instantiate(this.bar)
        node.setParent(this.node)
        node.setPosition(new cc.Vec2(-550, 210))
        node.setScale(new cc.Vec2(1,1))
        */
        var node = cc.instantiate(this.button);
        node.setParent(this.node);
        node.setPosition(new cc.Vec2(-150, 210));
        //node.setPosition()
        node.setScale(new cc.Vec2(1, 1));
    };
    /*
    next()
    {
        
        this.node.getChildByName('progressBar').getComponent('bar').reset()
    }
    */
    event_controller.prototype.gameover = function () {
    };
    // LIFE-CYCLE CALLBACKS:
    event_controller.prototype.onLoad = function () {
        this.benefit = new Map(); //记录所有事件结算得到的总收益
        this.limited_event_record = new Map(); //记录
        this.init_event();
        this.init_bar_button();
    };
    event_controller.prototype.start = function () {
        var _this = this;
        this.node.on('over', function () {
            //console.debug('over')
            var p_node = cc.find('persist_node').getComponent('persist_node');
            p_node.addAge();
            if (p_node.getAge() == p_node.age_limited)
                _this.gameover();
            if (cc.find('persist_node').getComponent('persist_node').event_permitted) // 并非是在exausted后才点击over按钮
             {
                //结算事件总收益
                if (_this.benefit.has('修为'))
                    p_node.exp_gain(_this.benefit.get('修为'));
                var attr = Array.from(_this.benefit);
                console.debug(attr);
                for (var i = 0; i < attr.length; ++i) {
                    if (attr[i][0] != '修为')
                        p_node.change_attr(attr[i][0], attr[i][1]);
                }
            }
            //放出事件唤醒按钮，回收事件
            p_node.focus = null;
            cc.find('awakener').active = true;
            _this.node.destroy();
        });
        this.node.on('exausted', function () {
            console.debug('exausted');
            _this.exausted();
        });
        /*
        this.node.on('recover', ()=>{
            console.debug('recover')
            this.recover()
        })
        
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            this.awake()
        })
        */
    };
    event_controller.prototype.update = function (dt) {
        //if (cc.find('persist_node').getComponent('persist_node').getEnergy() > 0)
    };
    __decorate([
        property(cc.Prefab)
    ], event_controller.prototype, "event", void 0);
    __decorate([
        property(cc.Prefab)
    ], event_controller.prototype, "button", void 0);
    __decorate([
        property(cc.Prefab)
    ], event_controller.prototype, "exausted_prompt", void 0);
    __decorate([
        property(cc.Prefab)
    ], event_controller.prototype, "event_description", void 0);
    __decorate([
        property
    ], event_controller.prototype, "benefit_exp", void 0);
    __decorate([
        property
    ], event_controller.prototype, "benefit", void 0);
    __decorate([
        property
    ], event_controller.prototype, "limited_event_record", void 0);
    event_controller = __decorate([
        ccclass
    ], event_controller);
    return event_controller;
}(cc.Component));
exports.default = event_controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxldmVudF9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc09DO1FBcE9HLFdBQUssR0FBYyxJQUFJLENBQUE7UUFFdkIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUd2QixZQUFNLEdBQWMsSUFBSSxDQUFBO1FBR3hCLHFCQUFlLEdBQWMsSUFBSSxDQUFBO1FBR2pDLHVCQUFpQixHQUFjLElBQUksQ0FBQTtRQUduQyxpQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUd2QixhQUFPLEdBQUcsSUFBSSxDQUFBO1FBR2QsMEJBQW9CLEdBQUcsSUFBSSxDQUFBO1FBRTNCLHVCQUFpQixHQUFHLEVBQUUsQ0FBQTtRQUN0QixvQkFBYyxHQUFHLENBQUMsQ0FBQTs7UUFtTWxCOzs7Ozs7O1VBT0U7SUFFTixDQUFDO0lBMU1HOzs7Ozs7Ozs7TUFTRTtJQUVGLG9DQUFTLEdBQVQsVUFBVSxJQUFZO1FBRWxCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDdEM7WUFDSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSTtnQkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLENBQUMsRUFBRSxDQUFDO1lBQ0osSUFBSSxDQUFDLEdBQUcs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ZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBldmVudF9jb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBldmVudDogY2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIC8vQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIC8vYmFyOiBjYy5QcmVmYWIgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJ1dHRvbjogY2MuUHJlZmFiID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBleGF1c3RlZF9wcm9tcHQ6IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZXZlbnRfZGVzY3JpcHRpb246IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGJlbmVmaXRfZXhwOiBudW1iZXIgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBiZW5lZml0ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbGltaXRlZF9ldmVudF9yZWNvcmQgPSBudWxsXHJcblxyXG4gICAgZGlzcGF0Y2hlZF9ldmVudHMgPSBbXVxyXG4gICAgbnVtX2Rpc3BhdGNoZWQgPSAwXHJcblxyXG4gICAgLypcclxuICAgIGNsZWFyX2V2ZW50KClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW50cy5sZW5ndGg7ICsraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50c1tpXS5kZXN0cm95KClcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnYXR0ZW1wdCB0byBkZWwgJy5jb25jYXQoU3RyaW5nKGkpKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIHRyaW1fc2VnbSh0ZXh0OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGMgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGV4dC5sZW5ndGgrMTsgKytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRleHRbaS0xXT09J1xcbicpIGMgPSAwXHJcbiAgICAgICAgICAgIGMrKztcclxuICAgICAgICAgICAgaWYgKGMgJSAxMiA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCBpKSArICdcXG4nICsgdGV4dC5zbGljZShpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0KydcXG4nXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2hfZXZlbnQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubnVtX2Rpc3BhdGNoZWQgKz0gMVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZygncG9wIGZyb206JylcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcodGhpcy5kaXNwYXRjaGVkX2V2ZW50c1t0aGlzLm51bV9kaXNwYXRjaGVkLTFdKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoZWRfZXZlbnRzW3RoaXMubnVtX2Rpc3BhdGNoZWQtMV1cclxuICAgIH1cclxuXHJcbiAgICBldmVudF9kZXNjcmliZShkZXNjcmlwdGlvbjogc3RyaW5nKVxyXG4gICAge1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbiA9IHRoaXMudHJpbV9zZWdtKGRlc2NyaXB0aW9uKVxyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ldmVudF9kZXNjcmlwdGlvbilcclxuICAgICAgICBub2RlLnNldFBhcmVudCh0aGlzLm5vZGUpXHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigtNDI3LCA5NTApKVxyXG4gICAgICAgIG5vZGUuc2V0U2NhbGUobmV3IGNjLlZlYzIoMywzKSlcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgLy9ub2RlLmdldENoaWxkQnlOYW1lKCdldmVudF9wcm9tcHQnKS5jb2xvciA9IGNjLkNvbG9yLk9SQU5HRVxyXG4gICAgfVxyXG5cclxuICAgIGV4YXVzdGVkKClcclxuICAgIHtcclxuICAgICAgICAvLyvliqjnlLvllaXnmoRcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhhdXN0ZWRfcHJvbXB0KVxyXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSlcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKC00MjcsIDk1MCkpXHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZShuZXcgY2MuVmVjMigzLDMpKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1Zyhub2RlLnBhcmVudC5uYW1lKVxyXG4gICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5sb2dfd3JpdGUoJ+WcqCcrXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZ2V0QWdlKCkudG9TdHJpbmcoKStcclxuICAgICAgICAgICAgJ+Wyge+8jOS9oOi0quWKn+Wlvei/m++8jOe7k+aenOeyvueWsuWKm+erre+8jOWFg+awlOWkp+S8pO+8jOaumueyvuerreiZkeS5i+S6i+S5n+S4gOS7tuS4jeaIkOOAguS/rueCvOiZveWlve+8jOWPr+S4jeimgei0quadr+WTpuOAgicpXHJcbiAgICAgICAgdGhpcy5iZW5lZml0X2V4cCA9IDBcclxuICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV2ZW50X3Blcm1pdHRlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdF9ldmVudCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKCdJbml0IEV2ZW50cy4uLicpXHJcbiAgICAgICAgLy9sZXQgY3VyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgICAgICBsZXQgcF9ub2RlID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKVxyXG4gICAgICAgIGxldCB0ZXN0ID0gcF9ub2RlLmRpc3BhdGNoX2V2ZW50X3dpdGhvdXRfcmVxdWlyZW1lbnQoMClcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcG9zID0gW25ldyBjYy5WZWMyKC03MjcsIDExODApLCBuZXcgY2MuVmVjMigtNDI3LCAxMTgwKSwgbmV3IGNjLlZlYzIoLTEyNywgMTE4MCksIG5ldyBjYy5WZWMyKC01NjAsIDc3MCksIG5ldyBjYy5WZWMyKC0yNDAsIDc3MCldXHJcbiAgICAgICAgLy/lnKhjb250cm9sbGVy6YCJ5a6a5LqL5Lu2LOWcqGV2ZW506YCJ5a6a5YiG5pSv5Y+K5Luj5Lu3XHJcbiAgICAgICAgbGV0IGV2ZW50cyA9IHBfbm9kZS5kaXNwYXRjaF9ldmVudChjYy5maW5kKCdhd2FrZW5lcicpLmdldENvbXBvbmVudCgnYXdha2VuZXInKS5ldmVudF9ncm91cCwgMiwgMylcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyArK2kpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/ov5jlj6/ku6XlnKjmraTlpITlpITnkIbkuovku7bliY3nva7lhbPns7tcclxuICAgICAgICAgICAgbGV0IGVudCA9IGV2ZW50c1tpXVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcodHlwZW9mKGVudFsxXSkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdHlwZXMgPSBlbnRbMV0udG9TdHJpbmcoKS5zcGxpdCgn77yMJylcclxuICAgICAgICAgICAgbGV0IHRocmVsZCA9IHBfbm9kZS5nZXRfYXZnX2F0dHIoKSooMS1wX25vZGUucmVjX2dhdXNzaWFuKDAuMiwgMC4yLCAtMC4xLCAwLjUpKVxyXG4gICAgICAgICAgICB3aGlsZSAoKHR5cGVzLmxlbmd0aD09MyAmJiB0aGlzLmxpbWl0ZWRfZXZlbnRfcmVjb3JkLmhhcyhlbnRbMF0udHJpbSgpKSkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVzWzBdLnRyaW0oKSE9JzAnICYmIHR5cGVzWzBdLnRyaW0oKSE9J18nICYmIHR5cGVzWzBdLnNwbGl0KCfvvJonKVswXSE9J+eJueauiicgJiYgcF9ub2RlLmdldF9hdHRyKHR5cGVzWzBdKTw9dGhyZWxkKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh0eXBlc1swXS5zcGxpdCgn77yaJylbMF09PSfnibnmroonICYmIHBfbm9kZS5nZXRfYXR0cih0eXBlc1swXSkhPTEpKVxyXG4gICAgICAgICAgICAvL+WmguaenOWFtuS4uuWNleasoeWHuueOsOeahOS6i+S7tuW5tuS4lOW3sue7j+WHuueOsOi/h++8jOaIluiAheWFtuS4jea7oei2s+inpuWPkemXqOanm1xyXG4gICAgICAgICAgICAvL+WFiOi/m+ihjOS6i+S7tuexu+Wei+WIpOaWre+8jOexu+Wei+S4uiAxXzJbXzNdLCAxMjPmmK/kuI3lkIzlsZ7mgKflkI3np7DvvIwx5Yaz5a6a5LqL5Lu25piv5ZCm5Ye6546w77yMMuWGs+WumuWIhuaUr+WSjOaUtuebiuezu+aVsO+8jDPlhrPlrprkuovku7bmmK/lkKblj6rlh7rnjrDkuIDmrKFcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygn6K+l5LqL5Lu25LiN5ruh6Laz6KaB5rGCLOmHjeaWsOWPkeS6i+S7ticpXHJcbiAgICAgICAgICAgICAgICBlbnQgPSBwX25vZGUuZGlzcGF0Y2hfZXZlbnRfd2l0aG91dF9yZXF1aXJlbWVudChjYy5maW5kKCdhd2FrZW5lcicpLmdldENvbXBvbmVudCgnYXdha2VuZXInKS5ldmVudF9ncm91cClcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZyhlbnQpXHJcbiAgICAgICAgICAgICAgICB0eXBlcyA9IGVudFsxXS50b1N0cmluZygpLnNwbGl0KCfvvIwnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXZlbnQpXHJcbiAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSlcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3NbaV0pXHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUobmV3IGNjLlZlYzIoMSwxKSlcclxuICAgICAgICAgICAgLy9ub2RlLmdldENoaWxkQnlOYW1lKCd0aXRsZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZW50WzBdXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZygnaW5pdCBkaXNwYXRjaDonKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoW2VudFswXS50b1N0cmluZygpLCBlbnRbMV0udG9TdHJpbmcoKSwgZW50WzJdLnRvU3RyaW5nKCksIGVudFszXS50b1N0cmluZygpXSlcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVkX2V2ZW50cy5wdXNoKFtlbnRbMF0udG9TdHJpbmcoKSwgZW50WzFdLnRvU3RyaW5nKCksIGVudFsyXS50b1N0cmluZygpLCBlbnRbM10udG9TdHJpbmcoKV0pXHJcbiAgICAgICAgICAgIGlmIChlbnRbMV0udG9TdHJpbmcoKS5zcGxpdCgn77yMJykubGVuZ3RoPT0zKSB0aGlzLmxpbWl0ZWRfZXZlbnRfcmVjb3JkLnNldChlbnRbMF0udHJpbSgpLCB0cnVlKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoZXZlbnRzW2ldWzFdKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcobm9kZS5nZXRDb250ZW50U2l6ZSgpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zyhub2RlLmdldFBvc2l0aW9uKCkueClcclxuICAgICAgICAgICAgLy90aGlzLmVudHMucHVzaChub2RlKVxyXG4gICAgICAgICAgICAvKiovXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgaW5pdF9iYXJfYnV0dG9uKClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ0luaXQgd2lkZ2V0cy4uLicpXHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFyKVxyXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSlcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKC01NTAsIDIxMCkpXHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZShuZXcgY2MuVmVjMigxLDEpKVxyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1dHRvbilcclxuICAgICAgICBub2RlLnNldFBhcmVudCh0aGlzLm5vZGUpXHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigtMTUwLCAyMTApKVxyXG4gICAgICAgIC8vbm9kZS5zZXRQb3NpdGlvbigpXHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZShuZXcgY2MuVmVjMigxLDEpKVxyXG5cclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBuZXh0KClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3Byb2dyZXNzQmFyJykuZ2V0Q29tcG9uZW50KCdiYXInKS5yZXNldCgpXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIGdhbWVvdmVyKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYmVuZWZpdCA9IG5ldyBNYXAoKS8v6K6w5b2V5omA5pyJ5LqL5Lu257uT566X5b6X5Yiw55qE5oC75pS255uKXHJcbiAgICAgICAgdGhpcy5saW1pdGVkX2V2ZW50X3JlY29yZCA9IG5ldyBNYXAoKS8v6K6w5b2VXHJcbiAgICAgICAgdGhpcy5pbml0X2V2ZW50KClcclxuICAgICAgICB0aGlzLmluaXRfYmFyX2J1dHRvbigpICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbignb3ZlcicsICgpPT57XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zygnb3ZlcicpXHJcbiAgICAgICAgICAgIGxldCBwX25vZGUgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpXHJcbiAgICAgICAgICAgIHBfbm9kZS5hZGRBZ2UoKVxyXG4gICAgICAgICAgICBpZiAocF9ub2RlLmdldEFnZSgpPT1wX25vZGUuYWdlX2xpbWl0ZWQpIHRoaXMuZ2FtZW92ZXIoKVxyXG4gICAgICAgICAgICBpZiAoY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5ldmVudF9wZXJtaXR0ZWQpIC8vIOW5tumdnuaYr+WcqGV4YXVzdGVk5ZCO5omN54K55Ye7b3ZlcuaMiemSrlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+e7k+eul+S6i+S7tuaAu+aUtuebilxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmVuZWZpdC5oYXMoJ+S/ruS4uicpKSBwX25vZGUuZXhwX2dhaW4odGhpcy5iZW5lZml0LmdldCgn5L+u5Li6JykpXHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0ciA9IEFycmF5LmZyb20odGhpcy5iZW5lZml0KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhhdHRyKVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyW2ldWzBdIT0n5L+u5Li6JykgcF9ub2RlLmNoYW5nZV9hdHRyKGF0dHJbaV1bMF0sIGF0dHJbaV1bMV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v5pS+5Ye65LqL5Lu25ZSk6YaS5oyJ6ZKu77yM5Zue5pS25LqL5Lu2XHJcbiAgICAgICAgICAgIHBfbm9kZS5mb2N1cyA9IG51bGxcclxuICAgICAgICAgICAgY2MuZmluZCgnYXdha2VuZXInKS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vbignZXhhdXN0ZWQnLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdleGF1c3RlZCcpXHJcbiAgICAgICAgICAgIHRoaXMuZXhhdXN0ZWQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLypcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3JlY292ZXInLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdyZWNvdmVyJylcclxuICAgICAgICAgICAgdGhpcy5yZWNvdmVyKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmF3YWtlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvL2lmIChjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldEVuZXJneSgpID4gMClcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBkZXN0cm95KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBwYXJlbiA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKVxyXG4gICAgICAgIGxldCBuID0gY2MuaW5zdGFudGlhdGUoY2MuZmluZCgnZXZlbnRfY29udHJvbCcpKVxyXG4gICAgICAgIG4uc2V0UGFyZW50KHBhcmVuKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICAqL1xyXG4gICAgXHJcbn1cclxuIl19