import React, { Component } from 'react'



export default class BaiTapChonXe extends Component {
   
    state = {
        srcImg:"./img/black-car.jpg"
    }
   
    handleChangeImg=(src)=>{
        this.setState({srcImg:src});
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.srcImg} className="w-100" />
                    </div>
                    <div className="col-6">
                         <button className="btn text-white col-12 mb-2" style={{background:'red'}} onClick={()=>{this.handleChangeImg('./img/red-car.jpg')}}>red</button>
                         <button className="btn text-white col-12 mb-2" style={{background:'black'}} onClick={()=>{this.handleChangeImg('./img/black-car.jpg')}}>black</button>
                         <button className="btn text-white col-12 mb-2" style={{background:'silver'}} onClick={()=>{this.handleChangeImg('./img/silver-car.jpg')}}>silver</button>
                         <button className="btn text-black col-12" style={{background:'#eee'}} onClick={()=>{this.handleChangeImg('./img/steel-car.jpg')}}>Steel</button>
                    </div>
                </div>
            </div>
        )
    }
}
