import React from 'react';
import { BrowserRouter as Router,
	Route,
	Switch,
	Link
	} from 'react-router-dom'
import UsersContainer from './containers/UsersContainer'
import ItemsContainer from './containers/ItemsContainer'
import StoresContainer from './containers/StoresContainer'

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/items'>Items</Link>
						</li>
						<li>
							<Link to='/stores'>Stores</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/items'>
						<ItemsContainer />
					</Route>
					<Route path='/stores' render={routerProps => <StoresContainer {...routerProps} />} />
					<Route path='/'>
						<UsersContainer />
					</Route>
					<Route component={() => <UsersContainer />} />
				</Switch>
			</div>
		</Router>
	);
}

export default App