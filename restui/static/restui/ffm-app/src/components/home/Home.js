/**
 * Created by I300934 on 7/3/2017.
 */
import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class Home extends React.Component {

    render() {
        return (
            <div>
                <h2>Home</h2>
                <ul>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
                <div>
                    token : { this.props.token }
                </div>
                <div>
                    expiration time : { this.props.expirationTime }
                </div>
                <div>
                    logged in : { '' + this.props.loggedIn}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    expirationTime: state.expirationTime,
    loggedIn: state.loggedIn
})

Home = connect(mapStateToProps)(Home)

export default Home