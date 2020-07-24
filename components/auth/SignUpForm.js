import React, { useState } from 'react';
import useSWR from 'swr';
import useFormValidation from '../../utils/useFormValidation';
import validateSignUpForm from '../../utils/validateSignUpForm';

const formTitle = 'Create account';
const namePlaceholder = 'Enter your name';
const emailPlaceholder = 'Enter your email address';
const passwordPlaceholder = 'Choose a password';
const passwordConfirmationPlaceholder = 'Confirm your password';

const INITIAL_STATE = {
	name: "",
	email: "",
	password: "",
	passwordConfirmation: ""
};

const sendSignUp = async (values) => {
	const url = '/api/signup';
	const res = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(values)
	});
  	const data = await res.json();

  	if (res.status === 200) {
    	console.log(data.message);
  	} else if (res.status === 409) {
  		console.log(data.message);
  	} else {
  		console.log(data.message);
  	}
};

const SignUpForm = props => {
	const {
	    handleSubmit,
	    handleChange,
	    handleBlur,
	    values,
	    errors,
	    isSubmitting
	 } = useFormValidation(INITIAL_STATE, validateSignUpForm, sendSignUp);

	return (
		<div>
			<h2>{formTitle}</h2>
		  	<form onSubmit={handleSubmit}>
		  		{errors.name && <div>{errors.name}</div>}
		  		<div>
			  		<input
			          name="name"
			          onChange={handleChange}
			          onBlur={handleBlur}
			          value={values.name}
			          placeholder={namePlaceholder}
			        />
		        </div>
		        {errors.email && <div>{errors.email}</div>}
		        <div>
			  		<input
			          name="email"
			          onChange={handleChange}
			          onBlur={handleBlur}
			          value={values.email}
			          placeholder={emailPlaceholder}
			        />
		        </div>
		        {errors.password && <div>{errors.password}</div>}
		        <div>
			  		<input
			  		  name="password"
			          type="password"
			          onChange={handleChange}
			          onBlur={handleBlur}
			          value={values.password}
			          placeholder={passwordPlaceholder}
			        />
		        </div>
		        {errors.passwordConfirmation && <div>{errors.passwordConfirmation}</div>}
		        <div>
			  		<input
			  		  name="passwordConfirmation"
			          type="password"
			          onChange={handleChange}
			          onBlur={handleBlur}
			          value={values.passwordConfirmation}
			          placeholder={passwordConfirmationPlaceholder}
			        />
		        </div>
		        <div>
		          <button disabled={isSubmitting} type="submit">
		            Submit
		          </button>
		        </div>
		    </form>
	    </div>
  	);
};

export default SignUpForm;