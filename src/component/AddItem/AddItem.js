import React, { Component } from 'react'
import './AddItem.css'

export default class AddItem extends Component {
    
    render() {
        return (
            <form className="formAdd" onSubmit={this.props.AddItem}>
                <input type="submit" value="Create"  className="sbtm"  />
                <input type="text" value={this.props.now} placeholder="Enter your name course" className="insub" onChange={this.props.changes}/>

            </form>
        )
    }
}
