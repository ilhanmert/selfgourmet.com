

export const filterPrice = (data) => async(dispatch) => {
    try {
        dispatch({type:'PUSH_PRICE', payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const filterKitchen = (data) => async(dispatch) => {
    try {
        dispatch({type:'PUSH_KITCHEN', payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const filterPoint = (data) => async(dispatch) => {
    try {
        dispatch({type:'PUSH_POINT', payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const filterPlatform = (data) => async(dispatch) => {
    try {
        dispatch({type:'PUSH_PLATFORM', payload: data});
    } catch (error) {
        console.log(error);
    }
}

