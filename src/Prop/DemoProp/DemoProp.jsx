import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class DemoProp extends Component {
    render() {
        return (
            <div className="container row">
                <div className="w-25">
                    <ProductCard name="hello" age="10" />
                </div>
                <div className="w-25">
                    <ProductCard name="what sup" age="14" />
                </div>
            </div>
        )
    }
}
