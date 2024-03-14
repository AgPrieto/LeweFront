const maxCharsRegex = /^.{1,49}$/

export const validateArticle = (article) => {
    let errors = {};
    if(!article.name){
        errors.name = "El nombre es requerido";
    }
    if(!article.description){
        errors.description = "La descripción es requerida";
    }else if(!maxCharsRegex.test(article.description)){
        errors.description = "La descripción no puede tener más de 50 caracteres";
    }
    if(!article.price){
        errors.price = "El precio es requerido";
    } else if(isNaN(article.price)){
        errors.price = "El precio debe ser un número";
    } else if(article.price < 0){
        errors.price = "El precio no puede ser negativo";
    } 
    if(isNaN(article.stockXS)){
        errors.stockXS = "El stock debe ser un número";
    } else if(article.stockXS < 0){
        errors.stockXS = "El stock no puede ser negativo";
    }
    if(isNaN(article.stockS)){
        errors.stockS = "El stock debe ser un número";
    } else if(article.stockS < 0){
        errors.stockS = "El stock no puede ser negativo";
    }
    if(isNaN(article.stockM)){
        errors.stockM = "El stock debe ser un número";
    } else if(article.stockM < 0){
        errors.stockM = "El stock no puede ser negativo";
    }
    if(isNaN(article.stockL)){
        errors.stockL = "El stock debe ser un número";
    } else if(article.stockL < 0){
        errors.stockL = "El stock no puede ser negativo";
    }
    if(isNaN(article.stockXL)){
        errors.stockXL = "El stock debe ser un número";
    } else if(article.stockXL < 0){
        errors.stockXL = "El stock no puede ser negativo";
    }
    if(isNaN(article.stockXXL)){
        errors.stockXXL = "El stock debe ser un número";
    } else if(article.stockXXL < 0){
        errors.stockXXL = "El stock no puede ser negativo";
    }
    return errors;
}; 