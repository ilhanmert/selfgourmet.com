import axios from 'axios';
import {toast} from 'react-toastify';

export const getMenuByPartnerId = (id) => async(dispatch) => {
    try {
        // console.log("get action first");
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/menu/${id}`)
        dispatch({type:'GET_MENU_OF_SELECTED_PARTNER', payload: data});
        // console.log("get action ok -> data", data);

    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.getMenuByPartnerId.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.getMenuByPartnerId.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/partner.getMenuByPartnerId.message")
            console.log(error.message)
        }
    }
}

export const getDirectionByPartnerId = (id) => async(dispatch) => {
    try {
        // console.log("get action first");
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/direction/${id}`)
        dispatch({type:'GET_DIRECTION_OF_SELECTED_PARTNER', payload: data});
        // console.log("get action ok -> data", data);

    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.getDirectionByPartnerId.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.getDirectionByPartnerId.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/partner.getDirectionByPartnerId.message")
            console.log(error.message)
        }
    }
}

export const addDirectionAction = (data, token) => async(dispatch) => {
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/partners/direction/add`, {...data, token});
        dispatch(getDirectionByPartnerId(data.partner_id));

    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.addDirectionAction.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.addDirectionAction.request")
            console.log(error.request)
        }else if(error.message){
            console.log("redux/action/partner.addDirectionAction.message")
            console.log(error.message)
        }
    }
}

export const postNewMenu = (data, token) => async(dispatch) => {
    try {
        const newMenu = await axios.post(`${process.env.REACT_APP_API_URL}/partners/menu/add`, {...data, token})
        // console.log("NewMenu", newMenu.data);
        dispatch({type:'NEW_MENU', payload: newMenu.data});

    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.postNewMenu.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.postNewMenu.request")
            console.log(error.request)
        }else if(error.message){
            console.log("redux/action/partner.postNewMenu.message")
            console.log(error.message)
        }
    }
}

export const deleteMenuAction = (body) => async(dispatch) => {
    try {
        // console.log({...commentData, token});
        console.log(body);
        await axios.delete(`${process.env.REACT_APP_API_URL}/partners/menu`, {data: body});
        dispatch({type: 'DELETE_MENU', payload: body.menu_id})
    } catch (error) {
        if (error.response){
            console.log("redux/action/comment.deleteMenuAction.response");
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/comment.deleteMenuAction.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/comment.deleteMenuAction.message")
            console.log(error.message)
        }
    }

}

export const deleteDirectionAction = (body) => async(dispatch) => {
    try {
        // console.log({...commentData, token});
        console.log(body);
        const gelen = await axios.delete(`${process.env.REACT_APP_API_URL}/partners/direction`, {data: body});
        dispatch({type: 'DELETE_DIRECTION', payload: body.direction_id})
        toast.success(gelen.data.message,  {
            position: "bottom-center",
            autoClose: 1000,
            theme: "dark",
        });
    } catch (error) {
        if (error.response){
            console.log("redux/action/comment.deleteMenuAction.response");
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/comment.deleteMenuAction.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/comment.deleteMenuAction.message")
            console.log(error.message)
        }
    }

}