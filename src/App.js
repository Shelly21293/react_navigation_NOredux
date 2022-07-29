import './App.css';
import { Outlet, Link } from "react-router-dom";
import NavBar from './NavBar';
import Right from './Right';
import Left from './Left';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <div class="container mt-5">
        <div class="row">
          <Left></Left>
          <Right></Right>

        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
