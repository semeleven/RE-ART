import yup from 'yup';

const getSignSchemaValidation = values => {
	return yup.object().shape({
		username:               yup.string(),
		email:                  yup.string()
									.email('Please provide a valid E-mail')
									.required("E-mail is required!"),
		password:               yup.string()
									.min(6, 'Password has to be longer than 6 characters!')
									.required('Password is required!'),
		passwordConfirmation:   yup.string()
									.oneOf([values.password], 'Passwords are not the same!')
									.required('Password confirmation is required!'),
	});
};

export default getSignSchemaValidation;