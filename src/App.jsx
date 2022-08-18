import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { FavoriteProvider } from './contexts/favoriteContext';
import Home from './pages/home';

const LOCAL_STORAGE_KEY = 'favorite_pokemon';

function App() {
	const [favorites, setFavorites] = useState([]);

	const updateFavoritePokemons = (name) => {
		const isFavorite = favorites.indexOf(name);
		const update = [...favorites];
		if (isFavorite >= 0) {
			update.splice(isFavorite, 1);
		} else {
			update.push(name);
		}
		setFavorites(update);
		window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(update));
	};

	return (
		<FavoriteProvider
			value={{
				favoritePokemons: favorites,
				updateFavoritePokemons: updateFavoritePokemons,
			}}
		>
			<div>
				<Navbar />
				<div className="App">
					<Home
						setFavorites={setFavorites}
						LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY}
					/>
				</div>
			</div>
		</FavoriteProvider>
	);
}

export default App;
