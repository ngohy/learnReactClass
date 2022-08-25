import React, { Component } from 'react';

class Item extends Component {

    render() {
        let {item}=this.props;
        return (
            <div className="card ">
                <img src={item.image} alt='...' width="100%"/>
                <div className="card-body">
                    <h3>{item.name}</h3>
                    <p>{item.price} $</p>
                    <button className="btn bg-dark text-light">
                        Add To Cart
                    </button>
                </div>
            </div>
        );
    }
}

export default Item;