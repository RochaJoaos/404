function showAddress(){
    const name = document.getElementById("name")
    const state = document.getElementById("state") 
    const city =  document.getElementById("city")
    const district =  document.getElementById("district")
    const street =  document.getElementById("street")
    const n = document.getElementById("n")

    if(name.value != false && state.value != false && city.value != false && district.value != false && street.value != false && n.value != false){
        document.getElementById("p-cep").innerHTML = document.getElementById("cep").value
        document.getElementById("p-price").innerHTML = "R$ 13,09"
        document.getElementById("body-address").style.display = "none"
        document.getElementById("address").style.border = "2px solid green"
        document.getElementById("address").style.color = "green"
    } else{
            
        // NAME - Validação do Campo
        if(name.value != true){
            name.style.border = "1px solid var(--alert-color)"      
        }
        if(name.value != false){
            name.style.border = "1px solid var(--color-01)" 
        }

        // STATE - Validação do Campo    
        if(state.value != true){
            state.style.border = "1px solid var(--alert-color)"      
        }
        if(state.value != false){
            state.style.border = "1px solid var(--color-01)"   
        }

        // CITY - Validação do Campo 
        if(city.value != true){
            city.style.border = "1px solid var(--alert-color)"      
        }
        if(city.value != false){
            city.style.border = "1px solid var(--color-01)"   
        }

        // DISTRICT - Validação do Campo 
        if(district.value != true){
            district.style.border = "1px solid var(--alert-color)"      
        }
        if(district.value != false){
            district.style.border = "1px solid var(--color-01)"
        }
        
        // STREET - Validação do Campo 
        if(street.value != true){
            street.style.border = "1px solid var(--alert-color)"      
        }
        if(street.value != false){
            street.style.border = "1px solid var(--color-01)"
        }
        
        // NUMBER - Validação do Campo 
        if(n.value != true){
            n.style.border = "1px solid var(--alert-color)"      
        }
        if(n.value != false){
            n.style.border = "1px solid var(--color-01)"
        }   
    }

}