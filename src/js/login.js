//EFEITO DE CARREGAMENTO//
window.onload = function () {
    let accout = document.querySelector('.accout')
    const mediaQuery = window.matchMedia("(width < 640px)");

    setTimeout(() =>{
        if(mediaQuery.matches){
            accout.classList.add('expand-mobile')
        }
        else{
            accout.classList.add('expand')
        }
        email.value = ""
        senha.value = ""
    },500)
}

//VERIFICAÇÃO DE LOGIN//
function logar() {
    let email = document.querySelector('#email').value.toLowerCase()
    let senha = document.querySelector('#senha').value

    if(email == "usuario@gmail.com" && senha == "12345"){
        location.href = "./index.html"
    }
    else
        alert("Email e Senha incorretos!!!")
}