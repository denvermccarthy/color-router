import { Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  Link,
  Redirect,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import styles from './App.css';

function RGB() {
  // 🚨 Get values for r, g, and b from params
  // 🚨 Uncomment next lines after importing
  const { r, g, b } = useParams();
  return (
    <div
      className={styles.fill}
      style={{ background: `rgb(${r}, ${g}, ${b})` }}
    >
      <p>{`rgb(${r},${g},${b})`}</p>
    </div>
  );
}

function ScreenColor() {
  return (
    <div>
      <Route path={'/rgb/:r/:g/:b'}>
        <RGB />
      </Route>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <header>
        <ul>
          <Link to="/rgb/192/192/192">Silver</Link>
          <Link to="/rgb/220/20/60">Crimson</Link>
          <Link to="/rgb/147/112/219">Purple</Link>
        </ul>
        <Switch>
          <Route exact path="/">
            <Redirect to="/rgb/192/192/192" />
          </Route>
        </Switch>
      </header>
      <ScreenColor />
    </Router>
  );
}
