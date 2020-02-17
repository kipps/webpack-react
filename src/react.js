import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import store from './redux/store/storeConfiguration';

import App from "./App.js";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();