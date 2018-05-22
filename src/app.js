import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from "./actions/expenses";
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({description:'Water bill', amount: 100, createdAt: 1000}));
// store.dispatch(addExpense({description:'Gas bill', amount: 333, createdAt: 15000}));
// store.dispatch(addExpense({description:'Rent', amount: 109500, createdAt: 1000}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));