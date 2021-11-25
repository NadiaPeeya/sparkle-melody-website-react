import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import Donate from './components/Donate/Donate';


function App() {
  return (
    <div className="App">
   <Router>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
         </Route>
      <Route path="/about">
      <About></About>
      </Route>
      <Route path="/contact">
      <ContactUs></ContactUs>
      </Route>
      <Route path="/services">
       <Courses></Courses>
         </Route>
      <Route path="/donate">
      <Donate></Donate>
         </Route>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
     </Switch>
     <Footer></Footer>
   </Router>
    </div>
  );
}

export default App;
