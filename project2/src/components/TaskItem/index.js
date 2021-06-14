import { useState } from "react";

function TaskItem(props) {
  const {index,task} = props;
  const {id,name,status} = task

  // Update status
  const onUpdateStatus = (id) => {
    props.onUpdateStatus(id)
  }

  const onDeleteTask = (id) => {
    props.onDeleteTask(id)
  }

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{name}</td>
      <td className="text-center">
        <span className={status ? "label label-danger" : 'label label-success'}
          onClick={() => onUpdateStatus(id)}
        >{status ? 'Kích hoạt' : 'Ẩn'}</span>
      </td>
      <td className="text-center">
        <button className="btn btn-warning">
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button className="btn btn-danger"
          onClick={() => onDeleteTask(id)}
        >
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
