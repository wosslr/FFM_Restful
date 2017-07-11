/**
 * Created by I300934 on 7/11/2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logOut} from '../../redux/actions/auth'
import {isExpired} from '../../utils/utils'

class AuthCheckContainer extends React.Component{

    isAuthenticated(){
        return this.props.auth.loggedIn && !isExpired(this.props.auth.expirationTime);
    }

    handleAuthChecking(){
        if(!this.isAuthenticated()){
            this.context.router.push('/login');
            this.props.dispatch(logOut());
        }
    }

    componentWillMount(){
        this.handleAuthChecking();
    }

    render(){
        this.handleAuthChecking();
        return this.props.children
    }
}

AuthCheckContainer.contextTypes = {
    router: PropTypes.object
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AuthCheckContainer)