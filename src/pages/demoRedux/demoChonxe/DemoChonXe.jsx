import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
  xoa export tren component
  xoa mapDispatchToProps
*/

class DemoChonXe extends Component {

    handleClick = (color) => {
        const action = {
            type: 'SELECT_COLOR_CAR',
            payload: `./img/${color}-car.jpg`
        }

        this.props.dispatch(action);
    }
    render() {
        return (
            <div className='container'>
                <h3>Demo Chon Xe</h3>
                <div className='row'>
                    <div className='col-6'>
                        <img src={this.props.imgCar} alt='car' className='w-100' />
                    </div>
                    <div className='col-6 d-flex'>
                        <div className='mx-2'>
                            <button className='btn btn-danger' onClick={() => {
                                this.handleClick('red');
                            }}>Red</button>
                        </div>
                        <div className='mx-2'>
                            <button className='btn btn-secondary' onClick={() => {
                                this.handleClick('silver');
                            }}>Silver</button>
                        </div>
                        <div className='mx-2'>
                            <button className='btn btn-dark' onClick={() => {
                                this.handleClick('black');
                            }} >Black</button>
                        </div>  
                        <div className='mx-2'>
                            <button className='btn btn-warning' onClick={() => {
                                this.handleClick('steel');
                            }}>Steel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    //lay cac state cua redux bien thanh props cua component
    imgCar: state.imgCar,
})


export default connect(mapStateToProps)(DemoChonXe)