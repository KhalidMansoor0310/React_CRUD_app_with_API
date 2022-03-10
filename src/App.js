import Header from './components/Header';
import {
  Switch,
  Route
} from "react-router-dom";
import Edit from './pages/Edit';
import View from './pages/View';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/View/:id">
          <View />
        </Route>
        
        <Route exact path="/Add">
          <Add />
        </Route>
        <Route exact path="/Edit/:id">
          <Edit />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
