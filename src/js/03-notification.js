import '../css/common.css';

const NOTIFICATION_DELAY = 5000;
let timeoutId = null;
const refs = {
    notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', notificationClick);

showNotification();

function showNotification() { // -> shows notification automatically after page is loaded
    refs.notification.classList.add('is-visible');
    console.log('notification is visible');
    timeoutId = setTimeout(hideNotification, NOTIFICATION_DELAY);
};

function hideNotification() { // -> hide notification
    refs.notification.classList.remove('is-visible');
    console.log('notification is hidden');
};

function notificationClick() { 
    hideNotification();
    console.log(timeoutId);
    clearTimeout(timeoutId); // -> clear timeout
};

