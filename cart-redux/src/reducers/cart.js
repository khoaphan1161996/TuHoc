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
            let index = findProductInCart(state,product)
            if(index!==-1) {
                state[index].quantity += quantity
            }
            else {
                state.push({
                    product,
                    quantity
                })
            }
            
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

export default cart