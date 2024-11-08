const form = document.getElementById('fale-conosco')
const botao = document.getElementById('btn')
const mascara = document.querySelector('#mascara-formulario')
const mascaraHeader = document.querySelector('#mascaraHeader')
const formHeader = document.querySelector('#fale-conosco-header')


const btnToggleOn = document.querySelector('.btn-toggle-on')
const btnCloseToggle = document.querySelector('.btn-toggle-close')
const toggleOn = document.querySelector('.toggle-on')

function showMenuToggle() {
    btnToggleOn.style.opacity = '0'
    toggleOn.style.display = 'flex'

    setTimeout(() => {
        toggleOn.classList.add('active')
    }, 10)
}

function closeMenuToggle() {
    btnToggleOn.style.opacity = '1'
    toggleOn.classList.remove('active')

    setTimeout(() => {
        toggleOn.style.display = 'none'
    }, 300) // 300ms é o tempo da nossa transição CSS
}

function preLoadImage(url){
    let img = new Image
    img.src = url
}


function clickButton() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    form.style.transition = "0.4s ease-in"

}

function clickButtonHeader() {
    formHeader.style.left = "50%"
    formHeader.style.transform = "translateX(-50%)"
    mascaraHeader.style.visibility = "visible"
    formHeader.style.transition = "0.4s ease-in"
    closeMenuToggle()

}

function desligarMascara() {
    form.style.left = '-340px'
    mascara.style.visibility = "hidden"
    form.style.transform = 'translateX(0%)'
    mascara.style.transition = '0.4s ease-in'
}

function desligarMascaraHeader() {
    formHeader.style.left = '-340px'
    mascaraHeader.style.visibility = "hidden"
    formHeader.style.transform = 'translateX(0%)'
    mascaraHeader.style.transition = '0.4s ease-in'
}

window.onload = function () {
    verificarTamanhoJanela();
};
// Verifica o tamanho da janela quando ela é redimensionada
window.onresize = function () {
    verificarTamanhoJanela();
};

function verificarTamanhoJanela() {


    let larguraJanela = window.innerWidth
    const body = document.body
    if (larguraJanela < 1100) {

        // body.style.backgroundImage = "url('img/mobile-banner.jpg')"
        // body.style.backgroundColor = 'black'
        // body.style.backgroundSize = 'cover'
        // body.style.backgroundAttachment = 'fixed'
        // body.style.backgroundRepeat = 'norepeat'
        

    } else {

    }
}

function handlePhone(event) {

    let input = event.target
    input.value = formatarCelular(input.value)

}

function formatarCelular(value) {

    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value



}

function enviarForm() {


    const number = "+5585992406549"
    const msg = "Olá, aqui abaixo estão as informações do seu agendamento, aguarde e você receberá o retorno aqui se o horário escolhido está disponível."
    const name = document.querySelector('#name').value
    const tel = document.querySelector('#tel').value
    const hair = document.querySelector('#hair').value
    let hour = document.querySelector('select').value

    const url = "https://wa.me/" + number + "?text="
        + "Barber Shop: " + msg + "%0a%0a"
        + "Nome: " + name + "." + "%0a"
        + "Número: " + tel + "." + "%0a"
        + "Corte de Cabelo: " + hair + "." + "%0a"
        + "Horário: " + hour + "." + "%0a"

    window.open(url, '_blank').focus()

}

function contactHeader() {

    const number = "+5585992406549"
    const name = document.querySelector('#nameContact').value
    const tel = document.querySelector('#telContact').value
    const msg = document.querySelector('textarea').value


    const url = "https://wa.me/" + number + "?text="
        + "Nome: " + name + "." + "%0a"
        + "Número: " + tel + "." + "%0a"
        + "Dúvida: " + msg + "." + "%0a%0a"

    window.open(url, '_blank').focus()

}



const imgForm = document.querySelector('#corteForm')

function mudarImg1() {
    clickButton()
    imgForm.src = 'img/corte1.webp'
    hair.value = "Corte Número 1"

}

function mudarImg2() {
    clickButton()
    imgForm.src = 'img/corte2.webp'
    hair.value = "Corte Número 2"

}

function mudarImg3() {
    clickButton()
    imgForm.src = 'img/low-fade.webp'
    hair.value = "Corte Número 3"


}
function mudarImg4() {
    clickButton()
    imgForm.src = 'img/high-fade.webp'
    hair.value = "Corte Número 4"
}

function mudarImg5() {
    clickButton()
    imgForm.src = 'img/mid-fade.webp'
    hair.value = "Corte Número 5"

}



