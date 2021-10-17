import * as actionTypes from './actionTypes';
import axios from 'axios';


const initialState = {
    token: null,
    userId: null,
    isOpen: false,
    roomState: "",
    roomCount: {
        premium: 5,
        regular: 5,
        single: 5,
        two: 5,
    }
}



export const reducer = (state = initialState, action) => {
    console.log(state);

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
            return {
                ...state,
                isOpen: true
            }
        case actionTypes.DATA_SUBMIT:
            return {
                ...state,
                isOpen: false
            }
        case actionTypes.CHANGE_ROOM_STATE:

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
                console.log(roomData);
                axios.put('https://hotel-booking-a373a-default-rtdb.firebaseio.com/roomData.json', roomData)
                    .then(response => console.log(response.data))
                    .catch(err => {
                        alert(`${err.response.data.error.message}`);
                    })
            }
        case actionTypes.UPDATE_ROOM_DATA:
            {

                let resData = null;
                axios.get('https://hotel-booking-a373a-default-rtdb.firebaseio.com/roomData.json')
                    .then(response => {
                        resData = response.data
                    })
            }

        default:
            return state;
    }
}
