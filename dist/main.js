(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"html, body {\n  height: 100%;\n  width: 100%;\n}\n\n* {\n  overflow: hidden;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 150px 1fr;\n  font-family: 'Audiowide', Arial, Helvetica, sans-serif;\n  background: rgb(1, 1, 60);\n}\n\n/* Styling for header */\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  font-size: 70px;\n  color: white;\n  text-shadow: 0 0 40px rgb(179, 246, 255);\n}\n\n.fa-github-alt {\n  font-size: 30px;\n  color: white;\n  transition: all 0.25s ease-in-out;\n}\n\n.fa-github-alt:hover {\n  transform: rotate(360deg);\n  color: rgb(179, 246,255);\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  gap: 80px;\n  flex: 1;\n}\n\n/* Styling for the player's board */\n.left, .right {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  align-items: end;\n  overflow:visible\n}\n\n.player-ship-count, .ai-ship-count {\n  font-size: 25px;\n  color: white;\n  margin-bottom: 10px;\n}\n\n.player-ship-count {\n  margin-right: 40px;\n}\n\n.ai-ship-count {\n  margin-left: 20px;\n}\n\n.player-board {\n  display: flex;\n  border: 2px solid rgb(219, 240, 247);\n  flex-direction: column;\n  margin-right: 20px;\n  box-shadow: rgba(93, 255, 255, 0.56) 0px 22px 70px 4px;\n}\n\n.row {\n  display: flex;\n}\n\n.player-board .square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(20px + 1.3vw);\n  height: calc(20px + 1.3vw);\n  border: 1px solid rgb(168, 207, 242);\n  font-weight: bold;\n}\n\n.player-board .square:hover {\n  background: #00c1fc;\n}\n\n.ai-board .square:hover {\n  background: rgb(135, 13, 13);\n}\n\n/* Styling for AI board */\n.right {\n  align-items: start;\n}\n\n.ai-board {\n  display: flex;\n  border: 2px solid rgb(249, 179, 173);\n  flex-direction: column;\n  margin-right: 20px;\n  box-shadow: rgba(255, 98, 93, 0.7) 0px 22px 70px 10px;\n}\n\n.ai-board .square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(20px + 2vw);\n  height: calc(20px + 2vw);\n  border: 1px solid rgb(251, 148, 148);\n  font-weight: bold;\n}\n\n/* Styling for New Game Popup */\n.gameover {\n  text-align: center;\n  border: 1px solid aliceblue;\n  border-radius: 12px;\n  background: rgb(1, 1, 60);\n  width: 400px;\n  height: 200px\n}\n\n.gameover::backdrop, .place-ships::backdrop {\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.who-won {\n  font-size: 50px;\n  color: white;\n  text-shadow: 0 0 40px rgb(179, 246, 255);\n  overflow: visible;\n}\n\n#newgame {\n  margin-top: 30px;\n  border: none;\n  border-radius: 20px;\n  padding: 20px;\n  background-color: black;\n  color: white;\n  font-family: 'Audiowide', Arial, Helvetica, sans-serif;\n  text-shadow: 0 0 30px rgb(255, 255, 255);\n  overflow: visible;\n  font-size: 30px;\n  outline: none;\n  transition: all .3s ease-in-out;\n}\n\n#newgame:hover {\n  color: rgb(147, 226, 255);\n  background: #070221;\n}\n\n/* Styling for Place Ships Popup */\n.place-ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid white;\n  border-radius: 12px;\n  outline: none;\n  background:rgb(21, 21, 56);\n  color: white;\n  text-shadow: 0 0 10px rgb(179, 246, 255);\n  padding-bottom: 50px;\n  width: 550px;\n  height: fit-content;\n}\n\n.welcome {\n  font-size: 30px;\n  margin-bottom: 30px;\n}\n\n.place-your {\n  font-size: 25px;\n  margin-bottom: 20px;\n}\n\n.rotate {\n  outline: none;\n  border: 2px solid white;\n  border-radius: 10px;\n  background: transparent;\n  color: white;\n  font-family: 'Audiowide', Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  text-shadow: 0 0 10px rgb(179, 246, 255);\n  padding: 10px;\n  margin-bottom: 20px;\n  transition: all .3s ease-in-out;\n}\n\n.rotate:hover {\n  color: rgb(147, 226, 255);\n  background: #070221;\n}\n\n.placement-board {\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  border: 2px solid rgb(219, 240, 247);\n  flex-direction: column;\n  box-shadow: rgba(93, 255, 255, 0.56) 0px 22px 60px 4px;\n}\n\n.placement-board .square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(20px + 1.3vw);\n  height: calc(20px + 1.3vw);\n  border: 1px solid rgb(168, 207, 242);\n  font-weight: bold;\n}\n\n.placement-board .square:hover {\n  background: #00c1fc;\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=t(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{constructor(){this.gameboard=new r,this.enemy=null}attack(n,e){this.enemy.receiveAttack(n,e)}receiveAttack(n,e){this.gameboard.receiveAttack(n,e)}chooseEnemy(n){this.enemy=n}}class e extends n{constructor(){super(),this.attacks=[]}attack(){let n=Math.floor(10*Math.random()),e=Math.floor(10*Math.random());for(;this.attacks.includes(`${n}${e}`);)n=Math.floor(10*Math.random()),e=Math.floor(10*Math.random());this.attacks.push(`${n}${e}`),this.enemy.receiveAttack(n,e)}}class r{constructor(){this.board=Array.from({length:10},(()=>Array(10).fill(null))),this.shipCount=0}countShips(){return this.shipCount}receiveAttack(n,e){if(null!==this.board[n][e]){const t=this.board[n][e];return"object"==typeof t&&t instanceof o&&(t.hit(),this.board[n][e]="Hit",t.isSunk()&&(this.shipCount-=1),!0)}return this.board[n][e]="Miss",!1}placeShip(n,e,t,r="vertical"){if(this.isValidPlacement(n,e,t,r)){if("vertical"===r)for(let r=e;r<e+n.length;r++)this.board[r][t]=n;else for(let r=t;r<t+n.length;r++)this.board[e][r]=n;return this.shipCount+=1,!0}return!1}isValidPlacement(n,e,t,r="vertical"){if(e<0||t<0)return!1;if("vertical"===r){if(e+n.length>this.board.length||t>=this.board[0].length)return!1;for(let r=e;r<e+n.length;r++)if(null!==this.board[r][t])return!1}else{if(t+n.length>this.board[0].length||e>=this.board.length)return!1;for(let r=t;r<t+n.length;r++)if(null!==this.board[e][r])return!1}return!0}}class o{constructor(n){this.length=n,this.hits=0,this.sunk=!1}hit(){this.hits+=1,this.isSunk()}isSunk(){return!this.sunk&&this.hits>=this.length&&(this.sunk=!0),this.sunk}}function a(n,e){const t=this.id;this.style.backgroundColor="#00c1fc";const[r,o]=t.replace("pl","").split("-");let a=[];if("vertical"===n)for(let n=1;n<e;n++){const e=String(Number(r)+n),t=document.getElementById(`pl${e}-${o}`);t&&a.push(t)}else if("horizontal"===n)for(let n=1;n<e;n++){const e=String(Number(o)+n),t=document.getElementById(`pl${r}-${e}`);t&&a.push(t)}a.forEach((n=>{n.style.backgroundColor="#00c1fc"}))}function i(n,e){const t=this.id,[r,o]=t.replace("pl","").split("-");let a=[];if("vertical"===n)for(let n=1;n<e;n++){const e=String(Number(r)+n),t=document.getElementById(`pl${e}-${o}`);t&&a.push(t)}else if("horizontal"===n)for(let n=1;n<e;n++){const e=String(Number(o)+n),t=document.getElementById(`pl${r}-${e}`);t&&a.push(t)}a.forEach((n=>{n.style.backgroundColor="transparent"}))}function s(n,e=!1){e?document.querySelector(".ai-ship-count span").textContent=n.gameboard.shipCount:document.querySelector(".player-ship-count span").textContent=n.gameboard.shipCount}function l(n){for(let e=0;e<n.gameboard.board.length;e++)for(let t=0;t<n.gameboard.board.length;t++){const n=document.getElementById(`p${e}-${t}`),r=document.getElementById(`a${e}-${t}`);n.style.backgroundColor="transparent",r.style.backgroundColor="transparent"}}function c(n,e=!1){for(let t=0;t<n.gameboard.board.length;t++)for(let r=0;r<n.gameboard.board.length;r++){let o=null;o=e?document.getElementById(`a${t}-${r}`):document.getElementById(`p${t}-${r}`),"Miss"===n.gameboard.board[t][r]?o.style.backgroundColor="#0f3366":"Hit"===n.gameboard.board[t][r]&&(o.style.backgroundColor="red")}s(n,e)}var d=t(379),u=t.n(d),p=t(795),h=t.n(p),f=t(569),g=t.n(f),b=t(565),m=t.n(b),x=t(216),y=t.n(x),v=t(589),w=t.n(v),k=t(28),S={};S.styleTagTransform=w(),S.setAttributes=m(),S.insert=g().bind(null,"head"),S.domAPI=h(),S.insertStyleElement=y(),u()(k.Z,S),k.Z&&k.Z.locals&&k.Z.locals;const C=document.getElementById("newgame");let E=null,A=null,M=!0;const $=document.querySelectorAll(".placement-board .square");function I(){E=new n,A=new e,E.chooseEnemy(A),A.chooseEnemy(E),document.querySelector(".place-ships").showModal();const t=new o(5),r=new o(5);E.gameboard.placeShip(t,0,0),A.gameboard.placeShip(r,0,0),s(E),s(A,!0)}C.addEventListener("click",(()=>{document.querySelector(".gameover").close(),l(E),l(A),I()})),document.addEventListener("DOMContentLoaded",(n=>{$.forEach((n=>{n.addEventListener("mouseover",(function(){a.call(this,"horizontal",5)})),n.addEventListener("mouseout",(function(){this.style.backgroundColor="transparent",i.call(this,"horizontal",5)}))})),I()})),document.querySelectorAll(".ai-board .square").forEach((n=>{n.addEventListener("click",(()=>{if(M){M=!1;const e=n.id.replace("p","").replace("a","").split("-");E.attack(parseInt(e[0]),parseInt(e[1])),c(A,!0),setTimeout((()=>{A.attack(),c(E),M=!0}),1e3),(0===E.gameboard.shipCount||0===A.gameboard.shipCount)&&function(n){const e=document.querySelector(".gameover");document.querySelector(".who-won").textContent="YOU WIN",e.showModal()}()}}))}))})()})();