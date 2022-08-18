import './sass/login.scss';
import eye from '../../assets/icons/eye.png';
import padlock from '../../assets/icons/padlock.png';
import user from '../../assets/icons/user.png';
import logo_pokemon from '../../assets/img/logo_pokeapi.png';

const Login = () => {
	return (
		<div className="login_container">
			<div className="form_login">
				<img className="img_logo" src={logo_pokemon} alt="logo pokemon" />
				<form>
					<div className="container_input">
						<img src={user} />
						<input />
					</div>
					<div className="container_input">
						<img src={padlock} />
						<input /> <img src={eye} />
					</div>
					<button>Entrar</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
