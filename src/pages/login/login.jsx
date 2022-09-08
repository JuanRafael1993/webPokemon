import './sass/login.scss';
import eye from '../../assets/icons/eye.png';
import pokemon_one from '../../assets/img/pokemon_one.png';
import { useFormik } from 'formik';
import schema from './schema/schemaLogin';

const Login = () => {
	const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
		useFormik({
			initialValues: {
				login: '',
				pass: '',
			},
			validationSchema: schema.schemaLogin,
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
					<h2>Welcome to pokedex</h2>
					<hr></hr>
					<div className="container_input">
						<div>
							<input
								onChange={handleChange}
								value={values.login}
								onBlur={handleBlur}
								id="login"
								name="login"
								type="text"
								placeholder="User"
							/>
						</div>
						{touched.login && errors.login && <p>{errors.login}</p>}
					</div>
					<div className="container_input">
						<div>
							<input
								onChange={handleChange}
								value={values.pass}
								onBlur={handleBlur}
								id="pass"
								name="pass"
								type="text"
								placeholder="Pass"
							/>
							<img src={eye} />
						</div>
						{touched.pass && errors.pass && <p>{errors.pass}</p>}
					</div>
					<button type="onSubmit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
