import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableComment extends Component {
    render() {
        let { arrComment } = this.props;
        return (
            <div>
                <div className="img">
                    <img src='https://i.pravatar.cc/300' alt='..' />
                </div>
                {arrComment.map((comment, index) => {
                    return <div className="row mt-2 align-items-center" key={index}>
                        <div className="col-2 ">
                            <img src='https://i.pravatar.cc/70' alt='..' />
                        </div>

                        <div className="col-8 bg-secondary text-white row">
                            <div className="col-8">
                                <h5>{comment.name}</h5>
                                <p>{comment.content}</p>
                            </div>
                            <button className="btn btn-primary col-2 text-right"
                            onClick={() =>{
                                const action={
                                    type:'XOA_COMMENT',
                                    payload: index
                                }
                                this.props.dispatch(action);
                            }}
                            >xoa</button>
                            <button className="btn btn-warning col-2 text-right "
                            onClick={() =>{
                                const action={
                                    type:'EDIT_COMMENT',
                                    payload: index
                                }
                                this.props.dispatch(action);
                            }}
                            >Edit</button>
                        </div>
                    </div>
                })}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    arrComment: state.commentReducer.arrComment,
})


export default connect(mapStateToProps)(TableComment)