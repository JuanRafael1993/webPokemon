import '../styled-components/pokedex.scss';
import Pagination from './pagination';
import Pokemon from './pokemon';

const Pokedex = (params) => {
	const { pokemons, page, setPage, total, loading } = params;

	const lastPage = () => {
		const nextPage = Math.max(page - 1, 0);
		setPage(nextPage);
	};

	const nextPage = () => {
		const nextPage = Math.min(page + 1, total);
		setPage(nextPage);
	};
	return (
		<div>
			<div className="header">
				<h1>POKEDEX</h1>
				<Pagination
					onLeftClick={lastPage}
					onRightClick={nextPage}
					page={page + 1}
					totalPages={total}
				/>
			</div>
			{loading ? (
				<p>Cargando pokemons...</p>
			) : (
				<div className="pokedex_grid">
					{pokemons.map((pokemon, key) => {
						return <Pokemon pokemon={pokemon} key={key} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Pokedex;
