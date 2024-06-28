var P=(r,i,t)=>{if(!i.has(r))throw TypeError("Cannot "+t)};var o=(r,i,t)=>(P(r,i,"read from private field"),t?t.call(r):i.get(r)),m=(r,i,t)=>{if(i.has(r))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(r):i.set(r,t)},u=(r,i,t,s)=>(P(r,i,"write to private field"),s?s.call(r,t):i.set(r,t),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&s(e)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();var W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var B={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(r){(function(i,t){r.exports?r.exports=t():i.Toastify=t()})(W,function(i){var t=function(e){return new t.lib.init(e)},s="1.12.0";t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:s,constructor:t,init:function(e){return e||(e={}),this.options={},this.toastElement=null,this.options.text=e.text||t.defaults.text,this.options.node=e.node||t.defaults.node,this.options.duration=e.duration===0?0:e.duration||t.defaults.duration,this.options.selector=e.selector||t.defaults.selector,this.options.callback=e.callback||t.defaults.callback,this.options.destination=e.destination||t.defaults.destination,this.options.newWindow=e.newWindow||t.defaults.newWindow,this.options.close=e.close||t.defaults.close,this.options.gravity=e.gravity==="bottom"?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=e.positionLeft||t.defaults.positionLeft,this.options.position=e.position||t.defaults.position,this.options.backgroundColor=e.backgroundColor||t.defaults.backgroundColor,this.options.avatar=e.avatar||t.defaults.avatar,this.options.className=e.className||t.defaults.className,this.options.stopOnFocus=e.stopOnFocus===void 0?t.defaults.stopOnFocus:e.stopOnFocus,this.options.onClick=e.onClick||t.defaults.onClick,this.options.offset=e.offset||t.defaults.offset,this.options.escapeMarkup=e.escapeMarkup!==void 0?e.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=e.ariaLive||t.defaults.ariaLive,this.options.style=e.style||t.defaults.style,e.backgroundColor&&(this.options.style.background=e.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var e=document.createElement("div");e.className="toastify on "+this.options.className,this.options.position?e.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(e.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):e.className+=" toastify-right",e.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var f in this.options.style)e.style[f]=this.options.style[f];if(this.options.ariaLive&&e.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)e.appendChild(this.options.node);else if(this.options.escapeMarkup?e.innerText=this.options.text:e.innerHTML=this.options.text,this.options.avatar!==""){var C=document.createElement("img");C.src=this.options.avatar,C.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?e.appendChild(C):e.insertAdjacentElement("afterbegin",C)}if(this.options.close===!0){var h=document.createElement("button");h.type="button",h.setAttribute("aria-label","Close"),h.className="toast-close",h.innerHTML="&#10006;",h.addEventListener("click",(function(k){k.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var c=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&c>360?e.insertAdjacentElement("afterbegin",h):e.appendChild(h)}if(this.options.stopOnFocus&&this.options.duration>0){var b=this;e.addEventListener("mouseover",function(k){window.clearTimeout(e.timeOutValue)}),e.addEventListener("mouseleave",function(){e.timeOutValue=window.setTimeout(function(){b.removeElement(e)},b.options.duration)})}if(typeof this.options.destination<"u"&&e.addEventListener("click",(function(k){k.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&e.addEventListener("click",(function(k){k.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var L=a("x",this.options),T=a("y",this.options),j=this.options.position=="left"?L:"-"+L,R=this.options.gravity=="toastify-top"?T:"-"+T;e.style.transform="translate("+j+","+R+")"}return e},showToast:function(){this.toastElement=this.buildToast();var e;if(typeof this.options.selector=="string"?e=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?e=this.options.selector:e=document.body,!e)throw"Root element is not defined";var f=t.defaults.oldestFirst?e.firstChild:e.lastChild;return e.insertBefore(this.toastElement,f),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(e){e.className=e.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),e.parentNode&&e.parentNode.removeChild(e),this.options.callback.call(e),t.reposition()}).bind(this),400)}},t.reposition=function(){for(var e={top:15,bottom:15},f={top:15,bottom:15},C={top:15,bottom:15},h=document.getElementsByClassName("toastify"),c,b=0;b<h.length;b++){n(h[b],"toastify-top")===!0?c="toastify-top":c="toastify-bottom";var L=h[b].offsetHeight;c=c.substr(9,c.length-1);var T=15,j=window.innerWidth>0?window.innerWidth:screen.width;j<=360?(h[b].style[c]=C[c]+"px",C[c]+=L+T):n(h[b],"toastify-left")===!0?(h[b].style[c]=e[c]+"px",e[c]+=L+T):(h[b].style[c]=f[c]+"px",f[c]+=L+T)}return this};function a(e,f){return f.offset[e]?isNaN(f.offset[e])?f.offset[e]:f.offset[e]+"px":"0px"}function n(e,f){return!e||typeof f!="string"?!1:!!(e.className&&e.className.trim().split(/\s+/gi).indexOf(f)>-1)}return t.lib.init.prototype=t.lib,t})})(B);var D=B.exports;const F=A(D);var O,v,N;class ${constructor(i="marcador"){m(this,O,void 0);m(this,v,[{name:"X",puntos:0},{name:"O",puntos:0}]);m(this,N,!1);u(this,O,i),this.imprimir()}addPuntos(i){if(o(this,N))alert("El juego ha terminado. No se pueden agregar más puntos.");else{let t=o(this,v).find(s=>s.name===i);t.puntos++,this.imprimir(),this.ganadorPartidas()}}imprimir(){let i=document.getElementById(o(this,O)),t=document.createElement("ul");o(this,v).forEach(s=>{let a=document.createElement("li");a.textContent=`Jugador ${s.name} tiene ${s.puntos} puntos`,t.append(a)}),i.innerHTML="",i.append(t)}ganadorPartidas(){let i=parseInt(document.getElementById("numPartidas").value);if(o(this,v).reduce((s,a)=>s+a.puntos,0)>=i){let s=o(this,v).reduce((n,e)=>e.puntos>n?e.puntos:n,0),a=o(this,v).find(n=>n.puntos===s);alert(`El ganador es: Jugador ${a.name}`),u(this,N,!0)}}}O=new WeakMap,v=new WeakMap,N=new WeakMap;var p,l,d,x,M,I,w,E;class q{constructor(i=3,t=!1){m(this,p,void 0);m(this,l,void 0);m(this,d,void 0);m(this,x,void 0);m(this,M,void 0);m(this,I,void 0);m(this,w,!1);m(this,E,void 0);u(this,p,new Array),u(this,l,i),u(this,I,t),u(this,E,[]),this.tableroLimpiado=!1;for(let s=0;s<o(this,l);s++){o(this,p)[s]=new Array;for(let a=0;a<o(this,l);a++)o(this,p)[s][a]=null}u(this,d,"X"),u(this,M,new $)}registrarJugada(i,t){this.tableroLimpiado&&(u(this,E,[]),this.tableroLimpiado=!1);const s=new Date,a=`${s.getHours()}:${s.getMinutes()}:${s.getSeconds()}`,e=`El jugador ${o(this,d)==="X"?"X":"O"} ha puesto una ficha en la casilla ${i},${t} a las ${a}`;o(this,E).push(e),this.actualizarRegistroJugadas()}actualizarRegistroJugadas(){const i=document.getElementById("registroJugadas");i.innerHTML="",o(this,E).forEach(t=>{const s=document.createElement("div");s.textContent=t,i.appendChild(s)})}imprimir(i="tablero"){let t=document.getElementById(i);u(this,x,i),t.innerHTML="";for(let s=0;s<o(this,l);s++)for(let a=0;a<o(this,l);a++){let n=document.createElement("div");n.dataset.fila=s,n.dataset.columna=a,n.dataset.libre="",o(this,p)[s][a]&&(n.textContent=o(this,p)[s][a],n.dataset.libre=o(this,p)[s][a]),t.appendChild(n),this.addEventClick(n)}t.style.gridTemplateColumns=`repeat(${o(this,l)}, 1fr)`}isFree(i,t){return o(this,p)[i][t]===null}setCasilla(i,t,s){return this.isFree(i,t)?(o(this,p)[i][t]=s,!0):!1}getCasilla(i,t){return o(this,p)[i][t]}toogleTurno(){if(o(this,w))return!1;if(o(this,d)==="X"){if(u(this,d,"O"),o(this,I)){let i=this.getCasillaFreeRandom();if(this.setCasilla(i.i,i.j,"O"),this.imprimir(),this.comprobarResultados(),o(this,w))return!1;this.toogleTurno()}}else u(this,d,"X")}comprobarResultados(){let i,t,s=!1;for(i=0;i<o(this,l)&&!s;i++){let n=0;for(t=0;t<o(this,l);t++)t!==0&&this.getCasilla(i,t)===this.getCasilla(i,t-1)&&this.getCasilla(i,t)!==null&&n++;n===o(this,l)-1&&(console.log("Linea"),s=!0)}for(t=0;t<o(this,l)&&!s;t++){let n=0;for(i=0;i<o(this,l);i++)i!==0&&this.getCasilla(i,t)===this.getCasilla(i-1,t)&&this.getCasilla(i,t)!==null&&n++;n===o(this,l)-1&&(console.log("Columna"),s=!0)}let a=0;for(let n=0;n<o(this,l);n++)n!==0&&this.getCasilla(n,n)===this.getCasilla(n-1,n-1)&&this.getCasilla(n,n)!==null&&a++;a===o(this,l)-1&&(console.log("Diagonal de izq a derecha"),s=!0),a=0;for(let n=o(this,l)-1;n>=0;n--)if(n!==o(this,l)-1){let e=o(this,l)-1-n;this.getCasilla(n,e)===this.getCasilla(n+1,e-1)&&this.getCasilla(n,e)!==null&&a++}a===o(this,l)-1&&(console.log("Diagonal de derecha a izquierda"),s=!0),s?(u(this,w,!0),F({text:`Ha ganado el jugador ${o(this,d)}`,newWindow:!0,close:!0,gravity:"top",position:"center",stopOnFocus:!0,style:{background:"blue"},onClick:function(){}}).showToast(),document.querySelectorAll('div[data-libre=""]').forEach(e=>{e.dataset.libre="-"}),o(this,M).addPuntos(o(this,d)),document.querySelector(".clearGame").classList.toggle("show")):this.isFull()&&(F({text:"Han sido tablas",newWindow:!0,close:!0,gravity:"top",position:"center",stopOnFocus:!0,style:{background:"blue"},onClick:function(){}}).showToast(),document.querySelector(".clearGame").classList.toggle("show"),u(this,w,!0))}isFull(){return!o(this,p).some(i=>i.some(t=>t===null))}addEventClick(i){i.addEventListener("click",t=>{let s=t.currentTarget;s.dataset.libre===""&&(s.textContent=o(this,d),this.setCasilla(s.dataset.fila,s.dataset.columna,o(this,d)),s.dataset.libre=o(this,d),this.comprobarResultados(),this.toogleTurno())}),i.addEventListener("mouseover",t=>{t.currentTarget.dataset.libre===""&&(t.currentTarget.textContent=o(this,d))}),i.addEventListener("mouseleave",t=>{t.currentTarget.dataset.libre===""&&(t.currentTarget.textContent="")})}get dimension(){return o(this,l)}get elementID(){return o(this,x)}limpiar(){u(this,p,o(this,p).map(i=>i.map(t=>null))),u(this,w,!1),this.imprimir(),document.querySelector(".clearGame").classList.toggle("show"),this.tableroLimpiado=!0}getCasillaFreeRandom(){let i,t;do i=Math.floor(Math.random()*o(this,l)),t=Math.floor(Math.random()*o(this,l));while(!this.isFree(i,t));return{i,j:t}}addEventClick(i){i.addEventListener("click",t=>{let s=t.currentTarget;if(s.dataset.libre===""){const a=parseInt(s.dataset.fila),n=parseInt(s.dataset.columna);s.textContent=o(this,d),this.setCasilla(a,n,o(this,d)),s.dataset.libre=o(this,d),this.registrarJugada(a,n),this.comprobarResultados(),this.toogleTurno()}}),i.addEventListener("mouseover",t=>{t.currentTarget.dataset.libre===""&&(t.currentTarget.textContent=o(this,d))}),i.addEventListener("mouseleave",t=>{t.currentTarget.dataset.libre===""&&(t.currentTarget.textContent="")})}}p=new WeakMap,l=new WeakMap,d=new WeakMap,x=new WeakMap,M=new WeakMap,I=new WeakMap,w=new WeakMap,E=new WeakMap;const G=document.getElementById("createTable"),y=document.getElementById("dimension"),z=document.getElementById("resetGame"),V=document.querySelectorAll(".clearGameButton"),S=document.querySelector(".preGame"),H=document.querySelector(".inGame");document.getElementById("registroJugadas");let J=document.getElementById("registroJugadas"),g;G.addEventListener("click",r=>{if(!y.value)return F({text:"Debe indicar una dimensión válida",duration:3e3,newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"red"},onClick:function(){}}).showToast(),y.classList.add("error"),y.focus(),!1;if(isNaN(y.value))return F({text:"Debe introducir un número válido",duration:3e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"red"},onClick:function(){}}).showToast(),y.classList.add("error"),y.focus(),!1;let i=document.getElementById("machine");g=new q(parseInt(y.value),i.checked),g.imprimir("tablero"),S.classList.toggle("hide"),H.classList.toggle("hide")});y.addEventListener("keydown",()=>{y.classList.remove("error")});for(let r of V)r.addEventListener("click",()=>{g.limpiar(),J.innerHTML=""});z.addEventListener("click",r=>{document.getElementById(g.elementID).innerHTML="",document.getElementById("marcador").innerHTML="",J.innerHTML="",g=null,S.classList.toggle("hide"),H.classList.toggle("hide"),y.value="",y.focus()});document.querySelector("#tablero").addEventListener("click",r=>{let i=r.target;i.dataset.libre===""&&(i.textContent=g.turno,g.setCasilla(i.dataset.fila,i.dataset.columna,g.turno),i.dataset.libre=g.turno,g.registrarJugada(i.dataset.fila,i.dataset.columna),g.comprobarResultados(),g.toogleTurno())});
