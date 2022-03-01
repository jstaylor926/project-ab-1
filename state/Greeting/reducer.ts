import * as React from 'react';

export const greetingsReducer = (state: any, action: any) => {
    switch(action.type) {
        case "enteredName":
            if(state.enteredName === action.payload) {
                return state;
            }
            return {
                ...state, 
                enteredName: action.payload
            }
        case "message":
            return {
                ...state,
                message: `Hello. My name is ${action.payload}`
            }
        default:
            throw new Error("Invalid action type" + action.type)
    }
}

export const initialState = {
    enteredName: '',
    message: '',
}