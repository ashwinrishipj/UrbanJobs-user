/**
 * function to validates emailId: 
 * Note: Validates only for domain with single dot.
 */
export function validateEmailID(emailId) {
    return (/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/.test(emailId));
}

/**
 * validates the password for the given input: the password has to be minimum 8 letters strong with one upper case and lower casr along with a number and a special character.
 * 
 * @param {password} password to validate against.
 * @returns {boolean} True if the password matches the regex or false otherwise.
 */
export function validatePassword(password) {
    return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,12}$/.test(password));
}