import CartItem from '../CartItem'
import CartResult from '../CartResult'

import * as message from '../../constants/Message'

import {useSelector,useDispatch} from 'react-redux'

function Cart() {
  const cart = useSelector(state => state.cart)
  
  const showCartItem = (cart) => {
    let result = message.MSG_CART_EMPTY
    if(cart.length > 0) {
      result = cart.map((cartItem, index)=> 
        <CartItem key={cartItem.product.id} cartItem={cartItem} />
      )
    }
    return result
  }

  const showTotalAmount = (cart) => {
    let result = null
    if(cart.length > 0) {
      result = <CartResult cart={cart}/>
    }
    return result
  }

  return (
    <section className="section">
      <div className="table-responsive">
        <table className="table product-table">
          <thead>
            <tr>
              <th></th>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {showCartItem(cart)}

            {showTotalAmount(cart)}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Cart;
