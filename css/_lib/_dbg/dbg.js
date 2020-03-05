/* 2020-03-05 03:28:57 -0700 */

window.addEventListener("load",
  () => {
    var p = document.getElementById('_dbg_size');
    if (!p) {
      p = document.createElement("pre");
      p.style = "overflow: scroll; text-align: left;";
    }
    document.querySelector("body").appendChild(p);


    function getsize(event) {
      const s = window.getComputedStyle(p);
      const w = window.innerWidth / parseFloat(s.fontSize);
      const h = window.innerHeight / parseFloat(s.fontSize);


      p.innerHTML =
        "    font-size: " + s.fontSize + "\n" +
        "  font-family: " + s.fontFamily + "\n" +
        "       screen: " + window.innerWidth + "px    x " + window.innerHeight + "px\n" +
        "       screen: " + (w).toFixed(3) + "rem w x " + (h).toFixed(3) + "rem h\n" +
        "      one rem: " + (1 / w).toFixed(3) + "% w   " + (1 / h).toFixed(3) + "% h"
        ;
    }

    window.addEventListener("resize", getsize);
  }
);
