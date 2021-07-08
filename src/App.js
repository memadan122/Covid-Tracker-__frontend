import logo from './logo.svg';
import Register from './Container/Register';
import Login from './Container/Login';
import Header from './Container/header/Header'
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <switch>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
