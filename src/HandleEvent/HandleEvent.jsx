import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick=(e)=>{
        alert('heloooo');
    }

  show =(name)=>{
    alert(name);
  }

  render() {
    return (
      <div className="container">
        <button  onClick={(e)=>{
            alert('hellu')
        }}>Click me</button>

        <button className="btn btn-primary" onClick={this.handleClick}>Click me</button>
        <hr />
        <h3>handleClick parameter</h3>
        <button className="btn btn-primary" onClick={(e)=>{
            //goi cac ham thucj thi kho click 
            this.show('qua ngu');

        }}>click</button>

        <button onClick={this.show.bind(this,'djffg')}>click</button>
      </div>
    )
  }
}
