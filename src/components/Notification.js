import './Notification.css'

export const Notification = (type, message) => {
      const existingNotification = document.querySelector('.notification-container:not([removing])');
    
    if (existingNotification) {
        // Si ya existe una notificación, no crear una nueva
        return;
    }
    
    const notificationContainer = document.createElement('div')
    notificationContainer.classList.add('notification-container')

    const notificationMessage = document.createElement('p')
    notificationMessage.innerText = message

    switch (type) {
        case 'success':
            notificationMessage.classList.add('success-message')
            break;
        case 'error':
            notificationMessage.classList.add('error-message')
            break;
    
        default:
            break;
    }

    notificationContainer.append(notificationMessage)
    const notification = document.querySelector('#notification')
    notification.append(notificationContainer)
    setTimeout(() => {
        notificationContainer.remove()
    }, 3000)
}