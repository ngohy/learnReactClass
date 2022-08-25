import React, { Component } from 'react';

class ProductCard extends Component {
    render() {
        //this.props = thuoc tinh co san cua react class nhan gia tri cua thg cha truyen xuong cho con
        /*
            so sanh : state & prop
            giong nhau: deu laf thuoc tinh cau react, dung binding ra giao dien

            khac nhau: state co the gan lai gia tri qua setStae con prop thi kh
            lay gia tri tu thang cha truyen vao

            optional chaining :neu co thi render ra kh co thi bo qua 
            vidu item?.age
        */
       
        let {name,age} = this.props;
        return (
            <div className="card">
            <img src={`https://i.pravatar.cc?u=${age}`}/>
                <div className="card-body">
                    <p>Name:{name}</p>
                    <p>Age:{age}</p>
                </div>
            </div>
        );
    }
}

export default ProductCard;