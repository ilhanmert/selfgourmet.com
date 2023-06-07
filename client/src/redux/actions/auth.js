import axios from "axios"
import { toast } from "react-toastify";



export const registerAction = (authData) => async(dispatch) => {
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, authData);
        dispatch({type:'REGISTER', payload: data});
        window.location = '/';
    } catch (error) {
        if (error.response){
            console.log("redux/action/auth.register.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/auth.register.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/auth.register.message")
            console.log(error.message)
        }
    }
}

export const loginAction = (authData) => async(dispatch) => {
    try {
        // console.log("loginAction actv")
        // console.log(authData);
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, authData);
        
        console.log("data", data);
        dispatch({type:'LOGIN', payload: data});
        window.location = '/';
    } catch (error) {
        if (error.response){
            console.log("redux/action/auth.login.response")
            // console.log(error.response.data.statusCode);
            // console.log(error.response.data.errorMessage);
            toast.error(`${error.response.data.statusCode}: ${error.response.data.errorMessage}`,  {
                position: "bottom-center",
                autoClose: 5000,
                theme: "dark",
            });
            
        }else if(error.request){
            console.log("redux/action/auth.login.request")
            console.log(error.request)

        }else if(error.message){
            console.log("redux/action/auth.login.message")
            console.log(error.message)
        }
    }
}