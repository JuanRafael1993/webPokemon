import './sass/login.scss';
import eye from '../../assets/icons/eye.png';
import padlock from '../../assets/icons/padlock.png';
import user from '../../assets/icons/user.png';
import pokemon_one from '../../assets/img/pokemon_one.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
	const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
		useFormik({
			initialValues: {
				login: '',
				pass: '',
			},
			validationSchema: Yup.object({
				login: Yup.string()
					.max(10, 'solo se permiten 10 caracteres')
					.required('campo requerido'),
				pass: Yup.string()
					.max(10, 'solo se permitten 10 caracteres')
					.required('campo requerido'),
			}),
			onSubmit: ({ login, pass }) => {
				console.log(login, pass);
			},
		});
	return (
		<div className="login_container">
			<div className="container_left">
				<img className="img_logo" src={pokemon_one} alt="pokemon" />
			</div>
			<div className="container_right">
				<form onSubmit={handleSubmit}>
					<h2>WELCOME!</h2>
					<div className="container_input">
						<img src={user} />
						<input
							value={values.login}
							onChange={handleChange}
							onBlur={handleBlur}
							id="login"
							name="login"
							type="text"
						/>
						{touched.login && errors.login ? <p>{errors.login}</p> : null}
					</div>
					<div className="container_input">
						<img src={padlock} />
						<input
							values={values.pass}
							onChange={handleChange}
							onBlur={handleBlur}
							id="pass"
							name="pass"
							type="text"
						/>
						{touched.pass && errors.pass ? <p>{errors.pass}</p> : null}
						<img src={eye} />
					</div>
					<button type="onSubmit">Entrar</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
