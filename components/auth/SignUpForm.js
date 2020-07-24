import React, { useState } from 'react';

const formTitle = 'Create account';
const namePlaceholder = 'Enter your name';
const emailPlaceholder = 'Enter your email address';
const passwordPlaceholder = 'Choose a password';

const SignUpForm = props => {
	const [isSubmitting, setSubmitting] = useState(false);

	const handleSubmit = () => {
		console.log('Handle submit');
	}

	const handleChange = () => {
		console.log('Handle change');
	}

	return (
		<div>
			<h2>{formTitle}</h2>
		  	<form onSubmit={handleSubmit}>
		  		<div>
			  		<input
			          onChange={handleChange}
			          name="name"
			          placeholder={namePlaceholder}
			        />
		        </div>
		        <div>
			  		<input
			          onChange={handleChange}
			          name="email"
			          placeholder={emailPlaceholder}
			        />
		        </div>
		        <div>
			  		<input
			          onChange={handleChange}
			          name="password"
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

export default SignUpForm;