import React, { Component } from 'react'
import axios from 'axios'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'


export default class ReactForm extends Component {

    state = {
        arrProduct: [
            { id: '1', name: 'Product1', price: 1000, img: 'https://picsum.photos/50/50', type: 'mobile', description: 'Product 1' },
            { id: '2', name: 'Product2', price: 150, img: 'https://picsum.photos/50/50', type: 'tablet', description: 'Product 2' },
            { id: '3', name: 'Product3', price: 1300, img: 'https://picsum.photos/50/50', type: 'mobile', description: 'Product 3' },
            { id: '4', name: 'Product4', price: 1400, img: 'https://picsum.photos/50/50', type: 'laptop', description: 'Product 4' },
        ],
        productEdit: {
            id: '',
            name: '',
            price: 0,
            img: '',
            type: 'tablet',
            description: ''
        }
    }
    // static getDerivedStateFromProps(newProps, currentState) {
    //     this.setState({ arrProduct: this.layStore() })
    //     return null
    // }

    addProduct = (newProduct) => {
        //  this.state.arrProduct.push(newProduct);
        let arrProductUpdate = [...this.state.arrProduct, { ...newProduct }];
        this.setState({ arrProduct: arrProductUpdate }, () => { this.luuStore(); });

    }

    handleDele = (id) => {
        // let index = this.state.arrProduct.findIndex(item => item.id === id);
        let arrProductUpdate = this.state.arrProduct.filter(pro => pro.id !== id)

        this.setState({ arrProduct: arrProductUpdate },()=>{this.luuStore()})

        // this.setState({arrProduct: this.state.arrProduct.splice(index,1)});
    }


    editProduct = (proClick) => {
        // console.log(proClick);
        this.setState({ productEdit: proClick })
    }


    updateProduct = (proClick) => {
        console.log(proClick)

        let product = this.state.arrProduct.find((item) => item.id == proClick.id);
        if (product) {
            product.name = proClick.name;
            product.description = proClick.description;
            product.price = proClick.price;
            product.type = proClick.type;
            product.img = proClick.img;
        }
        this.setState({ arrProduct: this.state.arrProduct }, () => {
            this.luuStore();
        })
    }

    luuStore = () => {
        let value = JSON.stringify(this.state.arrProduct);
        localStorage.setItem('arrProduct', value);
    }

    layStore = () => {
        if (localStorage.getItem('arrProduct')) {
            let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
            return arrProduct;
        }
        return [];
    }

    render() {
        return (
            <div className="container">
                <h3>Product management</h3>
                <FormProduct
                    addProduct={this.addProduct}
                    productEdit={this.state.productEdit}
                    productUpdate={this.updateProduct}
                />
                <TableProduct
                    arrProduct={this.state.arrProduct}
                    handleDele={this.handleDele}
                    editProduct={this.editProduct}
                />
            </div>
        )

    }

    
    componentDidMount() {
        //thuc thi khi noi dung duoc render
        // this.setState({ arrProduct: this.layStore() })
       let promise = axios({
          url:'https://svcy.myclass.vn/api/Product/GetAll',
          method:'GET',
       })

       promise.then((res)=>{
          this.setState({ arrProduct: res.data})
       })

       promise.catch((error)=>{
        console.log(error)
       })
    }
}
