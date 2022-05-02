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
  // return (
  // <div
  //   className={styles.fill}
  //   style={{ background: `rgb(${r}, ${g}, ${b})` }}
  // >
  //   <p>{`rgb(${r},${g},${b})`}</p>
  // </div>
  // );
}

function ScreenColor() {
  const { r, b, g } = useParams();
  console.log(r, b, g);
  return <div></div>;
}

export default function App() {
  return (
    <Router>
      <header>
        <Switch>
          <Route exact path="/">
            <Redirect to="/rgb/192/192/192" />
          </Route>
          <Route path={'/rgb/:r/:b/:g'}>
            <ScreenColor />
          </Route>
        </Switch>
        <ul>
          <Link to="/rgb/192/192/192">Silver</Link>
          <Link to="/rgb/220/20/60">Crimson</Link>
          <Link to="/rgb/147/112/219">Purple</Link>
        </ul>
      </header>
    </Router>
  );
}
