/**
 * Created by I300934 on 7/3/2017.
 */
import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logOut} from '../../redux/actions/auth'

class Home extends React.Component {

    onLogOut(oEvent){
        this.props.dispatch(logOut());
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <ul>
                    <li><Link to="/logout" onClick={this.onLogOut.bind(this)}>Logout</Link></li>
                </ul>
                <div>
                    token : { this.props.auth.token }
                </div>
                <div>
                    expiration time : { this.props.auth.expirationTime ? this.props.auth.expirationTime.toString() : '' }
                </div>
                <div>
                    logged in : { '' + this.props.auth.loggedIn}
                </div>
            </div>
        )
    }
}

Home.contextTypes = {
    router: PropTypes.object
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

Home = connect(mapStateToProps)(Home)

export default Home