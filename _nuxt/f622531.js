(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,9,11],{465:function(t,e,r){"use strict";r.r(e);r(18),r(40),r(32),r(5),r(41),r(47),r(33);var n=r(19),o=(r(70),r(34),r(26),r(38),r(25),r(49),r(467));function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d=function t(e,r){var n=[];if(e.length<r)return[];if(1===r)for(var i=0;i<e.length;i++)n[i]=[e[i]];else for(var o=0;o<e.length-r+1;o++)for(var l=t(e.slice(o+1),r-1),c=0;c<l.length;c++)n.push([e[o]].concat(l[c]));return n},h={components:{network:o.a},props:{item:{type:Object,require:!0,default:function(){}}},data:function(){return{nodes:[],nodesMap:{},edges:[],options:{nodes:{borderWidth:1},edges:{color:"lightgray"}},contexts:{},dialog:!1,selectedContexts:{}}},computed:{},mounted:function(){this.getRelations()},methods:{getRelations:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,data,h,f,v,m,y,_,w,x,j,O,k,C,E,R,P,F,I,S,N,$,A,U,L,M,T,B,D,V,z,W,H;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.item,"https://dydra.com/junjun7613/romanfactoid_v3/sparql",n="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      SELECT DISTINCT *\n      WHERE {\n        ?entityReference ex:referencesEntityInContext ?entityInContext; ex:referencesEntity/rdf:type ?typeOfEntity . \n        filter (?entityInContext = <".concat(r.s,">) .\n        ?factoid ?hasReference ?entityReference .\n        ?hasReference rdfs:subPropertyOf* ?propertyClass .\n        filter (?propertyClass = ex:sceneObjectProperty || ?propertyClass = ex:sceneProperty).\n        ?factoid ?hasReference2 ?entityReference2 .\n        filter (?entityReference != ?entityReference2)\n        ?hasReference2 rdfs:subPropertyOf* ?propertyClass .\n        ?entityReference2 ex:referencesEntity ?entity; rdf:type ?typeOfEntityReference .\n        OPTIONAL { \n          ?entityReference2 ex:referencesEntityInContext ?entityInContext2 . \n          ?entityInContext2 rdf:type ?typeOfEntityInContext; ex:sourceDescription ?descriptionOfEntityInContext2 }\n        ?entity ex:name ?name; rdf:type ?typeOfEntity2 . \n      }"),o="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(n)),e.next=6,t.$axios.get(o);case 6:c=e.sent,data=c.data,h={},(f={})[r.s]=r,v={},m={},y={},t.contexts=y,_=l(data);try{for(_.s();!(w=_.n()).done;)x=w.value,j=x.factoid,h[j]||(h[j]=[r.s]),O=h[j],k=x.entity,O.includes(k)||O.push(k),f[k]=x,x.entityInContext2&&(C=x.entityInContext2,y[k]||(y[k]={}),y[k][C]=x)}catch(t){_.e(t)}finally{_.f()}for(E in h){R=h[E],P=d(R,2),F=l(P);try{for(F.s();!(I=F.n()).done;){S=I.value,N=S[0]+"-"+S[1],v[N]||(v[N]={from:S[0],to:S[1],value:0}),v[N].value+=1,$=l(S);try{for($.s();!(A=$.n()).done;)U=A.value,L=null,M=null,T=null,B=f[U].typeOfEntityReference,D="",D=U===r.s?f[U].typeOfEntity:f[U].typeOfEntity2,["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference"].includes(B)?(L="yellow",M="diamond"):["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(D)?(L="red",M="square",T=D):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person"].includes(D)?T=D:["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"].includes(D)?(L="#98fb98",T=D):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"].includes(D)&&(L="orange",T=D),m[U]||(m[U]={id:U,label:f[U].name,color:L,shape:M,type:T})}catch(t){$.e(t)}finally{$.f()}}}catch(t){F.e(t)}finally{F.f()}}for(W in V=[],z=[],m)V.push(m[W]);for(H in v)z.push(v[H]);t.nodes=V,t.edges=z,t.nodesMap=m,t.relations=data;case 26:case"end":return e.stop()}}),e)})))()},onNodeSelected:function(t){var e=t.nodes;if(e.length>0){var r=e[0],n=this.nodesMap[r];["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(n.type)&&(this.dialog=!0,this.selectedContexts=this.contexts[n.id])}}}},f=r(96),v=r(130),m=r.n(v),y=r(217),_=r(466),w=r(464),x=r(486),j=r(487),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"650px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:t.nodes,edges:t.edges,options:t.options},on:{click:t.onNodeSelected}}),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v(" Contexts ")]),t._v(" "),r("v-card-text",[r("ul",t._l(t.selectedContexts,(function(e,n){return r("li",{key:n,staticClass:"mt-4"},[r("nuxt-link",{attrs:{to:t.localePath({name:"entity-id",params:{id:t.$utils.getIdFromUri(n)}})}},[t._v(t._s(e.descriptionOfEntityInContext2))])],1)})),0)]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Network:r(465).default}),m()(component,{VBtn:y.a,VCard:_.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VDialog:x.a,VSpacer:j.a})},481:function(t,e,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("7c06aa28",content,!0,{sourceMap:!1})},482:function(t,e,r){var n=r(21)(!1);n.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=n},484:function(t,e,r){var content=r(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("b1bed018",content,!0,{sourceMap:!1})},485:function(t,e,r){var n=r(21)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},488:function(t,e,r){"use strict";r.r(e);r(91);var n=r(29),o=r(51),l=r(44),c=r(30),d=r(17),h=(r(15),r(483));function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var v=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},m=function(t){Object(o.a)(r,t);var e=f(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(h.Vue);v([Object(h.Prop)({required:!0})],m.prototype,"items",void 0);var y=m=v([Object(h.Component)({components:{}})],m),_=r(96),w=r(130),x=r.n(w),j=r(506),O=r(459),k=r(194),C=r(62),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0 mx-0 px-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBreadcrumbs:j.a,VContainer:O.a,VIcon:k.a,VSheet:C.a})},493:function(t,e,r){"use strict";r.r(e);r(26);var n={props:{markers:{type:Array,require:!1,default:function(){return[]}},center:{type:Array,require:!1,default:function(){return[51.505,-.159]}},geojson:{type:Object,require:!1,default:function(){return null}}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:5}},computed:{options:function(){return{onEachFeature:this.onEachFeatureFunction}},onEachFeatureFunction:function(){return function(t,e){e.bindPopup('<div><a @click="search('.concat(t.properties.uri,')">').concat(t.properties.label,"</a></div>"))}}}},o=r(96),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("l-map",{staticStyle:{"z-index":"0",height:"600px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[r("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._v(" "),t.geojson&&Object.keys(t.geojson).length>0?r("l-geo-json",{attrs:{geojson:t.geojson,options:t.options}}):t._e(),t._v(" "),t._l(t.markers,(function(marker,e){return r("l-marker",{key:e,attrs:{"lat-lng":marker.latLng}},[r("l-popup",[r("a",[t._v(t._s(marker.label))])])],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports},494:function(t,e,r){"use strict";r(7),r(5),r(9),r(15),r(8),r(16);var n=r(2),o=(r(31),r(481),r(1)),l=r(42),c=r(12);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(c.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},498:function(t,e,r){"use strict";r.r(e);r(34),r(18),r(25),r(40),r(32),r(5),r(41),r(47),r(33);var n=r(19);r(70),r(26),r(76),r(38),r(212),r(49),r(27),r(65);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var c={components:{network:r(467).a},props:{id:{type:String,require:!0,default:""}},data:function(){return{isLemma:!0,sortMethod:"directed",hierarchical:!1,physicsEnabled:!0,orgNodes:[],orgEdges:[],nodes:[],edges:[],nodesMap:{}}},computed:{options:function(){var t=!1;return this.hierarchical&&(t={sortMethod:this.sortMethod}),{edges:{length:400},layout:{randomSeed:2,hierarchical:t},physics:{enabled:this.physicsEnabled}}}},watch:{isLemma:function(){this.drawNetwork()},id:function(){this.getRelatedFactoids()}},mounted:function(){this.getRelatedFactoids()},methods:{getRelatedFactoids:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,data,d,h,f,v,m,y,_,w,x,j,O,k,i,C,E,R,P,F,I,S,N,$,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,"https://dydra.com/junjun7613/romanfactoid_v3/sparql",n="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:description ?desc_s .\n        OPTIONAL {\n          ?s ?related_so ?s_o .\n          {\n            ?s_o ex:referencesEntityInContext ?entityInContext_s; ex:referencesEntity ?referencesEntity_s .\n          }\n          UNION\n          {\n            ?s_o ex:referencesEntity ?referencesEntity_s .\n          }\n          ?referencesEntity_s ex:name ?referencesEntityName_s; rdf:type ?referencesEntityType_s\n        }\n        OPTIONAL {\n          ?s ?p ?o .\n          ?o a/rdfs:subClassOf* ex:Factoid .\n          ?o ex:description ?desc_o .\n          OPTIONAL {\n            ?o ?related_oo ?o_o .\n            {\n              ?o_o ex:referencesEntityInContext ?entityInContext_o; ex:referencesEntity ?referencesEntity_o .\n            }\n            UNION\n            {\n              ?o_o ex:referencesEntity ?referencesEntity_o .\n            }\n            ?referencesEntity_o ex:name ?referencesEntityName_o; rdf:type ?referencesEntityType_o\n          }\n        }\n        filter (?s = <".concat(r,"> || ?o = <").concat(r,">)\n      }"),console.log(n),l="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(n)),e.next=7,t.$axios.get(l);case 7:c=e.sent,data=c.data,d={},h={},f=o(data),e.prev=12,f.s();case 14:if((v=f.n()).done){e.next=60;break}m=v.value,y=0,_=["s","o"];case 18:if(!(y<_.length)){e.next=57;break}if(w=_[y],x=m["referencesEntity_".concat(w)]){e.next=23;break}return e.abrupt("continue",54);case 23:for(j=m[w],O=m["desc_".concat(w)],k=[],20,i=0;i<O.length/20;i++)k.push(O.substr(20*i,20));if(d[j]||(d[j]={id:j,label:k.join("\n"),shape:"box",color:{background:"white"},type:"factoid"}),d[x]){e.next=50;break}C=null,E=null,R=m["referencesEntityType_".concat(w)],e.t0=R,e.next="https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"===e.t0?36:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"===e.t0?38:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObject"===e.t0?41:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObject"===e.t0?44:"https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"===e.t0?47:49;break;case 36:return C="#98fb98",e.abrupt("break",49);case 38:return C="red",E="square",e.abrupt("break",49);case 41:case 44:return C="yellow",E="diamond",e.abrupt("break",49);case 47:return C="orange",e.abrupt("break",49);case 49:d[x]={id:x,label:m["referencesEntityName_".concat(w)],color:C,shape:E,type:R};case 50:!(P=d[x]).context&&m["entityInContext_".concat(w)]&&(P.context=m["entityInContext_".concat(w)]),F="".concat(j,"-").concat(x),h[F]={from:j,to:x,arrows:"to",color:"gray"};case 54:y++,e.next=18;break;case 57:m.p&&!["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#mentionedAsFollow"].includes(m.p)&&(h["".concat(m.s,"-").concat(m.o)]={from:m.s,to:m.o,label:t.$utils.getIdFromUri(m.p,"#"),arrows:"to",color:"gray"});case 58:e.next=14;break;case 60:e.next=65;break;case 62:e.prev=62,e.t1=e.catch(12),f.e(e.t1);case 65:return e.prev=65,f.f(),e.finish(65);case 68:return e.next=70,t.getAssociatedObjects(d,h);case 70:for(N in I=e.sent,d=I.nodesMap,h=I.edgesMap,S=[],d)S.push(d[N]);for(A in $=[],h)$.push(h[A]);t.orgEdges=$,t.orgNodes=S,t.nodesMap=d,t.drawNetwork();case 81:case"end":return e.stop()}}),e,null,[[12,62,65,68]])})))()},drawNetwork:function(){var t,e=this.orgEdges,r=this.orgNodes,n=[],l=[],c=[],d=this.isLemma,h=o(r);try{for(h.s();!(t=h.n()).done;){var f=t.value;(d||"lemma"!==f.type)&&(n.push(f),c.push(f.id))}}catch(t){h.e(t)}finally{h.f()}var v,m=o(e);try{for(m.s();!(v=m.n()).done;){var y=v.value,_=y.from,w=y.to;c.includes(_)&&c.includes(w)&&l.push(y)}}catch(t){m.e(t)}finally{m.f()}this.nodes=n,this.edges=l},getAssociatedObjects:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var l,c,filter,d,h,f,data,v,m,y,_,w,x,j,O,k,C,label;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(c in l=[],t)"factoid"===t[c].type&&l.push("?s = <".concat(c,">"));return filter=l.join(" || "),"https://dydra.com/junjun7613/romanfactoid_v3/sparql",d="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:associatedObject ?ao . ?ao ex:hasLemma/ex:referencesLemma ?lemma .\n        filter (".concat(filter,")\n        SERVICE SILENT <https://dydra.com/i2k/lemmabank/sparql> {\n          ?lemma rdfs:label ?label .\n        }\n      }"),h="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(d)),n.next=8,r.$axios.get(h);case 8:f=n.sent,data=f.data,v={},m=o(data);try{for(m.s();!(y=m.n()).done;)_=y.value,w=_.label,x=_.ao,j=_.s,v[j]||(v[j]={}),v[j][x]||(v[j][x]=[]),v[j][x].includes(w)||v[j][x].push(w)}catch(t){m.e(t)}finally{m.f()}for(O in v)for(k in v[O])(C=v[O][k]).sort(),label=C.join(" / "),t[label]||(t[label]={id:label,label:label,color:"pink",shape:"box",type:"lemma"}),e["".concat(O,"-").concat(label)]={from:O,to:label,arrows:"to",color:"gray"};return n.abrupt("return",{nodesMap:t,edgesMap:e});case 15:case"end":return n.stop()}}),n)})))()},onNodeSelected:function(t){var e=t.nodes;if(e.length>0){var r=e[0],n=this.nodesMap[r];if("factoid"===n.type)this.$router.push(this.localePath({name:"item-id",params:{id:this.$utils.getIdFromUri(n.id).replace("fact_","")}}));else{if(!n.context)return void alert("contextがありません。");this.$router.push(this.localePath({name:"entity-id",params:{id:this.$utils.getIdFromUri(n.context)}}))}}}}},d=r(96),h=r(130),f=r.n(h),v=r(217),m=r(634),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"500px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:t.nodes,edges:t.edges,options:t.options},on:{click:t.onNodeSelected}}),t._v(" "),r("div",{staticClass:"my-4"},[r("v-switch",{attrs:{label:"Lemma"},model:{value:t.isLemma,callback:function(e){t.isLemma=e},expression:"isLemma"}})],1),t._v(" "),r("div",{staticClass:"mt-4"},[r("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(e){t.hierarchical=!1}}},[t._v("hierarchicalを使用しない")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(e){t.hierarchical=!0}}},[t._v("hierarchicalを使用する")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(e){t.sortMethod="directed"}}},[t._v("directed")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(e){t.sortMethod="hubsize"}}},[t._v("hubsize")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(e){t.physicsEnabled=!0}}},[t._v("physicsを使用する")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(e){t.physicsEnabled=!1}}},[t._v("physicsを使用しない")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{Network:r(465).default}),f()(component,{VBtn:v.a,VSwitch:m.a})},506:function(t,e,r){"use strict";r(7),r(5),r(9),r(15),r(8),r(16);var n=r(2),o=(r(76),r(484),r(90)),l=r(12);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),f=r(1),v=Object(f.i)("v-breadcrumbs__divider","li"),m=r(42);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(l.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(h,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},626:function(t,e,r){"use strict";r.r(e);r(34),r(18),r(25),r(40),r(32),r(5),r(41),r(47),r(33);var n=r(19),o=(r(70),r(26),r(76),r(27),r(65),r(123)),l=r.n(o),c=r(488),d=r(498);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v={components:{Breadcrumbs:c.default,FactoidNetwork:d.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d,i,h,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$axios,e.next=3,r.id;case 3:return o=e.sent,l="\n      prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>\n      prefix owl: <http://www.w3.org/2002/07/owl#>\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      select distinct * where {\n          ?s ex:description ?description .\n          filter (?s = <".concat("http://www.example.com/roman-ontology/resource/Factoid/"+o,"> ) .\n\n          optional {\n            { ?s ex:atWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n            UNION\n            { ?s ex:fromWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n            UNION\n            { ?s ex:toWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n            UNION\n            { ?s ex:nearWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n          }\n      }"),e.next=8,n.get("".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(l)));case 8:for(c=e.sent.data,d={},i=0;i<c.length;i++){if(h=c[i],0===i){for(f in h)d[f]=h[f];d.placeUri=[]}d.placeUri.push(h.placeUri)}return e.abrupt("return",{id:o,item:d});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{xml:"",geo:{},markers:[],center:[51.505,-.159],geojson:null}},computed:{bh:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("search"),disabled:!1,to:this.localePath({name:"search"}),exact:!0},{text:this.getTitle(this.id)}]}},mounted:function(){this.getPlaceInfo()},methods:{getCTS:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.item.ctsURI,e.prev=1,e.next=4,l.a.get(r);case 4:n=e.sent,data=n.data,t.xml=data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log({e:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},getPlaceInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d,f,v,m,data,y,_,w,x,j,O,marker,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.item,n=[],o=h(r.placeUri);try{for(o.s();!(l=o.n()).done;)c=l.value,n.push("?placeUri = <".concat(c,">"))}catch(t){o.e(t)}finally{o.f()}return d=n.join(" || "),"https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql",f="PREFIX geo: <http://www.opengis.net/ont/geosparql#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>\n\n      PREFIX pleiades: <https://pleiades.stoa.org/places/vocab#>\n      PREFIX osspatial: <http://data.ordnancesurvey.co.uk/ontology/spatialrelations/>\n      PREFIX osgeo: <http://data.ordnancesurvey.co.uk/ontology/geometry/>\n\n      SELECT * WHERE {\n        ?placeUri dct:title ?title .\n        optional {\n          { ?placeUri wgs84:lat ?lat; wgs84:long ?long . }\n          UNION\n          { ?placeUri pleiades:hasLocation/osspatial:partiallyOverlaps/geo:hasGeometry/osgeo:asGeoJSON ?geo }\n        }\n        filter(".concat(d,")\n      }"),v="".concat("https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql","?query=").concat(encodeURIComponent(f)),e.next=10,t.$axios.get(v);case 10:if(m=e.sent,(data=m.data).length>0){y=[],_=[],w=[],x=h(data);try{for(x.s();!(j=x.n()).done;)(O=j.value).lat?(marker={latLng:[O.lat,O.long],label:O.title},_.push(marker),w=[O.lat,O.long]):y.push({type:"Feature",geometry:JSON.parse(O.geo),properties:{label:O.title,uri:O.placeUri}})}catch(t){x.e(t)}finally{x.f()}y.length>0&&(k={type:"FeatureCollection",features:y},t.geojson=k),_.length>0&&(t.markers=_,t.center=w)}case 13:case"end":return e.stop()}}),e)})))()},getTitle:function(t){return t.replace("f_","Fact ")}}},m=v,y=r(96),_=r(130),w=r.n(_),x=r(459),j=r(494),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),r("v-container",{staticClass:"my-5"},[r("h2",[t._v(t._s(t.item.description)+" ("+t._s(t.getTitle(t.id))+")")]),t._v(" "),t.xml?[r("h3",{staticClass:"mt-5"},[t._v("このFactoidの典拠")]),t._v(" "),r("span",{domProps:{innerHTML:t._s(t.xml)}})]:t._e(),t._v(" "),r("hr",{staticClass:"my-10"}),t._v(" "),t.markers.length>0||t.geojson?r("Map",{attrs:{markers:t.markers,center:t.center,geojson:t.geojson}}):t._e(),t._v(" "),r("FactoidNetwork",{attrs:{id:t.item.s}}),t._v(" "),r("hr",{staticClass:"mt-10"}),t._v(" "),r("h1",{staticClass:"mt-10"},[t._v("以下はメモ")]),t._v("\n\n    "+t._s(t.item)+"\n\n    "),t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{Map:r(493).default,FactoidNetwork:r(498).default}),w()(component,{VContainer:x.a,VSimpleTable:j.a})}}]);