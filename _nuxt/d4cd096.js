(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13,16,17],{480:function(e,t,n){"use strict";n.r(t);n(35),n(18),n(26),n(43),n(33),n(5),n(44),n(49),n(34);var r=n(19);n(72),n(27),n(79),n(41),n(211),n(51),n(30),n(65);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={components:{network:n(472).a},props:{id:{type:String,require:!0,default:""}},data:function(){return{isLemma:!0,sortMethod:"directed",hierarchical:!1,physicsEnabled:!0,orgNodes:[],orgEdges:[],nodes:[],edges:[],nodesMap:{},isOption:!1}},computed:{options:function(){var e=!1;return this.hierarchical&&(e={sortMethod:this.sortMethod}),{edges:{length:400},layout:{randomSeed:2,hierarchical:e},physics:{enabled:this.physicsEnabled}}}},watch:{isLemma:function(){this.drawNetwork()},id:function(){this.getRelatedFactoids()}},mounted:function(){this.getRelatedFactoids()},methods:{getRelatedFactoids:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,data,d,f,m,h,y,v,_,w,x,j,E,k,i,F,O,R,C,I,N,U,S,A,L;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.orgNodes=[],e.orgEdges=[],e.nodes=[],e.edge=[],e.nodesMap={},n=e.id,"https://dydra.com/junjun7613/romanfactoid_v3/sparql",r="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:description ?desc_s .\n        OPTIONAL {\n          ?s ?related_so ?s_o .\n          {\n            ?s_o ex:referencesEntityInContext ?entityInContext_s; ex:referencesEntity ?referencesEntity_s .\n          }\n          UNION\n          {\n            ?s_o ex:referencesEntity ?referencesEntity_s .\n          }\n          ?referencesEntity_s ex:name ?referencesEntityName_s; rdf:type ?referencesEntityType_s\n        }\n        OPTIONAL {\n          ?s ?p ?o .\n          ?o a/rdfs:subClassOf* ex:Factoid .\n          ?o ex:description ?desc_o .\n          OPTIONAL {\n            ?o ?related_oo ?o_o .\n            {\n              ?o_o ex:referencesEntityInContext ?entityInContext_o; ex:referencesEntity ?referencesEntity_o .\n            }\n            UNION\n            {\n              ?o_o ex:referencesEntity ?referencesEntity_o .\n            }\n            ?referencesEntity_o ex:name ?referencesEntityName_o; rdf:type ?referencesEntityType_o\n          }\n        }\n        filter (?s = <".concat(n,"> || ?o = <").concat(n,">)\n      }"),c="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(r)),t.next=11,e.$axios.get(c);case 11:l=t.sent,data=l.data,d={},f={},m=o(data),t.prev=16,m.s();case 18:if((h=m.n()).done){t.next=64;break}y=h.value,v=0,_=["s","o"];case 22:if(!(v<_.length)){t.next=61;break}if(w=_[v],x=y["referencesEntity_".concat(w)]){t.next=27;break}return t.abrupt("continue",58);case 27:for(j=y[w],E=y["desc_".concat(w)],k=[],20,i=0;i<E.length/20;i++)k.push(E.substr(20*i,20));if(d[j]||(d[j]={id:j,label:k.join("\n"),shape:"box",color:{background:"white"},type:"factoid"}),d[x]){t.next=54;break}F=null,O=null,R=y["referencesEntityType_".concat(w)],t.t0=R,t.next="https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"===t.t0?40:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"===t.t0?42:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObject"===t.t0?45:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObject"===t.t0?48:"https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"===t.t0?51:53;break;case 40:return F="#98fb98",t.abrupt("break",53);case 42:return F="red",O="square",t.abrupt("break",53);case 45:case 48:return F="yellow",O="diamond",t.abrupt("break",53);case 51:return F="orange",t.abrupt("break",53);case 53:d[x]={id:x,label:y["referencesEntityName_".concat(w)],color:F,shape:O,type:R};case 54:!(C=d[x]).context&&y["entityInContext_".concat(w)]&&(C.context=y["entityInContext_".concat(w)]),I="".concat(j,"-").concat(x),f[I]={from:j,to:x,arrows:"to",color:"gray"};case 58:v++,t.next=22;break;case 61:y.p&&!["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#mentionedAsFollow"].includes(y.p)&&(f["".concat(y.s,"-").concat(y.o)]={from:y.s,to:y.o,label:e.$utils.getIdFromUri(y.p,"#"),arrows:"to",color:"gray"});case 62:t.next=18;break;case 64:t.next=69;break;case 66:t.prev=66,t.t1=t.catch(16),m.e(t.t1);case 69:return t.prev=69,m.f(),t.finish(69);case 72:return t.next=74,e.getAssociatedObjects(d,f);case 74:for(S in N=t.sent,d=N.nodesMap,f=N.edgesMap,U=[],d)U.push(d[S]);for(L in A=[],f)A.push(f[L]);e.orgEdges=A,e.orgNodes=U,e.nodesMap=d,e.drawNetwork();case 85:case"end":return t.stop()}}),t,null,[[16,66,69,72]])})))()},drawNetwork:function(){var e,t=this.orgEdges,n=this.orgNodes,r=[],c=[],l=[],d=this.isLemma,f=o(n);try{for(f.s();!(e=f.n()).done;){var m=e.value;(d||"lemma"!==m.type)&&(r.push(m),l.push(m.id))}}catch(e){f.e(e)}finally{f.f()}var h,y=o(t);try{for(y.s();!(h=y.n()).done;){var v=h.value,_=v.from,w=v.to;l.includes(_)&&l.includes(w)&&c.push(v)}}catch(e){y.e(e)}finally{y.f()}this.nodes=r,this.edges=c},getAssociatedObjects:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c,l,filter,d,f,m,data,h,y,v,_,w,x,j,E,k,F,O,R,C,I,label;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(l in c=[],e)"factoid"===e[l].type&&c.push("?s = <".concat(l,">"));return filter=c.join(" || "),"https://dydra.com/junjun7613/romanfactoid_v3/sparql",d="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:associatedObject ?ao . ?ao ex:hasLemma/ex:referencesLemma ?lemma; a ?type .\n        filter (".concat(filter,")\n        SERVICE <https://dydra.com/i2k/lemmabank/sparql> {\n          ?lemma rdfs:label ?label .\n        }\n      }"),f="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(d)),r.next=8,n.$axios.get(f);case 8:m=r.sent,data=m.data,h={},y=o(data);try{for(y.s();!(v=y.n()).done;)_=v.value,w=_.label,x=_.ao,j=_.s,h[j]||(h[j]={}),h[j][x]||(h[j][x]={type:_.type,labels:[]}),(E=h[j][x].labels).includes(w)||E.push(w)}catch(e){y.e(e)}finally{y.f()}for(F in k={"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference":{color:"pink",shape:"box"},"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference":{color:"gray",shape:"diamond"}},h)for(O in h[F])R=h[F][O],C=R.type,(I=R.labels).sort(),label=I.join(" / "),e[label]||(e[label]={id:label,label:label,color:k[C].color,shape:k[C].shape,type:"lemma"}),t["".concat(F,"-").concat(label)]={from:F,to:label,arrows:"to",color:"gray"};return r.abrupt("return",{nodesMap:e,edgesMap:t});case 16:case"end":return r.stop()}}),r)})))()},onNodeSelected:function(e){var t=e.nodes;if(t.length>0){var n=t[0],r=this.nodesMap[n];if("factoid"===r.type)this.$router.push(this.localePath({name:"item-id",params:{id:this.$utils.getIdFromUri(r.id).replace("fact_","")}}));else{if(!r.context)return void alert("contextがありません。");this.$router.push(this.localePath({name:"entity-id",params:{id:this.$utils.getIdFromUri(r.context)}}))}}}}},d=n(71),f=n(73),m=n.n(f),h=n(223),y=n(646),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"500px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:e.nodes,edges:e.edges,options:e.options},on:{click:e.onNodeSelected}}),e._v(" "),n("div",{staticClass:"text-right"},[n("v-switch",{attrs:{label:"Option"},model:{value:e.isOption,callback:function(t){e.isOption=t},expression:"isOption"}})],1),e._v(" "),e.isOption?[n("div",{staticClass:"my-4"},[n("v-switch",{attrs:{label:"Lemma"},model:{value:e.isLemma,callback:function(t){e.isLemma=t},expression:"isLemma"}})],1),e._v(" "),n("div",{staticClass:"mt-4"},[n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.hierarchical=!1}}},[e._v("hierarchicalを使用しない")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.hierarchical=!0}}},[e._v("hierarchicalを使用する")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.sortMethod="directed"}}},[e._v("directed")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.sortMethod="hubsize"}}},[e._v("hubsize")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.physicsEnabled=!0}}},[e._v("physicsを使用する")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.physicsEnabled=!1}}},[e._v("physicsを使用しない")])],1)]:e._e()],2)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VSwitch:y.a})},482:function(e,t,n){"use strict";n.r(t);var r=n(19),o=(n(72),n(74),n(79),n(115)),c=n.n(o),l={props:{id:{type:String,require:!0,default:""}},data:function(){return{baseUrl:"https://nakamura196.github.io/ogawa",text:""}},computed:{},watch:{},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,f,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$utils.getIdFromUri(e.id),t.next=3,c.a.get(e.baseUrl+"/xml/BG_1_TEI.xml");case 3:for(m in r=t.sent,o=new window.DOMParser,l=o.parseFromString(r.data,"text/xml"),d=e.$utils.getWordListByFactoid(l,n),f=[],d)h=l.querySelector("w[*|id='".concat(m,"']")).textContent.trim(),f.push(h);e.text=f.join(" ");case 10:case"end":return t.stop()}}),t)})))()},methods:{}},d=n(71),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  "+e._s(e.text)+"\n")])}),[],!1,null,null,null);t.default=component.exports},494:function(e,t,n){"use strict";n.r(t);n(27);var r={props:{markers:{type:Array,require:!1,default:function(){return[]}},center:{type:Array,require:!1,default:function(){return[51.505,-.159]}},geojson:{type:Object,require:!1,default:function(){return null}}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:5}},computed:{options:function(){return{onEachFeature:this.onEachFeatureFunction}},onEachFeatureFunction:function(){return function(e,t){t.bindPopup('<div><a @click="search('.concat(e.properties.uri,')">').concat(e.properties.label,"</a></div>"))}}}},o=n(71),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("l-map",{staticStyle:{"z-index":"0",height:"600px",width:"100%"},attrs:{zoom:e.zoom,center:e.center}},[n("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),e._v(" "),e.geojson&&Object.keys(e.geojson).length>0?n("l-geo-json",{attrs:{geojson:e.geojson,options:e.options}}):e._e(),e._v(" "),e._l(e.markers,(function(marker,t){return n("l-marker",{key:t,attrs:{"lat-lng":marker.latLng}},[n("l-popup",[n("a",[e._v(e._s(marker.label))])])],1)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports},504:function(e,t,n){"use strict";n.r(t);n(35),n(18),n(26),n(43),n(33),n(5),n(44),n(49),n(34);var r=n(19),o=(n(27),n(79),n(72),n(115)),c=n.n(o),l=n(480),d=n(482);function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var h={components:{FactoidNetwork:l.default,TeiText:d.default},props:{id:{type:String,require:!0,default:""}},data:function(){return{xml:"",geo:{},markers:[],center:[51.505,-.159],geojson:null,item:{}}},computed:{},watch:{id:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.geo={},e.markers=[],t.next=4,e.getItem();case 4:e.getPlaceInfo();case 5:case"end":return t.stop()}}),t)})))()},getItem:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,i,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://dydra.com/junjun7613/romanfactoid_v3/sparql",n=e.id,r="\n        prefix fpo: <https://github.com/johnBradley501/FPO/raw/master/fpo.owl#>\n        prefix owl: <http://www.w3.org/2002/07/owl#>\n        prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n        select distinct * where {\n            ?s ex:description ?description .\n            filter (?s = <".concat("http://www.example.com/roman-ontology/resource/Factoid/"+n,"> ) .\n\n            optional {\n              { ?s ex:atWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n              UNION\n              { ?s ex:fromWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n              UNION\n              { ?s ex:toWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n              UNION\n              { ?s ex:nearWhere/ex:referencesEntity/owl:sameAs ?placeUri . }\n            }\n        }"),t.next=6,c.a.get("".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(r)));case 6:for(o=t.sent.data,l={},i=0;i<o.length;i++){if(d=o[i],0===i){for(f in d)l[f]=d[f];l.placeUri=[]}l.placeUri.push(d.placeUri)}e.item=l;case 10:case"end":return t.stop()}}),t)})))()},getPlaceInfo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,m,h,y,data,v,_,w,x,j,E,marker,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.item,r=[],o=f(n.placeUri);try{for(o.s();!(c=o.n()).done;)l=c.value,r.push("?placeUri = <".concat(l,">"))}catch(e){o.e(e)}finally{o.f()}return d=r.join(" || "),"https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql",m="PREFIX geo: <http://www.opengis.net/ont/geosparql#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>\n\n      PREFIX pleiades: <https://pleiades.stoa.org/places/vocab#>\n      PREFIX osspatial: <http://data.ordnancesurvey.co.uk/ontology/spatialrelations/>\n      PREFIX osgeo: <http://data.ordnancesurvey.co.uk/ontology/geometry/>\n\n      SELECT * WHERE {\n        ?placeUri dct:title ?title .\n        optional {\n          { ?placeUri wgs84:lat ?lat; wgs84:long ?long . }\n          UNION\n          { ?placeUri pleiades:hasLocation/osspatial:partiallyOverlaps/geo:hasGeometry/osgeo:asGeoJSON ?geo }\n        }\n        filter(".concat(d,")\n      }"),h="".concat("https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql","?query=").concat(encodeURIComponent(m)),t.next=10,e.$axios.get(h);case 10:if(y=t.sent,(data=y.data).length>0){v=[],_=[],w=[],x=f(data);try{for(x.s();!(j=x.n()).done;)(E=j.value).lat?(marker={latLng:[E.lat,E.long],label:E.title},_.push(marker),w=[E.lat,E.long]):v.push({type:"Feature",geometry:JSON.parse(E.geo),properties:{label:E.title,uri:E.placeUri}})}catch(e){x.e(e)}finally{x.f()}v.length>0&&(k={type:"FeatureCollection",features:v},e.geojson=k),_.length>0&&(e.markers=_,e.center=w)}case 13:case"end":return t.stop()}}),t)})))()}}},y=n(71),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"mb-5"},[e._v("\n    "+e._s(e.item.description)+" ("+e._s(e.$utils.createFactoidTitleFromId(e.id))+")\n  ")]),e._v(" "),e.xml?[n("h3",{staticClass:"mt-5"},[e._v("このFactoidの典拠")]),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.xml)}})]:e._e(),e._v(" "),e.markers.length>0||e.geojson?n("Map",{attrs:{markers:e.markers,center:e.center,geojson:e.geojson}}):e._e(),e._v(" "),n("FactoidNetwork",{attrs:{id:e.item.s}}),e._v(" "),e._e()],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Map:n(494).default,FactoidNetwork:n(480).default,TeiText:n(482).default})}}]);