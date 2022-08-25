import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
    renderMenu = () => {
        console.log(this.props.burger)
        return this.props.burger.map((item, index) => {
            return <tr key={index}>
                <td>{item.id}</td>
                <td><button className="btn btn-success mx-2"
                    onClick={() => {
                        const action = {
                            type: 'CHANGE_QUANTITY',
                            payload: {
                                id: item.id,
                                quantity: 1
                            }
                        }
                        this.props.dispatch(action)
                    }}
                >+</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-danger mx-2"
                        onClick={() => {
                            const action = {
                                type: 'CHANGE_QUANTITY',
                                payload: {
                                    id: item.id,
                                    quantity: -1
                                }
                            }
                            this.props.dispatch(action);
                        }}
                    >-</button></td>
                <td>{item.price}</td>
            </tr>
        })
    }

    total = () => {
        return this.props.burger.reduce((total, item) => {
            return total + item.price*item.quantity;
        }, 0)
    }


    render() {
        const { burger } = this.props;
        return (
            <div className='container'>
                <h3>Chon thuc an</h3>
                <hr></hr>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Thuc an </th>
                            <th></th>
                            <th>Gia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu()}
                        <tr>
                            <td></td>
                            <td>Tong Tien: </td>
                            <td>{this.total()}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td rowSpan={2}>
                                <button className="btn btn-success">THANH TOAN</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    burger: state.burgerReducer.burger
})

export default connect(mapStateToProps)(Menu)