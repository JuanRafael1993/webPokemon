import { useContext } from 'react';
import './navbar.scss';
import logo from '../../assets/img/logo_pokeapi.png';
import FavoriteContext from '../../contexts/favoriteContext';

const Navbar = () => {
	const { favoritePokemons } = useContext(FavoriteContext);

	return (
		<nav>
			<img src={logo} alt="logo" className="navbar_img" />
			<div className="pokemon_favorite">
				<span>&#10084;&#65039;</span> <p>{favoritePokemons.length}</p>
			</div>
		</nav>
	);
};

export default Navbar;
