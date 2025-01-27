

export function validateForm(email,password,fullName){
   
    const emailValidate = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const passwordValidate = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const fullNameValidate = !!(fullName && /^[A-Z][a-z]*( [A-Z][a-z]*)?$/.test(fullName));

    if(!fullNameValidate){
        return "Full Name is not valid"
    }

    if(!emailValidate){
         return "Email Id is not valid";
    }

    if(!passwordValidate){
        return "password is not valid";
    }

    return null;   // all are valid

}
