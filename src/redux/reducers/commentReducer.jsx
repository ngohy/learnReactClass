
const stateDefault = {
    commentInfo: {
        name: '',
        content: ''
    },
    arrComment: [
        { name: 'hh', content: ' like' },
        { name: 'nn', content: 'like like' }
    ]
}

export const commentReducer = (state=stateDefault, {type ,payload}) => {
     switch (type) {
        case 'HANDLE_CHANGE':{
               //lay ra du lieu action gui lenh
               const {id,value} = payload;
               //thay doi state laf obj hay arr thi phai clone ra
               let commentInfoUpdate={...state.commentInfo};
               //thay doi state
               commentInfoUpdate[id] = value;

               state.commentInfo = commentInfoUpdate;

               return {...state}  //immutable
        }
        case 'HANDLE_SUBMIT':{
            let comment=payload;
            let arrCommentUpdate=[...state.arrComment];
            arrCommentUpdate.push(comment);
            state.arrComment=arrCommentUpdate;
            return { ...state} //immutable
        }
        case 'XOA_COMMENT':{
            let id=payload;
            let arrCommentUpdate=[...state.arrComment];
            state.arrComment=arrCommentUpdate.filter((item,index) => index !== id);
            // state.arrComment=arrCommentUpdate.splice(id,1);
            return { ...state } //immutable
        }

        case 'EDIT_COMMENT':{
            let id= payload;
            let commentInfoUpdate={...state.commentInfo};
            commentInfoUpdate= state.arrComment[id];
            state.commentInfo= commentInfoUpdate;
            return { ...state } //immutable
        }
        case 'UPDATE_COMMENT':{
            let arrCommentUpdate=[...state.arrComment];
            let commentUpdate= arrCommentUpdate.find(comment => comment.name === state.commentInfo.name);
            if(commentUpdate){
                commentUpdate.content=state.commentInfo.content;
            }

            state.arrComment=arrCommentUpdate;
            return {...state};
        }
        default: return state
     }
}
