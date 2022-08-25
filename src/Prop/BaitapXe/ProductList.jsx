import React, { Component } from 'react';
import ItemProduct from './ItemProduct';

class ProductList extends Component {
    render() {
        let { products,xemChiTiet } = this.props;
        return (
            <div>
                <h3>Danh sach xe</h3>
                <div className="row ">
                    {products.map(product => {
                        return (
                            <div className="col-3 " key={product.id}>
                                <ItemProduct product={product} xemChiTiet={xemChiTiet}/>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}

export default ProductList;