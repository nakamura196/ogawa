(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{464:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return v}));var r=n(466),o=n(1),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");r.a},465:function(t,e,n){"use strict";n.r(e);n(18),n(40),n(32),n(5),n(41),n(47),n(33);var r=n(19),o=(n(70),n(34),n(26),n(38),n(25),n(49),n(467));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d=function t(e,n){var r=[];if(e.length<n)return[];if(1===n)for(var i=0;i<e.length;i++)r[i]=[e[i]];else for(var o=0;o<e.length-n+1;o++)for(var c=t(e.slice(o+1),n-1),l=0;l<c.length;l++)r.push([e[o]].concat(c[l]));return r},v={components:{network:o.a},props:{item:{type:Object,require:!0,default:function(){}}},data:function(){return{nodes:[],nodesMap:{},edges:[],options:{nodes:{borderWidth:1},edges:{color:"lightgray"}},contexts:{},dialog:!1,selectedContexts:{}}},computed:{},mounted:function(){this.getRelations()},methods:{getRelations:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,data,v,h,f,m,y,x,_,w,O,k,j,C,E,P,A,R,S,I,$,B,F,T,D,z,M,L,N,V,W,Z,U;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.item,"https://dydra.com/junjun7613/romanfactoid_v3/sparql",r="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      SELECT DISTINCT *\n      WHERE {\n        ?entityReference ex:referencesEntityInContext ?entityInContext; ex:referencesEntity/rdf:type ?typeOfEntity . \n        filter (?entityInContext = <".concat(n.s,">) .\n        ?factoid ?hasReference ?entityReference .\n        ?hasReference rdfs:subPropertyOf* ?propertyClass .\n        filter (?propertyClass = ex:sceneObjectProperty || ?propertyClass = ex:sceneProperty).\n        ?factoid ?hasReference2 ?entityReference2 .\n        filter (?entityReference != ?entityReference2)\n        ?hasReference2 rdfs:subPropertyOf* ?propertyClass .\n        ?entityReference2 ex:referencesEntity ?entity; rdf:type ?typeOfEntityReference .\n        OPTIONAL { \n          ?entityReference2 ex:referencesEntityInContext ?entityInContext2 . \n          ?entityInContext2 rdf:type ?typeOfEntityInContext; ex:sourceDescription ?descriptionOfEntityInContext2 }\n        ?entity ex:name ?name; rdf:type ?typeOfEntity2 . \n      }"),o="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(r)),e.next=6,t.$axios.get(o);case 6:l=e.sent,data=l.data,v={},(h={})[n.s]=n,f={},m={},y={},t.contexts=y,x=c(data);try{for(x.s();!(_=x.n()).done;)w=_.value,O=w.factoid,v[O]||(v[O]=[n.s]),k=v[O],j=w.entity,k.includes(j)||k.push(j),h[j]=w,w.entityInContext2&&(C=w.entityInContext2,y[j]||(y[j]={}),y[j][C]=w)}catch(t){x.e(t)}finally{x.f()}for(E in v){P=v[E],A=d(P,2),R=c(A);try{for(R.s();!(S=R.n()).done;){I=S.value,$=I[0]+"-"+I[1],f[$]||(f[$]={from:I[0],to:I[1],value:0}),f[$].value+=1,B=c(I);try{for(B.s();!(F=B.n()).done;)T=F.value,D=null,z=null,M=null,L=h[T].typeOfEntityReference,N="",N=T===n.s?h[T].typeOfEntity:h[T].typeOfEntity2,["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference"].includes(L)?(D="yellow",z="diamond"):["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(N)?(D="red",z="square",M=N):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person"].includes(N)?M=N:["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"].includes(N)?(D="#98fb98",M=N):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"].includes(N)&&(D="orange",M=N),m[T]||(m[T]={id:T,label:h[T].name,color:D,shape:z,type:M})}catch(t){B.e(t)}finally{B.f()}}}catch(t){R.e(t)}finally{R.f()}}for(Z in V=[],W=[],m)V.push(m[Z]);for(U in f)W.push(f[U]);t.nodes=V,t.edges=W,t.nodesMap=m,t.relations=data;case 26:case"end":return e.stop()}}),e)})))()},onNodeSelected:function(t){var e=t.nodes;if(e.length>0){var n=e[0],r=this.nodesMap[n];["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(r.type)&&(this.dialog=!0,this.selectedContexts=this.contexts[r.id])}}}},h=n(96),f=n(130),m=n.n(f),y=n(217),x=n(466),_=n(464),w=n(486),O=n(487),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"650px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:t.nodes,edges:t.edges,options:t.options},on:{click:t.onNodeSelected}}),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v(" Contexts ")]),t._v(" "),n("v-card-text",[n("ul",t._l(t.selectedContexts,(function(e,r){return n("li",{key:r,staticClass:"mt-4"},[n("nuxt-link",{attrs:{to:t.localePath({name:"entity-id",params:{id:t.$utils.getIdFromUri(r)}})}},[t._v(t._s(e.descriptionOfEntityInContext2))])],1)})),0)]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Network:n(465).default}),m()(component,{VBtn:y.a,VCard:x.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:w.a,VSpacer:O.a})},466:function(t,e,n){"use strict";n(7),n(5),n(9),n(15),n(8),n(16);var r=n(2),o=(n(31),n(207),n(468),n(206)),c=n(477),l=n(90),d=n(12);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},468:function(t,e,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("e23b7040",content,!0,{sourceMap:!1})},469:function(t,e,n){var r=n(21)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},471:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2065bca8",content,!0,{sourceMap:!1})},472:function(t,e,n){var r=n(21)(!1);r.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=r},486:function(t,e,n){"use strict";var r=n(64),o=n(2),c=(n(31),n(71),n(75),n(38),n(49),n(80),n(7),n(5),n(9),n(15),n(8),n(16),n(471),n(614)),l=n(473),d=n(208),v=n(475),h=n(210),f=n(479),m=n(476),y=n(72),x=n(209),_=n(12),w=n(10),O=n(1);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(_.a)(l.a,d.a,v.a,h.a,f.a,m.a,y.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===O.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:j({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(O.h)(this.maxWidth),width:"auto"===this.width?void 0:Object(O.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},487:function(t,e,n){"use strict";n(304);var r=n(1);e.a=Object(r.i)("spacer","div","v-spacer")}}]);