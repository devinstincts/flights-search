/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.


import 'bpk-stylesheets';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';


// ReactDOM.render(React.createElement(App), document.getElementById('root'));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
