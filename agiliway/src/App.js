//import logo from './logo.svg';
import './App.css';
import FormsComponent from './components/2TaskForms/FormsInputs';
import FormsRFF from './components/3TaskRFF/FormRFF';
import  FirstComponent  from './components/Todo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="nav">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="selected" to="/task1">Task1</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/task2">Task2</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/task3">Task3</NavLink>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/task1" component={FirstComponent}/>
        <Route path="/task2" component={FormsComponent}/>
        <Route path="/task3" component={FormsRFF}/>
      </Switch>
    </div>
  </Router>
    /////////////////
    // <div className="App">
    //   <header className="App-header">
    //     <FormsRFF/>
    //   </header>
    // </div>
  );
}

export default App;
