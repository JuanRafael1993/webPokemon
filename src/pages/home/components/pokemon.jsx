import { useContext } from 'react';
import FavoriteContext from '../../../contexts/favoriteContext';
import '../styled-components/pokemon.scss';

const Pokemon = (props) => {
	const { pokemon } = props;

	const redHeart = <div className="pokemon_favorite">&#10084;&#65039;</div>;
	const blackHeart = <div className="pokemon_favorite">&#10084;</div>;

	const { favoritePokemons, updateFavoritePokemons } =
		useContext(FavoriteContext);

	const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

	const onClickHeart = (e) => {
		e.preventDefault();
		updateFavoritePokemons(pokemon.name);
	};

	return (
		<div className="pokemon_card">
			<div className="pokemon_img_container">
				<img
					className="pokemon_img"
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
				/>
			</div>
			<div className="card_body">
				<div className="card_top">
					<h3>{pokemon.name}</h3>
					<p>#{pokemon.id}</p>
				</div>
				<div className="card_bottom">
					<div className="pokemon_type">
						{pokemon.types.map((type, key) => {
							return (
								<div key={key} className="pokemon_type_text">
									{type.type.name}
								</div>
							);
						})}
					</div>
					<button onClick={onClickHeart}>{heart}</button>
				</div>
			</div>
		</div>
	);
};

export default Pokemon;
