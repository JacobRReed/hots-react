import './App.css';

import HeroContainer from './containers/HeroContainer/HeroContainer';
import HeroModal from './components/HeroModal/HeroModal';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './store/store';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>The Tunnel Snakes </h1>
				<h1>HOTS Emporium</h1>
				<div className="contentContainer">
					<HeroContainer />
				</div>
			</div>
			<HeroModal />
		</Provider>
	);
};

export default App;
