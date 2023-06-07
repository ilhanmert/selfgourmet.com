import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import partnerReducer from "./reducers/partner";
import commentReducer from "./reducers/comment";
import whereReducer from "./reducers/where";
import menuReducer from "./reducers/menu";
import platformReducer from "./reducers/platform";



const initialState = {

};

const reducers = combineReducers({
    auth: authReducer,
    partners: partnerReducer,
    selectedPartner: partnerReducer,
    comments: commentReducer,
    price: whereReducer,
    kitchen: whereReducer,
    point: whereReducer,
    platform: whereReducer,
    menu: menuReducer,
    direction: menuReducer,
    platforms: platformReducer,
    ads: partnerReducer,

});



const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;