import {
    START_SEND_CONTACTINFO,
    SUCCESS_SEND_CONTACTINFO,
    ERROR_SEND_CONTACTINFO
} from '../types'

import clienteAxios from '../config/axios';

export function sendContactInfo(contactInfo) {
    return async (dispatch) => {
        
        dispatch( startSendContactInfo () )

        const headers = {
            'Content-Type': 'application/json'
        }

        try {
          await clienteAxios.post(`/contact/`, contactInfo, {
            headers: headers
          });           
           dispatch( contactInfoSent())
        } catch (error) {
            dispatch ( errorSendingContactInfo())
        }
    }
}

const startSendContactInfo = () => ({
    type: START_SEND_CONTACTINFO
})

const contactInfoSent = () => ({
    type: SUCCESS_SEND_CONTACTINFO
})

const errorSendingContactInfo = () => ({
    type: ERROR_SEND_CONTACTINFO
})