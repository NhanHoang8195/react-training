import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './containers/home';
import About from './containers/about';
import Users from './containers/user';
import './App.css';
import {useTranslation} from 'react-i18next';

function App() {
  const { i18n } = useTranslation('home');
  return (
    <Suspense fallback={"loading"}>
      <Router>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
    </Suspense>
  );
}

export default App;
