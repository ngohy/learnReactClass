import React, { Component } from 'react';

class TangGiamFontSize extends Component {

    state = {
        fSize: 16
    }

    render() {
        return (
            <div className="container mt-3">
                <h3 className='text-red'>Tang Giam Font Size</h3>
                <p style={{ fontSize: this.state.fSize + 'px' }}>lorem ipsum dolor sit amet, consectetur adipiscing
                    lorem ipsum dolor sit amet, consectetur adip</p>
                <button className="btn btn-primary mx-2" onClick={() => { this.setState({ fSize: this.state.fSize + 5 }) }}>+</button>
                <button className="btn btn-primary mx-2" onClick={() => { this.setState({ fSize: this.state.fSize - 5 }) }} >-</button>
            </div>
        );
    }
}

export default TangGiamFontSize;