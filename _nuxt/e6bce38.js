(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{504:function(t,e,r){"use strict";r.r(e);r(33),r(18),r(24),r(44),r(32),r(5),r(39),r(46),r(34);var n=r(16);r(26),r(62);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var c={components:{},data:function(){return{baseUrl:"https://nakamura196.github.io/ogawa",nodeEntity:"",title:"",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:5,center:[51.505,-.159],markers:[]}},head:function(){return{title:this.title}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,l,c,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pleiades.stoa.org/places/177473","https://pleiades.stoa.org/places/167652","https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql",r="PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>\n      SELECT * WHERE {\n        ?placeUri wgs84:lat ?lat; wgs84:long ?long; dct:title ?title .\n        filter(?placeUri = <".concat("https://pleiades.stoa.org/places/177473","> || ?placeUri = <").concat("https://pleiades.stoa.org/places/167652",">)\n      }"),n="".concat("https://triplydb.com/_api/datasets/wouter/pleiades/services/pleiades/sparql","?query=").concat(encodeURIComponent(r)),e.next=7,t.$axios.get(n);case 7:data=e.sent.data,l=[],c=o(data);try{for(c.s();!(f=c.n()).done;)d=f.value,l.push([d.lat,d.long])}catch(t){c.e(t)}finally{c.f()}t.markers=l;case 12:case"end":return e.stop()}}),e)})))()},methods:{}},f=r(93),d=r(124),h=r.n(d),m=r(511),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{attrs:{fluid:""}},[r("h2",[t._v(t._s(t.title))]),t._v(" "),t.markers.length>0?r("l-map",{staticStyle:{height:"600px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[r("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._v(" "),t._l(t.markers,(function(t,e){return r("l-marker",{key:e,attrs:{"lat-lng":t}})}))],2):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VContainer:m.a})}}]);