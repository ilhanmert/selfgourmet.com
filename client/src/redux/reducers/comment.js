
const commentReducer = (state = {comments: [],}, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            // console.log("actionpayload -> ", action.payload)
            return {
                comments: action.payload,
            }
        case "NEW_COMMENT":
                // console.log("actionpayload -> ", action.payload)
                return {
                    comments: [...state.comments, action.payload],
                }

        case "DELETE_COMMENT":
                // console.log("actionpayload -> ", action.payload)
                return {
                    comments: state.comments.filter((comment) => comment.id !== action.payload),
                }
        default:
            return state;
    }

}

export default commentReducer;
