(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{468:function(t,e,n){"use strict";n(7),n(5),n(9),n(15),n(8),n(16);var r=n(2),o=(n(31),n(208),n(470),n(207)),c=n(473),l=n(91),d=n(12);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},470:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("e23b7040",content,!0,{sourceMap:!1})},471:function(t,e,n){var r=n(21)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},492:function(t,e,n){"use strict";n(5),n(9),n(15),n(16);var r=n(2),o=(n(31),n(7),n(27),n(65),n(290),n(18),n(32),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(33),n(38),n(8),n(66),n(304),n(0)),c=n(89),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=_.get(l);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},493:function(t,e,n){"use strict";n(5),n(9),n(15),n(16);var r=n(2),o=(n(38),n(49),n(26),n(7),n(27),n(65),n(290),n(18),n(32),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(33),n(8),n(304),n(0)),c=n(89),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.E)(r)]=e(),n}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},x=y("align",(function(){return{type:String,default:null,validator:m}})),w=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=y("justify",(function(){return{type:String,default:null,validator:w}})),O=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},j=y("alignContent",(function(){return{type:String,default:null,validator:O}})),k={align:Object.keys(x),justify:Object.keys(_),alignContent:Object.keys(j)},S={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},x),{},{justify:{type:String,default:null,validator:w}},_),{},{alignContent:{type:String,default:null,validator:O}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=E.get(l);return f||function(){var t,e;for(e in f=[],k)k[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},531:function(t,e,n){var content=n(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("697f26b8",content,!0,{sourceMap:!1})},572:function(t,e,n){"use strict";n(531)},573:function(t,e,n){var r=n(21)(!1);r.push([t.i,"#mynetwork{border:1px solid #d3d3d3}",""]),t.exports=r},619:function(t,e,n){"use strict";n.r(e);n(34),n(18),n(25),n(40),n(32),n(5),n(41),n(47),n(33);var r=n(19),o=(n(70),n(38),n(49),n(27),n(65),n(26),n(50),n(466));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d="https://dydra.com/junjun7613/romanfactoid_v2/sparql",f="https://dydra.com/junjun7613/hutimeperiod/sparql";function v(t){var e=t.split("/");return e[e.length-1]}function h(t,e){var n,r=[],o=[],l={},d=["s","o"],f={},h={},m=c(t);try{for(m.s();!(n=m.n()).done;){var x,w=n.value,_=c(d);try{for(_.s();!(x=_.n()).done;){var O=x.value,j=w[O],label=v(j)+"\n"+w["descOf"+O.toUpperCase()];if(!l[j]){var k={id:j,label:label,shape:"box",color:"#F44336",in:[],out:[]};r.push(k),l[j]=k}}}catch(t){_.e(t)}finally{_.f()}var S=w.s,C=w.o;f[S]||(f[S]=[]),f[S].push(C),o.push({from:S,to:C,arrows:{to:{enabled:!0}}});var E=l[S].out;E.includes(C)||E.push(C);var P=l[C].in;P.includes(S)||P.push(S)}}catch(t){m.e(t)}finally{m.f()}var N,R=[],D=[],F=[],I=c(y([],f,e));try{for(I.s();!(N=I.n()).done;){var L=N.value,$=l[L];if($.y=50*R.length,R.push($),h[L]){var A,B=c(h[L]);try{for(B.s();!(A=B.n()).done;){var U=A.value,M=l[U];M.y=$.y,F.includes(U)||(D.push(M),F.push(U)),o.push({from:L,to:U,arrows:{to:{enabled:!0}}})}}catch(t){B.e(t)}finally{B.f()}}}}catch(t){I.e(t)}finally{I.f()}return{nodes:r=R.concat(D),edges:o,existsNodes:l}}function y(t,e,n){if(!e[n])return t;t.includes(n)||t.push(n);var r,o=e[n],l=c(o);try{for(l.s();!(r=l.n()).done;){var d=r.value;t.includes(d)||t.push(d)}}catch(t){l.e(t)}finally{l.f()}var f,v=c(o);try{for(v.s();!(f=v.n()).done;){t=y(t,e,f.value)}}catch(t){v.e(t)}finally{v.f()}return t}var m={components:{network:o.a},data:function(){return{baseUrl:"https://nakamura196.github.io/ogawa",loading:!1,nodes:[],edges:[],options:{nodes:{borderWidth:1},edges:{color:"lightgray",smooth:{forceDirection:"vertical"}},layout:{hierarchical:{direction:"UD",sortMethod:"directed",shakeTowards:"roots"}},physics:!1},title:this.$t("network"),nodeList:[],nodeStart:"",nodeEnd:"",nodeEntity:""}},head:function(){return{title:this.title}},watch:{nodeStart:function(){this.drawNetwork()},nodeEnd:function(){this.drawNetwork()},nodeEntity:function(){this.drawNetwork()}},mounted:function(){this.getFactList(),this.drawNetwork()},methods:{onNodeSelected:function(t){var e=t.nodes;if(e.length>0){var n=e[0];n.includes("fact_")&&this.$router.push(this.localePath({name:"item-id",params:{id:this.$utils.getIdFromUri(n).replace("fact_","")}}))}},drawNetwork:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,v,y,link,m,x,w,_,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.nodeEntity,r="\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      select * where {\n        ?p a ?type;\n          ex:eventSince ?since;\n          ex:eventUntil ?until .\n\n        "+(n?"filter (?p = <".concat(n,">) . "):"")+"\n        ?type rdfs:subClassOf ex:EntityInContext .\n      }",e.next=5,t.$axios.get("".concat(d,"?query=").concat(encodeURIComponent(r)));case 5:return o=e.sent.data,c="",l="",n&&1===o.length?(v=o[0],c=v.since,l=v.until):(c=t.nodeStart,l=t.nodeEnd),y=c||"http://www.example.com/roman-ontology/resource/fact/fact_2",m="\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix ex2: <http://www.example.com/roman-ontology/resource/fact/>\n      select distinct * where {\n         ?startNode ".concat(link="ex:mentionedAsPrecedent","* ?s; ex:description ?descOfStartNode .\n         filter (?startNode = <")+y+">)\n         ?s ex:description ?descOfS .\n         optional {\n          ?s ex:when ?when_s .\n          SERVICE SILENT <".concat(f,"> {\n            optional { ?when_s ex:begin ?when_s_begin; ex:end ?when_s_end. }\n          }\n         }\n         ?s ").concat(link," ?o .\n         ?o ex:description ?descOfO .\n         optional {\n           ?o ex:when ?when_o .\n           SERVICE SILENT <").concat(f,"> {\n            optional { ?when_o ex:begin ?when_o_begin; ex:end ?when_o_end. }\n           }\n         }\n         ?o ").concat(link,"* ?endNode; ex:description ?descOfEndNode .\n         filter (?endNode = <")+(l||"http://www.example.com/roman-ontology/resource/fact/fact_40")+">)\n      }",e.next=14,t.$axios.get("".concat(d,"?query=").concat(encodeURIComponent(m)));case 14:x=e.sent.data,w=h(x,y),_=w.nodes,O=w.edges,t.nodes=_,t.edges=O,t.loading=!1;case 21:case"end":return e.stop()}}),e)})))()},getFactList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,f,data,h,y,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      select distinct * where {\n         ?s (ex:mentionedAsPrecedent | ex:therefore) ?o\n      }",e.next=3,t.$axios.get("".concat(d,"?query=").concat(encodeURIComponent("\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      select distinct * where {\n         ?s (ex:mentionedAsPrecedent | ex:therefore) ?o\n      }")));case 3:n=e.sent.data,r=[{text:"",value:""}],o=[],l=c(n);try{for(l.s();!(f=l.n()).done;)for(data=f.value,h=0,y=["s","o"];h<y.length;h++)m=data[y[h]],o.includes(m)||(r.push({text:v(m),value:m}),o.push(m))}catch(t){l.e(t)}finally{l.f()}t.nodeList=r;case 9:case"end":return e.stop()}}),e)})))()}}},x=(n(572),n(96)),w=n(130),_=n.n(w),O=n(468),j=n(492),k=n(459),S=n(493),C=n(542),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("v-row",{staticClass:"mt-2",attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.nodeList,label:"始点",filled:"",rounded:"",dense:""},model:{value:t.nodeStart,callback:function(e){t.nodeStart=e},expression:"nodeStart"}})],1),t._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.nodeList,label:"終点",filled:"",rounded:"",dense:""},model:{value:t.nodeEnd,callback:function(e){t.nodeEnd=e},expression:"nodeEnd"}})],1)],1),t._v(" "),n("v-row",[n("v-col",[n("network",{ref:"network",staticStyle:{width:"100%",height:"650px"},attrs:{id:"mynetwork",nodes:t.nodes,edges:t.edges,options:t.options},on:{click:t.onNodeSelected}})],1),t._v(" "),n("v-col",[n("v-card",{staticClass:"pa-10",attrs:{flat:"",outlined:""}},[t._v(" テキスト ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:O.a,VCol:j.a,VContainer:k.a,VRow:S.a,VSelect:C.a})}}]);