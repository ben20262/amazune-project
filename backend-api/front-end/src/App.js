import React from 'react';
import UsersContainer from './containers/UsersContainer'
import ItemsContainer from './containers/ItemsContainer'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Amazune.net</h1>
				<UsersContainer />
			</header>
			<ItemsContainer />
		</div>
	);
}

export default App