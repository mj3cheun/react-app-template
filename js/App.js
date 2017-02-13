import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import {PageNotFound} from './PageNotFound.jsx';

export class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="*" component={PageNotFound}/>
			</Router>
		);
	}
}
