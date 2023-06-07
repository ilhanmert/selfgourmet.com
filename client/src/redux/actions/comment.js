import axios from 'axios';
import {toast} from 'react-toastify';

export const getAllCommentsByPartnerId = (id, order) => async(dispatch) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/comments/${order}/${id}`);
        dispatch({type: 'GET_COMMENTS', payload: data})
    } catch (error) {
        if (error.response){
            console.log("redux/action/comment.getAllCommentsByPartnerId.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/comment.getAllCommentsByPartnerId.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/comment.getAllCommentsByPartnerId.message")
            console.log(error.message)
        }
    }
}

export const postNewCommentAction = (commentData, token) => async(dispatch) => {
    try {
        // console.log({...commentData, token});
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/partners/comments/add`, {...commentData, token});
        dispatch({type: 'NEW_COMMENT', payload: data})
    } catch (error) {
        if (error.response){
            console.log("redux/action/comment.getAllCommentsByPartnerId.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/comment.getAllCommentsByPartnerId.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/comment.getAllCommentsByPartnerId.message")
            console.log(error.message)
        }
    }

}   

export const postAnswerAction = (comment_id, answer, token, selected_partner_id, order) => async(dispatch) => {
    try {
        // console.log({...commentData, token});
        await axios.post(`${process.env.REACT_APP_API_URL}/partners/comments/answer`, {comment_id, answer, token, selected_partner_id});
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/comments/${order}/${selected_partner_id}`);
        dispatch({type: 'GET_COMMENTS', payload: data})
        // dispatch({type: 'NEW_ANSWER', payload: data})
    } catch (error) {
        if (error.response){
            console.log("redux/action/comment.getAllCommentsByPartnerId.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/comment.getAllCommentsByPartnerId.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/comment.getAllCommentsByPartnerId.message")
            console.log(error.message)
        }
    }

}

export const deleteCommentAction = (body) => async(dispatch) => {
    try {
        // console.log({...commentData, token});
        console.log(body);
        await axios.delete(`${process.env.REACT_APP_API_URL}/partners/comments`, {data: body});
        dispatch({type: 'DELETE_COMMENT', payload: body.comment_id})
    } catch (error) {
        if (error.response){
            console.log("redux/action/comment.getAllCommentsByPartnerId.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/comment.getAllCommentsByPartnerId.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/comment.getAllCommentsByPartnerId.message")
            console.log(error.message)
        }
    }

}