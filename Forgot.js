function Forgot(){

    const email = document.getElementById("e-mail")
    const alertEmail = document.getElementById("alert-email")
    
    if(email.value != true){
        email.style.border = "1px solid var(--alert-color)"
        alertEmail.innerHTML = "Campo vázio"       
    }
    if(email.value != false){
        email.style.border = "1px solid var(--color-01)"
        alertEmail.innerHTML = ""      
    }
    if(email.value != "teste@gmail.com" && email.value != false){
        email.style.border = "1px solid var(--alert-color)"
        alertEmail.innerHTML="E-mail Incorreto"
}
}
