const container = document.querySelector('.container')
const generateBtn = container.querySelector('.form button')
const qrInput = container.querySelector('.form input')
const qrImg = container.querySelector('.qr-code img')

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value
    if(!qrValue) return; // Se estiver vazio, retorne ao início
    generateBtn.innerText =  "Generating QR Code..."
    // Pegando o qr code que o usuário digitar no qrserver
    // api e retornado o valor com uma imagem QR Code
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImg.addEventListener('load', () => {
        container.classList.add("active")
        generateBtn.innerText =  "Generate QR Code"
    })
})

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active')
    }
})