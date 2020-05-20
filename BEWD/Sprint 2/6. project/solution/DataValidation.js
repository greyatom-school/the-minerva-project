const validateMobile = (number) => {
    const filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(number)) {
        if(number.toString().length === 10){
            valid = true;
        } else {
            valid = false;
        }
    } else {
        valid = false;
    }
    return valid;
};


//An email is a string (a subset of ASCII characters) separated into two parts by @ symbol. a "personal_info" and a domain, that is personal_info@domain. 
//The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters.
const validateEmail = (email) => {
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (filter.test(email)) {
        return true;
    }
    return false;
};

module.exports = {
    validateMobile,
    validateEmail
};