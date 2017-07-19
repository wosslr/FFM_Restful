import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import './css/main.css'
import MyApp from './components/MyApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
