import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './init/store';
import { history } from './routes/history';
import { Router } from './routes'
import './styles.scss';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter history={history}>
                <Router/>
            </BrowserRouter>
        </Provider>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
