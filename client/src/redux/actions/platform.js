import axios from 'axios';
import {toast} from 'react-toastify';

export const getAllPlatform = (id) => async(dispatch) => {
    try {
        // console.log("get action first");
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/platforms`)
        dispatch({type:'GET_ALL_PLATFORM', payload: data});
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
