'use strict';

var messageParagraph = () => {
  var element = document.createElement('p');

  element.style.float = 'right';
  element.style.top = '0';
  element.style.fontSize = '1.5em';
  element.style.fontFamily = 'var(--fontStack-sans)';
  element.style.color = 'red';

  return element;
}

var howBig = () => {
  return (this instanceof Window)
  ?
    this.innerWidth + ' x ' +
    this.innerHeight + ' @ ' +
    this.devicePixelRatio + ' '
  :
  typeof this;
}


//////

var msg = messageParagraph();

document.querySelector('body header').appendChild(msg);

window.addEventListener('resize',
  () => {
    msg.textContent = howBig ();
  }
);
