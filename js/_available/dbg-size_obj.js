//
// date: "2020-02-01 19:50:34"
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support

class InfoPanel {

  constructor(container) {
    this._pre = document.getElementById("dbg_size");

    if (this._pre === null) {
      if (container === undefined || container === null) {
        container =
          document.querySelector("body > main > article  p") ||
          document.querySelector("body > main   article") ||
          document.querySelector("body > main") ||
          document.querySelector("body");

        this._pre = document.createElement("pre");
        this._pre.setAttribute("id", "dbg_size");
        container.prepend(this._pre);
      }
    }

    let passive = InfoPanel.passiveSupported;
    window.addEventListener(
      "resize",
      this.update,
      passive ? { passive: true } : false
    );
    window.addEventListener(
      "load",
      this.update,
      passive ? { passive: true } : false
    );
  }

  update(event) {
    var s = window.getComputedStyle(
        document.querySelector("body")
    );

    _pre.innerHTML =
      "  font-size:   " +
      s.fontSize +
      "\n" +
      "  font-family: " +
      s.fontFamily +
      "\n" +
      "  screen:      " +
      window.innerWidth +
      " x " +
      window.innerHeight;
  }

  static get // TODO @memoize
  passiveSupported() {
    let result = false;
    try {
      const options = {
        get passive() {
          // This function will be called when the browser
          //   attempts to access the passive property.
          result = true;
          return false;
        }
      };
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch (err) {}

    return result;
  }
}
