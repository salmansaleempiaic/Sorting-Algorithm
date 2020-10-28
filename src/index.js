import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ARTICLES} from './Data'
ReactDOM.render(<App articles={ARTICLES} />, document.getElementById('root'));