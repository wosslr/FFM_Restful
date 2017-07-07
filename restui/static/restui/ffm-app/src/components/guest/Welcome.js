/**
 * Created by I300934 on 7/3/2017.
 */
import React from 'react'
import { Link } from 'react-router'

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                </ul>

                {this.props.children}

            </div>
        )
    }
}

export default Welcome