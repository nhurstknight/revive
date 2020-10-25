import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Footer from './components/common/Footer'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import ItemsIndex from './components/items/ItemsIndex'

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/items" component={ItemsIndex}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
