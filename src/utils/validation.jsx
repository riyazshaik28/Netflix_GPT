 export const checkvalidData=(name,email,password)=>{

    const isEmailvalid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isnamevalid=/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);
    
    const isPasswordvalid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailvalid) return "Email ID is Invalid";

    if(!isPasswordvalid) return "password is Invalid";

    if(!isnamevalid) return "entered Name is Invalid";

    return null;
}