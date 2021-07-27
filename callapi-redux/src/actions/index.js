import * as Types from '../constants/ActionTypes'

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actEditProduct = (product,id) => {
    return {
        type: Types.EDIT_PRODUCT,
        product,
        id
    }
}

export const actUpdateProduct = (product,id) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product,
        id
    }
}