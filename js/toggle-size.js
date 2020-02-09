'use strict';

window.addEventListener("load",
() => {

  const bigWidth = "83vw";
  const topWidth = "85vw";
  const minWidth = 480;

  const toggleWidth = t => {

    if (window.innerWidth < minWidth)
      return;
    // else

    const fig = t.target.parentNode;
    const img = t.target;
    const cap = img.nextElementSibling;

    try {
      if (img.style.width == "") {
        img.style.width = bigWidth;
        fig.style.fontSize = "1.1em";
        fig.style.maxWidth = topWidth;
        cap.style.maxWidth = bigWidth;
      }
      else {
        img.style = null;
        fig.style = null;
        cap.style = null;
      }
    } catch (error) {
      // this catch intentionally left blank
    }
  }

  document.querySelectorAll("main > article > figure > img.zoom")
    .forEach(
      img => img.onclick = toggleWidth
    );
}
);
