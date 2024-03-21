export const validateUser = (user) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let errors = {};
    if (!user.email) {
        errors.email = "El email es requerido";
    } else if (!emailRegex.test(user.email)) {
        errors.email = "El email no es valido";
    }
    if (!user.password) {
        errors.password = "La contraseña es requerida";
    }
    return errors;
}
