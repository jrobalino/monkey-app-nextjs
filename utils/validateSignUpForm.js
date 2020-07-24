const invalidName = 'Please enter a name';
const invalidEmail = 'Please enter a valid email';
const invalidPassword = 'Password must be between 8-20 characters long and contain at least one number and at least one special character';
const differentPasswords = 'Passwords must match';

const validateEmail = (email) => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    	return (true)
  	}
  	return false;
};

const validatePassword = (pwd) => {
	if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(pwd)) {
		return true;
	}
	return false;
};

const validateSignUpForm = (values, inputType) => {
  let errors = {};
  const checkAll = (inputType === 'all') ? true : false;

  // Name Errors
  if ((inputType === 'name' || checkAll) && !values.name) {
    errors.name = invalidName;
  }

  // Email Errors
  if ((inputType === 'email' || checkAll) && !validateEmail(values.email)) {
    errors.email = invalidEmail;
  }

  // Password Errors
  if ((inputType === 'password' || checkAll) && !validatePassword(values.password)) {
    errors.password = invalidPassword;
  }

  // Password Confirmation Errors
  if ((inputType === 'passwordConfirmation' || checkAll) && (values.password !== values.passwordConfirmation)) {
    errors.passwordConfirmation = differentPasswords;
  }
  
  return errors;
};

export default validateSignUpForm;
