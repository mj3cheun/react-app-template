import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import classNames from 'classnames';
import queryString from 'query-string';

import {PageNotFound} from './PageNotFound.jsx';

var globalProtectedNames = [
	"updateGlobal",
	"deleteGlobal"
];

// Index
// Prop Dependencies ::
// - location
// - match
export class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...this.handlePropUpdates(this.props)
		};
	}

	// If any upstream props are changed then re-render
	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.setState(this.handlePropUpdates(nextProps));
		}
	}

	handlePropUpdates(props) {
		return {
			query: queryString.parse(props.location.search)
		};
	}

	updateGlobal(key, value) {
		if(globalProtectedNames.indexOf(key) === -1) {
			this.setState({[key] : value});
		}
	}

	deleteGlobal(key) {
		delete this.state[key];
	}

	getAllGlobals() {
		return this.state;
	}

	render() {
		var globalObject = Object.assign({
			updateGlobal: (key, value) => this.updateGlobal(key, value),
			deleteGlobal: (key) => this.deleteGlobal(key)
		}, this.getAllGlobals());

		return (
			<div className={classNames("Index", this.props.className)}>
				<Switch>
					<Route path="*" render={props => <PageNotFound {...props} {...globalObject}/>}/>
				</Switch>
			</div>
		);
	}
}
