import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
    return (
        <ThemeProvider theme={{ fontFamily: 'Quicksand, sans-serif'}}>
            <Router>
                <Navbar />
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
