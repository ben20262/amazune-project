import React from 'react';
import UsersContainer from './containers/UsersContainer'
import ItemsContainer from './containers/ItemsContainer'
import StoresContainer from './containers/StoresContainer'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Amazune.net</h1>
				<UsersContainer />
			</header>
			<ItemsContainer />
			<StoresContainer />
		</div>
	);
}

export default App