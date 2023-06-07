
const menuReducer = (state = {menu: [], direction: [],}, action) => {
    switch (action.type) {
        case "GET_MENU_OF_SELECTED_PARTNER":
            return {
                menu: action.payload,
                direction: state.direction,
            }
        case "NEW_MENU":
            return {
                menu: [...state.menu, action.payload],
                direction: state.direction,
            }
        case "DELETE_MENU":
            return {
                menu: state.menu.filter((menu) => menu.id !== action.payload),
                direction: state.direction,
            }
        case "GET_DIRECTION_OF_SELECTED_PARTNER":
            return {
                direction: action.payload,
                menu: state.menu,
            }
        case "DELETE_DIRECTION":
            return {
                menu: state.menu,
                direction: state.direction.filter((direction) => direction.id !== action.payload),
            }
    
        default:
            return state;
    }

}

export default menuReducer;
