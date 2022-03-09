import './App.css';
import Header from './components/Header';
import {
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
