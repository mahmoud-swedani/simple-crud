import './App.css';
import ViewItem from './component/ViewItem/ViewItem';
import AddItem from './component/AddItem/AddItem';


import React, { Component } from 'react'

export default class App extends Component {
  state = {
    courses:[
      { name:"Html"},
      { name:"Css"},
      { name:"JavaScript"},
    ],
    now:''
}
  AddItem = (e) => {
    e.preventDefault();
    let {courses} = this.state
    courses.push({"name":this.state.now})
    this.setState({
      courses,
      now:''
    })
  }

  changes = (e) => {
    this.setState({
      now:e.target.value
    })
    
    console.log(this.state.now)
  }
  DeleteItem = (index) => {
    let {courses} = this.state
    courses.splice(index, 1)
    this.setState({
      courses,
    })
  }
  updateItem = (index, value) => {
    let {courses} = this.state
    let course = courses[index]
    course["name"] = value
    this.setState({
      courses      
    })
  }

  render() {
    const {courses} = this.state;
    const courseLest = courses.map( (course, index) => {
      return  <ViewItem data={course.name} key={index} index={index} DeleteItem={this.DeleteItem} updateItem={this.updateItem}/>
    })
    return (
      <section className="App">
        <h2>Simple Crud App</h2>
        <AddItem AddItem={this.AddItem} changes={this.changes} now={this.state.now}/>
        <ul>{courseLest}</ul>
      </section>
    )
  }
}