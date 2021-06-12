import { useState } from "react";

import TaskItem from '../TaskItem'

function TaskList() {
  return (
    <table className="table table-bordered table-hover">
    <thead>
      <tr>
        <th className="text-center">STT</th>
        <th className="text-center">Tên</th>
        <th className="text-center">Trạng thái</th>
        <th className="text-center">Hành động</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td></td>
        <td>
          <input 
            type="text"
            className="form-control"
            name="filterName"
          />
        </td>
        <td>
          <select
            className="form-control"
            name="filterStatus"
          >
            <option value={-1}>Tất cả</option>
            <option value={0}>Ẩn</option>
            <option value={1}>Kích hoạt</option>
          </select>
        </td>
        <td></td>
      </tr>
      <TaskItem />
    </tbody>
</table>
  );
}

export default TaskList;
