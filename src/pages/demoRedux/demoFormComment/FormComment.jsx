import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormComment extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
        const action = {
            type: 'HANDLE_SUBMIT',
            payload: this.props.commentInfo
        }

        this.props.dispatch(action);
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        const action = {
            type: 'HANDLE_CHANGE',
            payload: {
                id,
                value
            }
        }
        this.props.dispatch(action);
    }

    render() {

        let { commentInfo } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <p>name</p>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={commentInfo.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <p>content</p>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        value={commentInfo.content}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <button className="btn btn-success"
                    >Comment</button>
                    <button className="btn btn-warning"
                        onClick={() => {
                            //mobx context
                            const action = {
                                type: 'UPDATE_COMMENT',
                                payload: this.state.commentInfo
                            }
                            this.props.dispatch(action);
                        }}>Update</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    commentInfo: state.commentReducer.commentInfo
})



export default connect(mapStateToProps)(FormComment)