import{f as D}from"./index.acfb09c8.js";var m={exports:{}};(function(Y,v){(function(r,e){Y.exports=e()})(D,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,i,s){var n=i.prototype,c=n.format;s.en.formats=r,n.format=function(t){t===void 0&&(t="YYYY-MM-DDTHH:mm:ssZ");var a=this.$locale().formats,l=function(f,M){return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(h,L,o){var u=o&&o.toUpperCase();return L||M[o]||r[o]||M[u].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,d,p){return d||p.slice(1)})})}(t,a===void 0?{}:a);return c.call(this,l)}}})})(m);var T=m.exports;export{T as l};
