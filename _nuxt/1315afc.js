(window.webpackJsonp=window.webpackJsonp||[]).push([[14,12],{483:function(t,e,n){"use strict";n.r(e);n(90);var r=n(29),o=n(51),c=n(44),l=n(30),f=n(17),d=(n(15),n(472));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue);m([Object(d.Prop)({required:!0})],y.prototype,"items",void 0);var v=y=m([Object(d.Component)({components:{}})],y),x=n(96),w=n(130),_=n.n(w),j=n(523),R=n(459),O=n(194),C=n(62),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-2",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0 mx-0 px-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBreadcrumbs:j.a,VContainer:R.a,VIcon:O.a,VSheet:C.a})},499:function(t,e,n){"use strict";n.r(e);n(18),n(40),n(32),n(5),n(41),n(47),n(33);var r=n(19),o=(n(70),n(34),n(26),n(206),n(75),n(38),n(25),n(49),n(7),n(466));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f=function t(e,n){var r=[];if(e.length<n)return[];if(1===n)for(var i=0;i<e.length;i++)r[i]=[e[i]];else for(var o=0;o<e.length-n+1;o++)for(var c=t(e.slice(o+1),n-1),l=0;l<c.length;l++)r.push([e[o]].concat(c[l]));return r},d={components:{network:o.a},props:{id:{type:String,require:!0,default:""}},data:function(){return{nodes:[],nodesMap:{},edgesMap:{},contexts:{},edges:[],options:{nodes:{borderWidth:1},edges:{color:"lightgray"}},dialog:!1,selectedContexts:{},item:{},endpoint:"https://dydra.com/junjun7613/romanfactoid_v3/sparql",timeoutId:null}},computed:{},watch:{id:function(){this.init(this.id)}},mounted:function(){this.init(this.id)},methods:{init:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,data,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="\n      prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>\n      prefix owl: <http://www.w3.org/2002/07/owl#>\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      select distinct * where {\n          ?s ex:eventSince ?eventSince; ex:eventUntil ?eventUntil;\n            ex:contextualAspectOf ?entity .\n          filter (?s = <".concat(t,"> ) .\n          ?entity ex:name ?name; rdf:type ?typeOfEntity .\n          ?eventSince ex:description ?eventSinceDescription .\n          ?eventUntil ex:description ?eventUntilDescription .\n          optional { ?s ex:hasLocation/ex:sourceDescritpion ?locationDescription . }\n      }"),n.next=4,e.$axios.get("".concat(e.endpoint,"?query=").concat(encodeURIComponent(r)));case 4:o=n.sent,data=o.data,c=data[0],e.item=c,e.getRelations(t);case 9:case"end":return n.stop()}}),n)})))()},getRelations:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,filter,o,l,d,data,h,m,y,v,x,w,_,j,R,O,C,k,F,I,E,P,S,U,A,B,D,M,V,$,L,N,T,X,z,G,J,H;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.item,filter="?entityInContext = <".concat(t,">"),o="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      SELECT DISTINCT *\n      WHERE {\n        ?entityInContext ex:contextualAspectOf ?entity0 .\n        ?entityReference ex:referencesEntityInContext ?entityInContext; ex:referencesEntity/rdf:type ?typeOfEntity .\n        filter (".concat(filter,") .\n        ?factoid ?hasReference ?entityReference .\n        ?hasReference rdfs:subPropertyOf* ?propertyClass .\n        filter (?propertyClass = ex:sceneObjectProperty || ?propertyClass = ex:sceneProperty).\n        ?factoid ?hasReference2 ?entityReference2 .\n        filter (?entityReference != ?entityReference2)\n        ?hasReference2 rdfs:subPropertyOf* ?propertyClass .\n        ?entityReference2 ex:referencesEntity ?entity; rdf:type ?typeOfEntityReference .\n        OPTIONAL {\n          ?entityReference2 ex:referencesEntityInContext ?entityInContext2 .\n          ?entityInContext2 rdf:type ?typeOfEntityInContext; ex:sourceDescription ?descriptionOfEntityInContext2 }\n        ?entity ex:name ?name; rdf:type ?typeOfEntity2 .\n      }"),l="".concat(e.endpoint,"?query=").concat(encodeURIComponent(o)),n.next=6,e.$axios.get(l);case 6:d=n.sent,data=d.data,h={},m={},t=data[0].entity0,m[t]=r,y=e.edgesMap,v=e.nodesMap,x=e.contexts,e.contexts=x,w=c(data);try{for(w.s();!(_=w.n()).done;)j=_.value,R=j.factoid,h[R]||(h[R]=[t]),O=h[R],C=j.entity,O.includes(C)||O.push(C),m[C]=j,j.entityInContext2&&(k=j.entityInContext2,x[C]||(x[C]={}),x[C][k]=j)}catch(t){w.e(t)}finally{w.f()}for(F in h){I=h[F],E=f(I,2),P=c(E);try{for(P.s();!(S=P.n()).done;){U=S.value,(A=[U[0],U[1]]).sort(),B=A.join("-"),y[B]||(y[B]={from:U[0],to:U[1],value:0}),y[B].value+=1,D=c(U);try{for(D.s();!(M=D.n()).done;)V=M.value,$=null,L=null,N=null,T=m[V].typeOfEntityReference,X="",X=V===t?m[V].typeOfEntity:m[V].typeOfEntity2,["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference"].includes(T)?($="yellow",L="diamond"):["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(X)?($="red",L="square",N=X):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person"].includes(X)?N=X:["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"].includes(X)?($="#98fb98",N=X):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"].includes(X)&&($="orange",N=X),v[V]||(v[V]={id:V,label:m[V].name,color:$,shape:L,type:N})}catch(t){D.e(t)}finally{D.f()}}}catch(t){P.e(t)}finally{P.f()}}for(J in z=[],G=[],v)z.push(v[J]);for(H in y)G.push(y[H]);e.nodes=z,e.edges=G,e.nodesMap=v,e.edgesMap=y,e.relations=data;case 28:case"end":return n.stop()}}),n)})))()},onNodeSelected:function(t){var e=t.nodes;if(e.length>0){var n=e[0],r=this.nodesMap[n];["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(r.type)&&(this.dialog=!0,this.selectedContexts=this.contexts[r.id])}this.onNodeDblClicked(t)},onNodeDblClicked:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,f,d,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!((r=t.nodes).length>0)){n.next=15;break}if(o=r[0],c=e.nodesMap[o],!["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(c.type)){n.next=15;break}if(!(l=e.contexts[c.id])){n.next=15;break}f=0,d=Object.keys(l);case 8:if(!(f<d.length)){n.next=15;break}return h=d[f],n.next=12,e.init(h);case 12:f++,n.next=8;break;case 15:case"end":return n.stop()}}),n)})))()}}},h=n(96),m=n(130),y=n.n(m),v=n(217),x=n(468),w=n(465),_=n(540),j=n(541),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"500px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:t.nodes,edges:t.edges,options:t.options},on:{click:t.onNodeSelected}}),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v(" Contexts ")]),t._v(" "),n("v-card-text",[n("ul",t._l(t.selectedContexts,(function(e,r){return n("li",{key:r,staticClass:"mt-4"},[n("nuxt-link",{attrs:{to:t.localePath({name:"entity-id",params:{id:t.$utils.getIdFromUri(r)}})}},[t._v(t._s(e.descriptionOfEntityInContext2))])],1)})),0)]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:v.a,VCard:x.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VDialog:_.a,VSpacer:j.a})},500:function(t,e,n){"use strict";n.r(e);n(26);var r={props:{markers:{type:Array,require:!1,default:function(){return[]}},center:{type:Array,require:!1,default:function(){return[51.505,-.159]}},geojson:{type:Object,require:!1,default:function(){return null}}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:5}},computed:{options:function(){return{onEachFeature:this.onEachFeatureFunction}},onEachFeatureFunction:function(){return function(t,e){e.bindPopup('<div><a @click="search('.concat(t.properties.uri,')">').concat(t.properties.label,"</a></div>"))}}}},o=n(96),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("l-map",{staticStyle:{"z-index":"0",height:"600px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._v(" "),t.geojson&&Object.keys(t.geojson).length>0?n("l-geo-json",{attrs:{geojson:t.geojson,options:t.options}}):t._e(),t._v(" "),t._l(t.markers,(function(marker,e){return n("l-marker",{key:e,attrs:{"lat-lng":marker.latLng}},[n("l-popup",[n("a",[t._v(t._s(marker.label))])])],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports},628:function(t,e,n){"use strict";n.r(e);n(34),n(18),n(25),n(40),n(32),n(5),n(41),n(47),n(33);var r=n(19),o=(n(70),n(26),n(75),n(123)),c=n.n(o),l=n(483),f=n(499);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={components:{Breadcrumbs:l.default,Network:f.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$axios,e.next=3,n.id;case 3:return o=e.sent,"entityInContext",c="http://www.example.com/roman-ontology/resource/".concat("entityInContext","/").concat(o),l="\n      prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>\n      prefix owl: <http://www.w3.org/2002/07/owl#>\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      select distinct * where {\n          ?s ex:eventSince ?eventSince; ex:eventUntil ?eventUntil; \n            ex:contextualAspectOf ?entity . \n          filter (?s = <".concat(c,"> ) . \n          ?entity ex:name ?name; rdf:type ?typeOfEntity . \n          ?eventSince ex:description ?eventSinceDescription . \n          ?eventUntil ex:description ?eventUntilDescription . \n          optional { ?s ex:hasLocation/ex:sourceDescritpion ?locationDescription . }\n      }"),e.next=9,r.get("".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(l)));case 9:return f=e.sent.data,d=f[0],e.abrupt("return",{id:o,item:d});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{xml:"",geo:{},markers:[],center:[51.505,-.159],geojson:null}},computed:{bh:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("search"),disabled:!1,to:this.localePath({name:"search"}),exact:!0},{text:this.id}]}},mounted:function(){},methods:{getCTS:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.item.ctsURI,e.prev=1,e.next=4,c.a.get(n);case 4:r=e.sent,data=r.data,t.xml=data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log({e:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},getPlaceInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,f,h,m,y,data,v,x,w,_,j,R,marker,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.item,r=[],o=d(n.placeUri);try{for(o.s();!(c=o.n()).done;)l=c.value,r.push("?placeUri = <".concat(l,">"))}catch(t){o.e(t)}finally{o.f()}return f=r.join(" || "),"https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql",h="PREFIX geo: <http://www.opengis.net/ont/geosparql#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>\n\n      PREFIX pleiades: <https://pleiades.stoa.org/places/vocab#>\n      PREFIX osspatial: <http://data.ordnancesurvey.co.uk/ontology/spatialrelations/>\n      PREFIX osgeo: <http://data.ordnancesurvey.co.uk/ontology/geometry/>\n\n      SELECT * WHERE {\n        ?placeUri dct:title ?title .\n        optional {\n          { ?placeUri wgs84:lat ?lat; wgs84:long ?long . }\n          UNION\n          { ?placeUri pleiades:hasLocation/osspatial:partiallyOverlaps/geo:hasGeometry/osgeo:asGeoJSON ?geo }\n        }\n        filter(".concat(f,")\n      }"),m="".concat("https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql","?query=").concat(encodeURIComponent(h)),e.next=10,t.$axios.get(m);case 10:if(y=e.sent,(data=y.data).length>0){v=[],x=[],w=[],_=d(data);try{for(_.s();!(j=_.n()).done;)(R=j.value).lat?(marker={latLng:[R.lat,R.long],label:R.title},x.push(marker),w=[R.lat,R.long]):v.push({type:"Feature",geometry:JSON.parse(R.geo),properties:{label:R.title,uri:R.placeUri}})}catch(t){_.e(t)}finally{_.f()}v.length>0&&(O={type:"FeatureCollection",features:v},t.geojson=O),x.length>0&&(t.markers=x,t.center=w)}case 13:case"end":return e.stop()}}),e)})))()}}},y=m,v=n(96),x=n(130),w=n.n(x),_=n(459),j=n(494),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),n("v-container",{staticClass:"my-5"},[n("h2",[t._v(t._s(t.item.name)+" ("+t._s(t.id)+")")]),t._v(" "),t.xml?[n("h3",{staticClass:"mt-5"},[t._v("このPersonの典拠")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.xml)}})]:t._e(),t._v(" "),t.markers.length>0||t.geojson?n("div",[n("hr",{staticClass:"my-10"}),t._v(" "),n("Map",{attrs:{markers:t.markers,center:t.center,geojson:t.geojson}})],1):t._e(),t._v(" "),n("h3",{staticClass:"mt-5"},[t._v("Context Information")]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("td",[t._v("ノート")]),t._v(" "),n("td",[t._v(t._s(t.item.description))])]),t._v(" "),n("tr",[n("td",[t._v("開始 Factoid")]),t._v(" "),n("td",[t._v(t._s(t.item.eventSinceDescription))])]),t._v(" "),n("tr",[n("td",[t._v("終了 Factoid")]),t._v(" "),n("td",[t._v(t._s(t.item.eventUntilDescription))])])])]},proxy:!0}])}),t._v(" "),n("Network",{attrs:{id:t.item.s}})],2)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{Map:n(500).default}),w()(component,{VContainer:_.a,VSimpleTable:j.a})}}]);