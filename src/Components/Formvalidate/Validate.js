export const CheckFromInput = (email, password) => {
    const isEmailValidate =
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValidate =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmailValidate) return "Invalid email";
    if (!isPasswordValidate) return "Invalid password";
    return null;
};
