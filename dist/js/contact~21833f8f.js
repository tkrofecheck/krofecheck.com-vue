/*!
 * hash: 097bfeb996b7bfd08411
 * name: contact~21833f8f
 * version: 1.2.2
 * file: js/contact~21833f8f.js
 * timestamp: 2021-08-10T07:14:14.894-04:00
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact~21833f8f"],{"606d":function(e,t,a){},"894e":function(e,t,a){"use strict";a("606d")},b8fa:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto px-4 py-4",attrs:{tile:""}},[a("v-card-title",{staticClass:"no-overflow-x pl-0 pr-0"},[a("span",[e._v("I love to network with new people, so feel free to reach out!")])]),a("v-card-text",{staticClass:"no-overflow-x pl-0 pr-0"},[a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[a("validation-provider",{attrs:{name:"Name",rules:"required|max:40"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{counter:20,"error-messages":r,label:"Full Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{"error-messages":r,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-select",{attrs:{items:e.items,"error-messages":r,label:"Subject","data-vv-name":"select",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"message",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-textarea",{attrs:{"error-messages":r,label:"Message",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})]}}],null,!0)}),a("v-card-actions",{staticClass:"d-block"},[a("div",{staticClass:"mb-4"},[a("validation-provider",{attrs:{name:"recaptcha",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("recaptcha",{attrs:{clear:e.clearRecaptcha,sitekey:e.sitekey,"error-messages":r},on:{onVerified:e.onRecaptchaVerified},model:{value:e.recaptcha,callback:function(t){e.recaptcha=t},expression:"recaptcha"}})]}}],null,!0)})],1),a("div",{staticClass:"mb-4"},[a("v-btn",{staticClass:"primary mr-4",attrs:{type:"submit",disabled:r}},[e._v(" submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1),a("div",[a("p",{attrs:{id:"my-form-status"},domProps:{innerHTML:e._s(e.statusMessage)}})])])],1)]}}])})],1),a("v-divider")],1)},s=[],i=a("5530"),c=(a("b0c0"),a("d3b7"),a("4c93")),n=a("7bb1"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.visible?a("vue-recaptcha",{ref:"recaptcha",attrs:{sitekey:e.sitekey,loadRecaptchaScript:!0},on:{verify:e.onVerify,expired:e.onExpired}}):a("vue-recaptcha",{ref:"recaptcha",attrs:{size:"invisible",sitekey:e.sitekey,loadRecaptchaScript:!0},on:{verify:e.onVerify,expired:e.onExpired}})],1)},l=[],u=a("e096"),d={name:"ReCaptcha",components:{"vue-recaptcha":u["a"]},props:{clear:{type:Boolean,default:!1},sitekey:{type:String,default:""},visible:{type:Boolean,default:!0}},methods:{onSubmit:function(){this.$refs.recaptcha.execute()},onVerify:function(e){console.log("Verify: "+e),this.$emit("onVerified",e)},onExpired:function(){console.log("Expired")},resetRecaptcha:function(){this.$refs.recaptcha.reset()}},watch:{clear:function(e){e&&this.resetRecaptcha()}}},m=d,f=a("2877"),p=Object(f["a"])(m,o,l,!1,null,"67a2c300",null),b=p.exports;Object(n["d"])("eager"),Object(n["c"])("digits",Object(i["a"])(Object(i["a"])({},c["a"]),{},{message:"{_field_} needs to be {length} digits. ({_value_})"})),Object(n["c"])("required",Object(i["a"])(Object(i["a"])({},c["e"]),{},{message:"{_field_} can not be empty"})),Object(n["c"])("max",Object(i["a"])(Object(i["a"])({},c["c"]),{},{message:"{_field_} may not be greater than {length} characters"})),Object(n["c"])("regex",Object(i["a"])(Object(i["a"])({},c["d"]),{},{message:"{_field_} {_value_} does not match {regex}"})),Object(n["c"])("email",Object(i["a"])(Object(i["a"])({},c["b"]),{},{message:"Email must be valid"}));var v={name:"ContactForm",components:{ValidationProvider:n["b"],ValidationObserver:n["a"],recaptcha:b},data:function(){return{name:"",email:"",select:null,items:["General","Freelancing","Recruiter"],message:"",formSubmitUrl:"",recaptcha:"",statusMessage:"",sitekey:"6Ld1aN8bAAAAAGiTPvTa_83KPKqY0bHrA9PMR7I7",clearRecaptcha:!1}},mounted:function(){this.formSubmitUrl="https://formspree.io/f/xvodwdpo"},methods:{onSubmit:function(){var e=this;if(!this.$refs.observer.validate())return!1;var t={name:this.name,_replyto:this.email,_subject:"[".concat(this.select,"] message from krofecheck.com"),message:this.message,"g-recaptcha-response":this.recaptcha};console.log("form_data",t),fetch(this.formSubmitUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){console.log("form submit response",t),200===t.status?(e.statusMessage="Thanks for your submission!",e.$refs.observer.reset(),e.clear()):e.statusMessage=t.statusText||"Oops! There was a problem submitting your form"}))},onRecaptchaVerified:function(e){this.recaptcha=e},clear:function(){this.name="",this.email="",this.message="",this._subject="",this.recaptcha="",this.select=null,this.$refs.observer.reset(),this.clearRecaptcha=!0}}},h=v,g=(a("894e"),a("6544")),y=a.n(g),x=a("8336"),_=a("b0af"),k=a("99d9"),j=a("ce7e"),O=a("b974"),S=a("8654"),V=a("a844"),w=Object(f["a"])(h,r,s,!1,null,"9db2c142",null);t["default"]=w.exports;y()(w,{VBtn:x["a"],VCard:_["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VDivider:j["a"],VSelect:O["a"],VTextField:S["a"],VTextarea:V["a"]})}}]);
//# sourceMappingURL=contact~21833f8f.js.map