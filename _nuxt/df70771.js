(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{463:function(e,t,n){"use strict";n.r(t);n(18),n(40),n(32),n(5),n(41),n(47),n(33);var o=n(19),r=(n(70),n(34),n(26),n(38),n(25),n(49),n(469));function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var d=function e(t,n){var o=[];if(t.length<n)return[];if(1===n)for(var i=0;i<t.length;i++)o[i]=[t[i]];else for(var r=0;r<t.length-n+1;r++)for(var c=e(t.slice(r+1),n-1),l=0;l<c.length;l++)o.push([t[r]].concat(c[l]));return o},f={components:{network:r.a},props:{item:{type:Object,require:!0,default:function(){}}},data:function(){return{nodes:[],nodesMap:{},edges:[],options:{nodes:{borderWidth:1},edges:{color:"lightgray"}},contexts:{},dialog:!1,selectedContexts:{}}},computed:{},mounted:function(){this.getRelations()},methods:{getRelations:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,data,f,h,y,v,m,x,w,_,C,R,j,E,O,k,S,F,I,N,A,P,V,L,U,$,T,B,M,D,W,G,J;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.item,"https://dydra.com/junjun7613/romanfactoid_v2/sparql",o="prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      SELECT DISTINCT *\n      WHERE {\n        ?entityReference ex:referencesEntityInContext ?entityInContext; ex:referencesEntity/rdf:type ?typeOfEntity . \n        filter (?entityInContext = <".concat(n.s,">) .\n        ?factoid ?hasReference ?entityReference .\n        ?hasReference rdfs:subPropertyOf* ?propertyClass .\n        filter (?propertyClass = ex:sceneObjectProperty || ?propertyClass = ex:sceneProperty).\n        ?factoid ?hasReference2 ?entityReference2 .\n        filter (?entityReference != ?entityReference2)\n        ?hasReference2 rdfs:subPropertyOf* ?propertyClass .\n        ?entityReference2 ex:referencesEntity ?entity; rdf:type ?typeOfEntityReference .\n        optional { \n          ?entityReference2 ex:referencesEntityInContext ?entityInContext2 . \n          ?entityInContext2 rdf:type ?typeOfEntityInContext; ex:sourceDescription ?descriptionOfEntityInContext2 }\n        ?entity ex:name ?name; rdf:type ?typeOfEntity2 . \n      }"),r="".concat("https://dydra.com/junjun7613/romanfactoid_v2/sparql","?query=").concat(encodeURIComponent(o)),t.next=6,e.$axios.get(r);case 6:l=t.sent,data=l.data,f={},(h={})[n.s]=n,y={},v={},m={},e.contexts=m,x=c(data);try{for(x.s();!(w=x.n()).done;)_=w.value,C=_.factoid,f[C]||(f[C]=[n.s]),R=f[C],j=_.entity,R.includes(j)||R.push(j),h[j]=_,_.entityInContext2&&(E=_.entityInContext2,m[j]||(m[j]={}),m[j][E]=_)}catch(e){x.e(e)}finally{x.f()}for(O in f){k=f[O],S=d(k,2),F=c(S);try{for(F.s();!(I=F.n()).done;){N=I.value,A=N[0]+"-"+N[1],y[A]||(y[A]={from:N[0],to:N[1],value:0}),y[A].value+=1,P=c(N);try{for(P.s();!(V=P.n()).done;)L=V.value,U=null,$=null,T=null,B=h[L].typeOfEntityReference,M="",M=L===n.s?h[L].typeOfEntity:h[L].typeOfEntity2,["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#ConceptualObjectReference","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#PhysicalObjectReference"].includes(B)?(U="yellow",$="diamond"):["https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(M)?(U="red",$="square",T=M):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person"].includes(M)?T=M:["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location"].includes(M)?(U="green",T=M):["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group"].includes(M)&&(U="orange",T=M),v[L]||(v[L]={id:L,label:h[L].name,color:U,shape:$,type:T})}catch(e){P.e(e)}finally{P.f()}}}catch(e){F.e(e)}finally{F.f()}}for(G in D=[],W=[],v)D.push(v[G]);for(J in y)W.push(y[J]);e.nodes=D,e.edges=W,e.nodesMap=v,e.relations=data;case 26:case"end":return t.stop()}}),t)})))()},onNodeSelected:function(e){var t=e.nodes;if(t.length>0){var n=t[0],o=this.nodesMap[n];["https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Person","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Location","https://github.com/johnBradley501/FPO/raw/master/fpo.owl#Group","https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#Community"].includes(o.type)&&(this.dialog=!0,this.selectedContexts=this.contexts[o.id])}}}},h=n(96),y=n(129),v=n.n(y),m=n(215),x=n(462),w=n(461),_=n(485),C=n(486),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"650px","background-color":"lightyellow"},attrs:{id:"mynetwork",nodes:e.nodes,edges:e.edges,options:e.options},on:{click:e.onNodeSelected}}),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(" Contexts ")]),e._v(" "),n("v-card-text",[n("ul",e._l(e.selectedContexts,(function(t,o){return n("li",{key:o,staticClass:"mt-4"},[n("nuxt-link",{attrs:{to:e.localePath({name:"entity-id",params:{id:e.$utils.getIdFromUri(o)}})}},[e._v(e._s(t.descriptionOfEntityInContext2))])],1)})),0)]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          Close\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{Network:n(463).default}),v()(component,{VBtn:m.a,VCard:x.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VDialog:_.a,VSpacer:C.a})},501:function(e,t,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("697f26b8",content,!0,{sourceMap:!1})},538:function(e,t,n){"use strict";n(501)},539:function(e,t,n){var o=n(21)(!1);o.push([e.i,"#mynetwork{border:1px solid #d3d3d3}",""]),e.exports=o},563:function(e,t,n){"use strict";n.r(t);n(34),n(18),n(25),n(40),n(32),n(5),n(41),n(47),n(33);var o=n(19),r=(n(70),n(38),n(49),n(26),n(27),n(50),n(469));function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var d="https://dydra.com/junjun7613/romanfactoid_v2/sparql",f="https://dydra.com/junjun7613/hutimeperiod/sparql";function h(e){var t=e.split("/");return t[t.length-1]}function y(e,t){var n,o=[],r=[],l={},d=["s","o"],f={},y={},x=c(e);try{for(x.s();!(n=x.n()).done;){var w,_=n.value,C=c(d);try{for(C.s();!(w=C.n()).done;){var R=w.value,j=_[R],label=h(j)+"\n"+_["descOf"+R.toUpperCase()];if(!l[j]){var E={id:j,label:label,x:0,physics:!1,shape:"box",color:"#F44336",in:[],out:[]};o.push(E),m(y,_,R,l),l[j]=E}}}catch(e){C.e(e)}finally{C.f()}var O=_.s,k=_.o;f[O]||(f[O]=[]),f[O].push(k),r.push({from:O,to:k,arrows:{to:{enabled:!0}}});var S=l[O].out;S.includes(k)||S.push(k);var F=l[k].in;F.includes(O)||F.push(O)}}catch(e){x.e(e)}finally{x.f()}var I,N=[],A=[],P=[],V=c(v([],f,t));try{for(V.s();!(I=V.n()).done;){var L=I.value,U=l[L];if(U.y=50*N.length,N.push(U),y[L]){var $,T=c(y[L]);try{for(T.s();!($=T.n()).done;){var B=$.value,M=l[B];M.y=U.y,P.includes(B)||(A.push(M),P.push(B)),r.push({from:L,to:B,arrows:{to:{enabled:!0}}})}}catch(e){T.e(e)}finally{T.f()}}}}catch(e){V.e(e)}finally{V.f()}return{nodes:o=N.concat(A),edges:r,existsNodes:l}}function v(e,t,n){if(!t[n])return e;e.includes(n)||e.push(n);var o,r=t[n],l=c(r);try{for(l.s();!(o=l.n()).done;){var d=o.value;e.includes(d)||e.push(d)}}catch(e){l.e(e)}finally{l.f()}var f,h=c(r);try{for(h.s();!(f=h.n()).done;){e=v(e,t,f.value)}}catch(e){h.e(e)}finally{h.f()}return e}function m(e,t,n,o){if(t["when_"+n]){var r=t["when_"+n],c=t["when_"+n+"_begin"];if(!o[r]){var l={id:r,label:c,x:-200,physics:!1,shape:"box",color:"#4CAF50"};o[r]=l}var d=t[n];e[d]||(e[d]=[]),e[d].push(r)}}function x(e,t,n,o){var r,l={},d=c(n);try{for(d.s();!(r=d.n()).done;){var f=r.value,y=f.since,v=f.until;if(o[y]&&o[v]){var m=f.p,label=h(m),x=o[y],w=o[v],_=(x.y+w.y)/2;l[_]||(l[_]=[]);var C={id:m,label:label,y:_,x:200*(l[_].length+1),physics:!1,shape:"box",color:label.includes("pers")?"#2196F3":"#9C27B0"};l[_].push(C),e.push(C),t.push({from:m,to:y,arrows:{to:{enabled:!0}}}),t.push({from:m,to:v,arrows:{to:{enabled:!0}}})}}}catch(e){d.e(e)}finally{d.f()}}function w(e){var t={};for(var n in e){var o=e[n];if(o.in&&o.out){var r,l=c(o.in);try{for(l.s();!(r=l.n()).done;){var d,f=r.value,h=c(o.out);try{for(h.s();!(d=h.n()).done;){var y=f+" - "+d.value;t[y]||(t[y]=[]),o.x-=30*t[y].length,t[y].push(n)}}catch(e){h.e(e)}finally{h.f()}}}catch(e){l.e(e)}finally{l.f()}}}}var _={components:{network:r.a},data:function(){return{baseUrl:"https://nakamura196.github.io/ogawa",loading:!1,nodes:[],edges:[],options:{nodes:{borderWidth:1},edges:{color:"lightgray"}},title:this.$t("network"),nodeList:[],nodeStart:"",nodeEnd:"",nodeEntity:""}},head:function(){return{title:this.title}},watch:{nodeStart:function(){this.drawNetwork()},nodeEnd:function(){this.drawNetwork()},nodeEntity:function(){this.drawNetwork()}},mounted:function(){this.getFactList(),this.drawNetwork()},methods:{onNodeSelected:function(e){var t=e.nodes;if(t.length>0){var n=t[0];(n.includes("pers_")||n.includes("place_"))&&(this.nodeEntity=n)}},drawNetwork:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,l,h,v,link,m,_,C,R,j,E;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.nodeEntity,o="\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      select * where {\n        ?p a ?type;\n          ex:eventSince ?since;\n          ex:eventUntil ?until .\n\n        "+(n?"filter (?p = <".concat(n,">) . "):"")+"\n        ?type rdfs:subClassOf ex:EntityInContext .\n      }",t.next=5,e.$axios.get("".concat(d,"?query=").concat(encodeURIComponent(o)));case 5:return r=t.sent.data,c="",l="",n&&1===r.length?(h=r[0],c=h.since,l=h.until):(c=e.nodeStart,l=e.nodeEnd),v=c||"http://www.example.com/roman-ontology/resource/fact/fact_2",m="\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      prefix ex2: <http://www.example.com/roman-ontology/resource/fact/>\n      select distinct * where {\n         ?startNode ".concat(link="ex:mentionedAsPrecedent","* ?s; ex:description ?descOfStartNode . \n         filter (?startNode = <")+v+">)\n         ?s ex:description ?descOfS . \n         optional {\n          ?s ex:when ?when_s .\n          SERVICE SILENT <".concat(f,"> {\n            optional { ?when_s ex:begin ?when_s_begin; ex:end ?when_s_end. }\n          }\n         }\n         ?s ").concat(link," ?o .\n         ?o ex:description ?descOfO . \n         optional {\n           ?o ex:when ?when_o .\n           SERVICE SILENT <").concat(f,"> {\n            optional { ?when_o ex:begin ?when_o_begin; ex:end ?when_o_end. }\n           }\n         }\n         ?o ").concat(link,"* ?endNode; ex:description ?descOfEndNode . \n         filter (?endNode = <")+(l||"http://www.example.com/roman-ontology/resource/fact/fact_40")+">)\n      }",t.next=14,e.$axios.get("".concat(d,"?query=").concat(encodeURIComponent(m)));case 14:_=t.sent.data,C=y(_,v),R=C.nodes,j=C.edges,E=C.existsNodes,x(R,j,r,E),w(E),e.nodes=R,e.edges=j,e.loading=!1;case 24:case"end":return t.stop()}}),t)})))()},getFactList:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,f,data,y,v,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      select distinct * where {\n         ?s (ex:mentionedAsPrecedent | ex:therefore) ?o\n      }",t.next=3,e.$axios.get("".concat(d,"?query=").concat(encodeURIComponent("\n      prefix ex: <https://junjun7613.github.io/RomanFactoid_v2/Roman_Contextual_Factoid.owl#>\n      select distinct * where {\n         ?s (ex:mentionedAsPrecedent | ex:therefore) ?o\n      }")));case 3:n=t.sent.data,o=[{text:"",value:""}],r=[],l=c(n);try{for(l.s();!(f=l.n()).done;)for(data=f.value,y=0,v=["s","o"];y<v.length;y++)m=data[v[y]],r.includes(m)||(o.push({text:h(m),value:m}),r.push(m))}catch(e){l.e(e)}finally{l.f()}e.nodeList=o;case 9:case"end":return t.stop()}}),t)})))()}}},C=(n(538),n(96)),R=n(129),j=n.n(R),E=n(494),O=n(456),k=n(495),S=n(502),component=Object(C.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("h2",[e._v(e._s(e.title))]),e._v(" "),n("v-row",{staticClass:"mt-2",attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:e.nodeList,label:"始点",filled:"",rounded:"",dense:""},model:{value:e.nodeStart,callback:function(t){e.nodeStart=t},expression:"nodeStart"}})],1),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:e.nodeList,label:"終点",filled:"",rounded:"",dense:""},model:{value:e.nodeEnd,callback:function(t){e.nodeEnd=t},expression:"nodeEnd"}})],1)],1),e._v(" "),n("network",{ref:"network",staticClass:"mt-5",staticStyle:{width:"100%",height:"650px"},attrs:{id:"mynetwork",nodes:e.nodes,edges:e.edges,options:e.options},on:{click:e.onNodeSelected}})],1)}),[],!1,null,null,null);t.default=component.exports;j()(component,{Network:n(463).default}),j()(component,{VCol:E.a,VContainer:O.a,VRow:k.a,VSelect:S.a})}}]);