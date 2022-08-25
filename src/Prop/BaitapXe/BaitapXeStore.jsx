import React, { Component } from 'react';
import Models from './Models';
import ProductList from './ProductList';

const data = [{ id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
{ id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
{ id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
{ id: 3, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
];
class BaitapXeStore extends Component {
    state = {
        productDetail: {}
    }
    xemChiTiet = (product) => {
        this.setState({ productDetail: product });
    }
    render() {
        return (
            <div className="container">
                <Models productDetail={this.state.productDetail} />
                <ProductList products={data} xemChiTiet={this.xemChiTiet} />
            </div>
        );
    }
}

export default BaitapXeStore;