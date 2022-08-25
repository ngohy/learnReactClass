import React, { Component } from 'react'
import { connect } from 'react-redux'

class Burger extends Component {
    renderTopping = (id) => {
        const { burger } = this.props;
        let food = burger.find(item => item.id === id);
        let quantity = food.quantity;
        let arrDivJSX = [];
        for (let i = 0; i < quantity; i++) {
            const divTopping = <div className={id} key={i}></div>
            arrDivJSX.push(divTopping);
        }
        return arrDivJSX
    }

    render() {
        return (
            <>
                <div className="breadTop"></div>
                {this.renderTopping('salad')}
                {this.renderTopping('beef')}
                {this.renderTopping('cheese')}

                <div className='breadBottom'></div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    burger: state.burgerReducer.burger
})



export default connect(mapStateToProps)(Burger)