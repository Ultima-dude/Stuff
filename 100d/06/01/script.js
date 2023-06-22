"use strict"

function showNotification({top = 0, right = 0, className, html}) {
    let notification = document.createElement('div');

    notification.classList.add('notification', className);
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';
    notification.textContent = html;

    document.body.append(notification);
}

let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);