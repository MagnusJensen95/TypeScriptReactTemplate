import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import AppNus from './App';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ConnectedRouter } from "connected-react-router";

import configureStore from './configureStore';


const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        }
    }
});
const initialState = window.initialReduxState;
const history = createBrowserHistory();
const store = configureStore(history, initialState);



const app = (
    <MuiThemeProvider theme={defaultTheme}>
        <Provider store={store}>

            <ConnectedRouter history={history}>
                <AppNus />
            </ConnectedRouter>

        </Provider>
    </MuiThemeProvider>
);
ReactDOM.render(
    app,
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
