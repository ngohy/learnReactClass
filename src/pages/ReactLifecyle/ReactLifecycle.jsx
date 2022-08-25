import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifecycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      objectNumber: {
        number: 1
      },
      count: 60,
    };

  }

  static getDerivedStateFromProps(newProps, currentState) {
    // console.log('getDerivedPropsFromProps');
    // currentState.number=20;
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    // console.log('shouldComponentUpdate')
    //newProps la props moi truoc khi render 
    // this.props la prop hien tai
    return true;
  }

  render() {
    // console.log('render');
    return (
      <div className="container">
        <h3>Number:{this.state.objectNumber.number} </h3>
        <button className="btn btn-primary mx-3" onClick={() => {
          let obNumber = { ...this.state.objectNumber };
          obNumber.number += 1;
          this.setState({ objectNumber: obNumber });
        }}>+</button>



        <Child obNumber={this.state.objectNumber} />



        <h3>like: {this.state.like}</h3>
        <button className="btn btn-primary" onClick={() => {
          this.setState({ like: this.state.like + 1 })
        }}>+</button>

        <h2>{this.state.count}</h2>
      </div>
    )
  }
  timeout={};
  componentDidMount() {
    // console.log('componentDidMount');
    this.timeout=setInterval(() => {
      this.setState({ count: this.state.count - 1 })
      console.log(this.state.count);

    }, 1000)


  }


  componentDidUpdate(prevProps, prevState) {
    //handle sau khi component goi render
    //tuy nhien han che setState lai
    //=> setState phai co lenh if

    // console.log(prevProps);
    // console.log(prevState);
    

  }

  componentWillUnmount(){
    //clear khi component mat khoi giao dien => clear tat ca cac script chay ngam
    clearInterval(this.timeout);
  }


}
/*
    +mouting: cac ham se tu kich hoat khi su dung 1 component.dung de cang thiep vao truoc hoac sau khi render muc dinh xu ly state va props
    + can thiet thay doi state truoc khi render (su dung getDerivedStateFromProps)
    + can thiet thay đổi state sau render (su dung componentDidMount)
    + componentDidMount chi chay 1 lan duy nhat khi component load lan dau tien (thuong dung call api)



*/