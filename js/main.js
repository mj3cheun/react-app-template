import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './App.js';

import styles from '!style-loader!css-loader!postcss-loader!../styles/index.css';

const mountElement = document.getElementById('container');

// All comments stripped out during production build
console.log("DEVELOPMENT BUILD");
ReactDOM.render(<App/>, mountElement);

export const hardReload = () => {
	ReactDOM.unmountComponentAtNode(mountElement);
	ReactDOM.render(<App/>, mountElement);
}
