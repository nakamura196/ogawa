(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{480:function(e,t,n){"use strict";n.r(t);n(35),n(18),n(26),n(43),n(33),n(5),n(44),n(49),n(34);var o=n(19);n(72),n(27),n(79),n(41),n(211),n(51),n(30),n(65);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw r}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={components:{network:n(472).a},props:{id:{type:String,require:!0,default:""}},data:function(){return{isLemma:!0,sortMethod:"directed",hierarchical:!1,physicsEnabled:!0,orgNodes:[],orgEdges:[],nodes:[],edges:[],nodesMap:{},isOption:!1}},computed:{options:function(){var e=!1;return this.hierarchical&&(e={sortMethod:this.sortMethod}),{edges:{length:400},layout:{randomSeed:2,hierarchical:e},physics:{enabled:this.physicsEnabled}}}},watch:{isLemma:function(){this.drawNetwork()},id:function(){this.getRelatedFactoids()}},mounted:function(){this.getRelatedFactoids()},methods:{getRelatedFactoids:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,l,data,d,h,f,m,y,_,v,x,w,j,E,k,i,C,R,O,F,I,N,L,M,S,A;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.orgNodes=[],e.orgEdges=[],e.nodes=[],e.edge=[],e.nodesMap={},n=e.id,"https://dydra.com/junjun7613/romanfactoid_v3/sparql",o="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:description ?desc_s .\n        OPTIONAL {\n          ?s ?related_so ?s_o .\n          {\n            ?s_o ex:referencesEntityInContext ?entityInContext_s; ex:referencesEntity ?referencesEntity_s .\n          }\n          UNION\n          {\n            ?s_o ex:referencesEntity ?referencesEntity_s .\n          }\n          ?referencesEntity_s ex:name ?referencesEntityName_s; rdf:type ?referencesEntityType_s\n        }\n        OPTIONAL {\n          ?s ?p ?o .\n          ?o a/rdfs:subClassOf* ex:Factoid .\n          ?o ex:description ?desc_o .\n          OPTIONAL {\n            ?o ?related_oo ?o_o .\n            {\n              ?o_o ex:referencesEntityInContext ?entityInContext_o; ex:referencesEntity ?referencesEntity_o .\n            }\n            UNION\n            {\n              ?o_o ex:referencesEntity ?referencesEntity_o .\n            }\n            ?referencesEntity_o ex:name ?referencesEntityName_o; rdf:type ?referencesEntityType_o\n          }\n        }\n        filter (?s = <".concat(n,"> || ?o = <").concat(n,">)\n      }"),c="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(o)),t.next=11,e.$axios.get(c);case 11:l=t.sent,data=l.data,d={},h={},f=r(data),t.prev=16,f.s();case 18:if((m=f.n()).done){t.next=64;break}y=m.value,_=0,v=["s","o"];case 22:if(!(_<v.length)){t.next=61;break}if(x=v[_],w=y["referencesEntity_".concat(x)]){t.next=27;break}return t.abrupt("continue",58);case 27:for(j=y[x],E=y["desc_".concat(x)],k=[],20,i=0;i<E.length/20;i++)k.push(E.substr(20*i,20));if(d[j]||(d[j]={id:j,label:k.join("\n"),shape:"box",color:{background:"white"},type:"factoid"}),d[w]){t.next=54;break}C=null,R=null,O=y["referencesEntityType_".concat(x)],t.t0=O,t.next="https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"===t.t0?40:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"===t.t0?42:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObject"===t.t0?45:"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObject"===t.t0?48:"https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"===t.t0?51:53;break;case 40:return C="#98fb98",t.abrupt("break",53);case 42:return C="red",R="square",t.abrupt("break",53);case 45:case 48:return C="yellow",R="diamond",t.abrupt("break",53);case 51:return C="orange",t.abrupt("break",53);case 53:d[w]={id:w,label:y["referencesEntityName_".concat(x)],color:C,shape:R,type:O};case 54:!(F=d[w]).context&&y["entityInContext_".concat(x)]&&(F.context=y["entityInContext_".concat(x)]),I="".concat(j,"-").concat(w),h[I]={from:j,to:w,arrows:"to",color:"gray"};case 58:_++,t.next=22;break;case 61:y.p&&!["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#mentionedAsFollow"].includes(y.p)&&(h["".concat(y.s,"-").concat(y.o)]={from:y.s,to:y.o,label:e.$utils.getIdFromUri(y.p,"#"),arrows:"to",color:"gray"});case 62:t.next=18;break;case 64:t.next=69;break;case 66:t.prev=66,t.t1=t.catch(16),f.e(t.t1);case 69:return t.prev=69,f.f(),t.finish(69);case 72:return t.next=74,e.getAssociatedObjects(d,h);case 74:for(M in N=t.sent,d=N.nodesMap,h=N.edgesMap,L=[],d)L.push(d[M]);for(A in S=[],h)S.push(h[A]);e.orgEdges=S,e.orgNodes=L,e.nodesMap=d,e.drawNetwork();case 85:case"end":return t.stop()}}),t,null,[[16,66,69,72]])})))()},drawNetwork:function(){var e,t=this.orgEdges,n=this.orgNodes,o=[],c=[],l=[],d=this.isLemma,h=r(n);try{for(h.s();!(e=h.n()).done;){var f=e.value;(d||"lemma"!==f.type)&&(o.push(f),l.push(f.id))}}catch(e){h.e(e)}finally{h.f()}var m,y=r(t);try{for(y.s();!(m=y.n()).done;){var _=m.value,v=_.from,x=_.to;l.includes(v)&&l.includes(x)&&c.push(_)}}catch(e){y.e(e)}finally{y.f()}this.nodes=o,this.edges=c},getAssociatedObjects:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var c,l,filter,d,h,f,data,m,y,_,v,x,w,j,E,k,C,R,O,F,I,label;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(l in c=[],e)"factoid"===e[l].type&&c.push("?s = <".concat(l,">"));return filter=c.join(" || "),"https://dydra.com/junjun7613/romanfactoid_v3/sparql",d="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      SELECT * WHERE {\n        ?s ex:associatedObject ?ao . ?ao ex:hasLemma/ex:referencesLemma ?lemma; a ?type .\n        filter (".concat(filter,")\n        SERVICE <https://dydra.com/i2k/lemmabank/sparql> {\n          ?lemma rdfs:label ?label .\n        }\n      }"),h="".concat("https://dydra.com/junjun7613/romanfactoid_v3/sparql","?query=").concat(encodeURIComponent(d)),o.next=8,n.$axios.get(h);case 8:f=o.sent,data=f.data,m={},y=r(data);try{for(y.s();!(_=y.n()).done;)v=_.value,x=v.label,w=v.ao,j=v.s,m[j]||(m[j]={}),m[j][w]||(m[j][w]={type:v.type,labels:[]}),(E=m[j][w].labels).includes(x)||E.push(x)}catch(e){y.e(e)}finally{y.f()}for(C in k={"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference":{color:"pink",shape:"box"},"https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference":{color:"gray",shape:"diamond"}},m)for(R in m[C])O=m[C][R],F=O.type,(I=O.labels).sort(),label=I.join(" / "),e[label]||(e[label]={id:label,label:label,color:k[F].color,shape:k[F].shape,type:"lemma"}),t["".concat(C,"-").concat(label)]={from:C,to:label,arrows:"to",color:"gray"};return o.abrupt("return",{nodesMap:e,edgesMap:t});case 16:case"end":return o.stop()}}),o)})))()},onNodeSelected:function(e){var t=e.nodes;if(t.length>0){var n=t[0],o=this.nodesMap[n];if("factoid"===o.type)this.$router.push(this.localePath({name:"item-id",params:{id:this.$utils.getIdFromUri(o.id).replace("fact_","")}}));else{if(!o.context)return void alert("contextがありません。");this.$router.push(this.localePath({name:"entity-id",params:{id:this.$utils.getIdFromUri(o.context)}}))}}}}},d=n(71),h=n(73),f=n.n(h),m=n(223),y=n(646),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"500px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:e.nodes,edges:e.edges,options:e.options},on:{click:e.onNodeSelected}}),e._v(" "),n("div",{staticClass:"text-right"},[n("v-switch",{attrs:{label:"Option"},model:{value:e.isOption,callback:function(t){e.isOption=t},expression:"isOption"}})],1),e._v(" "),e.isOption?[n("div",{staticClass:"my-4"},[n("v-switch",{attrs:{label:"Lemma"},model:{value:e.isLemma,callback:function(t){e.isLemma=t},expression:"isLemma"}})],1),e._v(" "),n("div",{staticClass:"mt-4"},[n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.hierarchical=!1}}},[e._v("hierarchicalを使用しない")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.hierarchical=!0}}},[e._v("hierarchicalを使用する")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.sortMethod="directed"}}},[e._v("directed")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.sortMethod="hubsize"}}},[e._v("hubsize")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.physicsEnabled=!0}}},[e._v("physicsを使用する")]),e._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{small:""},on:{click:function(t){e.physicsEnabled=!1}}},[e._v("physicsを使用しない")])],1)]:e._e()],2)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:m.a,VSwitch:y.a})}}]);