import PropTypes from 'prop-types';

CartResult.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
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
  )
}

function CartResult(props) {
  const {cart} = props;
  
  const showTotalAmount = (cart) => {
    let total = 0
    if(cart.length > 0) {
      for(let i = 0 ;i<cart.length ;i++) {
        total += cart[i].product.price * cart[i].quantity
      }
    } 
    return total
  }

  return (
    <tr>
      <td colSpan="3"></td>
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{showTotalAmount(cart)}$</strong>
        </h4>
      </td>
      <td colSpan="3">
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
        >
          Complete purchase
          <i className="fa fa-angle-right right"></i>
        </button>
      </td>
    </tr>
  );
}

export default CartResult;
