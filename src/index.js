import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import App from './component/App'
import loggerMiddleware from './middlewares/logger'
import loggerEnhancer from "./enhancers/logger"
import { MuiThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import firebase from 'firebase/app'
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
// import * as serviceWorker from './serviceWorker';
// import store from './store'
// import './index.css';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, 
    compose(
    // composeEnhancers(
        // loggerEnhancer,
        applyMiddleware(thunkMiddleware.withExtraArgument({  // define passing extra arguments to actions frmo here
                    getFirebase, 
                    getFirestore 
                }), 
            loggerMiddleware),
        reduxFirestore(firebase, fbConfig)
        )
    );

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
    };

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </MuiThemeProvider>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
