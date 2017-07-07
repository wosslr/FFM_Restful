/**
 * Created by I300934 on 7/5/2017.
 */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import reducer from '../redux/reducers'
import routes from '../routes/routes'

const store = createStore(reducer)

class MyApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router routes={routes} history={browserHistory} />
            </Provider>
        )
    }
}

export default MyApp