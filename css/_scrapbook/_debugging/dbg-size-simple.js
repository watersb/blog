/* 2020-02-15 16:35:27 */

function getsize(event) {
const p = document.getElementById('dbg_size');
const s = window.getComputedStyle(p);
const w = window.innerWidth /parseFloat(s.fontSize);
const h = window.innerHeight/parseFloat(s.fontSize);


p.innerHTML =
  "    font-size: " + s.fontSize   + "\n" +
  "  font-family: " + s.fontFamily + "\n" +
  "       screen: " + window.innerWidth +"px    x " + window.innerHeight + "px\n" +
  "       screen: " + (  w).toFixed(3) + "rem w x " + (  h).toFixed(3) + "rem h\n" +
  "      one rem: " + (1/w).toFixed(3) + "% w   " + (1/h).toFixed(3) + "% h"
;
}

window.addEventListener("resize", getsize);
window.addEventListener("load", getsize);
