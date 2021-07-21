import * as messageConstant from '../constants/Message'
import * as types from '../constants/ActionType'

let initialState = messageConstant.MSG_WELCOME

const message = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default:
            return state
    }
}

export default message