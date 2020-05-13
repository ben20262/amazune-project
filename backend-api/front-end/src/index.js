import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index'

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path='/' component={App} />
		</Router>
	</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
