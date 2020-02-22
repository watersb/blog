/* 2020-02-15 16:35:27 */

function getsize(event) {
var p = document.getElementById('dbg_size');
var s = window.getComputedStyle(p);

p.innerHTML =
  "  font-size:   " + s.fontSize   + "\n" +
  "  font-family: " + s.fontFamily + "\n" +
  "  screen:      " + window.innerWidth +" x " + window.innerHeight + "\n" +
  "  screen:      " + window.innerWidth/parseFloat(s.fontSize) + "rems of width."
;
}

window.addEventListener("resize", getsize);
window.addEventListener("load", getsize);
