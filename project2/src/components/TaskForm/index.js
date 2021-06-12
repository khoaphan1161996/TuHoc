import { useState } from "react";

function TaskForm() {
  return (
    <div className="card card-warning">
      <div className="card-heading bg-warning ms-3">
        <h3 className="card-title">
          Thêm công việc
          <span className="fa fa-times-circle ms-3"></span>
        </h3>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Tên :</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <label>Trạng Thái :</label>
          <select className="form-control" name="status">
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              <span className="fa fa-plus mr-5" />
              Lưu Lại
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger">
              <span className="fa fa-close mr-5" />
              Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
