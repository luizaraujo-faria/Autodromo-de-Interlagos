//DECLARAÇÃO DE VÁRIAVEIS//
let body = document.querySelector('body')
let iMenu = document.querySelector('.i-menu')
let iClose = document.querySelector('.close')
let menuBar = document.querySelector('.menu')
let menuSide = document.querySelector('.menu aside')
let menuImage = document.querySelector('.image-menu')

iMenu.addEventListener('click', () => {
    body.classList.add('no-scroll')
    setTimeout(() => menuSide.classList.add('show'), 100)
    setTimeout(() => menuBar.classList.add('show'), 300)
    setTimeout(() => menuImage.classList.add('show'), 800)
})
iClose.addEventListener('click', () => {
    setTimeout(() => body.classList.remove('no-scroll'), 700)
    setTimeout(() => menuSide.classList.remove('show'), 600)
    setTimeout(() => menuBar.classList.remove('show'), 300)
    setTimeout(() => menuImage.classList.remove('show'), 100)
})

//MUDANÇA DE COR DO HEADER//
let lastScroll = 0//Ultima posição do scroll

window.addEventListener('scroll', () => {
    let hTitle = document.querySelector('header .title')
    let iMenu = document.querySelector('.i-menu')
    let iSearch = document.querySelector('.i-search')
    let header = document.querySelector('header')//Chama o header
    const currentScroll = window.scrollY //Atual posição do scroll

    header.classList.toggle('scroll-1', window.scrollY > 10)
    header.classList.toggle('scroll-2', window.scrollY > 560 && window.scrollY < 1100)
    iMenu.classList.toggle('scroll', window.scrollY > 560 && window.scrollY < 1100)
    iSearch.classList.toggle('scroll', window.scrollY > 560 && window.scrollY < 1100)
    hTitle.classList.toggle('scroll', window.scrollY > 560 && window.scrollY < 1100)

        if(currentScroll > lastScroll){
            header.classList.add('hidden')//Ao rolar para baixo
        }
        else{
            header.classList.remove('hidden')//Ao rolar para cima
        }
        lastScroll = currentScroll //Atualiza a ultima posição do scroll
})