import './App.css';

import HeroContainer from './containers/HeroContainer/HeroContainer';
import React from 'react';

const App: React.FC = () => {
	return (
		<div className="App">
			<h1>The Tunnel Snakes HOTS Emporium</h1>
			<div className="contentContainer">
				<HeroContainer />
			</div>
		</div>
	);
};

export default App;
