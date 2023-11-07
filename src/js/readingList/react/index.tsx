import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './src/App';

import { store } from './src/store/store';

const el = document.getElementById('edmill-reading-list');

if (el) {
    const root = ReactDOM.createRoot(el);

    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    )
}
