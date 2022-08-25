import React, { Component } from 'react';

class FormProduct extends Component {

    state = {
        productInfo: {
            id: '',
            name: '',
            price: '',
            type: 'mobile',
            description: '',
            img: ''
        },
        error: {
            id: '',
            name: '',
            price: '',
            type: 'mobile',
            description: '',
            img: ''
        }
    }


    handleChange = (e) => {
        let { value, id } = e.target;
        let dataType = e.target.getAttribute('data-type');
        //su ly info
        let newValue = this.state.productInfo;
        newValue[id] = value;

        //su ly error
        let newError = this.state.error;
        let mesError = '';
        if (value.trim() === mesError) {
            mesError = id + ' khong duoc bo trong';
        } else if (dataType === 'number') {
            let regexNumber = /^\d+$/;
            if (!regexNumber.test(value)) {
                mesError = id + ' phai la so';
            }

        }
        newError[id] = mesError;
        //setState
        this.setState({
            productInfo: newValue,
            error: newError
        })

    }

    //handle props can thiep vao qua trinh render updating 

    static getDerivedStateFromProps(newProps, currentState) {
        //kiem tra lai state 
        // if(newProps.productInfo.id != currentState.productInfo.id){

        // }
        currentState.productInfo = newProps.productEdit;
        return { ...currentState }
    }

    //cach 2 lifecycle cu
    //    componentWillReceiveProps(newProps){
    //     this.setState({productEdit: newProps.productEdit})
    //    }


    handleSubmit = (e) => {
        e.preventDefault()
        // khi nguoi dung bam => gui du lieu 
        this.props.addProduct(this.state.productInfo);
    }



    render() {
        let { id, name, price, description, type, img } = this.state.productInfo;
        return (
            <>
                <form
                    className="card "
                    // onSubmit={this.handleSubmit}
                >
                    <div className="card-header bg-dark text-warning">
                        <h4>Create Product</h4>
                    </div>
                    <div className="card-body row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>Id</p>
                                <input type="text" className="form-control" id="id"
                                    onInput={this.handleChange}
                                    value={id} />
                            </div>
                            <p className='text-danger'>{this.state.error.id}</p>
                            <div className="form-group">
                                <p>Name</p>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    onInput={this.handleChange}
                                    value={name}
                                />
                                <p className='text-danger'>{this.state.error.name}</p>
                            </div>
                            <div className="form-group">
                                <p>Price</p>
                                <input
                                    data-type="number"
                                    type="text"
                                    className="form-control" id="price"
                                    onInput={this.handleChange}
                                    value={price}

                                />
                                <p className='text-danger'>{this.state.error.price}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p>Img</p>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="img"
                                    onInput={this.handleChange}
                                    value={img}
                                />
                                <p className='text-danger'>{this.state.error.img}</p>
                            </div>
                            <div className="form-group">
                                <p>Product Type</p>
                                <select type="text"
                                    className="form-control"
                                    id="type"
                                    onInput={this.handleChange}
                                    value={type}
                                >
                                    <option value="mobile">mobile</option>
                                    <option value="tablet">tablet</option>
                                    <option value="laptop">laptop</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <p>Description</p>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    id="description"
                                    onInput={this.handleChange}
                                    value={description}
                                />
                                <p className='text-danger'>{this.state.error.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success mx-2"
                        onClick={this.handleSubmit}
                        >Create</button>
                        <button className="btn btn-primary " onClick={(e) => {
                            e.preventDefault();
                            this.props.productUpdate({ ...this.state.productInfo })
                        }}>Update</button>
                    </div>
                </form>
            </>
        );
    }
}

export default FormProduct;
