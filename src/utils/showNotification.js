const notificationElement = document.querySelector('#notification');
const showNotification = (message, timeout) => {
    notificationElement.style.opacity = 0;   
    notificationElement.style.display='block'
    window.requestAnimationFrame(() => {
        notificationElement.style.opacity = 1;
    })
    
    notificationElement.innerText = message;

    notificationElement.addEventListener('transitionend', e => {
        if(e.target.style.opacity==1) {
            setTimeout(() => {
                notificationElement.style.opacity = 0;    
            }, timeout || 3500);
        } else {
            notificationElement.style.display='none'
        }
        
    })
    
}

export default showNotification;