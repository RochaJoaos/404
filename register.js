function registerUser(){
    const name = document.getElementById("input-name")
    const email = document.getElementById("input-email")
    const password = document.getElementById("input-password")
    const confirm = document.getElementById("input-confirm")

    if(confirm.value != password.value){
        confirm.style.border = "2px solid red"
        document.getElementById("alert-confirm").style.color = "red"
        document.getElementById("alert-confirm").innerHTML = "Senha incorreta"
    }
}