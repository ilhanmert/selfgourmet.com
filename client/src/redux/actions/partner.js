import axios from 'axios';
import {toast} from 'react-toastify';

export const getAllPartnersAction = () => async(dispatch) => {
    try {
        // console.log("get action first");
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/all`)
        dispatch({type:'GET_PARTNERS', payload: data});
        // console.log("get action ok -> data", data);

    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.getAllPartnersAction.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.getAllPartnersAction.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/partner.getAllPartnersAction.message")
            console.log(error.message)
        }
    }
}

export const getPartnerTakeAdsAction = () => async(dispatch) => {
    try {
        // console.log("get action first");
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/ads`)
        dispatch({type:'GET_PARTNERS_TAKE_ADS', payload: data});
        // console.log("get action ok -> data", data);

    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.getPartnerTakeAdsAction.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.getPartnerTakeAdsAction.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/partner.getPartnerTakeAdsAction.message")
            console.log(error.message)
        }
    }
}


export const selectedPartnerAction = (id) => async(dispatch) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/id?id=${id}`);
        dispatch({type: 'SELECT_PARTNER', payload: data})
    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.getPartnerAction.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.getPartnerAction.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/partner.getPartnerAction.message")
            console.log(error.message)
        }
    }
}

export const getPartnerAction = (search) => async(dispatch) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners?search=${search}`);
        dispatch({type:'GET_PARTNER', payload: data});

    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.getPartnerAction.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.getPartnerAction.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/partner.getPartnerAction.message")
            console.log(error.message)
        }
    }
}

export const getPartnerActionWhere = (where) => async(dispatch) => {
    try {
        // console.log(`http://localhost:3001/partners/all/filter?where=${where}`);
        // console.log(where);
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/partners/all/filter?where=${where}`);
        dispatch({type:'GET_PARTNER', payload: data});

    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.getPartnerActionWhere.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.getPartnerActionWhere.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/partner.getPartnerActionWhere.message")
            console.log(error.message)
        }
    }
}

export const newPartnerAppealAction = (newPartnerData) => async(dispatch) => {
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/partners/appeal`, newPartnerData)
        dispatch({type:'NEW_PARTNER_APPEAL', payload: data});
        
    } catch (error) {
        if (error.response){
            console.log("redux/action/partner.newPartnerAppealAction.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/partner.newPartnerAppealAction.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/partner.newPartnerAppealAction.message")
            console.log(error.message)
        }
    }
}