import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const theme = {
    light: {
        background: 'inherit',
        color: 'inherit',
    },
    dark: {
        background: '#343434',
        color: 'white',
    }
}

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
`

function App() {
    const [dark, setDark] = useState(false)

    return (
        <ThemeProvider theme={dark ? theme.dark : theme.light}>
            <GlobalStyle />
            <Router>
                <Navbar dark={dark} setDark={setDark} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
