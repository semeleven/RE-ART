import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import SignForm from './components/SignForm';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
	sign: 'in' | 'up';
}

interface Props extends RouteComponentProps<MatchParams> {
}

export default class Auth extends PureComponent<Props> {
	render() {
		const { match: { params: { sign } } } = this.props;
		const isLogin = sign === 'in';

		return (
			<SignForm login={isLogin}/>
		);
	}
}
