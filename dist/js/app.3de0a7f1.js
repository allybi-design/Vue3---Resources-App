(function(e){function t(t){for(var r,c,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d21ab15":"9227efc0","chunk-2d21aeca":"addc6bb4","chunk-3647466d":"cd8c8628","chunk-45bce55e":"ddb3458e","chunk-581b0dd6":"a4ccab2a","chunk-6d731bfc":"1ee70f46"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-6d731bfc":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21ab15":"31d6cfe0","chunk-2d21aeca":"31d6cfe0","chunk-3647466d":"31d6cfe0","chunk-45bce55e":"31d6cfe0","chunk-581b0dd6":"31d6cfe0","chunk-6d731bfc":"3657c129"}[e]+".css",a=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],b.parentNode.removeChild(b),n(o)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05a7":function(e,t,n){},"0e16":function(e,t,n){"use strict";n("05a7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container mt-3"};function a(e,t,n,a,o,u){var s=Object(r["C"])("NavBar"),i=Object(r["C"])("router-view");return Object(r["u"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(s),Object(r["i"])("div",c,[Object(r["i"])(i)])],64)}var o={class:"navbar navbar-expand navbar-dark bg-dark"},u={class:"container "},s={class:"collapse navbar-collapse"},i={class:"navbar-nav me-auto mb-2 mb-lg-0"},l={key:0,class:"nav-item"},d=Object(r["h"])("Coaches"),b={key:1,class:"nav-item"},f=Object(r["h"])("Register"),h={key:2,class:"nav-item"},p=Object(r["h"])("Request"),m={class:"nav-item"},O=Object(r["h"])("Contact Us"),g=Object(r["h"])(" > "),j={class:"text-white"},v={class:"d-flex"};function y(e,t,n,c,a,y){var C=Object(r["C"])("fa-icon"),k=Object(r["C"])("fa-layers"),w=Object(r["C"])("router-link"),A=Object(r["C"])("userAuth");return Object(r["u"])(),Object(r["f"])("nav",o,[Object(r["i"])("div",u,[Object(r["i"])(w,{class:"navbar-brand",to:"/"},{default:Object(r["L"])((function(){return[Object(r["i"])(k,{"full-width":"",class:"fa-2x"},{default:Object(r["L"])((function(){return[Object(r["i"])(C,{icon:a.runningIcon},null,8,["icon"])]})),_:1})]})),_:1}),Object(r["i"])("div",s,[Object(r["i"])("ul",i,[e.isAuth?(Object(r["u"])(),Object(r["f"])("li",l,[Object(r["i"])(w,{class:"nav-link ",to:"/coaches"},{default:Object(r["L"])((function(){return[d]})),_:1})])):Object(r["g"])("",!0),e.isAuth?(Object(r["u"])(),Object(r["f"])("li",b,[Object(r["i"])(w,{class:"nav-link",to:"/register"},{default:Object(r["L"])((function(){return[f]})),_:1})])):Object(r["g"])("",!0),e.isAuth?(Object(r["u"])(),Object(r["f"])("li",h,[Object(r["i"])(w,{class:"nav-link",to:"/requests"},{default:Object(r["L"])((function(){return[p]})),_:1})])):Object(r["g"])("",!0),Object(r["i"])("li",m,[Object(r["i"])(w,{class:"nav-link",to:"/contact-us"},{default:Object(r["L"])((function(){return[O]})),_:1})])])]),g,Object(r["i"])("p",j,Object(r["F"])(e.userId),1),Object(r["i"])("div",v,[Object(r["i"])(A)])])])}var C=n("5530");function k(e,t,n,c,a,o){return Object(r["u"])(),Object(r["f"])(r["a"],null,[e.isUserAuth?Object(r["g"])("",!0):(Object(r["u"])(),Object(r["f"])("button",{key:0,class:"btn btn-primary",onClick:t[1]||(t[1]=function(){return o.logIn&&o.logIn.apply(o,arguments)})}," Login/Register ")),e.isUserAuth?(Object(r["u"])(),Object(r["f"])("button",{key:1,class:"btn btn-primary",onClick:t[2]||(t[2]=function(){return o.logOut&&o.logOut.apply(o,arguments)})},"LogOut")):Object(r["g"])("",!0)],64)}var w=n("5502"),A={name:"UserAuth",computed:Object(C["a"])({},Object(w["c"])({isUserAuth:"getIsUserAuth"})),methods:Object(C["a"])(Object(C["a"])({},Object(w["b"])(["signOut","toggleModal"])),{},{logIn:function(){this.toggleModal()},logOut:function(){this.signOut(),this.$router.push("/")}})};A.render=k;var M=A,x=n("c074"),R={name:"NavBar",components:{UserAuth:M},data:function(){return{runningIcon:x["a"]}},computed:Object(C["a"])({},Object(w["c"])({userId:"getUserId",isAuth:"getIsUserAuth"}))};R.render=y;var E=R,I={name:"app",components:{NavBar:E}};n("5761");I.render=a;var _=I,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),U={class:"text-center mt-5"},L=Object(r["h"])(" Click to Sign In ");function B(e,t,n,c,a,o){var u=Object(r["C"])("BaseButton"),s=Object(r["C"])("RegisterForm");return Object(r["u"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("header",U,[e.isUserAuth?Object(r["g"])("",!0):(Object(r["u"])(),Object(r["f"])(u,{key:0,bgColor:"primary",onClick:o.openModal},{default:Object(r["L"])((function(){return[L]})),_:1},8,["onClick"]))]),(Object(r["u"])(),Object(r["f"])(r["b"],{to:"body"},[Object(r["i"])(s)]))],64)}var P={class:"modal-slot"},q={class:"row"},F={class:"text-center"},T={class:"row mt-4"},D={class:"col-6"},H={class:"col-6"},N={class:"row text-center my-3"},V={key:0,class:"text-danger "},z=Object(r["i"])("button",{type:"submit",class:"btn btn-primary mt-4"}," Submit ",-1);function G(e,t,n,c,a,o){var u=Object(r["C"])("Field"),s=Object(r["C"])("ErrorMessage"),i=Object(r["C"])("Form"),l=Object(r["C"])("Modal");return e.isModalOpen?(Object(r["u"])(),Object(r["f"])(l,{key:0},{default:Object(r["L"])((function(){return[Object(r["i"])("div",P,[Object(r["i"])("button",{type:"button",class:"btn-close",onClick:t[1]||(t[1]=function(){return o.closeModal&&o.closeModal.apply(o,arguments)})}),Object(r["i"])(i,{onSubmit:o.submitForm,"validation-schema":a.schema},{default:Object(r["L"])((function(){return[Object(r["i"])("div",q,[Object(r["i"])("header",F,[Object(r["i"])("h2",null,"Please "+Object(r["F"])(a.authMethod),1),Object(r["i"])("p",{onClick:t[2]||(t[2]=function(){return o.toggleAuth&&o.toggleAuth.apply(o,arguments)})}," (or Click to "+Object(r["F"])("Register"!==a.authMethod?"Register":"Log In")+") ",1)])]),Object(r["i"])("div",T,[Object(r["i"])("div",D,[Object(r["i"])(u,{name:"email",type:"email",class:"form-control",placeholder:"email",rules:{email:!0,required:!0},modelValue:a.email,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.email=e}),modelModifiers:{trim:!0},onFocus:o.clrErrors},null,8,["modelValue","onFocus"]),Object(r["i"])(s,{name:"email",class:"text-danger"})]),Object(r["i"])("div",H,[Object(r["i"])(u,{name:"password",type:"password",modelValue:a.password,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.password=e}),modelModifiers:{trim:!0},class:"form-control",placeholder:"password",rules:{min:8,require:!0},onFocus:o.clrErrors},null,8,["modelValue","onFocus"]),Object(r["i"])(s,{name:"password",class:"text-danger"})])]),Object(r["i"])("div",N,[e.errorMsg?(Object(r["u"])(),Object(r["f"])("span",V,Object(r["F"])(e.errorMsg),1)):Object(r["g"])("",!0)]),z]})),_:1},8,["onSubmit","validation-schema"])])]})),_:1})):Object(r["g"])("",!0)}var $=n("7bb1"),K=n("506a"),J={name:"Register-SignIn-Form",components:{Form:$["c"],Field:$["b"],ErrorMessage:$["a"]},data:function(){return{authMethod:"Log In",email:"",password:"123456789",schema:Object(K["b"])({email:Object(K["c"])().required("Email is Required").email("Enter Valid Email."),password:Object(K["c"])().required("Password is Required").min(8,"Min 8 char Max 16 char")})}},computed:Object(C["a"])({},Object(w["c"])({errorMsg:"getError",isModalOpen:"getIsModalOpen"})),methods:Object(C["a"])(Object(C["a"])({},Object(w["b"])(["togglelModal","createUser","signIn","clearErrors"])),{},{toggleAuth:function(){"Register"===this.authMethod?this.authMethod="Log In":this.authMethod="Register"},closeModal:function(){this.toggleModal()},submitForm:function(e,t){var n=t.resetForm;"Register"===this.authMethod&&this.createUser(e),"Log In"===this.authMethod&&this.signIn(e),n()},clrErrors:function(){this.clearErrors()}})};J.render=G;var W=J,Q={name:"HomePage",components:{RegisterForm:W},data:function(){return{}},computed:Object(C["a"])({},Object(w["c"])({isUserAuth:"getIsUserAuth"})),methods:Object(C["a"])(Object(C["a"])({},Object(w["b"])(["toggleModal"])),{},{openModal:function(){this.toggleModal()}})};Q.render=B;var Y=Q,X=n("1da1"),Z=(n("96cf"),n("159b"),n("d81d"),n("260b")),ee=(n("e71f"),Z["a"].initializeApp({apiKey:"AIzaSyAv9ufBVmv663p4qQsz8fsNYih0jPI6KgU",authDomain:"vue3coachfinder.firebaseapp.com",projectId:"vue3coachfinder",storageBucket:"vue3coachfinder.appspot.com",messagingSenderId:"125069631036",appId:"1:125069631036:web:c5a22dd39431ebad28ad39"})),te=ee.firestore(),ne=te.collection("coaches"),re=function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.add(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,ne.get().then((function(e){e.forEach((function(e){t.push(e.data())}))}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=(n("ea7b"),{state:{isAuth:!1,userId:void 0,errorMsg:void 0},mutations:{SET_AUTH:function(e,t){e.userId=t.user,e.isAuth=t.auth},SET_ERROR:function(e,t){e.errorMsg=t},CLR_ERROR:function(e){e.errorMsg=void 0}},actions:{signIn:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c=e.dispatch,n.prev=1,n.next=4,ee.auth().signInWithEmailAndPassword(t.email,t.password).then((function(e){r("SET_AUTH",{auth:!0,user:e.user.uid}),c("toggleModal"),me.push("/coaches")}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),r("SET_ERROR",n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()},signOut:function(e){var t=e.commit;ee.auth().signOut(),t("SET_AUTH",{auth:!1,user:{}}),me.push("/")},createUser:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c=e.dispatch,n.prev=1,n.next=4,ee.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(e){r("SET_AUTH",{auth:!0,user:e.user.uid}),c("toggleModal"),c("loadState"),me.push("/coaches")}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),r("SET_ERROR",n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()},clearErrors:function(e){var t=e.commit;t("CLR_ERROR")}},getters:{getIsUserAuth:function(e){return e.isAuth},getError:function(e){return e.errorMsg},getUserId:function(e){return e.userId?e.userId:"undefined"}}}),oe=ae,ue={state:{},mutations:{},actions:{},getters:{}},se=ue,ie=(n("5319"),n("ac1f"),n("7db0"),{state:{coaches:[]},mutations:{ADD_COACH:function(e,t){e.coaches=t}},actions:{saveNewCoach:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,re(t).then(Object(X["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ce().then((function(e){r("ADD_COACH",e),me.replace("/coaches")}));case 2:case"end":return e.stop()}}),e)}))));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()},loadCoachesData:function(e){return Object(X["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ce().then((function(e){n("ADD_COACH",e)}));case 3:case"end":return t.stop()}}),t)})))()}},getters:{getCoaches:function(e){return e.coaches},getCoachById:function(e){return function(t){return e.coaches.find((function(e){return e.uid===t}))}},getHasCoaches:function(e){return e.coaches.length>0},getIsUserCoach:function(e,t){return e.coaches.some((function(e){return e.uid===t.getUserId}))}}}),le=ie,de={state:{isOpen:!1},mutations:{TOGGLE_MODAL:function(e){e.isOpen=!e.isOpen}},actions:{toggleModal:function(e){var t=e.commit;t("TOGGLE_MODAL")}},getters:{getIsModalOpen:function(e){return e.isOpen}}},be=de,fe=Object(w["a"])({modules:{auth:oe,requests:se,coaches:le,modal:be}}),he=[{path:"/",name:"HomePage",component:Y},{path:"/contact-us",name:"ContactUsPage",component:function(){return n.e("chunk-6d731bfc").then(n.bind(null,"e91f"))}},{path:"/coaches",name:"CoachesPage",beforeEnter:function(){return fe.dispatch("loadCoachesData")},meta:{requiresAuth:!0},component:function(){return n.e("chunk-3647466d").then(n.bind(null,"ae78"))}},{path:"/coaches/:id",name:"CoachDetailsPage",props:!0,meta:{requiresAuth:!0},component:function(){return n.e("chunk-581b0dd6").then(n.bind(null,"47e7"))},children:[{path:"contact",name:"CoachContactPage",meta:{requiresAuth:!0},component:function(){return n.e("chunk-2d21ab15").then(n.bind(null,"bd30"))}}]},{path:"/coach-register",name:"CoachRegisterPage.",meta:{requiresAuth:!0},component:function(){return n.e("chunk-45bce55e").then(n.bind(null,"230b"))}},{path:"/requests",name:"Requests",meta:{requiresAuth:!0},component:function(){return n.e("chunk-2d21aeca").then(n.bind(null,"be1b"))}},{path:"/:notFound(.*)",redirect:"/"}],pe=Object(S["a"])({history:Object(S["b"])(),linkActiveClass:"active",linkExactActiveClass:"exact-active",scrollBehavior:function(e,t,n){return n||{left:0,top:0}},routes:he});pe.beforeEach((function(e,t,n){var r=fe.getters.getIsUserAuth;if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(r)return n();n("/"),n("/")}else n()}));var me=pe,Oe={class:"card-body"};function ge(e,t,n,c,a,o){return Object(r["u"])(),Object(r["f"])("div",{class:["card p-3 mb-3 rounded",c.classes]},[Object(r["i"])("div",Oe,[Object(r["B"])(e.$slots,"default")])],2)}var je=n("ade3"),ve={name:"BaseCard",props:{bgColor:{type:String,default:"light"},txtColor:{type:String,default:"dark"},shadow:{type:Boolean,default:!1}},setup:function(e){return e=Object(r["y"])(e),{classes:Object(r["d"])((function(){var t;return t={shadow:e.shadow},Object(je["a"])(t,"bg-".concat(e.bgColor),e.bgColor),Object(je["a"])(t,"text-".concat(e.txtColor),e.txtColor),t}))}}};ve.render=ge;var ye=ve;function Ce(e,t,n,c,a,o){return Object(r["u"])(),Object(r["f"])("button",{type:"button",class:c.classes,onClick:t[1]||(t[1]=function(){return c.onClick&&c.onClick.apply(c,arguments)})},[Object(r["B"])(e.$slots,"default")],2)}var ke={name:"BaseButton",props:{bgColor:{type:String},txColor:{type:String},olColor:{type:String},size:{type:String,validator:function(e){return-1!==["sm","lg"].indexOf(e)}}},emits:["click"],setup:function(e,t){var n=t.emit;return e=Object(r["y"])(e),{classes:Object(r["d"])((function(){var t;return t={btn:!0},Object(je["a"])(t,"btn-".concat(e.bgColor),e.bgColor),Object(je["a"])(t,"text-".concat(e.txColor),e.txColor),Object(je["a"])(t,"btn-outline-".concat(e.olColor),e.olColor),Object(je["a"])(t,"btn-".concat(e.size),!0),t})),onClick:function(){n("click")}}}};ke.render=Ce;var we=ke,Ae={key:"slot",class:"container"};function Me(e,t,n,c,a,o){return Object(r["u"])(),Object(r["f"])(r["c"],{name:"bg-fade-Anim"},{default:Object(r["L"])((function(){return[Object(r["i"])("div",{key:"bg",class:"modal-bg",onClick:t[1]||(t[1]=function(){return o.closeModal&&o.closeModal.apply(o,arguments)})}),Object(r["i"])("div",Ae,[Object(r["B"])(e.$slots,"default")])]})),_:3})}var xe={name:"Modal",methods:Object(C["a"])(Object(C["a"])({},Object(w["b"])(["toggleModal"])),{},{closeModal:function(){this.toggleModal()}})};n("0e16");xe.render=Me;var Re=xe,Ee=n("7b17"),Ie=(n("f9e3"),n("ad3d")),_e=Object(r["e"])(_);_e.component("BaseCard",ye),_e.component("BaseButton",we),_e.component("Modal",Re),_e.component("fa-icon",Ie["a"]),_e.component("fa-layers",Ie["b"]),_e.component("fa-layers-text",Ie["c"]),_e.use(Ee["default"]),_e.use(fe),_e.use(me),me.isReady().then((function(){_e.mount("#app")}))},5761:function(e,t,n){"use strict";n("c159")},c159:function(e,t,n){}});
//# sourceMappingURL=app.3de0a7f1.js.map