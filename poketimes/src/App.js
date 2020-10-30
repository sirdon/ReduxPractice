import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Post from './components/Post';
import {Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contactus' component={ContactUs}></Route>
          <Route path='/cards' component={Cards}></Route>
          <Route path='/:post_id' component={Post}></Route>
         
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

