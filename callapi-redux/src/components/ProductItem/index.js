import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import "./style.css";

ProductItem.propTypes = {};

function ProductItem(props) {
  const {product,index} = props;

  // Khi bấm vào nút Xóa thì truyền id lên
  const onDelete = (id) => {
    if(window.confirm('Are you sure you want to delete')) {
      props.onDelete(id)
    }
  }

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
        <Link className="btn btn-success" to={`product/${product.id}/edit`}>
          Sửa
        </Link>
        <button className="btn btn-danger" type="button" onClick={()=>onDelete(product.id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
