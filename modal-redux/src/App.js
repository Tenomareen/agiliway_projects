import logo from './logo.svg';
import './App.css';
import ModalRedux from './components/ModalRedux';
import ModalReact from './components/ModalReact';

function App() {
  return (
    <div>
      <div>
       <ModalRedux /> 
      </div>
        <hr/>
      <div>
        <ModalReact /> 
      </div>
    </div>
  );
}

export default App;
