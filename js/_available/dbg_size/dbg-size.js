//
// date: "2020-02-01 19:49:48"
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support

var _getsize_events_started = false;
var p;

function _getsize_event_init() {
  if (_getsize_events_started) return true;
  //
  // else

  let passiveSupported = false;

  try {
    const options = {
      get passive() {
        // This function will be called when the browser
        //   attempts to access the passive property.
        passiveSupported = true;
        return false;
      }
    };

    window.addEventListener("test", null, options);
    window.removeEventListener("test", null, options);
  } catch (err) {
    passiveSupported = false;
  }

  window.addEventListener(
    "onresize",
    getsize,
    passiveSupported ? { passive: true } : false
  );
  window.addEventListener(
    "onreload",
    getsize,
    passiveSupported ? { passive: true } : false
  );

  _getsize_events_started = true;
}

function _getsize_element_init() {
  if (p === undefined || p === null) {
    p = document.getElementById("dbg_size");

    if (p === null) {
      p =
        document.querySelector("body > main > article  p") ||
        document.querySelector("body > main   article") ||
        document.querySelector("body > main") ||
        document.querySelector("body");

      var pre = document.createElement("pre");
      pre.setAttribute("id", "dbg_size");

      p.prepend(pre);
      p = pre;
    }
  }
}

function getsize(event) {
  if (!_getsize_events_started) {
    _getsize_event_init();
  }

  _getsize_element_init();

  var s = window.getComputedStyle(p);

  p.innerHTML =
    "<br><pre>" +
    "  font-size:   " +
    s.fontSize +
    "\n" +
    "  font-family: " +
    s.fontFamily +
    "\n" +
    "  screen:      " +
    window.innerWidth +
    " x " +
    window.innerHeight +
    "</pre>";
}
