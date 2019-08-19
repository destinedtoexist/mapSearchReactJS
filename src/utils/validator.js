const REGEX = 'regex'
const EMAIL = 'email'
const PASSWORD = 'password'
const MIN_LENGTH = 'min_length'


const EMAIL_REGEX = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
const PASSWORD_REGEX = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])'

export function Rule(check, message){
    this.check = check
    this.message = message
}

const validateRegex = (value, pattern) => {
    const re = new RegExp(pattern)
    return re.exec(value)
}

const validateEmail = (value) => {
    return validateRegex(value, EMAIL_REGEX)
}

const validateMinLength = (value, length) => {
    return value.length >= length
}

const validatePassword = (value) => {
    return validateRegex(value, PASSWORD_REGEX);
}

const validate = {
    [REGEX]: validateRegex,
    [EMAIL]: validateEmail,
    [MIN_LENGTH]: validateMinLength,
    [PASSWORD]: validatePassword
}

const defaultMessage = {
    [EMAIL]: 'Incorrect email pattern',
    [PASSWORD]: 'Password must include one uppercase letter, one lowercase letter and one numeric digit'
}

const getDefaultMessage = (validation) => {
    if(defaultMessage.hasOwnProperty(validation)) {
        return defaultMessage[validation]
    }
    return 'Global Default';
}

Rule.prototype.getValidationError = function(value){
    const validator = this.check.split(':');
    if(validate.hasOwnProperty(validator[0])) {
        return validate[validator[0]](value, validator[1]) ? false : this.message || getDefaultMessage(validator[0])
    }
    return false;
}

