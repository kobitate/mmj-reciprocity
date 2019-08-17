import React, { Component } from 'react'
import Home from '../pages/Home'
import { BrowserRouter, Route } from 'react-router-dom'

export default class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route path='/' component={Home} />
      </BrowserRouter>
    )
  }
}
