/**
 * Created by I300934 on 7/5/2017.
 */
import React from 'react'
import {Route} from 'react-router'
import MyApp from '../components/MyApp'
import Home from '../components/home/Home'
import Welcome from '../components/guest/Welcome'
import LoginForm from '../components/account/LoginForm'
import {authCheck} from './utility'

export default (
    <Route component={MyApp} onChange={authCheck}>
        <Route path="/" component={Welcome}>
            <Route path="/login" component={LoginForm}/>
        </Route>
        <Route path="home" component={Home}/>
        <Route path="logout" component={Welcome}/>
    </Route>
)