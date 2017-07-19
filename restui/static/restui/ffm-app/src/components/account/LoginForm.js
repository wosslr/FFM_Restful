/**
 * Created by I300934 on 7/5/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery/'
import {connect} from 'react-redux'
import {logIn} from '../../redux/actions/auth'
import {utcStrToLocalDate} from '../../utils/utils'

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
                _this.props.dispatch(logIn({
                    token: data.token,
                    expirationTime: utcStrToLocalDate(data.expirationTime)
                }));
                _this.context.router.push('/home');
                // _this.props.onLoginSuccess({token: data.token, expirationTime: data.expirationTime});
            }
        });
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="id_username" className="sr-only">User Name</label>
                    <input type="text" id="id_username" name="username" className="form-control" placeholder="User Name"
                           required autoFocus/>
                    <label htmlFor="id_password" className="sr-only">Password</label>
                    <input type="password" id="id_password" name="password" className="form-control" placeholder="Password"
                           required/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

// const mapDispatchToProps = {
//     onLoginSuccess: logIn
// }

// LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

LoginForm = connect(mapStateToProps)(LoginForm)

export default LoginForm