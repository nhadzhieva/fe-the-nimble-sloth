(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/cdV":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){return function(){}}(),u=e("pMnS"),a=e("ZYCi"),r=e("IYfF"),i=function(){function n(n,l,e){var t=this;this.translate=n,this.router=l,this.auth=e,this.user=r.a.userDetails,this.name=this.user.displayName,this.router.events.subscribe(function(n){n instanceof a.d&&window.innerWidth<=992&&t.isToggled()&&t.toggleSidebar()})}return n.prototype.ngOnInit=function(){this.pushRightClass="push-right"},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.onLoggedout=function(){this.auth.logout()},n}(),s=e("A7o+"),d=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,10,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The Nimble Sloth"])),(n()(),t["\u0275eld"](3,0,null,null,1,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggleSidebar()&&t),t},null,null)),(n()(),t["\u0275eld"](4,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,5,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,4,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,3,"button",[["class","btn btn btn-secondary"]],null,[[null,"click"]],function(n,l,e){var o=!0,u=n.component;return"click"===l&&(o=!1!==t["\u0275nov"](n,8).onClick()&&o),"click"===l&&(o=!1!==u.onLoggedout()&&o),o},null,null)),t["\u0275did"](8,16384,null,0,a.m,[a.l,a.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](9,1),(n()(),t["\u0275ted"](-1,null,[" Log out "]))],function(n,l){var e=n(l,9,0,"/login");n(l,8,0,e)},null)}var g=e("Ip0R"),p=function(){function n(n,l){var e=this;this.translate=n,this.router=l,this.collapsedEvent=new t.EventEmitter,this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var o=this.translate.getBrowserLang();this.translate.use(o.match(/en|fr|ur|es|it|fa|de/)?o:"en"),this.router.events.subscribe(function(n){n instanceof a.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.ngOnInit=function(){this.isActive=!1,this.collapsed=!1,this.showMenu="",this.pushRightClass="push-right"},n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){this.showMenu=n===this.showMenu?"0":n},n.prototype.toggleCollapsed=function(){this.collapsed=!this.collapsed,this.collapsedEvent.emit(this.collapsed)},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.changeLang=function(n){this.translate.use(n)},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n}(),f=t["\u0275crt"]({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;margin-bottom:48px;border:none;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}.toggle-button[_ngcontent-%COMP%]{position:fixed;width:236px;cursor:pointer;padding:12px;bottom:0;color:#999;background:#212529;border-top:1px solid #999;transition:all .2s ease-in-out}.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:23px}.toggle-button[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.collapsed[_ngcontent-%COMP%]{width:50px}.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}"]],data:{}});function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,96,"nav",[["class","sidebar"]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,g.k,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](2,{sidebarPushRight:0,collapsed:1}),(n()(),t["\u0275eld"](3,0,null,null,85,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,10,"a",[["class","list-group-item"],["routerLink","/dashboard"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t["\u0275did"](5,671744,[[2,4]],0,a.o,[a.l,a.a,g.j],{routerLink:[0,"routerLink"]},null),t["\u0275did"](6,1720320,null,2,a.n,[a.l,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,1,{links:1}),t["\u0275qud"](603979776,2,{linksWithHrefs:1}),t["\u0275pad"](9,1),(n()(),t["\u0275eld"](10,0,null,null,0,"i",[["class","fa fa-fw fa-dashboard"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 "])),(n()(),t["\u0275eld"](12,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](13,null,["",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](15,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,16).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t["\u0275did"](16,671744,[[4,4]],0,a.o,[a.l,a.a,g.j],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](17,1),t["\u0275did"](18,1720320,null,2,a.n,[a.l,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,3,{links:1}),t["\u0275qud"](603979776,4,{linksWithHrefs:1}),t["\u0275pad"](21,1),(n()(),t["\u0275eld"](22,0,null,null,0,"i",[["class","fa fa-fw fa-edit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 "])),(n()(),t["\u0275eld"](24,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](25,null,["",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](27,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,28).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t["\u0275did"](28,671744,[[6,4]],0,a.o,[a.l,a.a,g.j],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](29,1),t["\u0275did"](30,1720320,null,2,a.n,[a.l,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,5,{links:1}),t["\u0275qud"](603979776,6,{linksWithHrefs:1}),t["\u0275pad"](33,1),(n()(),t["\u0275eld"](34,0,null,null,0,"i",[["class","fa fa-fw fa-table"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 "])),(n()(),t["\u0275eld"](36,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](37,null,["",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](39,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,40).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t["\u0275did"](40,671744,[[8,4]],0,a.o,[a.l,a.a,g.j],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](41,1),t["\u0275did"](42,1720320,null,2,a.n,[a.l,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,7,{links:1}),t["\u0275qud"](603979776,8,{linksWithHrefs:1}),t["\u0275pad"](45,1),(n()(),t["\u0275eld"](46,0,null,null,0,"i",[["class","fa fa-fw fa-bar-chart-o"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 "])),(n()(),t["\u0275eld"](48,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](49,null,["",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](51,0,null,null,37,"div",[["class","header-fields"]],null,null,null,null,null)),(n()(),t["\u0275eld"](52,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.rltAndLtr()&&t),t},null,null)),(n()(),t["\u0275eld"](53,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](54,0,null,null,0,"i",[["class","fa fa-arrows-h"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 RTL/LTR"])),(n()(),t["\u0275eld"](56,0,null,null,32,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](57,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addExpandClass("profile")&&t),t},null,null)),(n()(),t["\u0275eld"](58,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](59,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 John Smith"])),(n()(),t["\u0275eld"](61,0,null,null,27,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),t["\u0275eld"](62,0,null,null,26,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](63,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](64,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275eld"](65,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](66,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(n()(),t["\u0275ted"](67,null,[" ",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](69,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](70,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275eld"](71,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](72,0,null,null,0,"i",[["class","fa fa-fw fa-envelope"]],null,null,null,null,null)),(n()(),t["\u0275ted"](73,null,[" ",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](75,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](76,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275eld"](77,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](78,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(n()(),t["\u0275ted"](79,null,[" ",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](81,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](82,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0,u=n.component;return"click"===l&&(o=!1!==t["\u0275nov"](n,83).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),"click"===l&&(o=!1!==u.onLoggedout()&&o),o},null,null)),t["\u0275did"](83,671744,null,0,a.o,[a.l,a.a,g.j],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](84,1),(n()(),t["\u0275eld"](85,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](86,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(n()(),t["\u0275ted"](87,null,[" ",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](89,0,null,null,7,"div",[["class","toggle-button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggleCollapsed()&&t),t},null,null)),t["\u0275did"](90,278528,null,0,g.k,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](91,{collapsed:0}),(n()(),t["\u0275eld"](92,0,null,null,0,"i",[["class","fa fa-fw fa-angle-double-left"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 "])),(n()(),t["\u0275eld"](94,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](95,null,["",""])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef])],function(n,l){var e=l.component,t=n(l,2,0,e.isActive,e.collapsed);n(l,1,0,"sidebar",t),n(l,5,0,"/dashboard");var o=n(l,9,0,"router-link-active");n(l,6,0,o);var u=n(l,17,0,"/your-request");n(l,16,0,u);var a=n(l,21,0,"router-link-active");n(l,18,0,a);var r=n(l,29,0,"/deliveries");n(l,28,0,r);var i=n(l,33,0,"router-link-active");n(l,30,0,i);var s=n(l,41,0,"/charts");n(l,40,0,s);var d=n(l,45,0,"router-link-active");n(l,42,0,d);var c=n(l,84,0,"/login");n(l,83,0,c);var g=n(l,91,0,e.collapsed);n(l,90,0,"toggle-button",g)},function(n,l){var e=l.component;n(l,4,0,t["\u0275nov"](l,5).target,t["\u0275nov"](l,5).href),n(l,13,0,t["\u0275unv"](l,13,0,t["\u0275nov"](l,14).transform("Dashboard"))),n(l,15,0,t["\u0275nov"](l,16).target,t["\u0275nov"](l,16).href),n(l,25,0,t["\u0275unv"](l,25,0,t["\u0275nov"](l,26).transform("Make request"))),n(l,27,0,t["\u0275nov"](l,28).target,t["\u0275nov"](l,28).href),n(l,37,0,t["\u0275unv"](l,37,0,t["\u0275nov"](l,38).transform("Your deliveries"))),n(l,39,0,t["\u0275nov"](l,40).target,t["\u0275nov"](l,40).href),n(l,49,0,t["\u0275unv"](l,49,0,t["\u0275nov"](l,50).transform("Statistics"))),n(l,61,0,"profile"===e.showMenu),n(l,67,0,t["\u0275unv"](l,67,0,t["\u0275nov"](l,68).transform("Profile"))),n(l,73,0,t["\u0275unv"](l,73,0,t["\u0275nov"](l,74).transform("Inbox"))),n(l,79,0,t["\u0275unv"](l,79,0,t["\u0275nov"](l,80).transform("Settings"))),n(l,82,0,t["\u0275nov"](l,83).target,t["\u0275nov"](l,83).href),n(l,87,0,t["\u0275unv"](l,87,0,t["\u0275nov"](l,88).transform("Log Out"))),n(l,95,0,t["\u0275unv"](l,95,0,t["\u0275nov"](l,96).transform("Collapse Sidebar")))})}var h=function(){function n(){}return n.prototype.ngOnInit=function(){},n.prototype.receiveCollapsed=function(n){this.collapedSideBar=n},n}(),b=t["\u0275crt"]({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{transition:margin-left .2s ease-in-out}.main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}.collapsed[_ngcontent-%COMP%]{margin-left:100px}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]],data:{}});function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,c,d)),t["\u0275did"](1,114688,null,0,i,[s.j,a.l,r.a],null,null),(n()(),t["\u0275eld"](2,0,null,null,1,"app-sidebar",[],null,[[null,"collapsedEvent"]],function(n,l,e){var t=!0;return"collapsedEvent"===l&&(t=!1!==n.component.receiveCollapsed(e)&&t),t},C,f)),t["\u0275did"](3,114688,null,0,p,[s.j,a.l],null,{collapsedEvent:"collapsedEvent"}),(n()(),t["\u0275eld"](4,0,null,null,4,"section",[["class","main-container"]],null,null,null,null,null)),t["\u0275did"](5,278528,null,0,g.k,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](6,{collapsed:0}),(n()(),t["\u0275eld"](7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](8,212992,null,0,a.q,[a.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(n,l){var e=l.component;n(l,1,0),n(l,3,0);var t=n(l,6,0,e.collapedSideBar);n(l,5,0,"main-container",t),n(l,8,0)},null)}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,m,b)),t["\u0275did"](1,114688,null,0,h,[],null,null)],function(n,l){n(l,1,0)},null)}var v=t["\u0275ccf"]("app-layout",h,M,{},{},[]),O=function(){return function(){}}(),P=e("4GxJ");e.d(l,"LayoutModuleNgFactory",function(){return _});var _=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,v]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.o,g.n,[t.LOCALE_ID,[2,g.C]]),t["\u0275mpd"](1073742336,g.c,g.c,[]),t["\u0275mpd"](1073742336,a.p,a.p,[[2,a.v],[2,a.l]]),t["\u0275mpd"](1073742336,O,O,[]),t["\u0275mpd"](1073742336,s.g,s.g,[]),t["\u0275mpd"](1073742336,P.w,P.w,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,a.j,function(){return[[{path:"",component:h,children:[{path:"",redirectTo:"dashboard",pathMatch:"prefix"},{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"charts",loadChildren:"./charts/charts.module#ChartsModule"},{path:"deliveries",loadChildren:"./tables/tables.module#TablesModule"},{path:"your-request",loadChildren:"./form/form.module#FormModule"},{path:"bs-element",loadChildren:"./bs-element/bs-element.module#BsElementModule"},{path:"grid",loadChildren:"./grid/grid.module#GridModule"},{path:"components",loadChildren:"./bs-component/bs-component.module#BsComponentModule"},{path:"blank-page",loadChildren:"./blank-page/blank-page.module#BlankPageModule"}]}]]},[])])})}}]);