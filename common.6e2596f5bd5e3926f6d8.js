(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3zLz":function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){function l(){}return l.prototype.ngOnInit=function(){},l}()},6233:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(l){for(var t in l)n.hasOwnProperty(t)||(n[t]=l[t])}(t("ug5D"))},pmbY:function(l,n,t){"use strict";t.d(n,"a",function(){return o}),t("6233"),t("Oipj");var e=t("CcnG"),u=t("ug5D"),r=t("CB3U"),i=t("t/Na"),o=function(){function l(l,n,t){var e=this;this.db=l,this.afAuth=n,this.http=t,this.dbPath="/orders",this.ordersRef=null,this.ordersRef=l.list(this.dbPath),this.afAuth.authState.subscribe(function(l){l&&(e.userId=l.uid)})}return l.prototype.createOrder=function(l,n,t){var e=this.db.list("/orders/"+this.userId).push(l).key,u=n.split(","),r=t.split(",");this.http.post("https://the-nimble-sloth-dispatcher.herokuapp.com/orders/add",{orderId:this.userId,userId:e,pickUp:{latitude:u[0],longitude:u[1]},destination:{latitude:r[0],longitude:r[1]}})},l.prototype.updateOrder=function(l,n){var t=this;this.ordersRef.update(l,n).catch(function(l){return t.handleError(l)})},l.prototype.deleteOrder=function(l){var n=this;this.ordersRef.remove(l).catch(function(l){return n.handleError(l)})},l.prototype.getOrdersList=function(){if(this.userId)return this.db.list("orders/"+this.userId).valueChanges()},l.prototype.getAll=function(){return this.db.list("orders").valueChanges()},l.prototype.deleteAll=function(){var l=this;this.ordersRef.remove().catch(function(n){return l.handleError(n)})},l.prototype.handleError=function(l){console.log(l)},l.ngInjectableDef=e.defineInjectable({factory:function(){return new l(e.inject(u.AngularFireDatabase),e.inject(r.AngularFireAuth),e.inject(i.c))},token:l,providedIn:"root"}),l}()},rMXk:function(l,n,t){"use strict";var e=t("CcnG"),u=t("ZYCi"),r=t("Ip0R");t("3zLz"),t.d(n,"a",function(){return i}),t.d(n,"b",function(){return o});var i=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function o(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,12,"div",[["class","col-xl-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h2",[["class","page-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,[" "," "])),(l()(),e["\u0275eld"](4,0,null,null,9,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,5,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,0,"i",[["class","fa fa-dashboard"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,3,"a",[["href","Javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](8,671744,null,0,u.o,[u.l,u.a,r.j],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](9,1),(l()(),e["\u0275ted"](-1,null,["Dashboard"])),(l()(),e["\u0275eld"](11,0,null,null,2,"li",[["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null)),(l()(),e["\u0275ted"](13,null,[" ",""]))],function(l,n){var t=l(n,9,0,"/dashboard");l(n,8,0,t)},function(l,n){var t=n.component;l(n,3,0,t.heading),l(n,7,0,e["\u0275nov"](n,8).target,e["\u0275nov"](n,8).href),l(n,12,0,e["\u0275inlineInterpolate"](1,"fa ",t.icon,"")),l(n,13,0,t.heading)})}}}]);