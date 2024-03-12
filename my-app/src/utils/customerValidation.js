const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^\+?[0-9]{8,}$/;
const nameRegex = /^[a-zA-Z\s]+$/;
const hasSymbols = /[^a-zA-Z0-9\s]+/;

export const validateCustomer = (customer) => {
    let errors = {};
    if(!customer.customerName){
        errors.customerName = "El nombre es requerido";
    } else if(!nameRegex.test(customer.customerName)){
        errors.customerName = "El nombre solo puede contener letras";
    }
    if(!customer.customerMail){
        errors.customerMail = "El email es requerido";
    } else if(!emailRegex.test(customer.customerMail)){
        errors.customerMail = "El email no es valido";
    }
    if(!customer.customerAddress){
        errors.customerAddress = "La dirección es requerida";
    } else if(hasSymbols.test(customer.customerAddress)){
        errors.customerAddress = "La dirección no puede contener simbolos";
    }
    if(!customer.customerPhone){
        errors.customerPhone = "El teléfono es requerido";
    } else if(!phoneRegex.test(customer.customerPhone)){
        errors.customerPhone = "El teléfono no es valido";
    }

    return errors;
};