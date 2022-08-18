import { useState } from 'react';
import '../styled-components/searchbar.scss';

const Searchbar = (props) => {
	const { onSearch } = props;

	const [search, setSearch] = useState('');

	const handleBuscar = async () => {
		onSearch(search);
	};

	return (
		<div className="serachBar_container">
			<div className="searchBar">
				<input
					placeholder="Buscar pokemon..."
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div>
				<button onClick={handleBuscar}>Buscar</button>
			</div>
		</div>
	);
};

export default Searchbar;
