import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {matches: []}
    }

    componentDidMount() {
        let config = {
            headers: {
                "X-Auth-Token": "922bb02d-c74f-4c6d-866c-4efb8b1a108b",
                "User-Agent": "Tinder/4.7.1 (iPhone; iOS 9.2; Scale/2.00)",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }

        };

        axios.get('https://api.gotinder.com/user/rec', config)
            .then((results) => {
                console.log(results);
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
                </p>
            </div>
        );
    }
}

export default App;
