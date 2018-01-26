import React, { Component } from 'react';
import s from './App.css';
import MainLayout from './containers/Layout'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './containers/Home'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import normalizeCss from 'normalize.css';
import './index.css';
import PropTypes from 'prop-types'


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

export default withStyles(s)(App);
