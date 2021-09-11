import React from 'react';
import {render} from 'react-dom';
import '@/styles/styles.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {rootReducer} from '@redux/rootReducer';

// components
import Header from '@components/Header';
import BookList from '@components/BookList';
import Footer from '@components/Footer';
import Modal from '@components/Modal';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <Header />
        <Modal />
        <BookList />
        <Footer />
    </Provider>
);

render(<App />, document.getElementById('app'));
