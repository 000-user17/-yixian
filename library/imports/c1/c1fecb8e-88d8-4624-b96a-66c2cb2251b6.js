"use strict";
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