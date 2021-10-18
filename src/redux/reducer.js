import * as actionTypes from './actionTypes';
import axios from 'axios';




const initialState = {
    token: null,
    userId: null,
    isOpen: false,
    isUpNow: true,
    roomState: "",
    roomCount: {
        premium: 5,
        regular: 5,
        single: 5,
        two: 5,
    }
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
            {
                
                if(state.roomCount[action.payload] === 0){
                    return {
                        ...state,
                        isOpen: false,
                    }
                }
                else{
                    return{
                        ...state,
                        isOpen:true,
                    }
                }
              
            }
        case actionTypes.DATA_SUBMIT:
            return {
                ...state,
                isOpen: false
            }
        case actionTypes.CHANGE_ROOM_STATE:


        if(state.roomCount[action.payload] === 0){
            alert("No rooms availble");
        }

            return {
                ...state,
                roomState: action.payload,

            }
        case actionTypes.REDUCE:
            let roomType = state.roomState;
            if (state.roomCount[roomType] !== 0) {
                return {
                    ...state,

                    roomCount: {
                        ...state.roomCount,
                        [roomType]: (parseInt(state.roomCount[roomType]) - 1),
                    }
                }

            }
            else {
                alert("No Rooms Available");
                return {
                    ...state,
                }
            }
        case actionTypes.ROOM_COUNT:

            return {
                ...state,
                roomCount: {
                    ...state.roomCount,
                }
            }
        case actionTypes.PUT_ROOM_DATA:

            {
                let roomData = {
                    ...state.roomCount,
                }

                axios.put('https://hotel-booking-a373a-default-rtdb.firebaseio.com/roomData.json', roomData)
                    .then(response => response.data)
                    .catch(err => {
                        alert(`${err.response.data.error.message}`);
                    })

                    return{
                        ...state,
                        isUpNow:false,
                    }
            }
       
        case actionTypes.NEW_UPDATE_ROOM_DATA:
            {
            
               if(state.isUpNow === true){
                return {
                    ...state,
                    roomCount: action.payload,

                }
               }
               
            }


        default:
            return state;
    }
}
