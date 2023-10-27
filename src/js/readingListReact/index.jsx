import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import store from './src/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('edmill-reading-list'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
