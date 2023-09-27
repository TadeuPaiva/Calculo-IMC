
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber } from './utils.js'
// chamando as funcoes 

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
    event.preventDefault()
    
    const weight = inputWeigth.value
    const height = inputHeight.value
    
    const weightOrRightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrRightIsNotANumber) {
        AlertError.open()
        return;
    } 

    AlertError.close()
    
    const result = calculateIMC(weight, height)
    displayResultMessage(result)

}

function displayResultMessage(resultado) {
    const message = `O seu IMC é de ${resultado}`
    
    Modal.message.innerText = message
    Modal.open()
}

