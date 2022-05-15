export const authValidation = (data) =>{
    const error = {};

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
        error.email = "لطفا یک ایمیل معتبر وارد کنید";
    }
    else{
        delete error.email;
    }


    if (data.password.length < 8) {
        error.password = "رمز وارد شده باید بیش از 8 رقم باشد";
    }
    else{
        delete error.password;
    }

    if (data.rePassword.length < 8) {
        error.rePassword = "تکرار رمز وارد شده باید بیش از 8 رقم باشد";
    }
    else if (data.rePassword !== data.password) {
        error.rePassword = "رمز های وارد شده یکسان نیستند";
    }
    else{
        delete error.rePassword;
    }

    return error;
}