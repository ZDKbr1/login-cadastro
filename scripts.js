function validaLogin(){
let usuario = document.getElementById("usuario").value
let senha = document.getElementById("senha").value

if (usuario === "admin" && senha === "admin"){
    location.href = ("./home.html")
}else{
    alert("Usuário ou Senha incorreta, tente novamente!.")
    location.href = "./index.html"
}
}

function cadastroUser(){
    location.href= "cadastro.html"
}

function registroUser(){
    let usurario = document.getElementById("usuario-cad").value
    let senha = document.getElementById("senha-cad").value
    let reSenha = document.getElementById("re-senha-cad").value
    let email = document.getElementById("email-cad").value

}