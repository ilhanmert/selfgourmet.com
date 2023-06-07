
const partnerReducer = (state = {partners: [], selectedPartner: [], ads: []}, action) => {
    switch (action.type) {
        case "GET_PARTNERS":
            return {
                partners: action.payload,
                selectedPartner: state.selectedPartner, 
                ads: state.ads,
            }
        case "NEW_PARTNER_APPEAL":
            return {
                partners: [...state.partners, action.payload],
                selectedPartner: state.selectedPartner, 
                ads: state.ads,
            }
        case "GET_PARTNER":
            return {
                partners: action.payload,
                selectedPartner: state.selectedPartner,
                ads: state.ads, 
            }
        case "SELECT_PARTNER":
            return {
                partners: state.partners, 
                selectedPartner: action.payload,
                ads: state.ads,
            }
        case "GET_PARTNERS_TAKE_ADS":
            return {
                partners: state.partners, 
                selectedPartner: state.selectedPartner,
                ads: action.payload,
            }
            
    
        default:
            return state;
    }

}

export default partnerReducer;