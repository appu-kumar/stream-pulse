

export function validateForm(email,password){
   
    const emailValidate = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const passwordValidate = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!emailValidate){
         return "Email Id is not valid";
    }

    if(!passwordValidate){
        return "password is not valid";
    }

    return null;   // all are valid

}
