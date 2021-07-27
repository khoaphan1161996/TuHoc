import * as Types from '../constants/ActionTypes'

const initialState = []

const findIndex = (products,id) => {
    let index = products.findIndex(product => product.id === id)
    return index
}

const products = (state = initialState, action) => {
    const {id,product} = action
    switch (action.type) {
        case Types.FETCH_PRODUCTS: 
            state = action.products
            return [...state]

        case Types.DELETE_PRODUCT:
            let indexDelete = findIndex(state, id)
            if(indexDelete !== -1) {
                state.splice(indexDelete,1)
            }
            return [...state]

        case Types.ADD_PRODUCT:
            state.push(product)
            return [...state]

        case Types.UPDATE_PRODUCT:
            let indexUpdate = findIndex(state, product.id)
            state[indexUpdate] = product
            return [...state]
            
        default: return [...state]
    }
}

export default products;