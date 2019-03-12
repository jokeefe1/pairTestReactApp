import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './App.GlobalStyles';
import media from './App.media';
import Header from './components/Header/Header';
import AppRouter from './router/App.Router';

const theme = {
    white: '#fff',
    darkWhite: '#f1f1f0',
    yellow: '#fdb913',
    orange: '##cc4b00',
    red: '#cc4b00',
    grey: '#d6d6d6',
    lightGrey: '#626262',
    darkGrey: '#505050',
    darkestGrey: '#454545',
    ...media
};

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <AppRouter>
                        <Header />
                    </AppRouter>
                </>
            </ThemeProvider>
        );
    }
}

export default App;
