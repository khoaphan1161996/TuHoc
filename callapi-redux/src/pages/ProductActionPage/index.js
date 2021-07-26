import React, { useState } from "react";
import axios from 'axios'
import {useHistory} from "react-router-dom"

function ProductActionPage() {
  const [txtName, setTxtName] = useState("");
  const [txtPrice, setTxtPrice] = useState("");
  const [chkbStatus, setChkbStatus] = useState("");

  const history = useHistory()

  const onChangeValue = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    if (name === "name") {
      setTxtName(value);
    } else if (name === "price") {
      setTxtPrice(value);
    } else setChkbStatus(value);
  };

  const onSave = (e) => {
    e.preventDefault();

    axios.post(`https://60f9830dee56ef0017975e84.mockapi.io/api/products`,{
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    }).then((res) => history.push({pathname: '/products'}))
    .catch((err) => console.log(err));
    
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <form onSubmit={onSave}>
        <div className="form-group">
          <label className="">Tên sản phẩm: </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={txtName}
            onChange={onChangeValue}
          />
        </div>
        <div className="form-group">
          <label className="">Giá: </label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={txtPrice}
            onChange={onChangeValue}
          />
        </div>
        <div className="form-group">
          <label className="">Trạng thái: </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="status"
              value={chkbStatus}
              onChange={onChangeValue}
            />
            Còn hàng
          </label>
        </div>
        <button className="btn btn-primary">Lưu lại</button>
      </form>
    </div>
  );
}

export default ProductActionPage;
