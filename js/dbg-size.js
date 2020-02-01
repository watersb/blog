function getsize(event) {
  var p = document.querySelector('article > p > span');
  var s = window.getComputedStyle(p);

  p.innerHTML =
    "<br><pre>" +
    "  font-size:   " + s.fontSize   + "\n" +
    "  font-family: " + s.fontFamily + "\n" +
    "  screen:      " + window.innerWidth +" x " + window.innerHeight +
    "</pre>"
  ;
}

window.onresize = getsize;
window.onload = getsize;
