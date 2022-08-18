import { useState, useEffect } from 'react';
import { getPokemons, getPokemonData } from './services/api';
import Searchbar from './components/searchbar';
import Pokedex from './components/pokedex';
import { searchPokemon } from './services/api';

const Home = (props) => {
	const { setFavorites, LOCAL_STORAGE_KEY } = props;

	const [pokemons, setPokemons] = useState([]);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		fetchPokemons();
	}, [page]);

	const fetchPokemons = async () => {
		try {
			setLoading(true);
			const data = await getPokemons(25, 25 * page);
			const promises = data.results.map(async (pokemon) => {
				return await getPokemonData(pokemon.url);
			});

			const results = await Promise.all(promises);
			setPokemons(results);
			setTotal(Math.ceil(data.count / 25));
			setLoading(false);
		} catch (error) {}
	};

	const loadFavoritePokemons = () => {
		const pokemons =
			JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
		setFavorites(pokemons);
	};

	useEffect(() => {
		loadFavoritePokemons();
	}, []);

	const onSearch = async (pokemon) => {
		setNotFound(false);
		if (!pokemon) {
			if (page !== 0) {
				setPage(0);
				return;
			} else {
				return fetchPokemons();
			}
		}
		setLoading(true);
		const result = await searchPokemon(pokemon);
		if (!result) {
			setNotFound(true);
			setLoading(false);
			return;
		} else {
			setPokemons([result]);
		}
		setLoading(false);
	};

	return (
		<div>
			<Searchbar onSearch={onSearch} />
			{notFound ? (
				<p>No se encontro el pokemon...</p>
			) : (
				<Pokedex
					pokemons={pokemons}
					page={page}
					setPage={setPage}
					total={total}
					loading={loading}
				/>
			)}
		</div>
	);
};

export default Home;
