/**
 * Created by I300934 on 7/5/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery/'
import {connect} from 'react-redux'
import {logIn} from '../../redux/actions'

class LoginForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        let userName = event.target.elements['username'].value;
        let password = event.target.elements['password'].value;
        var postData = JSON.stringify({
            username: userName,
            password: password
        });
        var _this = this;
        $.ajax({
            url: 'http://localhost:8000/auth/token/',
            type: 'POST',
            data: postData,
            contentType: "application/json",
            dataType: 'json',
            success: (data, status) => {
                _this.context.router.push('/home');
                _this.props.dispatch(logIn({token: data.token, expirationTime: data.expirationTime}));
                // _this.props.onLoginSuccess({token: data.token, expirationTime: data.expirationTime});
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input name="username" type="text" placeholder="user name"/>
                <input name="password" type="password" placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        )
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
}

const mapStateToProps = state => {
    return state
}

// const mapDispatchToProps = {
//     onLoginSuccess: logIn
// }

// LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

LoginForm = connect(mapStateToProps)(LoginForm)

export default LoginForm