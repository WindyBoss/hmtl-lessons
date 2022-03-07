import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.subscribeBtn.addEventListener('click', onSubscribeClick);




function openModal() {
      if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        console.log('Lets Stop Annoying ');
        return;
    }


      setTimeout(() => {
        console.log('Open Annoying...');
        modal.show();
        promptCounter += 1;
        console.log(promptCounter);
    }, PROMPT_DELAY);

}
function onSubscribeClick() {
    hasSubscribed = true;
    modal.hide();
}


/*
const intervalId = setInterval(() => {
    if (promptCounter === MAX_PROMPT_ATTEPMPTS) {
        console.log('interval must be stopped');
        clearInterval(intervalId);
        return;
    }

    console.log('subcribe for newsletter  - ' + Date.now());
    promptCounter++;
}, PROMPT_DELAY);
*/
