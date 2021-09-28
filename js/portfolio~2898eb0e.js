/*!
 * hash: c808ce137f4f148265c0
 * name: portfolio~2898eb0e
 * version: 1.2.3
 * file: js/portfolio~2898eb0e.js
 * timestamp: 2021-09-28T11:33:01.542-04:00
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio~2898eb0e"],{c9e5:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"portfolio"}},[t("v-container",{attrs:{fluid:""}},[t("v-row",e._l(e.portfolio,(function(a,n){return t("v-col",{key:a+"-"+n,attrs:{cols:"12"}},[t("v-card",{staticClass:"my-4",attrs:{elevation:"5",tile:""}},[t("v-card-title",{on:{click:function(t){return e.openPage(a.url)}}},[e._v(" "+e._s(a.company)+" ")]),t("v-card-subtitle",[t("em",[e._v(e._s(a.industry))])]),t("v-card-text",e._l(a.projects,(function(e,n){return t("project",{key:e+"-"+n,attrs:{company:a.company,display:e.display,name:e.name,url:a.url,note:a.note,"image-folder":e.folder,images:e.images}})})),1)],1)],1)})),1)],1),t("project-dialog")],1)},s=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:e.classNames},[e._v(" "+e._s(e.name)+" "),""!==e.imageFolder&&e.images.length>0?t("v-btn",{staticClass:"ma-2",attrs:{color:"primary",dark:"",title:"View"},on:{click:function(a){return a.preventDefault(),e.openDialog(a,!0,e.company,e.name,e.note,e.url,e.images,e.imageFolder)}}},[t("span",{staticClass:"d-flex align-center justify-space-between"},[e._v(" View "),t("v-icon",[e._v("mdi-eye-outline")])],1)]):t("span",{staticClass:"ma-2"},[e._v("Coming Soon!")])],1)},o=[],r=t("f5ef"),m={name:"Project",props:{display:{type:Boolean,default:!1},company:{String:String,default:""},name:{type:String,default:""},note:{type:String,default:""},imageFolder:{type:String,default:""},images:{type:Array,default:function(){return[]}},url:{type:String,default:""}},data:function(){return{classNames:{"d-flex":this.display,"align-center":!0,"justify-space-between":!0,hide:!this.display}}},methods:{openDialog:function(e,a,t,n,s,i,o,m){r["a"].$emit("project-dialog",a,t,n,s,i,o,m)}}},l=m,p=t("2877"),d=t("6544"),c=t.n(d),g=t("8336"),u=t("132d"),f=Object(p["a"])(l,i,o,!1,null,null,null),_=f.exports;c()(f,{VBtn:g["a"],VIcon:u["a"]});var b={name:"Portfolio",components:{Project:_},data:function(){return{portfolio:[{company:"WebMD (Medscape)",city:"New York, NY",url:"//www.medscape.com",note:"",industry:"Health News - Publishing",projects:[{display:!0,name:"Brand Alert",folder:"webmd/ba",images:[{name:"brandalert1.png"},{name:"brandalert2.png"},{name:"brandalert3.png"},{name:"brandalert4.png"},{name:"brandalert5.png"}]},{display:!0,name:"Point of Contact (Targetted Ads)",folder:"webmd/poc",images:[{name:"squareboy1.png"},{name:"ad-banner1.png"},{name:"ad-banner2.png"},{name:"ad-banner3.png"},{name:"mobile1.png"},{name:"mobile2.png"},{name:"mobile3.png"}]},{display:!0,name:"BrandSpot (Targetted Ads)",folder:"webmd/bs",images:[]}]},{company:"Thomas",city:"New York, NY",url:"//www.thomasnet.com",note:"",industry:"Industry",projects:[{display:!0,name:"Rebranding of Thomas Website",folder:"thomas/rebrand",images:[{name:"1_rebrand.png"},{name:"2_rebrand.png"},{name:"3_rebrand.png"},{name:"4_rebrand.png"},{name:"5_rebrand.png"},{name:"6_rebrand.png"},{name:"7_rebrand.png"},{name:"8_rebrand.png"},{name:"9_rebrand.png"}]}]},{company:"WebMD",city:"New York, NY",url:"//www.webmd.com",note:"",industry:"Health News - Publishing",projects:[{display:!0,name:"Funded Editorial",folder:"webmd/fe",images:[{name:"nav-paddles.png"},{name:"poll-inside-masonry.png"},{name:"tips-inside-masonry.png"},{name:"toctiles-masonry.png"},{name:"ugc.png"},{name:"upnext.png"}]},{display:!0,name:"Premium Video",folder:"webmd/pv",images:[{name:"akamaiplayer.png"},{name:"marquee-header.png"},{name:"premium-video.png"},{name:"webmdtv.png"},{name:"webmdtv-marquee-header.png"}]}]},{company:"Time Inc.",city:"New York, NY",url:"//www.timeinc.com",note:"",industry:"Digital Media - Publishing",projects:[{display:!0,name:"Time For Kids Classroom App",folder:"timeinc/tfkclassroom",images:[{name:"1_tfkclass_welcome.jpg"},{name:"2_tfkclass_learnmore.jpg"},{name:"3_tfkclass_signin.jpg"},{name:"4_tfkclass_library.jpg"},{name:"5_tfkclass_settings.jpg"},{name:"6_tfkclass_issue.jpg"},{name:"7_tfkclass_teacherquizkey.jpg"},{name:"8_tfkclass_studentquiz.jpg"},{name:"9_tfkclass_samples.jpg"},{name:"10_tfkclass_faq.jpg"},{name:"11_tfkclass_legal.jpg"}]},{display:!0,name:"Transactional Emails",folder:"timeinc/email",images:[{name:"1_coastal.jpg",text:"Forgot Password Email (desktop version)"},{name:"2_coastal_mobile.jpg",text:"Forgot Password Email (mobile version)"}]},{display:!0,name:"iPhone Storefront",folder:"timeinc/iphone-sf",images:[{name:"1_pe_storefront.jpg",text:"Custom webview storefront. Separate code from iPad storefront. Latest issue in hero position along with back issues available in vertical scroll."},{name:"2_pe_issue.jpg",text:"Details about the issue when tapping the issue cover from the storefront. "},{name:"3_pe_library.jpg",text:"Library consisting of entitled issues purchased through the storefront, activated via print subscription, or entitled by other (online digital subscription without iTunes) means through login credentials. "}]},{display:!0,name:"iPad Storefront",folder:"timeinc/ipad-sf",images:[{name:"1_time_library.jpg",text:"Library consisting of issues to be purchased, downloaded, and viewed. The top horizontal section is a web viewer used for cross-selling to other brands and apps as well as advertising subscriptions, free samples, and special offers."},{name:"2_people_storefront.jpg",text:"The storefront for People is unique in that it is the only brand using this design. The storefront lists the most current issue along with recent back issues to be purchased and downloaded."},{name:"3_people_regform.jpg",text:"This is a registration form used to create a digital account. A digital account allows you to sign-in to different apps (iPad / Kindle Fire) to access purchased issues and subscriptions."},{name:"4_people_myaccount.jpg",text:"The my account section allows the user to navigation through account management from 'forgot password' to 'terms of service' and 'privacy policies'."},{name:"5_ew_storefront.jpg",text:"Similar to the People storefront, this is the shared designed across other Time Inc brands on iPad."},{name:"6_si_storefront.jpg",text:"Similar to the People storefront, this is the shared designed across other Time Inc brands on iPad."},{name:"7_si_preview.jpg",text:"Tapping a cover within the store that has not been downloaded, will open this preview. The preview provides a small example of what can be found within the issue, along with the option to purchase or download the issue."},{name:"8_amex_welcome.jpg",text:"First screen displayed. UX design helps user identify where to begin (subscribe digtally, browse issues, or access if you are a print subscriber)."},{name:"9_amex_storefront.jpg",text:"Unique to the traditional Time Inc storefronts, this is a new look to experiment what encourages users to browse, subscribe or buy single copies."},{name:"10_amex_issue.jpg",text:"Screenshot with a swipable UX to allow users to see what they are buying, before they commit to a purchase."}]},{display:!0,name:"Kindle Fire Storefront",folder:"timeinc/kindle-sf",images:[{name:"1_people_storefront.jpg"},{name:"2_people_storefront2.jpg"},{name:"3_people_signin.jpg"}]},{display:!0,name:"Misc. Web Projects",folder:"timeinc/misc",images:[{name:"1_si_lookback.jpg",text:"SI Lookback (SI Vault) standalone jQuery page. - visit at http://subscription-assets.timeinc.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/si-lookback1113/si-lookback.html"},{name:"2_ew_webapp.jpg",text:"Entertainment Weekly - Adobe DPS Web Application. - visit at https://subscription.ew.com/storefront/site/ew-digitalmagazine/login.html"},{name:"3_amazon_astore.jpg",text:"Amazon Affiliate Store - iFrame pulled into Time Inc hosted landing page. - visit at http://subscription-assets.timeinc.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/amz-timebooks1114/lp.html"},{name:"4_tfk_contentviewer.jpg",text:"Sample Web Reader (images/video) to replace Adobe Flash reader for cross-browser support (iPad included). - visit at http://goo.gl/NdMa4A"}]}]},{company:"New York Post",city:"New York, NY",url:"//www.nypost.com",note:"",industry:"Digital Media - Publishing",projects:[{display:!0,name:"iPad Ad Counts",folder:"nyp/adcounts",images:[{name:"1_home.jpg"},{name:"2_select_issue.jpg"},{name:"3_issue_start.jpg"},{name:"4_click_save_and_see_json-1.jpg"},{name:"5_click_save_and_see_json-2.jpg"},{name:"6_pull_saved_ad_info.jpg"}]},{display:!0,name:"Daily e-Newsletter",folder:"nyp/newsletter",images:[{name:"1_newsletter.jpg"},{name:"2_newsletter.jpg"},{name:"3_newsletter.jpg"},{name:"4_newsletter.jpg"}]},{display:!0,name:"Email Management",folder:"nyp/email",images:[{name:"signup.jpg"},{name:"emailpref.jpg"},{name:"move_legacy.jpg"},{name:"email_signup_widget.jpg"}]},{display:!0,name:"Web Projects",folder:"nyp/site",images:[{name:"newyorkpost.jpg"},{name:"pagesixmag.jpg"},{name:"alexa.jpg"},{name:"classroomextra.jpg",text:"Classroom Extra"}]}]},{company:"Acxiom Digital",city:"New York, NY",url:"//www.acxiom.com",note:"Images may appear pixelated on larger screens due to their age and original screen capture size.",industry:"Email Marketing",projects:[{display:!0,name:"Dynamic Newsletters / Microsite - Wyndham Worldwide Hotels",folder:"acxiom/wyndham",images:[{name:"email_hojo.jpg"},{name:"email_wingate.jpg"},{name:"page_ramada.jpg"}]},{display:!0,name:"Microsites",folder:"acxiom/microsites",images:[{name:"baa.jpg"},{name:"comcast.jpg"},{name:"fedex.jpg"},{name:"royal_caribbean.jpg"},{name:"sprint.jpg"},{name:"upromise.jpg"}]}]},{company:"krofecheck.com",city:"Queens, NY",url:"//wedding.krofecheck.com",note:"",industry:"Personal",projects:[{display:!0,name:"Wedding Website",folder:"personal/wedding",images:[{name:"1_personal_wedding.jpg"}]}]}]}}},w=b,y=t("b0af"),h=t("99d9"),j=t("62ad"),v=t("a523"),k=t("0fd9"),x=Object(p["a"])(w,n,s,!1,null,"002fc423",null);a["default"]=x.exports;c()(x,{VCard:y["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:j["a"],VContainer:v["a"],VRow:k["a"]})},f5ef:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t("a026"),s=new n["a"]}}]);
//# sourceMappingURL=portfolio~2898eb0e.js.map