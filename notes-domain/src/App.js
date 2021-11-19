import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/NavBar/Navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Footer from "./components/Footer/footer";
import NoteList from "./pages/Notes/NoteList";
import Statistics from "./pages/Statistics/Statistics";
import NoteDetails from "./pages/Notes/NoteDetails";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Layout.Content style={{ padding: '0 50px' }} className="container">
      <main>
        <Switch>
          <Route path="/home" component={HomePage} exact />
          <Route path="/notes" component={NoteList} exact />
          <Route path="/note/:id" component={NoteDetails} exact></Route>
          <Route path="/statistics" component={Statistics} exact></Route>
        </Switch>
      </main>
      </Layout.Content>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
