import './App.css';

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

// pages
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Error404 from './components/Error404';

function App() {
    return (
        <Router>
            <div>
                <h2>Example App 2</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName='active'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName='active'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" activeClassName='active'>Users</NavLink>
                        </li>
                        <li>
                            <a href="/#">Learn React</a>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                    <Route path="*" component={Error404} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;
