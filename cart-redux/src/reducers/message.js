import * as messageConstant from '../constants/Message'

let initialState = messageConstant.MSG_WELCOME

const message = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default message