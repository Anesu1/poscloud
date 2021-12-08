import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Devices from "./pages/Devices";
import Banner from "./components/Banner";
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Banner />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Services} />
        <Route path="/devices" component={Devices} />
      </Switch>
      
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
