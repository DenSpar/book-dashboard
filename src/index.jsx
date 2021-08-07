import React from 'react';
import {render} from 'react-dom';
import '@/styles/styles.css';
// components
import Header from '@components/Header';
import BookList from '@components/BookList';
import Footer from '@components/Footer';

const App = () => (
    <>
        <Header />
        <BookList />
        <Footer />
    </>
);

render(<App />, document.getElementById('app'));
