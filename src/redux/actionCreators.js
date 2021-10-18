import * as actionTypes from './actionTypes';
import axios from 'axios';




export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId,
        }
    }
}








export const auth = (email, password, mode) => dispatch => {
    let authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }


   

    let API_URL = "";
    if (mode === "login") {
        API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
       
    }
    else {
        API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        
    }

    let API_KEY = 'AIzaSyBpZDnQvX_FnIAjT8ZXKP79Ue66G-KjTeU';
    axios.post(API_URL + API_KEY, authData)
        .then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            // dispatch(authLoading(false));
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime', expirationTime);
        }
        )
        .catch(err => {
            alert(`${err.response.data.error.message}`);
        })



}



export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        // Logout
        dispatch(Logout());
    } else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            // Logout
            dispatch(Logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
        }
    }
}


export const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}



export const dataSubmit = () => {
    return {
        type: actionTypes.DATA_SUBMIT
    }
}

export const trySubmit = (props) => {
  

    return {
        type: actionTypes.TRY_SUBMIT,
        payload: props,
    }
}


export const roomCount = (props) => {

    return {
        type: actionTypes.ROOM_COUNT,
        payload: props.roomType,
    }
}


export const getRoomCount = (props) => {
    return {
        type: actionTypes.GET_ROOM_COUNT,

    }
}

export const changeRoomState = (props) => {
    return {
        type: actionTypes.CHANGE_ROOM_STATE,
        payload: props,
    }
}

export const reduce = () => {
    return {
        type: actionTypes.REDUCE,
    }
}


export const putRoomData =()=>{
    return{
        type: actionTypes.PUT_ROOM_DATA,
    }
}

export const newUpdateRoomData =(props)=>{
   

    return{
        type: actionTypes.NEW_UPDATE_ROOM_DATA,
        payload: props,

    }
}