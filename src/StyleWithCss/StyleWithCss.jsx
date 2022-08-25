import React, { Component } from 'react';
import { Fragment } from 'react';
// import '../index.css';
import style from './StyleWithCss.module.css';

class StyleWithCss extends Component {
    render() {
        return (
            <fragment>
                <div className={` ${style['text-blue']} container`}>
                    lorem ipsum dolor sit amet, consectetur adipiscing
                </div>
                <div className="container" style={{
                    height:'200px',
                    color:'yellow',background:`url(https://picsum.photos/2000/200)`}}>
                    helloooo 
                </div>
            </fragment>
        );
    }
}

export default StyleWithCss;