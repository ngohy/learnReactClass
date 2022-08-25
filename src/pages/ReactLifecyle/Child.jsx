import React, { Component,PureComponent } from 'react';
/*
    PureComponent laf component khong co lifecycle shouldComponentUpdate tuy nhien o pureComponent da ho tro viec su ly render khi props thay doi va khong render lai props kh thay doi .
    luu y : 
     so sanh props o day chi la dang shallow compare -nhan biet dc (primitive value): number, string, boolean,undefined...
     reference value thi cap nhat state cha su dung {...spread operator};  
*/


class Child extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    static getDerivedStateFromProps(newProps, currentState) {
        // console.log('getDerivedPropsFromProps');
        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     if (this.props.number !== newProps.number) {
    //         console.log('shouldComponentUpdate child');
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        console.log('render child');
        return (
            <div className="container">
                <div className="p-5 display-4 bg-dark text-light">
                    <h2>Child component : 
                    {this.props.obNumber.number}</h2>
                </div>
            </div>
        )
    }

    componentDidMount() {
        //tuong tu window.onload
        //chay duy nhat 1 lan
        // console.log('componentDidMount child');
    }

    componentDidUpdate(prevProps,prevState) {
        //handle sau khi component goi render
        //tuy nhien han che setState lai
        //=> setState phai co lenh if

        console.log(prevProps);
        console.log(prevState);


    }
}

export default Child;