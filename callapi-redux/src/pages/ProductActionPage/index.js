import React, { useState,useEffect } from "react";
import axios from 'axios'
import {useHistory,useParams} from "react-router-dom"

import * as Config from '../../constants/Config'

function ProductActionPage() {
  const history = useHistory()
  let {id} = useParams()

  const [idProduct,setIdProduct] = useState("");
  const [txtName, setTxtName] = useState("");
  const [txtPrice, setTxtPrice] = useState("");
  const [chkbStatus, setChkbStatus] = useState("");

  // Lần đầu chạy trang thì get theo id và setState
  useEffect(() => {
    axios.get(`${Config.API_URL}/products/${id}`).then(res => {
      let data = res.data 
      setIdProduct(data.id)
      setTxtName(data.name)
      setTxtPrice(data.price)
      setChkbStatus(data.status)
    })
  }, [])

  // Dữ liệu khi nhập vào sẽ dc setState
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

  // Khi bấm Submit
  const onSave = (e) => {
    // Chặn sự load trang của submit
    e.preventDefault();

    if(idProduct) { // có id thì update
      axios.put(`${Config.API_URL}/products/${id}`,{
        name: txtName,
        price:txtPrice,
        status: chkbStatus
      }).then((res) => history.push({pathname: '/products'}))
      .catch((err) => console.log(err));
    }
    else { // không có id thì add
      axios.post(`${Config.API_URL}/products`,{
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then((res) => history.push({pathname: '/products'}))
      .catch((err) => console.log(err));
    }
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
              checked={chkbStatus}
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
