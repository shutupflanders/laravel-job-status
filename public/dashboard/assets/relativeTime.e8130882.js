import{a as T,e as P}from"./use-router-link.363cdb16.js";import{c as Q,f as A}from"./render.ef0c849b.js";import{b as D}from"./format.801e7424.js";import{c,h as g,g as F}from"./index.a30e379d.js";import{c as I}from"./dayjs.min.54da9cde.js";const V={...T,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},B=50,N=2*B,_=N*Math.PI,j=Math.round(_*1e3)/1e3;var J=Q({name:"QCircularProgress",props:{...V,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:C}){const{proxy:{$q:o}}=F(),y=P(e),d=c(()=>{const t=(o.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(o.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-t}deg)`:`rotate3d(0, 0, 1, ${t-90}deg)`}}),i=c(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),a=c(()=>N/(1-e.thickness/2)),S=c(()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`),m=c(()=>D(e.value,e.min,e.max)),r=c(()=>_*(1-(m.value-e.min)/(e.max-e.min))),n=c(()=>e.thickness/2*a.value);function l({thickness:t,offset:u,color:f,cls:v,rounded:k}){return g("circle",{class:"q-circular-progress__"+v+(f!==void 0?` text-${f}`:""),style:i.value,fill:"transparent",stroke:"currentColor","stroke-width":t,"stroke-dasharray":j,"stroke-dashoffset":u,"stroke-linecap":k,cx:a.value,cy:a.value,r:B})}return()=>{const t=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&t.push(g("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:B-n.value/2,cx:a.value,cy:a.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&t.push(l({cls:"track",thickness:n.value,offset:0,color:e.trackColor})),t.push(l({cls:"circle",thickness:n.value,offset:r.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const u=[g("svg",{class:"q-circular-progress__svg",style:d.value,viewBox:S.value,"aria-hidden":"true"},t)];return e.showValue===!0&&u.push(g("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},C.default!==void 0?C.default():[g("div",m.value)])),g("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:y.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:m.value},A(C.internal,u))}}}),q={exports:{}};(function(e,C){(function(o,y){e.exports=y()})(I,function(){return function(o,y,d){o=o||{};var i=y.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function S(r,n,l,t){return i.fromToBase(r,n,l,t)}d.en.relativeTime=a,i.fromToBase=function(r,n,l,t,u){for(var f,v,k,b=l.$locale().relativeTime||a,$=o.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],z=$.length,x=0;x<z;x+=1){var s=$[x];s.d&&(f=t?d(r).diff(l,s.d,!0):l.diff(r,s.d,!0));var h=(o.rounding||Math.round)(Math.abs(f));if(k=f>0,h<=s.r||!s.r){h<=1&&x>0&&(s=$[x-1]);var w=b[s.l];u&&(h=u(""+h)),v=typeof w=="string"?w.replace("%d",h):w(h,n,s.l,k);break}}if(n)return v;var M=k?b.future:b.past;return typeof M=="function"?M(v):M.replace("%s",v)},i.to=function(r,n){return S(r,n,this,!0)},i.from=function(r,n){return S(r,n,this)};var m=function(r){return r.$u?d.utc():d()};i.toNow=function(r){return this.to(m(this),r)},i.fromNow=function(r){return this.from(m(this),r)}}})})(q);var K=q.exports;export{J as Q,K as r};
