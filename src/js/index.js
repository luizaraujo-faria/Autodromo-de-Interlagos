//TELA DE CARREGAMENTO//
window.onload = function() {
    let loading = document.querySelector('.loading')
    let logo = document.querySelector('.loading .logo')
    let body = document.querySelector('body')
    body.classList.add('no-scroll')
    logo.style.opacity = "1"

    setTimeout(() => {
        logo.style.opacity = "0"
        setTimeout(() => {
            loading.classList.add('fade')
            body.classList.remove('no-scroll')
        },825)
    },800)
}

//SLIDESHOW//
//DECLARAÇÃO DE VARIAVEIS//
const slides = document.querySelector('.slides')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const totalSlides = document.querySelectorAll('.slide').length

let slideIndex = 0//VARIAVEL CONTADOR//

//FUNÇÃO PARA PASSAR AS IMAGENS DO SLIDESHOW//
function showSlide(index) {
    const slideWidth = document.querySelector('.slide').clientWidth
    slides.style.transform = `translateX(-${index * slideWidth}px)`
}
//FUNÇÃO DE CLICK PARA BOTAO PROXIMO//
next.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides
    showSlide(slideIndex)
})
//FUNÇÃO DE CLICK PARA BOTAO VOLTAR//
prev.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides
    showSlide(slideIndex)
})
//AUTOMATIZAÇÃO DO SLIDESHOW//
setInterval(() => {
    next.click()
},5000)