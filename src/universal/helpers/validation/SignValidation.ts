// import yup from 'yup';

// const getSignSchemaValidation = yup.object().shape({
// 	username: yup.string(),
// 	email: yup
// 		.string()
// 		.email('Please provide a valid E-mail')
// 		.required('E-mail is required!'),
// 	password: yup
// 		.string()
// 		.min(6, 'Password has to be longer than 6 characters!')
// 		.required('Password is required!'),
// });

// export default getSignSchemaValidation;

import { SignFormValues } from '../../containers/Auth';

export const validateSignForm = (values: SignFormValues) => {
	const errors: any = {};

	if (!values.email) {
		errors.email = 'E-mail is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Please provide a valid E-mail';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (
		!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
			values.password
		)
	) {
		errors.password =
			'Password must contain minimum eight characters, \n at least one letter, \n one number and one special character';
	}
	return errors;
};
