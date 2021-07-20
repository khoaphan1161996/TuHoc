import {useDispatch} from 'react-redux'

import {actAddToCart} from '../../actions/'

import PropTypes from 'prop-types';

Product.propTypes = {
  product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
  }).isRequired
}

function Product(props) {
  const {product} = props
  const dispatch = useDispatch()

  const showRatings = (rating) => {
      let result = []
      for(let i = 1 ; i <= 5 ; i++) {
        if(i<=rating) {
          result.push(<i className="fa fa-star" key={i}></i>)
        }
        else result.push(<i className="fa fa-star-o" key={i}></i>)
      }

      return result
  }

  const onAddToCart = (product) => {
    const action = actAddToCart(product,1)
    dispatch(action)
  }

  return (
    <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img
            src= {product.image}
            className="img-fluid"
            alt={product.name}
          />
          <a>
            <div className="mask waves-light waves-effect waves-light"></div>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a>{product.name}</a>
            </strong>
          </h4>
          <ul className="rating">
            <li>
              {showRatings(product.rating)}
            </li>
          </ul>
          <p className="card-text">{product.description}</p>
          <div className="card-footer">
            <span className="left">{product.price}$</span>
            <span className="right">
              <a
                className="btn-floating blue-gradient"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Add to Cart"
                onClick={() => onAddToCart(product)}
              >
                <i className="fa fa-shopping-cart"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
