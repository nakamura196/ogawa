(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{236:function(t,e,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("7388ab72",content,!0,{sourceMap:!1})},271:function(t,e,o){"use strict";var n={data:function(){return{drawer:!1,items:[{icon:"mdi-apps",title:"Welcome",to:this.localePath({name:"index"})},{icon:"mdi-calendar",title:"Timeline",to:this.localePath({name:"timeline"})},{icon:"mdi-table",title:"table",to:this.localePath({name:"table"})},{icon:"mdi-magnify",title:"テーブルテスト2",to:this.localePath({name:"table2"})},{icon:"mdi-network",title:"Network",to:this.localePath({name:"network"})},{icon:"mdi-dabase",title:"Snorql",href:"https://nakamura196.github.io/ogawa/snorql"}],title:"小川さんプロジェクト"}}},r=o(93),l=o(123),c=o.n(l),d=o(418),v=o(423),m=o(419),f=o(424),h=o(420),_=o(184),w=o(185),V=o(117),x=o(186),k=o(90),N=o(421),P=o(422),y=o(266),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",t._l(t.items,(function(e,i){return o("v-list-item",{key:i,attrs:{to:e.to,href:e.href,router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),o("v-app-bar",{attrs:{app:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),o("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),o("v-main",[o("v-container",[o("Nuxt")],1)],1),t._v(" "),o("v-footer",{staticClass:"py-10"},[o("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:m.a,VContainer:f.a,VFooter:h.a,VIcon:_.a,VList:w.a,VListItem:V.a,VListItemAction:x.a,VListItemContent:k.a,VListItemTitle:k.b,VMain:N.a,VNavigationDrawer:P.a,VToolbarTitle:y.a})},291:function(t,e,o){o(292),t.exports=o(293)},315:function(t,e,o){"use strict";o(236)},316:function(t,e,o){var n=o(19)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},82:function(t,e,o){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(315),o(93)),l=o(123),c=o.n(l),d=o(418),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[291,9,3,10]]]);