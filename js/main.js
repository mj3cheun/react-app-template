import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.js';

import styles from '!style-loader!css-loader!sass-loader!../styles/main.scss';

ReactDOM.render(<App/>, document.getElementById('container'));
