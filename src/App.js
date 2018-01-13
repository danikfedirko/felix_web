import React, { Component } from 'react';
import './App.css';
import MainLayout from './containers/Layout'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './containers/Home'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Route path='/' component={Home}/>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
