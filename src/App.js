import './App.css';
import { ViewItem } from './component/ViewItem/ViewItem';
import AddItem from './component/AddItem/AddItem';


import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <section className="App">
        <h2>Simple Crud App</h2>
        <AddItem />
        <ViewItem />
      </section>
    )
  }
}