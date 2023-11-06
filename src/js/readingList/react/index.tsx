import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './src/App';

import store from './src/store/store';

const root = ReactDOM.createRoot(document.getElementById('edmill-reading-list'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
