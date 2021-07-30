
import './App.css';
import Topbar from './Components/Topbar'
import User from './Components/User'
import AddUser from './Components/AddUser'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <div className="container-fluid">
          <Switch>
            <Route exact component={User} path="/" />
            <Route exact component={AddUser} path="/AddUser" />
          </Switch>
        </div>



      </BrowserRouter>
    </div>
  );
}

export default App;
