import React from "react";

function ProductActionPage(props) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <form>
        <div className="form-group">
          <label className="">Tên sản phẩm: </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="">Giá: </label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label className="">Trạng thái: </label>
        </div>
        <div className="checkbox">
            <label>
                <input type="checkbox" className="" />
                Còn hàng
            </label>
        </div>
        <button className="btn btn-primary">Luw lại</button>
      </form>
    </div>
  );
}

export default ProductActionPage;
