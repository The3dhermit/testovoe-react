export function CheckName(inputValue) {
    let regNameCheck = /^[a-zA-Z]+$/;
    let errorMessage = "";
    let submitCheck = false;

    if (inputValue.length > 0) {
        if (inputValue && inputValue[0] === " ") {
            errorMessage = "This field can't start with space.";
            submitCheck = false;
        } else if (inputValue && !regNameCheck.test(inputValue)
        ) {
            errorMessage = "Only latin characters";
            submitCheck = false;
        } else {
            submitCheck = true;
        }
    }
    return {errorMessage, submitCheck};
}

export function CheckPhone(inputField) {

    let errorMessage = "";
    let submitCheck = false;

    if (inputField.length > 0) {
        if (inputField && !/\+380/.test(inputField)) {
            errorMessage = "Number must start with +380";
            submitCheck = false;
        } else if (inputField && !/\d{12}/.test(inputField)) {
            errorMessage = "Enter full number";
            submitCheck = false;
        } else if (inputField.length > 13) {
            errorMessage = "Number is too long";
            submitCheck = false;
        } else {
            submitCheck = true;
        }
    }
    return {errorMessage, submitCheck};
}
