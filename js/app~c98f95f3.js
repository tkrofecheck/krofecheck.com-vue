/*!
 * hash: 15061eb9615d3b0a52c8
 * name: app~c98f95f3
 * version: 1.1.3
 * file: js/app~c98f95f3.js
 * timestamp: 2021-08-02T09:35:40.182-04:00
 */(function(t){function e(e){for(var n,i,s=e[0],c=e[1],p=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(f.length)f.shift()();return a.push.apply(a,p||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},i={"app~c98f95f3":0},r={"app~c98f95f3":0},a=[];function s(t){return c.p+"js/"+({"404~f0676f14":"404~f0676f14","contact~project-dialog~78934547":"contact~project-dialog~78934547","contact~31ecd969":"contact~31ecd969","contact~d939e436":"contact~d939e436","project-dialog~31ecd969":"project-dialog~31ecd969","portfolio~21833f8f":"portfolio~21833f8f"}[t]||t)+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={"contact~31ecd969":1,"project-dialog~31ecd969":1};i[t]?e.push(i[t]):0!==i[t]&&o[t]&&e.push(i[t]=new Promise((function(e,o){for(var n="css/"+({"404~f0676f14":"404~f0676f14","contact~project-dialog~78934547":"contact~project-dialog~78934547","contact~31ecd969":"contact~31ecd969","contact~d939e436":"contact~d939e436","project-dialog~31ecd969":"project-dialog~31ecd969","portfolio~21833f8f":"portfolio~21833f8f"}[t]||t)+".css",r=c.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var p=a[s],l=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(l===n||l===r))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){p=f[s],l=p.getAttribute("data-href");if(l===n||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete i[t],m.parentNode.removeChild(m),o(a)},m.href=r;var u=document.getElementsByTagName("head")[0];u.appendChild(m)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=a);var p,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;p=function(e){l.onerror=l.onload=null,clearTimeout(m);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",f.name="ChunkLoadError",f.type=n,f.request=i,o[1](f)}r[t]=void 0}};var m=setTimeout((function(){p({type:"timeout",target:l})}),12e4);l.onerror=l.onload=p,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],l=p.push.bind(p);p.push=e,p=p.slice();for(var f=0;f<p.length;f++)e(p[f]);var m=l;a.push(["56d7","chunk-vendors~81be87c8","chunk-vendors~d939e436","chunk-vendors~fdc6512a","chunk-vendors~b1f96ece","chunk-vendors~daa565d3","chunk-vendors~4a7e9e0b","chunk-vendors~5c9ee5b2"]),o()})({"02d2":function(t,e,o){t.exports=o.p+"img/nav-paddles.png"},"035a":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{class:t.intro?"intro":"no-intro",attrs:{src:o("15fe"),height:""+(t.intro?550:250)}},[n("v-card-title",{staticClass:"no-wordbreak"},[t._v(t._s(t.title))]),n("v-card-text",[n("span",{staticClass:"no-wordbreak",domProps:{innerHTML:t._s(t.info)}})])],1)},i=[],r={name:"ParallaxBackground",props:{info:{type:String,default:""},intro:{type:Boolean,default:!1},title:{type:String,default:""}},methods:{}},a=r,s=(o("6a3c"),o("2877")),c=o("6544"),p=o.n(c),l=o("99d9"),f=o("8b9c"),m=Object(s["a"])(a,n,i,!1,null,"7cf26ab7",null);e["a"]=m.exports;p()(m,{VCardText:l["c"],VCardTitle:l["d"],VParallax:f["a"]})},"0463":function(t,e,o){t.exports=o.p+"img/2_coastal_mobile.jpg"},"056d":function(t,e,o){t.exports=o.p+"img/upnext.png"},"0d10":function(t,e,o){t.exports=o.p+"img/1_pe_storefront.jpg"},"15fe":function(t,e,o){t.exports=o.p+"img/cloud.jpg"},1771:function(t,e,o){var n={"./blue-tech-orig.jpg":"29ef","./blue-tech.jpg":"2cb6","./city.png":"7823","./cloud.jpg":"15fe","./dark-abstract.png":"ed1c","./favicon.png":"99dd","./mugshot.jpg":"980e","./portfolio/acxiom/microsites/baa.jpg":"9c8d","./portfolio/acxiom/microsites/comcast.jpg":"429b","./portfolio/acxiom/microsites/fedex.jpg":"fd5b","./portfolio/acxiom/microsites/royal_caribbean.jpg":"6f18","./portfolio/acxiom/microsites/sprint.jpg":"3bd9","./portfolio/acxiom/microsites/upromise.jpg":"ca2b","./portfolio/acxiom/wyndham/email_hojo.jpg":"faed","./portfolio/acxiom/wyndham/email_wingate.jpg":"f570","./portfolio/acxiom/wyndham/page_ramada.jpg":"3969","./portfolio/nyp/adcounts/1_home.jpg":"31b2","./portfolio/nyp/adcounts/2_select_issue.jpg":"ac57","./portfolio/nyp/adcounts/3_issue_start.jpg":"42c6","./portfolio/nyp/adcounts/4_click_save_and_see_json-1.jpg":"f004","./portfolio/nyp/adcounts/5_click_save_and_see_json-2.jpg":"2f9c","./portfolio/nyp/adcounts/6_pull_saved_ad_info.jpg":"fab3","./portfolio/nyp/email/email_signup_widget.jpg":"6411","./portfolio/nyp/email/emailpref.jpg":"5ade","./portfolio/nyp/email/move_legacy.jpg":"70a3","./portfolio/nyp/email/signup.jpg":"e45f","./portfolio/nyp/newsletter/1_newsletter.jpg":"88cf","./portfolio/nyp/newsletter/2_newsletter.jpg":"82d8","./portfolio/nyp/newsletter/3_newsletter.jpg":"d2bc","./portfolio/nyp/newsletter/4_newsletter.jpg":"a37b","./portfolio/nyp/site/alexa.jpg":"d7f2","./portfolio/nyp/site/classroomextra.jpg":"fa41","./portfolio/nyp/site/newyorkpost.jpg":"7aa8","./portfolio/nyp/site/pagesixmag.jpg":"4242","./portfolio/personal/wedding/1_personal_wedding.jpg":"497d","./portfolio/thomas/rebrand/1_rebrand.png":"ab63","./portfolio/thomas/rebrand/2_rebrand.png":"2914","./portfolio/thomas/rebrand/3_rebrand.png":"2494","./portfolio/thomas/rebrand/4_rebrand.png":"9abf","./portfolio/thomas/rebrand/5_rebrand.png":"512c","./portfolio/thomas/rebrand/6_rebrand.png":"d7d6","./portfolio/thomas/rebrand/7_rebrand.png":"1e8d","./portfolio/thomas/rebrand/8_rebrand.png":"97d6","./portfolio/thomas/rebrand/9_rebrand.png":"c7c2","./portfolio/timeinc/email/1_coastal.jpg":"ea79","./portfolio/timeinc/email/2_coastal_mobile.jpg":"0463","./portfolio/timeinc/ipad-sf/10_amex_issue.jpg":"55f3","./portfolio/timeinc/ipad-sf/1_time_library.jpg":"f249","./portfolio/timeinc/ipad-sf/2_people_storefront.jpg":"f02d","./portfolio/timeinc/ipad-sf/3_people_regform.jpg":"9902","./portfolio/timeinc/ipad-sf/4_people_myaccount.jpg":"9061","./portfolio/timeinc/ipad-sf/5_ew_storefront.jpg":"5f68","./portfolio/timeinc/ipad-sf/6_si_storefront.jpg":"76cf","./portfolio/timeinc/ipad-sf/7_si_preview.jpg":"5aec","./portfolio/timeinc/ipad-sf/8_amex_welcome.jpg":"8e00","./portfolio/timeinc/ipad-sf/9_amex_storefront.jpg":"b1e7","./portfolio/timeinc/iphone-sf/1_pe_storefront.jpg":"0d10","./portfolio/timeinc/iphone-sf/2_pe_issue.jpg":"f10c","./portfolio/timeinc/iphone-sf/3_pe_library.jpg":"b0ab","./portfolio/timeinc/kindle-sf/1_people_storefront.jpg":"fd27","./portfolio/timeinc/kindle-sf/2_people_storefront2.jpg":"817f","./portfolio/timeinc/kindle-sf/3_people_signin.jpg":"ac30","./portfolio/timeinc/misc/1_si_lookback.jpg":"d0a9","./portfolio/timeinc/misc/2_ew_webapp.jpg":"df9c","./portfolio/timeinc/misc/3_amazon_astore.jpg":"6c37","./portfolio/timeinc/misc/4_tfk_contentviewer.jpg":"99f4","./portfolio/timeinc/tfkclassroom/10_tfkclass_faq.jpg":"49ba","./portfolio/timeinc/tfkclassroom/11_tfkclass_legal.jpg":"a172","./portfolio/timeinc/tfkclassroom/1_tfkclass_welcome.jpg":"ecfe","./portfolio/timeinc/tfkclassroom/2_tfkclass_learnmore.jpg":"f58c","./portfolio/timeinc/tfkclassroom/3_tfkclass_signin.jpg":"e35a","./portfolio/timeinc/tfkclassroom/4_tfkclass_library.jpg":"bb0e","./portfolio/timeinc/tfkclassroom/5_tfkclass_settings.jpg":"c5dd","./portfolio/timeinc/tfkclassroom/6_tfkclass_issue.jpg":"d70e","./portfolio/timeinc/tfkclassroom/7_tfkclass_teacherquizkey.jpg":"9dc0","./portfolio/timeinc/tfkclassroom/8_tfkclass_studentquiz.jpg":"1a7b","./portfolio/timeinc/tfkclassroom/9_tfkclass_samples.jpg":"6f13","./portfolio/webmd/fe/nav-paddles.png":"02d2","./portfolio/webmd/fe/poll-inside-masonry.png":"d6c1","./portfolio/webmd/fe/tips-inside-masonry.png":"3749","./portfolio/webmd/fe/toctiles-masonry.png":"45cb","./portfolio/webmd/fe/ugc.png":"6b46","./portfolio/webmd/fe/upnext.png":"056d","./portfolio/webmd/pv/akamaiplayer.png":"4b0f","./portfolio/webmd/pv/marquee-header.png":"b3b9","./portfolio/webmd/pv/premium-video.png":"4c33","./portfolio/webmd/pv/webmdtv-marquee-header.png":"69ef","./portfolio/webmd/pv/webmdtv.png":"e478","./social-icons.png":"fe5a"};function i(t){var e=r(t);return o(e)}function r(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id="1771"},"1a7b":function(t,e,o){t.exports=o.p+"img/8_tfkclass_studentquiz.jpg"},"1e8d":function(t,e,o){t.exports=o.p+"img/7_rebrand.png"},2491:function(t,e,o){},2494:function(t,e,o){t.exports=o.p+"img/3_rebrand.png"},2914:function(t,e,o){t.exports=o.p+"img/2_rebrand.png"},"29ef":function(t,e,o){t.exports=o.p+"img/blue-tech-orig.jpg"},"2c7b":function(t,e,o){},"2cb6":function(t,e,o){t.exports=o.p+"img/blue-tech.jpg"},"2f9c":function(t,e,o){t.exports=o.p+"img/5_click_save_and_see_json-2.jpg"},"31b2":function(t,e,o){t.exports=o.p+"img/1_home.jpg"},3560:function(t,e,o){},3749:function(t,e,o){t.exports=o.p+"img/tips-inside-masonry.png"},3969:function(t,e,o){t.exports=o.p+"img/page_ramada.jpg"},"3bd9":function(t,e,o){t.exports=o.p+"img/sprint.jpg"},4242:function(t,e,o){t.exports=o.p+"img/pagesixmag.jpg"},"429b":function(t,e,o){t.exports=o.p+"img/comcast.jpg"},"42c6":function(t,e,o){t.exports=o.p+"img/3_issue_start.jpg"},"45cb":function(t,e,o){t.exports=o.p+"img/toctiles-masonry.png"},"497d":function(t,e,o){t.exports=o.p+"img/1_personal_wedding.jpg"},"49ba":function(t,e,o){t.exports=o.p+"img/10_tfkclass_faq.jpg"},"4b0f":function(t,e,o){t.exports=o.p+"img/akamaiplayer.png"},"4c33":function(t,e,o){t.exports=o.p+"img/premium-video.png"},"512c":function(t,e,o){t.exports=o.p+"img/5_rebrand.png"},"55f3":function(t,e,o){t.exports=o.p+"img/10_amex_issue.jpg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("a026"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{staticClass:"drawer__bg",attrs:{"mini-variant":t.mini,permanent:"",right:"",app:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",{staticClass:"px-2"},[n("v-list-item-avatar",[n("v-img",{attrs:{src:o("980e"),alt:"Tim Krofecheck",title:"Tim Krofecheck"}})],1),n("v-list-item-title",{staticClass:"drawer__content"},[t._v("Tim Krofecheck")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[n("v-icon",{staticClass:"drawer__content",attrs:{title:"Close Menu"}},[t._v("mdi-chevron-right")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.routes,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.path},on:{click:function(o){return o.preventDefault(),t.contactMe(o,e.action)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"drawer__content",attrs:{title:e.title}},[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"drawer__content"},[t._v(t._s(e.title))])],1)],1)})),1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.social,(function(e){return n("v-list-item",{key:e.title,on:{click:function(o){return t.goTo(e,o)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"drawer__content",attrs:{title:e.title}},[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"drawer__content"},[t._v(t._s(e.title))])],1)],1)})),1),n("v-divider"),n("div",{staticClass:"site__info"},[n("div",{staticClass:"drawer__content--small",domProps:{innerHTML:t._s(t.copyright)}}),n("div",{staticClass:"drawer__content--small",domProps:{innerHTML:t._s(t.buildInfo)}})])],1),n("v-main",{attrs:{id:"main"}},[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)],1)},r=[],a=o("9224"),s=o("f5ef"),c={name:"App",components:{},data:function(){return{buildInfo:"v".concat(a["a"]),copyright:"&copy;".concat((new Date).getFullYear()),drawer:!0,expYears:16,routes:[{title:"Home",icon:"mdi-home-city",path:"/"},{title:"Portfolio",icon:"mdi-view-dashboard",path:"/portfolio"},{title:"Contact",icon:"mdi-at",path:"/contact"}],social:[{title:"LinkedIn",icon:"mdi-linkedin",path:"https://www.linkedin.com/in/tkrofecheck/"},{title:"Github",icon:"mdi-github",path:"https://github.com/tkrofecheck"}],mini:!0}},methods:{contactMe:function(t,e){console.log(e,t),"contactMe"===e&&(t.stopPropagation(),s["a"].$emit("contact-dialog",!0))},goTo:function(t,e){e&&e.preventDefault(),window.open(t.path)}}},p=c,l=(o("5c0b"),o("2877")),f=o("6544"),m=o.n(f),u=o("7496"),d=o("8336"),g=o("a523"),_=o("ce7e"),v=o("132d"),b=o("adda"),y=o("8860"),h=o("da13"),x=o("8270"),j=o("5d23"),w=o("34c3"),k=o("f6c4"),C=o("f774"),A=Object(l["a"])(p,i,r,!1,null,null,null),V=A.exports;m()(A,{VApp:u["a"],VBtn:d["a"],VContainer:g["a"],VDivider:_["a"],VIcon:v["a"],VImg:b["a"],VList:y["a"],VListItem:h["a"],VListItemAvatar:x["a"],VListItemContent:j["a"],VListItemIcon:w["a"],VListItemTitle:j["b"],VMain:k["a"],VNavigationDrawer:C["a"]});o("d3b7"),o("3ca3"),o("ddb0");var S=o("8c4f"),P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-sheet",{attrs:{id:"home"}},[o("v-row",{attrs:{dense:""}},[o("v-col",{attrs:{cols:"12"}},[o("intro",{attrs:{info:"Hi, my name is Tim Krofecheck! I am a seasoned Web Developer with "+t.skillset.max+" years professional experience. I live in Queens, NY and work at WebMD as Team Lead of Development. Currently, my favorite tech to work with is Vue.js. Prior to WebMD, I worked at Thomas as a UI Engineer helping rebrand the company website. I've also spent time at Time Inc. as an HTML5 developer creating webview storefronts on the iPad, iPhone and Kindle Fire. I've also upheld several development roles at the New York Post, Acxiom Digital and Colgate University. During my free time, I enjoy Freelancing and networking with others, so feel free to send me a message!",title:"Who is he?"}})],1),o("v-col",{attrs:{cols:"12"}},[o("experience",{attrs:{list:t.experience,title:"Where has he been?",info:"After completing my Bachelor of Technology (Web Development) degree at SUNY Morrisville, I've had the opportunity to work and live in various places throughout New York State."}}),o("skillset",{attrs:{max:t.skillset.max,list:t.skillset.list,progress:!0,title:"What can he do?",info:" With years of experience throughout my career of "+t.skillset.max+" years, I've obtained a strong set of skills."}}),o("hobby",{attrs:{list:t.hobbies,title:"Why not do other things too?",info:"In my spare time I have several interests and hobbies."}}),o("contact",{attrs:{contact:!0,title:"How do you contact me?",info:"I love to network with new people, so feel free to reach out!"}})],1)],1)],1)},I=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",sm12:""}},[o("v-card",{staticClass:"mx-auto mb-8",attrs:{tile:"",flat:"",elevation:"5"}},[o("parallax",{attrs:{title:t.title,intro:!0,info:t.info,background:t.background}})],1)],1)],1)},M=[],L=o("035a"),E={name:"Intro",components:{Parallax:L["a"]},props:{background:{type:String,default:""},info:{type:String,default:""},title:{type:String,default:""}},methods:{getImageUrl:function(t){return o("1771")("./".concat(t))}}},T=E,D=o("b0af"),H=o("0e8f"),B=o("a722"),N=Object(l["a"])(T,O,M,!1,null,"2b9450dd",null),Y=N.exports;m()(N,{VCard:D["a"],VFlex:H["a"],VLayout:B["a"]});var W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",sm12:""}},[o("v-card",{staticClass:"mx-auto my-4",attrs:{tile:"",flat:"",elevation:"5"}},[o("parallax",{attrs:{title:t.title,info:t.info,background:t.background}}),o("v-card-text",[o("v-container",{attrs:{fluid:""}},[o("v-row",t._l(t.list,(function(e,n){return o("v-col",{key:e+"-"+n,staticClass:"d-flex-inline align-stretch",attrs:{cols:12}},[o("v-card",{attrs:{flat:"",tile:"",outlined:"",elevation:"5"}},[o("v-container",{attrs:{fluid:""}},[o("v-row",{staticClass:"ma-0 pa-1"},[o("v-col",{staticClass:"ma-0 pa-1",attrs:{cols:"12",sm:"4"}},[o("v-card-title",[t._v(t._s(e.city))])],1)],1),o("v-row",{staticClass:"ma-0 pa-1"},t._l(e.companies,(function(e,n){return o("v-col",{key:e+"-"+n,class:"ma-0 pa-1",attrs:{cols:"12",sm:"4"}},[o("v-card-text",[o("div",[o("strong",[t._v(t._s(e.company))])]),o("div",[t._v(" "+t._s(e.industry)+" ")]),o("div",[o("em",[t._v(t._s(e.position))])]),o("div",[o("small",[t._v(t._s(e.year))])])])],1)})),1)],1)],1)],1)})),1),o("v-row",[o("v-col",{attrs:{cols:"12",align:"right"}},[o("v-btn",{staticClass:"primary",attrs:{to:"/portfolio",title:"Portfolio"}},[o("span",{staticClass:"d-flex align-center justify-space-between"},[t._v(" Portfolio "),o("v-icon",[t._v("mdi-arrow-right")])],1)])],1)],1)],1)],1)],1)],1)],1)},J=[],U=(o("d81d"),o("a15b"),{name:"Experience",components:{Parallax:L["a"]},props:{background:{type:String,default:""},info:{type:String,default:""},list:{type:Array,default:function(){return[]}},title:{type:String,default:""}},methods:{formatArray:function(t){var e=t.map((function(e,o){return o<t.length-1?" ".concat(e):" and ".concat(e)}));return e.join(",")}}}),z=U,Q=o("99d9"),R=o("62ad"),X=o("0fd9"),G=Object(l["a"])(z,W,J,!1,null,"0f22f120",null),F=G.exports;m()(G,{VBtn:d["a"],VCard:D["a"],VCardText:Q["c"],VCardTitle:Q["d"],VCol:R["a"],VContainer:g["a"],VFlex:H["a"],VIcon:v["a"],VLayout:B["a"],VRow:X["a"]});var q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",sm12:""}},[o("v-card",{staticClass:"mx-auto my-4",attrs:{tile:"",flat:"",elevation:"5"}},[o("parallax",{attrs:{title:t.title,info:t.info,background:t.background}}),o("v-card-text",[o("v-container",[o("v-row",t._l(t.chunkedList,(function(e,n){return o("v-col",{key:n,attrs:{flat:"",cols:"12",sm:"4"}},t._l(e,(function(e,i){return o("item-progress",{key:i,attrs:{color:t.randomColor(n+"."+i),item:e,progress:t.getProgress(e.years,t.max)}})})),1)})),1),o("v-row",[o("v-col",{attrs:{cols:"12",align:"right"}},[o("v-btn",{staticClass:"primary",attrs:{href:"https://www.linkedin.com/in/tkrofecheck/",target:"_blank",title:"LinkedIn"}},[o("span",{staticClass:"d-flex align-center justify-space-between"},[t._v(" LinkedIn "),o("v-icon",[t._v("mdi-arrow-right")])],1)])],1)],1)],1)],1)],1)],1)],1)},Z=[],K=(o("a9e3"),o("4de4"),o("fb6a"),o("99af"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersect,options:{threshold:1}},expression:"{\n    handler: onIntersect,\n    options: {\n      threshold: 1.0,\n    },\n  }"}],attrs:{flat:"",tile:""}},[o("span",[t._v(t._s(t.item.name))]),o("v-progress-linear",{attrs:{value:t.intersectingProgress,color:t.color,height:"25",indeterminate:t.isIntersecting}},[o("span",{staticClass:"progress__label"},[t._v(t._s(t.item.years)+" yr.")])])],1)}),$=[],tt={name:"ItemProgress",props:{color:{type:String,default:""},item:{type:Object,default:function(){}},progress:{type:Number,default:0}},data:function(){return{intersectingProgress:100,isIntersecting:!0}},methods:{onIntersect:function(t){this.isIntersecting=!t[0].isIntersecting,this.intersectingProgress=t[0].isIntersecting?this.progress:100}}},et=tt,ot=(o("cabc"),o("8e36")),nt=o("269a"),it=o.n(nt),rt=o("90a2"),at=Object(l["a"])(et,K,$,!1,null,"b527c88a",null),st=at.exports;m()(at,{VCard:D["a"],VProgressLinear:ot["a"]}),it()(at,{Intersect:rt["a"]});var ct={name:"Skillset",components:{ItemProgress:st,Parallax:L["a"]},props:{background:{type:String,default:""},setSize:{type:Number,default:1},info:{type:String,default:""},intro:{type:String,default:""},list:{type:Array,default:function(){return[]}},max:{type:Number,default:0},progress:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){return{buffer:16,colorCache:{},chunkedList:this.chunkList(this.setSize,this.list)}},methods:{chunkList:function(t,e){var o=e.map((function(o,n){return n%t===0?e.slice(n,n+t):null})).filter((function(t){return t}));return console.log("group",o),o},getImageUrl:function(t){return o("1771")("./".concat(t))},getProgress:function(t,e){return Math.floor(t/e*100)},randomColor:function(t){var e=function(){return Math.floor(256*Math.random())};return this.colorCache[t]||(this.colorCache[t]="rgb(".concat(e(),", ").concat(e(),", ").concat(e(),")"))}}},pt=ct,lt=Object(l["a"])(pt,q,Z,!1,null,"55971bac",null),ft=lt.exports;m()(lt,{VBtn:d["a"],VCard:D["a"],VCardText:Q["c"],VCol:R["a"],VContainer:g["a"],VFlex:H["a"],VIcon:v["a"],VLayout:B["a"],VRow:X["a"]});var mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",sm12:""}},[o("v-card",{staticClass:"mx-auto my-4",attrs:{tile:"",flat:"",elevation:"5"}},[o("parallax",{attrs:{title:t.title,info:t.info,background:t.background}}),o("v-card-text",[t._v(" "+t._s(t.formatArray(t.list))+" ")])],1)],1)],1)},ut=[],dt={name:"Hobby",components:{Parallax:L["a"]},props:{background:{type:String,default:""},info:{type:String,default:""},list:{type:Array,default:function(){return[]}},title:{type:String,default:""}},methods:{formatArray:function(t){var e=t.map((function(e,o){return o<t.length-1?" ".concat(e):" and ".concat(e)}));return e.join(",")}}},gt=dt,_t=Object(l["a"])(gt,mt,ut,!1,null,"0f1af32a",null),vt=_t.exports;m()(_t,{VCard:D["a"],VCardText:Q["c"],VFlex:H["a"],VLayout:B["a"]});var bt={name:"Home",components:{Intro:Y,Experience:F,Skillset:ft,Hobby:vt},data:function(){return{company:"WebMD / Medscape Professional",hobbies:["Broadway Shows","TV & Movies","Eating Out","Wine Tasting","Video Games","Web Development"],experience:[{city:"New York, NY",companies:[{company:"WebMD (Medscape)",position:"Sr. Web Applications Developer / Team Lead",industry:"Health Media & Services",year:"Aug 2018 - Present"},{company:"Thomas",position:"UI Engineer",industry:"Industrial Products",year:"Nov 2017 - Jul 2018"},{company:"WebMD",position:"Sr. Web Developer / Tech Lead",industry:"Health Media & Services",year:"May 2015 - Oct 2017"},{company:"Time Inc.",position:"HTML Developer / Contract Developer",industry:"Digital Publishing & Media",year:"Jul 2012 - Aug 2015"},{company:"New York Post",position:"Web Developer",industry:"Publishing & Broadcasting",year:"Aug 2010 - Jul 2012"},{company:"Acxiom Digital",position:"Content Specialist / Solutions Developer",industry:"Email Advertising & Marketing",year:"Dec 2005 - Jul 2010"}]},{city:"Albany, NY",companies:[{company:"Linium LLC",position:"Service Desk Support Professional",industry:"Software & Technology Services",year:"Sep 2004 - Aug 2005"}]},{city:"Hamilton, NY",companies:[{company:"Colgate University",position:"Desktop Support Intern",industry:"Higher Education",year:"Jan 2004 - May 2004"}]}],skillset:{max:16,list:[{name:"HTML",years:16},{name:"CSS",years:16},{name:"JavaScript",years:16},{name:"Git",years:8},{name:"SCSS",years:8},{name:"jQuery",years:8},{name:"Agile",years:7},{name:"Node.js",years:7},{name:"Webpack",years:6},{name:"Grunt",years:5},{name:"Handlebars",years:3},{name:"Vue/Vuex",years:2},{name:"React",years:2},{name:"Backbone",years:2},{name:"Bootstrap 4",years:1},{name:"Vuetify",years:1},{name:"GraphQL",years:1},{name:"Apollo Client",years:1}]}}}},yt=bt,ht=(o("906e"),o("8dd9")),xt=Object(l["a"])(yt,P,I,!1,null,"5e1f3bed",null),jt=xt.exports;m()(xt,{VCol:R["a"],VRow:X["a"],VSheet:ht["a"]}),n["a"].use(S["a"]);var wt=[{path:"/",name:"home",component:jt},{path:"/portfolio",name:"portfolio",component:function(){return o.e("portfolio~21833f8f").then(o.bind(null,"c9e5"))}},{path:"/contact",name:"contact",component:function(){return Promise.all([o.e("contact~project-dialog~78934547"),o.e("contact~31ecd969"),o.e("contact~d939e436")]).then(o.bind(null,"b8fa"))}},{path:"*",name:"404",component:function(){return o.e("404~f0676f14").then(o.bind(null,"9703"))}}],kt=new S["a"]({mode:"history",routes:wt}),Ct=kt,At=o("f309"),Vt=o("fcf4");console.log("colors",Vt["a"]),n["a"].use(At["a"]);var St=new At["a"]({theme:{themes:{light:{primary:Vt["a"].blueGrey.darken1}}}});o("f1ea"),n["a"].config.productionTip=!1,new n["a"]({router:Ct,vuetify:St,render:function(t){return t(V)}}).$mount("#app")},"5ade":function(t,e,o){t.exports=o.p+"img/emailpref.jpg"},"5aec":function(t,e,o){t.exports=o.p+"img/7_si_preview.jpg"},"5c0b":function(t,e,o){"use strict";o("9c0c")},"5f68":function(t,e,o){t.exports=o.p+"img/5_ew_storefront.jpg"},6411:function(t,e,o){t.exports=o.p+"img/email_signup_widget.jpg"},"69ef":function(t,e,o){t.exports=o.p+"img/webmdtv-marquee-header.png"},"6a3c":function(t,e,o){"use strict";o("2c7b")},"6b46":function(t,e,o){t.exports=o.p+"img/ugc.png"},"6c37":function(t,e,o){t.exports=o.p+"img/3_amazon_astore.jpg"},"6f13":function(t,e,o){t.exports=o.p+"img/9_tfkclass_samples.jpg"},"6f18":function(t,e,o){t.exports=o.p+"img/royal_caribbean.jpg"},"70a3":function(t,e,o){t.exports=o.p+"img/move_legacy.jpg"},"76cf":function(t,e,o){t.exports=o.p+"img/6_si_storefront.jpg"},7823:function(t,e,o){t.exports=o.p+"img/city.png"},"7aa8":function(t,e,o){t.exports=o.p+"img/newyorkpost.jpg"},"817f":function(t,e,o){t.exports=o.p+"img/2_people_storefront2.jpg"},"82d8":function(t,e,o){t.exports=o.p+"img/2_newsletter.jpg"},"88cf":function(t,e,o){t.exports=o.p+"img/1_newsletter.jpg"},"8e00":function(t,e,o){t.exports=o.p+"img/8_amex_welcome.jpg"},9061:function(t,e,o){t.exports=o.p+"img/4_people_myaccount.jpg"},"906e":function(t,e,o){"use strict";o("2491")},9224:function(t){t.exports=JSON.parse('{"a":"1.1.3"}')},"97d6":function(t,e,o){t.exports=o.p+"img/8_rebrand.png"},"980e":function(t,e,o){t.exports=o.p+"img/mugshot.jpg"},9902:function(t,e,o){t.exports=o.p+"img/3_people_regform.jpg"},"99dd":function(t,e){t.exports="data:image/png;base64,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"},"99f4":function(t,e,o){t.exports=o.p+"img/4_tfk_contentviewer.jpg"},"9abf":function(t,e,o){t.exports=o.p+"img/4_rebrand.png"},"9c0c":function(t,e,o){},"9c8d":function(t,e,o){t.exports=o.p+"img/baa.jpg"},"9dc0":function(t,e,o){t.exports=o.p+"img/7_tfkclass_teacherquizkey.jpg"},a172:function(t,e,o){t.exports=o.p+"img/11_tfkclass_legal.jpg"},a37b:function(t,e,o){t.exports=o.p+"img/4_newsletter.jpg"},ab63:function(t,e,o){t.exports=o.p+"img/1_rebrand.png"},ac30:function(t,e,o){t.exports=o.p+"img/3_people_signin.jpg"},ac57:function(t,e,o){t.exports=o.p+"img/2_select_issue.jpg"},b0ab:function(t,e,o){t.exports=o.p+"img/3_pe_library.jpg"},b1e7:function(t,e,o){t.exports=o.p+"img/9_amex_storefront.jpg"},b3b9:function(t,e,o){t.exports=o.p+"img/marquee-header.png"},bb0e:function(t,e,o){t.exports=o.p+"img/4_tfkclass_library.jpg"},c5dd:function(t,e,o){t.exports=o.p+"img/5_tfkclass_settings.jpg"},c7c2:function(t,e,o){t.exports=o.p+"img/9_rebrand.png"},ca2b:function(t,e,o){t.exports=o.p+"img/upromise.jpg"},cabc:function(t,e,o){"use strict";o("3560")},d0a9:function(t,e,o){t.exports=o.p+"img/1_si_lookback.jpg"},d2bc:function(t,e,o){t.exports=o.p+"img/3_newsletter.jpg"},d6c1:function(t,e,o){t.exports=o.p+"img/poll-inside-masonry.png"},d70e:function(t,e,o){t.exports=o.p+"img/6_tfkclass_issue.jpg"},d7d6:function(t,e,o){t.exports=o.p+"img/6_rebrand.png"},d7f2:function(t,e,o){t.exports=o.p+"img/alexa.jpg"},df9c:function(t,e,o){t.exports=o.p+"img/2_ew_webapp.jpg"},e35a:function(t,e,o){t.exports=o.p+"img/3_tfkclass_signin.jpg"},e45f:function(t,e,o){t.exports=o.p+"img/signup.jpg"},e478:function(t,e,o){t.exports=o.p+"img/webmdtv.png"},ea79:function(t,e,o){t.exports=o.p+"img/1_coastal.jpg"},ecfe:function(t,e,o){t.exports=o.p+"img/1_tfkclass_welcome.jpg"},ed1c:function(t,e,o){t.exports=o.p+"img/dark-abstract.png"},f004:function(t,e,o){t.exports=o.p+"img/4_click_save_and_see_json-1.jpg"},f02d:function(t,e,o){t.exports=o.p+"img/2_people_storefront.jpg"},f10c:function(t,e,o){t.exports=o.p+"img/2_pe_issue.jpg"},f1ea:function(t,e,o){"use strict";o.r(e);o("d3b7"),o("3ca3"),o("ddb0");var n=o("a026");n["a"].component("project-dialog",(function(){return Promise.all([o.e("contact~project-dialog~78934547"),o.e("project-dialog~31ecd969")]).then(o.bind(null,"af4a"))})),n["a"].component("project-gallery",(function(){return Promise.all([o.e("contact~project-dialog~78934547"),o.e("project-dialog~31ecd969")]).then(o.bind(null,"ca68"))}))},f249:function(t,e,o){t.exports=o.p+"img/1_time_library.jpg"},f570:function(t,e,o){t.exports=o.p+"img/email_wingate.jpg"},f58c:function(t,e,o){t.exports=o.p+"img/2_tfkclass_learnmore.jpg"},f5ef:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=o("a026"),i=new n["a"]},fa41:function(t,e,o){t.exports=o.p+"img/classroomextra.jpg"},fab3:function(t,e,o){t.exports=o.p+"img/6_pull_saved_ad_info.jpg"},faed:function(t,e,o){t.exports=o.p+"img/email_hojo.jpg"},fd27:function(t,e,o){t.exports=o.p+"img/1_people_storefront.jpg"},fd5b:function(t,e,o){t.exports=o.p+"img/fedex.jpg"},fe5a:function(t,e,o){t.exports=o.p+"img/social-icons.png"}});
//# sourceMappingURL=app~c98f95f3.js.map