import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, StylesProvider, createMuiTheme } from '@material-ui/core/styles'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
        ].join(','),
        fontWeight: 100,
    },
    palette: {
        primary: {
            main: '#3fbac2',
        },
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </ThemeProvider>
    );
}

export default App;
