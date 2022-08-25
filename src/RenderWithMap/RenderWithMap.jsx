import React, { Component } from 'react';

const data = [
    { id: 1, name: 'Red car', price: 1000, img: './img/red-car.jpg' },
    { id: 2, name: 'Black car', price: 1000, img: './img/black-car.jpg' },
    { id: 3, name: 'Silver car', price: 1000, img: './img/silver-car.jpg' },
    { id: 4, name: 'Steel car', price: 1000, img: './img/steel-car.jpg' },
];


class RenderWithMap extends Component {

    renderProduct = () => {
        let arrJSX= [];
        // for (let value of data) {
        //     let tr = <tr>
        //         <td>{value.id}</td>
        //         <td>{value.name}</td>
        //         <td>{value.price}</td>
        //         <td><img src={value.img} width={50} /></td>
        //     </tr>
        //     arrJSX.push(tr);
        // }
        //cach 2
        arrJSX=data.map((prod,index) =>{
            return <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td><img src={prod.img} width={50} /></td>
            </tr>
        })
        return arrJSX;
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h3>Render Table product</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Img</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProduct()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RenderWithMap;