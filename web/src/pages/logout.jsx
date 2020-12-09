import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		// If we want a confirmation message for logging out or something it could go here.
		localStorage.clear();
		return (
			<Redirect to='/login' />
		);
	}
}