
const whereReducer = (state = {price: "0", kitchen: "0", point: "0", platform: "0"}, action) => {
    switch (action.type) {
        case "PUSH_PRICE":
            // console.log("actionpayload -> ", action.payload)
            return {
                price: action.payload,
                kitchen: state.kitchen,
                point: state.point,
                platform: state.platform
            }
        case "PUSH_KITCHEN":
            // console.log("actionpayload -> ", action.payload)
            return {
                price: state.price,
                kitchen: action.payload,
                point: state.point,
                platform: state.platform
            }
        case "PUSH_POINT":
            // console.log("actionpayload -> ", action.payload)
            return {
                price: state.price,
                kitchen: state.kitchen,
                point: action.payload,
                platform: state.platform
            }
        case "PUSH_PLATFORM":
            // console.log("actionpayload -> ", action.payload)
            return {
                price: state.price,
                kitchen: state.kitchen,
                point: state.point,
                platform: action.payload
            }

        default:
            return state;
    }

}

export default whereReducer;