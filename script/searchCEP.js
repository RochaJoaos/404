function searchCEP(){
    const cep = document.getElementById("cep")
    const state = document.getElementById("state")
    const city = document.getElementById("city")
    const district = document.getElementById("district")
    const street = document.getElementById("street")

    if(cep.value != true){
        cep.style.border = "1px solid var(--alert-color)"
    }
    if(cep.value != false){
        cep.style.border = "1px solid var(--color-01)"
    }

    switch(cep.value){
        case `89226320`:
            state.value = "Santa Catarina"
            city.value = "Joinville"
            district.value = "Aventureiro"
            street.value = "Valdemar Medeiros"
        break;
    }
}