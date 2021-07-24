import React from 'react'
import './style.css'
import PrductItem from '../ProductItem'

function ProductList(props) {
    return (
        <div>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
              </div>
              <div className="panel-body">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Trạng Thái</th>
                      <th>Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.children}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    )
}

export default ProductList

