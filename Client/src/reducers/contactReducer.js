import {
    START_SEND_CONTACTINFO,
    SUCCESS_SEND_CONTACTINFO,
    ERROR_SEND_CONTACTINFO
} from '../types'

const initialState = {
    sendingInfo: false,
    infoSent: false,
    errorSending: false
}

export default function(state = initialState, action) {
    switch(action.type) {

        case START_SEND_CONTACTINFO:
            return {
                ...state,
                sendingInfo: true,
                infoSent: false,
                errorSending: false
            }
        
        case SUCCESS_SEND_CONTACTINFO:
            return {
                ...state,
                sendingInfo: false,
                infoSent: true,
                errorSending: false
            }
        
        case ERROR_SEND_CONTACTINFO:
            return {
                ...state,
                sendingInfo: false,
                infoSent: false,
                errorSending: true
            }

        default:
            return state;
    }
}