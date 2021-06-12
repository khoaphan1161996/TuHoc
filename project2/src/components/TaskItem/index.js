import { useState } from "react";

function TaskItem() {
  return (
    <tr>
      <td>1</td>
      <td>Học Angular 4</td>
      <td className="text-center">
        <span className="label label-danger">Kích hoạt</span>
      </td>
      <td className="text-center">
        <button className="btn btn-warning">
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button className="btn btn-danger">
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
