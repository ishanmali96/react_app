import React from "react";
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './component/Navbar'
import Best from './component/best'
import TwoBox from './component/TwoBox'
import Testminal from './component/Testminal'
import Footer from './component/Footer'
import Contact from './pages/contact'
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const App = () =>{
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path = '/'exact>
                    <Home/>
                    <Best/>
                    <TwoBox/>
                    <Testminal />
                </Route>
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;