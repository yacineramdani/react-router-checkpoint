import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';

function App() {
  return (
    <div className="App2">
      <Router>
        <div>
          <Header/>
          <Switch>
            
            <Route path="/resume" component={PageTwo}/>
            <Route path="/projects" component={PageThree}/>
            <Route path="/contact" component={PageFour}/>
            <Route path="/" component={PageOne}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
