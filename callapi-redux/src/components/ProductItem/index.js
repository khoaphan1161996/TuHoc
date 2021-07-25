import React from "react";
import PropTypes from "prop-types";
import "./style.css";

ProductItem.propTypes = {};

function ProductItem(props) {
  const {product,index} = props;

  return (
    <tr>
      <td>{index+1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <span className={product.status ? 'badge bg-warning' : 'badge bg-danger'}>
          {product.status ? 'Còn hàng' : 'Hết hàng'}
        </span>
      </td>
      <td>
        <button className="btn btn-success" type="button">
          Sửa
        </button>
        <button className="btn btn-danger" type="button">
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
