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

    if (img.style.width == "") {
      img.style.width = bigWidth;
      fig.style.float = "none";
      fig.style.fontSize = "1em";
      cap.style.maxWidth = bigWidth;
    }
    else {
      img.style = null;
      fig.style = null;
      cap.style = null;
    }
  }

  document.querySelectorAll("main > article > figure > img")
    .forEach(
      img => img.onclick = toggleWidth
    );
}