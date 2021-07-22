import {useDispatch} from "react-redux"

import {actDeleteProductInCart,actChangeMessage,actUpdateProductInCart} from '../../actions/'
import * as messageConstant from '../../constants/Message'

import PropTypes from 'prop-types';
import { useState } from "react";

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })
}

function CartItem(props) {
  const {cartItem} = props

  const dispatch = useDispatch()

  const showSubtotal = (price,quantity) => {
    return price*quantity 
  }

  const onDelete = (product) => {
    // delete
    const actionDeleteProductInCart = actDeleteProductInCart(product)
    dispatch(actionDeleteProductInCart)
    // thay đổi mess
    const actionChangeMessage = actChangeMessage(messageConstant.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    dispatch(actionChangeMessage)
  }

  const onUpdateQuantity = (product, quantity) => {
    //update
    if(quantity>0) {
      const actionUpdateProductInCart = actUpdateProductInCart(product,quantity)
      dispatch(actionUpdateProductInCart)
      const actionChangeMessage = actChangeMessage(messageConstant.MSG_UPDATE_CART_SUCCESS)
      dispatch(actionChangeMessage)
    }
    else {
      const actionDeleteProductInCart = actDeleteProductInCart(product)
      dispatch(actionDeleteProductInCart)
      const actionChangeMessage = actChangeMessage(messageConstant.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
      dispatch(actionChangeMessage)
    }
  }

  return (
    <tr>
      <th scope="row">
        <img
          src={cartItem.product.image}
          alt={cartItem.product.name}
          className="img-fluid z-depth-0"
        />
      </th>
      <td>
        <h5>
          <strong>{cartItem.product.name}</strong>
        </h5>
      </td>
      <td>{cartItem.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{cartItem.quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label
            className="btn btn-sm btn-primary 
                      btn-rounded waves-effect waves-light"
            onClick = {() => onUpdateQuantity(cartItem.product,cartItem.quantity-1)}
          >
            <a>—</a>
          </label>
          <label
            className="btn btn-sm btn-primary
                      btn-rounded waves-effect waves-light"
            onClick = {() => onUpdateQuantity(cartItem.product,cartItem.quantity+1)}
          >
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{showSubtotal(cartItem.product.price,cartItem.quantity)}$</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Remove item"
          onClick = {() => onDelete(cartItem.product)}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
