import React, { useState } from 'react';
import useFormValidation from '../../utils/useFormValidation';
import validateLogInForm from '../../utils/validateLogInForm';

const formTitle = 'Sign in to your account';
const emailPlaceholder = 'Enter your email address';
const passwordPlaceholder = 'Enter your password';

const INITIAL_STATE = {
	email: "",
	password: ""
};

const sendLogIn = async (values) => {
	const url = '/api/login';
	const res = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(values)
	});
  	const data = await res.json();

  	if (res.status === 200) {
    	console.log(data.message);
  	} else if (res.status === 401) {
  		console.log(data.message);
  	} else {
  		console.log(data.message);
  	}
};

const LogInForm = props => {
	const {
	    handleSubmit,
	    handleChange,
	    handleBlur,
	    values,
	    errors,
	    isSubmitting
	 } = useFormValidation(INITIAL_STATE, validateLogInForm, sendLogIn);

	return (
		<div>
			<h2>{formTitle}</h2>
		  	<form onSubmit={handleSubmit}>
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
		        <div>
		          <button disabled={isSubmitting} type="submit">
		            Submit
		          </button>
		        </div>
		    </form>
	    </div>
  	);
};

export default LogInForm;