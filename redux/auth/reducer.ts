import { Action } from '../../interfaces';
import { types } from '../types'

var initialState = {
    login: null
}

export const authReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case types.login:
            return { ...state, ...action.payload, login: true }

        case types.logout:
            return { login: false }

        default:
            return state;
    }

}