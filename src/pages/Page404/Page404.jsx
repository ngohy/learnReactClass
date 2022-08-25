import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
    render() {
        return (
            <div className="container">
                404
                <p>khong tim thay
                   <NavLink to={''}>Trang Chu !</NavLink>
                </p>
            </div>
        )
    }
}
