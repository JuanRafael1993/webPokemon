import * as Yup from 'yup';

const schema = {
	schemaLogin: Yup.object({
		login: Yup.string('solo se permiten caracteres')
			.max(10, 'maximo 10 caracteres')
			.required('valor requerido'),
		pass: Yup.string('solo se permiten caracteres')
			.max(10, 'maximo 10 caracteres')
			.required('valor requerido'),
	}),
};

export default schema;
