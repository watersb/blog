window.addEventListener(
  "load",
  () => {
    const TAG_ID = 'dbg_size';
    var p = document.getElementById(TAG_ID);
    if (!p) {
      p = document.createElement('pre');
      p.id = TAG_ID;
    }
    document.querySelector('main').appendChild(p);
    const getSize = () => {
      var s = window.getComputedStyle(p);
      p.textContent =
        "  font-size:   " + s.fontSize + "\n" +
//      "  font-family: " + s.fontFamily + "\n" +
        "  screen:      " + window.innerWidth +
        " x " + window.innerHeight +
        " @ " + window.devicePixelRatio;
    };
    window.addEventListener("resize", getSize);
    window.addEventListener("load", getSize);
  }
);
