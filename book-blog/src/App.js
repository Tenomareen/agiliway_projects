import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './home';
import "./styles.scss";
import APIComponent from './APIComponent';
import BookDetails from './pages/Books/BookDetails/bookDetails';
import APIComponentHook from './APIComponentHook';
import BookDetailsHook from './pages/Books/BookDetails/bookDetailsHook';
import bookList from './pages/Books/BookList/bookList';
//import { NavbarBrand, Navbar, NavbarToggler, Collapse, Nav, NavItem, DropdownItem, NavbarText, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="selected" to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/books">Books</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Switch>
        <Route path="/home" component={Home} exact/>
        <Route path="/books" component={APIComponentHook} exact/>
        <Route path="/books/:id" component={BookDetailsHook} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
