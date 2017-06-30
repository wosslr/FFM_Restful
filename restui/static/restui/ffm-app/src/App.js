import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery/';

class App extends Component {
    constructor() {
        super()
        this.state = {
            apiData: ""
        }
        this.clickGo = this.clickGo.bind(this)
    }

    clickGo() {
        $.ajax({
            url: 'http://localhost:8000/restdemo2'
        }).done(data => {
            this.setState({
                apiData: data
            })
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <button type="submit" onClick={this.clickGo}>Go!</button>
                    <p>{this.state.apiData}</p>
                </p>
            </div>
        );
    }
}

export default App;
