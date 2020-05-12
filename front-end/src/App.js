import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import UsersContainer from './containers/UsersContainer'
import ItemsContainer from './containers/ItemsContainer'
import StoresContainer from './containers/StoreContainer'

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

export default connect(null, mapDispatchToProps)(App)