import * as actionTypes from './actionTypes';


const initialState = {
    token: null,
    userId: null,
    isOpen: false,
}



export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
            }
            case actionTypes.TRY_SUBMIT:
                return{
                    ...state,
                    isOpen: true
                }
                case actionTypes.DATA_SUBMIT:
                    return{
                        ...state,
                        isOpen:false
                    }

        default:
            return state;
    }
}
