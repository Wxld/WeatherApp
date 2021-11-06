import './App.css';
import Home from './Components/Home'
import Weather from './Components/Weather'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weather" component={Weather} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
