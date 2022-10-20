import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import BrakStrony from './BrakStrony';
import EdytujUzytkownika from './EdytujUzytkownika';
import UsuwanieUzytkownika from './UsuwanieUzytkownika';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/admin">
              <Admin/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/admin/:id">
              <EdytujUzytkownika/>
          </Route>
          <Route exact path="/admin/delete/:id">
              <UsuwanieUzytkownika/>
          </Route>
          <Route path="*">
              <BrakStrony/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
