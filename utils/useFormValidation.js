import React, { useState, useEffect } from 'react';

const useFormValidation = (initialState, validate, sendState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        sendState(values);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleBlur = event => {
    const inputType = event.target.getAttribute('name');
    const validationErrors = validate(values, inputType);
    setErrors(validationErrors);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values, 'all');
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
};

export default useFormValidation;