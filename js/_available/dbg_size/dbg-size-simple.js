function getsize(event) {
var p = document.getElementById('dbg_size');
var s = window.getComputedStyle(p);

p.innerHTML =
  "  font-size:   " + s.fontSize   + "\n" +
  "  font-family: " + s.fontFamily + "\n" +
  "  screen:      " + window.innerWidth +" x " + window.innerHeight
;
}

window.addEventListener("resize", getsize);
window.addEventListener("load", getsize);
