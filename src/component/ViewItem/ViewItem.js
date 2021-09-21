import React, { Component } from 'react'
import './ViewItem.css'
export default class ViewItem extends Component {
    state ={
        isUp:false
    }
    courses = () => {
        const { data, DeleteItem,  index } = this.props;
        return (
                <li className="dataIn">
                    <span>{data}</span>
                    <input className="dataUpdate" onClick={() => this.isups()} type="submit" value="Edit"/>
                    <input className="dataDelete" onClick={() => DeleteItem(index)} type="submit" value="Delete"/>                    
                </li> 
        )
    }
    isups = () => {
        const {isUp} = this.state
        this.setState(
            {isUp:!isUp}
        )
    }
    coursesUpdate = () =>{
        return (
                <form className="formAdd2" onSubmit={this.updatecourse}>
                    <input  ref={(v) =>{this.input = v}} defaultValue={this.props.data} type="text" />
                    <button>update now</button>                      
                </form>
        )
    }
    updatecourse = (e) =>{
        e.preventDefault();
        this.props.updateItem(this.props.index, this.input.value);
        this.isups();
    }
    render() {
            const {isUp} = this.state
        return (
            <>
                { isUp ? this.coursesUpdate(): this.courses()  }
            </>
        )
    }
}
