function registerUser(){
    const name = document.getElementById("input-name")
    const email = document.getElementById("input-email")
    const password = document.getElementById("input-password")
    const confirm = document.getElementById("input-confirm")

    const alertName = document.getElementById("alert-name")
    const alertEmail = document.getElementById("alert-email")
    const alertPassword = document.getElementById("alert-password")
    const alertConfirm = document.getElementById("alert-confirm")

    if(password.value.length < 8){
        password.style.border = "1px solid var(--alert-color)"
        alertPassword.innerHTML = "Use 8 caracteres ou mais para sua senha"
    }


    if(confirm.value != password.value){
        confirm.style.border = "1px solid var(--alert-color)"
        alertConfirm.innerHTML = "As senhas não são iguais. Tente novamente."
    }
}