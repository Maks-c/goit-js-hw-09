parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZKD3":[function(require,module,exports) {
function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class e{constructor(e,r,n){t(this,"changeColor",()=>{this.intervalId=setInterval(()=>{this.areaRef.style.backgroundColor=this.getRandomHexColor()},this.delay),this.startBtn.disabled=!0}),this.container=document.querySelector(e),this.startBtn=this.container.querySelector("button[data-start]"),this.stopBtn=this.container.querySelector("button[data-stop]"),this.areaRef=this.container.querySelector(".area"),this.areaRef.style.width=r+"px",this.areaRef.style.height=r+"px",this.delay=n,this.startBtn.addEventListener("click",this.changeColor),this.stopBtn.addEventListener("click",this.stopChangeColor.bind(this)),this.intervalId=null}getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}stopChangeColor(){console.log(this),clearInterval(this.intervalId),this.startBtn.disabled=!1}}new e(".container",200,500),new e(".container2",400,1500);
},{}]},{},["ZKD3"], null)
//# sourceMappingURL=/goit-js-hw-09/color-switcher2.70bb2daa.js.map