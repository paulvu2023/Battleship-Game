(()=>{"use strict";var n={28:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"html, body {\n  height: 100%;\n  width: 100%;\n}\n\n* {\n  overflow: hidden;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 150px 1fr;\n  font-family: 'Audiowide', Arial, Helvetica, sans-serif;\n  background: rgb(1, 1, 60);\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/* Styling for header */\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  font-size: 70px;\n  color: white;\n  text-shadow: 0 0 40px rgb(179, 246, 255);\n}\n\n.fa-github-alt {\n  font-size: 30px;\n  color: white;\n  transition: all 0.25s ease-in-out;\n}\n\n.fa-github-alt:hover {\n  transform: rotate(360deg);\n  color: rgb(179, 246,255);\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  gap: 80px;\n  flex: 1;\n}\n\n/* Styling for the player's board */\n.left, .right {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  align-items: end;\n  overflow:visible\n}\n\n.player-ship-count, .ai-ship-count {\n  font-size: 25px;\n  color: white;\n  margin-bottom: 10px;\n}\n\n.player-ship-count {\n  margin-right: 40px;\n}\n\n.ai-ship-count {\n  margin-left: 20px;\n}\n\n.player-board {\n  display: flex;\n  border: 2px solid rgb(219, 240, 247);\n  flex-direction: column;\n  margin-right: 20px;\n  box-shadow: rgba(93, 255, 255, 0.56) 0px 22px 70px 4px;\n}\n\n.row {\n  display: flex;\n}\n\n.player-board .square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(20px + 1.3vw);\n  height: calc(20px + 1.3vw);\n  border: 1px solid rgb(168, 207, 242);\n  font-weight: bold;\n}\n\n.player-board .square:hover {\n  background: #00c1fc;\n}\n\n.ai-board .square:hover {\n  background: rgb(135, 13, 13);\n}\n\n.square:hover {\n  cursor: pointer\n}\n\n/* Styling for AI board */\n.right {\n  align-items: start;\n}\n\n.ai-board {\n  display: flex;\n  border: 2px solid rgb(249, 179, 173);\n  flex-direction: column;\n  margin-right: 20px;\n  box-shadow: rgba(255, 98, 93, 0.7) 0px 22px 70px 10px;\n}\n\n.ai-board .square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(20px + 2vw);\n  height: calc(20px + 2vw);\n  border: 1px solid rgb(251, 148, 148);\n  font-weight: bold;\n}\n\n/* Styling for New Game Popup */\n.gameover {\n  text-align: center;\n  border: 1px solid aliceblue;\n  border-radius: 12px;\n  background: rgb(1, 1, 60);\n  width: 400px;\n  height: 200px\n}\n\n.gameover::backdrop, .place-ships::backdrop {\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.who-won {\n  font-size: 50px;\n  color: white;\n  text-shadow: 0 0 40px rgb(179, 246, 255);\n  overflow: visible;\n}\n\n#newgame {\n  margin-top: 30px;\n  border: none;\n  border-radius: 20px;\n  padding: 20px;\n  background-color: black;\n  color: white;\n  font-family: 'Audiowide', Arial, Helvetica, sans-serif;\n  text-shadow: 0 0 30px rgb(255, 255, 255);\n  overflow: visible;\n  font-size: 30px;\n  outline: none;\n  transition: all .3s ease-in-out;\n}\n\n#newgame:hover {\n  color: rgb(147, 226, 255);\n  background: #070221;\n}\n\n/* Styling for Place Ships Popup */\n.place-ships {\n  border: 2px solid white;\n  border-radius: 12px;\n  outline: none;\n  background:rgb(21, 21, 56);\n  padding-bottom: 50px;\n  width: 550px;\n  height: fit-content;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  text-shadow: 0 0 10px rgb(179, 246, 255);\n  overflow: visible;\n}\n\n.welcome {\n  font-size: 30px;\n  margin-bottom: 30px;\n}\n\n.place-your {\n  font-size: 25px;\n  margin-bottom: 20px;\n}\n\n.rotate {\n  outline: none;\n  border: 2px solid white;\n  border-radius: 10px;\n  background: transparent;\n  color: white;\n  font-family: 'Audiowide', Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  text-shadow: 0 0 10px rgb(179, 246, 255);\n  padding: 10px;\n  margin-bottom: 20px;\n  transition: all .3s ease-in-out;\n}\n\n.rotate:hover {\n  color: rgb(147, 226, 255);\n  background: #070221;\n}\n\n.placement-board {\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  border: 2px solid rgb(219, 240, 247);\n  flex-direction: column;\n  box-shadow: rgba(93, 255, 255, 0.56) 0px 22px 60px 4px;\n}\n\n.placement-board .square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(20px + 1.3vw);\n  height: calc(20px + 1.3vw);\n  border: 1px solid rgb(168, 207, 242);\n  font-weight: bold;\n}\n\n.placement-board .square:hover {\n  background: #00c1fc;\n}",""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=e(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var l=r(n,o),c=0;c<a.length;c++){var d=e(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r={};(()=>{e.d(r,{U:()=>j,b:()=>L});class n{constructor(){this.gameboard=new o,this.enemy=null}attack(n,t){return this.enemy.receiveAttack(n,t)}receiveAttack(n,t){return this.gameboard.receiveAttack(n,t)}chooseEnemy(n){this.enemy=n}}class t extends n{constructor(){super(),this.attacks=[],this.nextAttacks=[],this.lastAttackHit=!1}attack(){if(this.nextAttacks.length>0){let n=this.nextAttacks.pop(),t=parseInt(n[0]),e=parseInt(n[1]);if(!this.attacks.includes(`${t}${e}`)&&t>=0&&t<=9&&e>=0&&e<=9){let n=this.enemy.receiveAttack(t,e);this.attacks.push(`${t}${e}`),this.addNextAttacks(n,t,e)}else this.attackRandomly()}else this.attackRandomly()}attackRandomly(){let n=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());for(;this.attacks.includes(`${n}${t}`);)n=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());this.attacks.push(`${n}${t}`);let e=this.enemy.receiveAttack(n,t);this.addNextAttacks(e,n,t)}addNextAttacks(n,t,e){n?(this.nextAttacks.push(`${t-1}${e}`),this.nextAttacks.push(`${t+1}${e}`),this.nextAttacks.push(`${t}${e-1}`),this.nextAttacks.push(`${t}${e+1}`),j()):L()}}class o{constructor(){this.board=Array.from({length:10},(()=>Array(10).fill(null))),this.shipCount=0}countShips(){return this.shipCount}receiveAttack(n,t){if(null!==this.board[n][t]){const e=this.board[n][t];return"object"==typeof e&&e instanceof a&&(e.hit(),this.board[n][t]="Hit",e.isSunk()&&(this.shipCount-=1),!0)}return this.board[n][t]="Miss",!1}placeShip(n,t,e,r="vertical"){if(this.isValidPlacement(n,t,e,r)){if("vertical"===r)for(let r=t;r<t+n.length;r++)this.board[r][e]=n;else for(let r=e;r<e+n.length;r++)this.board[t][r]=n;return this.shipCount+=1,!0}return!1}isValidPlacement(n,t,e,r="vertical"){if(t<0||e<0)return!1;if("vertical"===r){if(t+n.length>this.board.length||e>=this.board[0].length)return!1;for(let r=t;r<t+n.length;r++)if(null!==this.board[r][e])return!1}else{if(e+n.length>this.board[0].length||t>=this.board.length)return!1;for(let r=e;r<e+n.length;r++)if(null!==this.board[t][r])return!1}return!0}}class a{constructor(n){this.length=n,this.hits=0,this.sunk=!1}hit(){this.hits+=1,this.isSunk()}isSunk(){return!this.sunk&&this.hits>=this.length&&(this.sunk=!0),this.sunk}}function i(n){const t=document.querySelector(".place-your span");5===n?t.textContent="Carrier":4===n?t.textContent="Battleship":3===n?t.textContent="Cruiser":2===n&&(t.textContent="Destroyer")}function s(n,t){const e=this.id,[r,o]=e.replace("pl","").split("-");let a=[];if(this.style.backgroundColor="#00c1fc","vertical"===n)for(let n=1;n<t;n++){const t=String(Number(r)+n),e=document.getElementById(`pl${t}-${o}`);e&&a.push(e)}else if("horizontal"===n)for(let n=1;n<t;n++){const t=String(Number(o)+n),e=document.getElementById(`pl${r}-${t}`);e&&a.push(e)}a.forEach((n=>{n.style.backgroundColor="#00c1fc"}))}function l(n,t,e){const r=this.id,[o,a]=r.replace("pl","").split("-");let i=[];if(null===e.gameboard.board[o][a]&&(this.style.backgroundColor="transparent"),"vertical"===n)for(let n=1;n<t;n++){const t=String(Number(o)+n),r=document.getElementById(`pl${t}-${a}`);r&&null===e.gameboard.board[t][a]&&i.push(r)}else if("horizontal"===n)for(let n=1;n<t;n++){const t=String(Number(a)+n),r=document.getElementById(`pl${o}-${t}`);r&&null===e.gameboard.board[o][t]&&i.push(r)}i.forEach((n=>{n.style.backgroundColor="transparent"}))}function c(n){const t=document.querySelector(".gameover");document.querySelector(".who-won").textContent="win"===n?"YOU WIN":"YOU LOSE",t.showModal()}function d(n,t=!1){t?document.querySelector(".ai-ship-count span").textContent=n.gameboard.shipCount:document.querySelector(".player-ship-count span").textContent=n.gameboard.shipCount}function u(n,t=!1){for(let e=0;e<n.gameboard.board.length;e++)for(let r=0;r<n.gameboard.board.length;r++){let o=null;const i=document.getElementById(`pl${e}-${r}`);o=t?document.getElementById(`a${e}-${r}`):document.getElementById(`p${e}-${r}`),"Miss"===n.gameboard.board[e][r]?o.style.backgroundColor="#0f3366":"Hit"===n.gameboard.board[e][r]?o.style.backgroundColor="red":"object"==typeof n.gameboard.board[e][r]&&!t&&n.gameboard.board[e][r]instanceof a&&(o.style.backgroundColor="#00c1fc",i.style.backgroundColor="#00c1fc")}d(n,t)}var p=e(379),h=e.n(p),f=e(795),m=e.n(f),g=e(569),b=e.n(g),x=e(565),y=e.n(x),v=e(216),w=e.n(v),k=e(589),C=e.n(k),S=e(28),$={};$.styleTagTransform=C(),$.setAttributes=y(),$.insert=b().bind(null,"head"),$.domAPI=m(),$.insertStyleElement=w(),h()(S.Z,$),S.Z&&S.Z.locals&&S.Z.locals;const E=document.getElementById("newgame"),A=document.querySelectorAll(".placement-board .square"),I=document.querySelector(".rotate");let M=null,q=null,z=!0,B=5,N="vertical";function j(){const n=document.getElementById("impact");n.currentTime=0,n.volume=.5,n.play()}function L(){const n=document.getElementById("splash");n.currentTime=0,n.volume=.5,n.play()}function T(){let n=this.id.replace("pl","").split("-");const t=new a(B);!0===M.gameboard.placeShip(t,parseInt(n[0]),parseInt(n[1]),N)&&(B-=1),d(M),i(B),B<=1&&document.querySelector(".place-ships").close(),u(M)}function P(){B=5,M=new n,q=new t,M.chooseEnemy(q),q.chooseEnemy(M),function(){let n=5,t="horizontal";for(;n>=2;){let e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),o=new a(n);q.gameboard.placeShip(o,e,r,t)&&(n-=1),t="horizontal"===t?"vertical":"horizontal"}}(),u(q,!0),i(B),document.querySelector(".place-ships").showModal(),d(q,!0)}I.addEventListener("click",(()=>{N="vertical"===N?"horizontal":"vertical"})),E.addEventListener("click",(()=>{document.querySelector(".gameover").close(),function(){for(let n=0;n<10;n++)for(let t=0;t<10;t++){const e=document.getElementById(`p${n}-${t}`),r=document.getElementById(`pl${n}-${t}`),o=document.getElementById(`a${n}-${t}`);r.style.backgroundColor="transparent",e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"}}(),P()})),document.addEventListener("DOMContentLoaded",(n=>{P(),A.forEach((n=>{n.addEventListener("mouseover",(function(){s.call(this,N,B)})),n.addEventListener("mouseout",(function(){l.call(this,N,B,M)})),n.addEventListener("click",(function(){T.call(this)}))}))})),document.querySelectorAll(".ai-board .square").forEach((n=>{n.addEventListener("click",(()=>{if(z){z=!1;const t=n.id.replace("p","").replace("a","").split("-");M.attack(parseInt(t[0]),parseInt(t[1]))?j():L(),u(q,!0),setTimeout((()=>{q.attack(),u(M),z=!0}),500),0===M.gameboard.shipCount?c("lose"):0===q.gameboard.shipCount&&c("win")}}))}))})()})();