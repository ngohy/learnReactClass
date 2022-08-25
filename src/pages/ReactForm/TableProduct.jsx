import React, { Component } from 'react';

class TableProduct extends Component {

    render() {
        let {arrProduct,handleDele,editProduct}= this.props;
        return (
            <table className="table">
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th></th>
                </tr>
             </thead>   
             <tbody>
             {arrProduct.map((item)=>{
                   return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td> <img width={50} src={item.img} alt='...'/></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.type}</td>
                    <td>{item.description}</td>
                    <td>
                        <button className="btn btn-danger mx-2" onClick={()=>handleDele(item.id)} >Del</button>
                        <button className="btn btn-success" onClick={() => editProduct(item)}>Edit</button>
                    </td>
         
                  </tr>
             })}
                  
             </tbody>
            </table>
        );
    }
}

export default TableProduct;