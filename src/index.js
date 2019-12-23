import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
	<provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</provider>, 
	document.getElementById('root')
);