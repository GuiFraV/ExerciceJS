const isValidPassword = (password, username) =>{
    
    if(password.length > 7){
        console.log("Must be 8 caractere")
    }
    if(!/\s/.test(password)){
        console.log("No space blank")
    }
    if(!password.includes(username)){
        console.log("username is not contain in pass")
    }

    return true

}

console.log(isValidPassword("12345paul678", "paul"))