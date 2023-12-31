
export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('span'),
    buttonClose: document.querySelector('button.close'),

// abreviacao de open: function() {...}
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => Modal.close()


window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}