(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{471:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));var o=n(476),r=n(1),c=Object(r.i)("v-card__actions"),l=Object(r.i)("v-card__subtitle"),d=Object(r.i)("v-card__text"),h=Object(r.i)("v-card__title");o.a},476:function(t,e,n){"use strict";n(7),n(5),n(9),n(13),n(8),n(17);var o=n(2),r=(n(32),n(212),n(478),n(210)),c=n(485),l=n(95),d=n(14);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=f({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},478:function(t,e,n){var content=n(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("e23b7040",content,!0,{sourceMap:!1})},479:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},481:function(t,e,n){"use strict";n.r(e);n(18),n(43),n(33),n(5),n(44),n(49),n(34);var o=n(19),r=(n(72),n(35),n(27),n(211),n(79),n(41),n(26),n(51),n(7),n(472));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d=function t(e,n){var o=[];if(e.length<n)return[];if(1===n)for(var i=0;i<e.length;i++)o[i]=[e[i]];else for(var r=0;r<e.length-n+1;r++)for(var c=t(e.slice(r+1),n-1),l=0;l<c.length;l++)o.push([e[r]].concat(c[l]));return o},h={components:{network:r.a},props:{id:{type:String,require:!0,default:""}},data:function(){return{isLemma:!0,orgNodes:[],orgEdges:[],nodes:[],nodesMap:{},edgesMap:{},contexts:{},edges:[],options:{nodes:{borderWidth:1},edges:{color:"lightgray"}},dialog:!1,selectedContexts:{},item:{},endpoint:"https://dydra.com/junjun7613/romanfactoid_v3/sparql",timeoutId:null}},computed:{selectedEntityIdOnText:{get:function(){return this.$store.getters.getSelectedEntityIdOnText},set:function(t){this.$store.commit("setSelectedEntityIdOnText",t)}}},watch:{isLemma:function(){this.drawNetwork()},id:function(){this.init(this.id)}},mounted:function(){this.init(this.id)},methods:{init:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c,data,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t,t){n.next=3;break}return n.abrupt("return");case 3:return r="\n      prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>\n      prefix owl: <http://www.w3.org/2002/07/owl#>\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      select distinct * where {\n          ?s ex:eventSince ?eventSince; ex:eventUntil ?eventUntil;\n            ex:contextualAspectOf ?entity .\n          filter (?s = <".concat(o,"> ) .\n          ?entity ex:name ?name; rdf:type ?typeOfEntity .\n          ?eventSince ex:description ?eventSinceDescription .\n          ?eventUntil ex:description ?eventUntilDescription .\n          optional { ?s ex:hasLocation/ex:sourceDescritpion ?locationDescription . }\n      }"),n.next=6,e.$axios.get("".concat(e.endpoint,"?query=").concat(encodeURIComponent(r)));case 6:c=n.sent,data=c.data,l=data[0],e.item=l,e.getRelations(t);case 11:case"end":return n.stop()}}),n)})))()},getRelations:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,filter,r,l,h,data,f,v,m,x,y,w,_,O,j,k,C,R,E,P,S,I,A,F,$,B,T,D,L,M,N,z,V,U,W,Z,G,H,J;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.item,filter="?entityInContext = <".concat(t,">"),r="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      SELECT DISTINCT *\n      WHERE {\n        ?entityInContext ex:contextualAspectOf ?entity0 .\n        ?entityReference ex:referencesEntityInContext ?entityInContext; ex:referencesEntity/rdf:type ?typeOfEntity .\n        filter (".concat(filter,") .\n        ?factoid ?hasReference ?entityReference .\n        ?hasReference rdfs:subPropertyOf* ?propertyClass .\n        filter (?propertyClass = ex:sceneObjectProperty || ?propertyClass = ex:sceneProperty).\n        ?factoid ?hasReference2 ?entityReference2 .\n        filter (?entityReference != ?entityReference2)\n        ?hasReference2 rdfs:subPropertyOf* ?propertyClass .\n        ?entityReference2 ex:referencesEntity ?entity; rdf:type ?typeOfEntityReference .\n        OPTIONAL {\n          ?entityReference2 ex:referencesEntityInContext ?entityInContext2 .\n          ?entityInContext2 rdf:type ?typeOfEntityInContext; ex:sourceDescription ?descriptionOfEntityInContext2 }\n        ?entity ex:name ?name; rdf:type ?typeOfEntity2 .\n      }"),l="".concat(e.endpoint,"?query=").concat(encodeURIComponent(r)),n.next=6,e.$axios.get(l);case 6:h=n.sent,data=h.data,f={},v={},t=data[0].entity0,v[t]=o,m=e.edgesMap,x=e.nodesMap,y=e.contexts,e.contexts=y,w=c(data);try{for(w.s();!(_=w.n()).done;)O=_.value,j=O.factoid,f[j]||(f[j]=[t]),k=f[j],C=O.entity,k.includes(C)||k.push(C),v[C]=O,O.entityInContext2&&(R=O.entityInContext2,y[C]||(y[C]={}),y[C][R]=O)}catch(t){w.e(t)}finally{w.f()}for(E in f){P=f[E],S=d(P,2),I=c(S);try{for(I.s();!(A=I.n()).done;){F=A.value,($=[F[0],F[1]]).sort(),B=$.join("-"),m[B]||(m[B]={from:F[0],to:F[1],value:0}),T=c(F);try{for(T.s();!(D=T.n()).done;)L=D.value,M=null,N=null,z=null,V=v[L].typeOfEntityReference,U="",U=L===t?v[L].typeOfEntity:v[L].typeOfEntity2,["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference"].includes(V)?(M="yellow",N="diamond"):["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(U)?(M="red",N="square",z=U):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person"].includes(U)?z=U:["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"].includes(U)?(M="#98fb98",z=U):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"].includes(U)&&(M="orange",z=U),x[L]||(x[L]={id:L,label:v[L].name,color:M,shape:N,type:z})}catch(t){T.e(t)}finally{T.f()}}}catch(t){I.e(t)}finally{I.f()}}return n.next=21,e.getAssociatedObjects(x,m,f);case 21:for(H in W=n.sent,x=W.nodesMap,m=W.edgesMap,Z=[],G=[],x)Z.push(x[H]);for(J in m)G.push(m[J]);e.orgNodes=Z,e.orgEdges=G,e.nodesMap=x,e.edgesMap=m,e.relations=data,e.drawNetwork();case 34:case"end":return n.stop()}}),n)})))()},drawNetwork:function(){var t,e=this.orgEdges,n=this.orgNodes,o=[],r=[],l=[],d=this.isLemma,h=c(n);try{for(h.s();!(t=h.n()).done;){var f=t.value;(d||"lemma"!==f.type)&&(o.push(f),l.push(f.id))}}catch(t){h.e(t)}finally{h.f()}var v,m=c(e);try{for(m.s();!(v=m.n()).done;){var x=v.value,y=x.from,w=x.to;l.includes(y)&&l.includes(w)&&r.push(x)}}catch(t){m.e(t)}finally{m.f()}this.nodes=o,this.edges=r},getAssociatedObjects:function(t,e,n){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var l,d,filter,h,f,v,data,m,x,y,w,_,O,j,k,C,R,E,P,S,I,label,A,F,$,B;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(d in l=[],n)l.push("?s = <".concat(d,">"));return filter=l.join(" || "),"https://dydra.com/junjun7613/romanfactoid_v3/sparql",h="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:associatedObject ?ao . ?ao ex:hasLemma/ex:referencesLemma ?lemma; a ?type .\n        filter (".concat(filter,")\n        SERVICE <https://dydra.com/i2k/lemmabank/sparql> {\n          ?lemma rdfs:label ?label .\n        }\n      }"),f="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(h)),o.next=8,r.$axios.get(f);case 8:v=o.sent,data=v.data,m={},x=c(data);try{for(x.s();!(y=x.n()).done;)w=y.value,_=w.label,O=w.ao,j=w.s,m[j]||(m[j]={}),m[j][O]||(m[j][O]={type:w.type,lemma:w.lemma,labels:[]}),(k=m[j][O].labels).includes(_)||k.push(_)}catch(t){x.e(t)}finally{x.f()}for(R in C={"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference":{color:"pink",shape:"box"},"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference":{color:"gray",shape:"diamond"}},m)for(E in m[R]){P=m[R][E],S=P.type,(I=P.labels).sort(),label=I.join(" / "),t[label]||(t[label]={id:label,label:label,color:C[S].color,shape:C[S].shape,type:"lemma"}),A=n[R],F=c(A);try{for(F.s();!($=F.n()).done;)B=$.value,e["".concat(B,"-").concat(label)]={from:B,to:label,arrows:"to",color:"gray"}}catch(t){F.e(t)}finally{F.f()}}return o.abrupt("return",{nodesMap:t,edgesMap:e});case 16:case"end":return o.stop()}}),o)})))()},onNodeSelected:function(t){var e=t.nodes;if(e.length>0){var n=e[0],o=this.nodesMap[n];["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(o.type)&&(this.dialog=!0,this.selectedContexts=this.contexts[o.id])}this.onNodeDblClicked(t)},onNodeDblClicked:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c,l,d,h,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!((o=t.nodes).length>0)){n.next=15;break}if(r=o[0],c=e.nodesMap[r],!["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(c.type)){n.next=15;break}if(!(l=e.contexts[c.id])){n.next=15;break}d=0,h=Object.keys(l);case 8:if(!(d<h.length)){n.next=15;break}return f=h[d],n.next=12,e.init(f);case 12:d++,n.next=8;break;case 15:case"end":return n.stop()}}),n)})))()}}},f=n(71),v=n(73),m=n.n(v),x=n(223),y=n(476),w=n(471),_=n(540),O=n(541),j=n(646),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"500px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:t.nodes,edges:t.edges,options:t.options},on:{click:t.onNodeSelected}}),t._v(" "),n("div",{staticClass:"my-4"},[n("v-switch",{attrs:{label:"Lemma"},model:{value:t.isLemma,callback:function(e){t.isLemma=e},expression:"isLemma"}})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v(" Contexts ")]),t._v(" "),n("v-card-text",[n("ul",t._l(t.selectedContexts,(function(e,o){return n("li",{key:o,staticClass:"mt-4"},[n("a",{on:{click:function(e){t.selectedEntityIdOnText=o}}},[t._v("\n              "+t._s(e.descriptionOfEntityInContext2)+"\n            ")])])})),0)]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:x.a,VCard:y.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VDialog:_.a,VSpacer:O.a,VSwitch:j.a})},496:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2065bca8",content,!0,{sourceMap:!1})},497:function(t,e,n){var o=n(22)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},540:function(t,e,n){"use strict";var o=n(66),r=n(2),c=(n(32),n(74),n(80),n(41),n(51),n(85),n(7),n(5),n(9),n(13),n(8),n(17),n(496),n(625)),l=n(477),d=n(214),h=n(487),f=n(218),v=n(509),m=n(488),x=n(76),y=n(215),w=n(14),_=n(12),O=n(1);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(w.a)(l.a,d.a,h.a,f.a,v.a,m.a,x.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(_.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===O.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(O.h)(this.maxWidth),width:"auto"===this.width?void 0:Object(O.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},541:function(t,e,n){"use strict";n(311);var o=n(1);e.a=Object(o.i)("spacer","div","v-spacer")}}]);