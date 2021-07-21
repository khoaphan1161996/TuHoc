import * as types from '../constants/ActionType'

let data = JSON.parse(localStorage.getItem('CART'))
let initialState = data ?? []

const findProductInCart = (cart, product) => {
    let index = cart.findIndex(item=>item.product.id===product.id)
    return index
}

const cart = (state = initialState, action) => {
    const {product, quantity} = action;
    switch(action.type) {
        case types.ADD_TO_CART:
            let indexAdd = findProductInCart(state,product)
            if(indexAdd!==-1) {
                state[indexAdd].quantity += quantity
            }
            else {
                state.push({
                    product,
                    quantity
                })
            }
            
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]

        case types.DELETE_PRODUCT_IN_CART:
            let indexDelete = findProductInCart(state,product)
            if(indexDelete!==-1) {
                state.splice(indexDelete,1)
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

export default cart