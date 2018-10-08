'use strict';

window.onload = () => {

  const bigWidth = "83vw";

  const toggleWidth = t => {

    if (window.innerWidth < 480)
      return;
    // else

    const fig = t.target.parentNode;
    const img = t.target;
    const cap = img.nextElementSibling;

    try {
      if (img.style.width == "") {
        img.style.width = bigWidth;
        fig.style.fontSize = "1.6em";
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
