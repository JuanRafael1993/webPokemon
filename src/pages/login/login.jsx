import './sass/login.scss';
import eye from '../../assets/icons/eye.png';
import padlock from '../../assets/icons/padlock.png';
import user from '../../assets/icons/user.png';
import pokemon_one from '../../assets/img/pokemon_one.png';

const Login = () => {
	return (
		<div className="login_container">
			<div className="container_left">
				<img className="img_logo" src={pokemon_one} alt="pokemon" />
			</div>
			<div className="container_right">
				<form>
					<h2>WELCOME!</h2>
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
