import React, { Component } from 'react';
//ket noi redux
import { connect } from 'react-redux';

class DemoTangGiamSL extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="container">
                <h3> Demo Tang Giam so luong</h3>
                <h3>Number: {this.props.number}</h3>
                <button className="btn btn-primary" onClick={()=>{
                    //tao ra 1 object action
                    const action={
                        type:'TANG_SL',
                        payload: 1
                    }

                    //dung props.dispatch de dua du lieu len redux store
                    this.props.dispatch(action);

                }}>+</button>
            </div>
        );
    }
}

//lay state tu redux ve bien thanh props cua component
const mapStateToProps = (state) => {
    //return ve object gi object do la props cua component
    return {
        number: state.number,
        state: state
    }
}
//tao ra component chua logic cua redux
export default connect(mapStateToProps)(DemoTangGiamSL);


/*
  function co 1 len return ve object thi viet tat
  (param)=>{return {props1:'...'}}
  (param)=>({})
  return:se chuyen thanh ()

  note : rcredux
*/

