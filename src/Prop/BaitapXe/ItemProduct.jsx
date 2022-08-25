import React, { Component } from 'react'

export default class ItemProduct extends Component {
    render() {
        let { product, xemChiTiet } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={product.img} alt='car' />
                    <div className="card-body">
                        <h3>{product.name}</h3>
                        <p>{product.price}$</p>
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modelId" onClick={() => {
                            xemChiTiet(product);
                        }}>Detail</button>
                    </div>
                </div>
            </div>
        )
    }
}
