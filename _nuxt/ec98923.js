(window.webpackJsonp=window.webpackJsonp||[]).push([[21,9,12,13,14,16,17],{474:function(e,t,n){var content=n(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("b1bed018",content,!0,{sourceMap:!1})},475:function(e,t,n){var r=n(22)(!1);r.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=r},481:function(e,t,n){"use strict";n.r(t);n(35),n(18),n(26),n(43),n(33),n(5),n(44),n(49),n(34);var r=n(19);n(73),n(27),n(79),n(41),n(211),n(51);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={components:{network:n(472).a},props:{id:{type:String,require:!0,default:""}},data:function(){return{isLemma:!1,sortMethod:"hubsize",hierarchical:!0,physicsEnabled:!0,orgNodes:[],orgEdges:[],nodes:[],edges:[],nodesMap:{},isOption:!1}},computed:{options:function(){var e=!1;return this.hierarchical&&(e={sortMethod:this.sortMethod}),{edges:{length:400},layout:{randomSeed:2,hierarchical:e},physics:{enabled:this.physicsEnabled}}},selectedFactoidIdOnText:{get:function(){return this.$store.getters.getSelectedFactoidIdOnText},set:function(e){this.$store.commit("setSelectedFactoidIdOnText",e)}},selectedEntityIdOnText:{get:function(){return this.$store.getters.getSelectedEntityIdOnText},set:function(e){this.$store.commit("setSelectedEntityIdOnText",e)}}},watch:{isLemma:function(){this.drawNetwork()},id:function(){this.getRelatedFactoids()}},mounted:function(){this.getRelatedFactoids()},methods:{getRelatedFactoids:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,data,d,f,m,h,y,v,x,_,w,j,O,E,i,R,k,F,I,C,P,S,$,N,U,T;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.orgNodes=[],e.orgEdges=[],e.nodes=[],e.edge=[],e.nodesMap={},n=e.id,"https://dydra.com/junjun7613/romanfactoid_v3/sparql",r="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:description ?desc_s .\n        OPTIONAL {\n          ?s ?related_so ?s_o .\n          {\n            ?s_o ex:referencesEntityInContext ?entityInContext_s; ex:referencesEntity ?referencesEntity_s .\n          }\n          UNION\n          {\n            ?s_o ex:referencesEntity ?referencesEntity_s .\n          }\n          ?referencesEntity_s ex:name ?referencesEntityName_s; rdf:type ?referencesEntityType_s\n        }\n        OPTIONAL {\n          ?s ?p ?o .\n          ?o a/rdfs:subClassOf* ex:Factoid .\n          ?o ex:description ?desc_o .\n          OPTIONAL {\n            ?o ?related_oo ?o_o .\n            {\n              ?o_o ex:referencesEntityInContext ?entityInContext_o; ex:referencesEntity ?referencesEntity_o .\n            }\n            UNION\n            {\n              ?o_o ex:referencesEntity ?referencesEntity_o .\n            }\n            ?referencesEntity_o ex:name ?referencesEntityName_o; rdf:type ?referencesEntityType_o\n          }\n        }\n        filter (?s = <".concat(n,"> || ?o = <").concat(n,">)\n      }"),c="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(r)),t.next=11,e.$axios.get(c);case 11:l=t.sent,data=l.data,d={},f={},m=o(data),t.prev=16,m.s();case 18:if((h=m.n()).done){t.next=66;break}y=h.value,v=0,x=["s","o"];case 22:if(!(v<x.length)){t.next=63;break}if(_=x[v],w=y["referencesEntity_".concat(_)]){t.next=27;break}return t.abrupt("continue",60);case 27:for(j=y[_],O=y["desc_".concat(_)],E=[],20,i=0;i<O.length/20;i++)E.push(O.substr(20*i,20));if(d[j]||(d[j]={id:j,label:E.join("\n"),shape:"box",color:{background:"white",border:"white"},type:"factoid",shadow:!0}),d[w]){t.next=56;break}R=null,k="dot",F=y["referencesEntityType_".concat(_)],t.t0=F,t.next="https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"===t.t0?40:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"===t.t0?43:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObject"===t.t0?46:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObject"===t.t0?49:"https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"===t.t0?52:55;break;case 40:return R="#98fb98",k="dot",t.abrupt("break",55);case 43:return R="red",k="dot",t.abrupt("break",55);case 46:case 49:return R="yellow",k="dot",t.abrupt("break",55);case 52:return R="orange",k="dot",t.abrupt("break",55);case 55:d[w]={id:w,label:y["referencesEntityName_".concat(_)],color:R,shape:k,type:F,shadow:!0,size:15};case 56:!(I=d[w]).context&&y["entityInContext_".concat(_)]&&(I.context=y["entityInContext_".concat(_)]),C="".concat(j,"-").concat(w),f[C]={from:j,to:w,arrows:"to",color:"gray"};case 60:v++,t.next=22;break;case 63:y.p&&!["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#mentionedAsFollow"].includes(y.p)&&(P=e.$utils.getIdFromUri(y.p,"#"),f["".concat(y.s,"-").concat(y.o)]={from:y.s,to:y.o,label:P,arrows:"to",color:"gray"});case 64:t.next=18;break;case 66:t.next=71;break;case 68:t.prev=68,t.t1=t.catch(16),m.e(t.t1);case 71:return t.prev=71,m.f(),t.finish(71);case 74:return t.next=76,e.getAssociatedObjects(d,f);case 76:for(N in S=t.sent,d=S.nodesMap,f=S.edgesMap,$=[],d)$.push(d[N]);for(T in U=[],f)U.push(f[T]);e.orgEdges=U,e.orgNodes=$,e.nodesMap=d,e.drawNetwork();case 87:case"end":return t.stop()}}),t,null,[[16,68,71,74]])})))()},drawNetwork:function(){var e,t=this.orgEdges,n=this.orgNodes,r=[],c=[],l=[],d=this.isLemma,f=o(n);try{for(f.s();!(e=f.n()).done;){var m=e.value;(d||"lemma"!==m.type)&&(r.push(m),l.push(m.id))}}catch(e){f.e(e)}finally{f.f()}var h,y=o(t);try{for(y.s();!(h=y.n()).done;){var v=h.value,x=v.from,_=v.to;l.includes(x)&&l.includes(_)&&c.push(v)}}catch(e){y.e(e)}finally{y.f()}this.nodes=r,this.edges=c},getAssociatedObjects:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c,l,filter,d,f,m,data,h,y,v,x,_,w,j,O,E,R,k,F,I,C,label;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(l in c=[],e)"factoid"===e[l].type&&c.push("?s = <".concat(l,">"));return filter=c.join(" || "),"https://dydra.com/junjun7613/romanfactoid_v3/sparql",d="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:associatedObject ?ao . ?ao ex:hasLemma/ex:referencesLemma ?lemma; a ?type .\n        filter (".concat(filter,")\n        SERVICE <https://dydra.com/i2k/lemmabank/sparql> {\n          ?lemma rdfs:label ?label .\n        }\n      }"),f="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(d)),r.next=8,n.$axios.get(f);case 8:m=r.sent,data=m.data,h={},y=o(data);try{for(y.s();!(v=y.n()).done;)x=v.value,_=x.label,w=x.ao,j=x.s,h[j]||(h[j]={}),h[j][w]||(h[j][w]={type:x.type,labels:[]}),(O=h[j][w].labels).includes(_)||O.push(_)}catch(e){y.e(e)}finally{y.f()}for(R in E={"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference":{color:"pink"},"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference":{color:"gray"}},h)for(k in h[R])F=h[R][k],I=F.type,(C=F.labels).sort(),label=C.join(" / "),e[label]||(e[label]={id:label,label:label,color:E[I].color,shape:"dot",type:"lemma",shadow:!0,size:10}),t["".concat(R,"-").concat(label)]={from:R,to:label,arrows:"to",color:"gray"};return r.abrupt("return",{nodesMap:e,edgesMap:t});case 16:case"end":return r.stop()}}),r)})))()},onNodeSelected:function(e){var t=e.nodes;if(t.length>0){var n=t[0],r=this.nodesMap[n];if("factoid"===r.type)this.selectedFactoidIdOnText=this.$utils.getIdFromUri(r.id);else{if(!r.context)return void alert("contextがありません。");this.selectedEntityIdOnText=this.$utils.getIdFromUri(r.context)}}}}},d=n(71),f=n(72),m=n.n(f),h=n(223),y=n(646),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-5"},[n("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"500px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:e.nodes,edges:e.edges,options:e.options},on:{click:e.onNodeSelected}}),e._v(" "),n("div",{staticClass:"text-right"},[n("v-switch",{attrs:{label:"Option"},model:{value:e.isOption,callback:function(t){e.isOption=t},expression:"isOption"}})],1),e._v(" "),e.isOption?[n("div",{staticClass:"my-4"},[n("v-switch",{attrs:{label:"Lemma"},model:{value:e.isLemma,callback:function(t){e.isLemma=t},expression:"isLemma"}})],1),e._v(" "),e._e()]:e._e()],2)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VSwitch:y.a})},483:function(e,t,n){"use strict";n.r(t);var r=n(19),o=(n(73),n(74),n(79),n(115)),c=n.n(o),l={props:{id:{type:String,require:!0,default:""}},data:function(){return{baseUrl:"https://nakamura196.github.io/ogawa",text:""}},computed:{},watch:{},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,f,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$utils.getIdFromUri(e.id),t.next=3,c.a.get(e.baseUrl+"/xml/BG_1_TEI.xml");case 3:for(m in r=t.sent,o=new window.DOMParser,l=o.parseFromString(r.data,"text/xml"),d=e.$utils.getWordListByFactoid(l,n),f=[],d)h=l.querySelector("w[*|id='".concat(m,"']")).textContent.trim(),f.push(h);e.text=f.join(" ");case 10:case"end":return t.stop()}}),t)})))()},methods:{}},d=n(71),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  "+e._s(e.text)+"\n")])}),[],!1,null,null,null);t.default=component.exports},485:function(e,t,n){"use strict";n.r(t);n(84);var r=n(28),o=n(46),c=n(37),l=n(29),d=n(10),f=(n(13),n(167));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},y=function(e){Object(o.a)(n,e);var t=m(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return n}(f.Vue);h([Object(f.Prop)({required:!0})],y.prototype,"items",void 0);var v=y=h([Object(f.Component)({components:{}})],y),x=n(71),_=n(72),w=n.n(_),j=n(507),O=n(466),E=n(198),R=n(63),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-2",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0 mx-0 px-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[n("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VBreadcrumbs:j.a,VContainer:O.a,VIcon:E.a,VSheet:R.a})},494:function(e,t,n){"use strict";n.r(t);n(27);var r={props:{markers:{type:Array,require:!1,default:function(){return[]}},center:{type:Array,require:!1,default:function(){return[51.505,-.159]}},geojson:{type:Object,require:!1,default:function(){return null}}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:5}},computed:{options:function(){return{onEachFeature:this.onEachFeatureFunction}},onEachFeatureFunction:function(){return function(e,t){t.bindPopup('<div><a @click="search('.concat(e.properties.uri,')">').concat(e.properties.label,"</a></div>"))}}}},o=n(71),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("l-map",{staticStyle:{"z-index":"0",height:"600px",width:"100%"},attrs:{zoom:e.zoom,center:e.center}},[n("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),e._v(" "),e.geojson&&Object.keys(e.geojson).length>0?n("l-geo-json",{attrs:{geojson:e.geojson,options:e.options}}):e._e(),e._v(" "),e._l(e.markers,(function(marker,t){return n("l-marker",{key:t,attrs:{"lat-lng":marker.latLng}},[n("l-popup",[n("a",[e._v(e._s(marker.label))])])],1)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports},495:function(e,t,n){"use strict";n.r(t);n(84);var r=n(28),o=n(46),c=n(37),l=n(29),d=n(10),f=(n(13),n(167));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},y=function(e){Object(o.a)(n,e);var t=m(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return n}(f.Vue);h([Object(f.Prop)({required:!0})],y.prototype,"items",void 0);var v=y=h([Object(f.Component)({components:{}})],y),x=n(71),_=n(72),w=n.n(_),j=n(507),O=n(466),E=n(198),R=n(63),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-2",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0 mx-0 px-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[n("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VBreadcrumbs:j.a,VContainer:O.a,VIcon:E.a,VSheet:R.a})},504:function(e,t,n){"use strict";n.r(t);n(35),n(18),n(26),n(43),n(33),n(5),n(44),n(49),n(34);var r=n(19),o=(n(27),n(79),n(73),n(115)),c=n.n(o),l=n(481),d=n(483);function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var h={components:{FactoidNetwork:l.default,TeiText:d.default},props:{id:{type:String,require:!0,default:""}},data:function(){return{xml:"",geo:{},markers:[],center:[51.505,-.159],geojson:null,item:{},isMapDisplayed:!1}},computed:{},watch:{id:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.geo={},e.markers=[],t.next=4,e.getItem();case 4:e.getPlaceInfo();case 5:case"end":return t.stop()}}),t)})))()},getItem:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,i,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://dydra.com/junjun7613/romanfactoid_v3/sparql",n=e.id,r="\n        prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>\n        prefix owl: <http://www.w3.org/2002/07/owl#>\n        prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n        select distinct * where {\n            ?s ex:description ?description .\n            filter (?s = <".concat("http://www.example.com/roman-ontology/resource/Factoid/"+n,"> ) .\n\n            optional {\n              { ?s ex:atWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n              UNION\n              { ?s ex:fromWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n              UNION\n              { ?s ex:toWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n              UNION\n              { ?s ex:nearWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n            }\n        }"),t.next=6,c.a.get("".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(r)));case 6:for(o=t.sent.data,l={},i=0;i<o.length;i++){if(d=o[i],0===i){for(f in d)l[f]=d[f];l.placeUri=[]}l.placeUri.push(d.placeUri)}e.item=l;case 10:case"end":return t.stop()}}),t)})))()},getPlaceInfo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,m,h,y,data,v,x,_,w,j,O,marker,E;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.item,r=[],o=f(n.placeUri);try{for(o.s();!(c=o.n()).done;)l=c.value,r.push("?placeUri = <".concat(l,">"))}catch(e){o.e(e)}finally{o.f()}return d=r.join(" || "),"https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql",m="PREFIX geo: <http://www.opengis.net/ont/geosparql#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>\n\n      PREFIX pleiades: <https://pleiades.stoa.org/places/vocab#>\n      PREFIX osspatial: <http://data.ordnancesurvey.co.uk/ontology/spatialrelations/>\n      PREFIX osgeo: <http://data.ordnancesurvey.co.uk/ontology/geometry/>\n\n      SELECT * WHERE {\n        ?placeUri dct:title ?title .\n        optional {\n          { ?placeUri wgs84:lat ?lat; wgs84:long ?long . }\n          UNION\n          { ?placeUri pleiades:hasLocation/osspatial:partiallyOverlaps/geo:hasGeometry/osgeo:asGeoJSON ?geo }\n        }\n        filter(".concat(d,")\n      }"),h="".concat("https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql","?query=").concat(encodeURIComponent(m)),t.next=10,e.$axios.get(h);case 10:if(y=t.sent,(data=y.data).length>0){v=[],x=[],_=[],w=f(data);try{for(w.s();!(j=w.n()).done;)(O=j.value).lat?(marker={latLng:[O.lat,O.long],label:O.title},x.push(marker),_=[O.lat,O.long]):v.push({type:"Feature",geometry:JSON.parse(O.geo),properties:{label:O.title,uri:O.placeUri}})}catch(e){w.e(e)}finally{w.f()}v.length>0&&(E={type:"FeatureCollection",features:v},e.geojson=E),x.length>0&&(e.markers=x,e.center=_)}case 13:case"end":return t.stop()}}),t)})))()}}},y=n(71),v=n(72),x=n.n(v),_=n(646),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"mb-5"},[e._v("\n    "+e._s(e.item.description)+" ("+e._s(e.$utils.createFactoidTitleFromId(e.id))+")\n  ")]),e._v(" "),e.xml?[n("h3",{staticClass:"mt-5"},[e._v("このFactoidの典拠")]),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.xml)}})]:e._e(),e._v(" "),e.markers.length>0||e.geojson?[n("v-switch",{attrs:{label:"Display Map"},model:{value:e.isMapDisplayed,callback:function(t){e.isMapDisplayed=t},expression:"isMapDisplayed"}}),e._v(" "),e.isMapDisplayed?n("Map",{attrs:{markers:e.markers,center:e.center,geojson:e.geojson}}):e._e()]:e._e(),e._v(" "),n("FactoidNetwork",{attrs:{id:e.item.s}}),e._v(" "),e._e()],2)}),[],!1,null,null,null);t.default=component.exports;x()(component,{Map:n(494).default,FactoidNetwork:n(481).default,TeiText:n(483).default}),x()(component,{VSwitch:_.a})},507:function(e,t,n){"use strict";n(7),n(5),n(9),n(13),n(8),n(17);var r=n(2),o=(n(79),n(474),n(95)),c=n(14);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=n(1),h=Object(m.i)("v-breadcrumbs__divider","li"),y=n(45);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(c.a)(y.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(f,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},642:function(e,t,n){"use strict";n.r(t);var r=n(495),o=n(504),c={components:{Breadcrumbs:r.default,FactoidBlock:o.default},data:function(){return{id:this.$route.params.id}},computed:{bh:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("search"),disabled:!1,to:this.localePath({name:"search"}),exact:!0},{text:this.$utils.createFactoidTitleFromId(this.id)}]}},mounted:function(){},methods:{}},l=n(71),d=n(72),f=n.n(d),m=n(466),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Breadcrumbs",{attrs:{items:e.bh}}),e._v(" "),n("v-container",{staticClass:"my-5"},[n("FactoidBlock",{attrs:{id:e.id}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{Breadcrumbs:n(485).default,FactoidBlock:n(504).default}),f()(component,{VContainer:m.a})}}]);