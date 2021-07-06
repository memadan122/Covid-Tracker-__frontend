import logo from './logo.svg';
import Register from './Container/Register';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <switch>
        <Route path='/register'>
          <Register></Register>
        </Route>
      </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
