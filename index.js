const isValidPassword = (password, username) =>{
    
    if(password.length > 7){
        console.log("Must be 8 caractere")
    }
    // if(!/\s/.test(password)){
    //     console.log("No space blank")
    // }

    if(password.indexOf(" ") !== -1){
        console.log("il y a un espace dans le pass")
    }

    // if(!password.includes(username)){
    //     console.log("username is not contain in pass")
    // }

    if(password.indexOf(username) !== -1){
        console.log("il y a un l'user dans le pass")
    }

    return true

}

console.log(isValidPassword("1234 5678", "paul"))