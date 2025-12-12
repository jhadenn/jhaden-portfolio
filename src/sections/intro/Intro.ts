import './intro.scss';
import { textsInto } from '../../data/texts.js';
// import { WindowManager, dragElement } from 'dom-window-manager'; (From Handwriting component)

// let windowManager = new WindowManager(3); (From Handwriting component)

export default function intro() {
  const intro = document.getElementById('intro');
  if (!intro) return;

  // Who Am I (paragraph on the left)
  const whoami = document.createElement('p');
  whoami.setAttribute('id', 'left');
  whoami.innerHTML = `${textsInto[0]}`;

  intro.appendChild(whoami);

  // // What Am I (paragraph on the right)
  // const whatami = document.createElement('p');
  // whatami.setAttribute('id', 'right');
  // whatami.innerHTML = `${textsInto[1]}`;
  // intro.appendChild(whatami);
  

  // Handwriting (Component not in use)
  // const handwriting = document.createElement('div');
  // handwriting.setAttribute('id', 'handwriting');
  // const handwritingText = document.createElement('p');
  // handwritingText.innerHTML = /* html */ `⤺ Use it for<br> 
  //                                             &nbsp;&nbsp;&nbsp;
  //                                             debugging`;
  // handwriting.appendChild(handwritingText);
  // intro.appendChild(handwriting);
  // handwritingText.addEventListener('click', () => {
  //   duckDebuggingWindow.style.zIndex = windowManager.moveOnTop();
  //   duckDebuggingWindow.style.opacity = '1';
  //   duckDebuggingWindow.style.pointerEvents = 'all';
  //   setTimeout(() => {
  //     handwritingText.style.opacity = '0';
  //     handwritingText.style.pointerEvents = 'none';
  //   }, 3000);
  // });

  // // Window
  // const duckDebuggingWindow = document.createElement('div');
  // duckDebuggingWindow.setAttribute('id', 'duck-window');
  // duckDebuggingWindow.classList.add('window');
  // duckDebuggingWindow.innerHTML = `${textsInto[2]}`;

  // const duckDebuggingWindowTitle = document.createElement('div');
  // duckDebuggingWindowTitle.classList.add('window-title');
  // duckDebuggingWindowTitle.innerHTML = `Rubber Duck Debugging`;
  // duckDebuggingWindow.appendChild(duckDebuggingWindowTitle);

  // handwriting.appendChild(duckDebuggingWindow);

  // // Window X Button
  // const closeButton = document.createElement('button');
  // closeButton.classList.add('remove-button');
  // closeButton.textContent = '✕';
  // closeButton.addEventListener('click', () => {
  //   handwritingText.style.pointerEvents = 'none';
  //   duckDebuggingWindow.style.opacity = '0';

  //   setTimeout(() => {
  //     duckDebuggingWindow.style.display = 'none';
  //     handwriting.removeChild(duckDebuggingWindow);
  //   }, 500);
  // });
  // duckDebuggingWindow.appendChild(closeButton);

  // dragElement(duckDebuggingWindow, duckDebuggingWindowTitle);
  // duckDebuggingWindow.style.zIndex = windowManager.base;
  // duckDebuggingWindow.addEventListener('mousedown', () => {
  //   duckDebuggingWindow.style.zIndex = windowManager.moveOnTop();
  // });

  // Scroll prompt
  const scrollPrompt = document.createElement('div');
  scrollPrompt.setAttribute('id', 'scroll-prompt');
  scrollPrompt.innerHTML = `Scroll down for more`;
  scrollPrompt.style.left = `${window.innerWidth / 2.5}px`;

  setTimeout(() => {
    if (document.documentElement.scrollTop === 0) {
      intro.appendChild(scrollPrompt);

      const flash = setInterval(
        () => (scrollPrompt.hidden = !scrollPrompt.hidden),
        700
      );

      // length of scroll prompt flashing
      setTimeout(() => {
        clearInterval(flash);
        scrollPrompt.hidden = true;
      }, 30000); 
    }
  }, 4000); // how early scroll prompt flashes
}
