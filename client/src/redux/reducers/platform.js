
const platformReducer = (state = {platforms: [],}, action) => {
    switch (action.type) {
        case "GET_ALL_PLATFORM":
            return {
                platforms: action.payload,
            }
    
        default:
            return state;
    }

}

export default platformReducer;