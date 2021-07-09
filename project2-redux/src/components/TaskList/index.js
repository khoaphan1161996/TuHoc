import { useState } from "react";
import { useSelector } from 'react-redux';

import TaskItem from '../TaskItem';

function TaskList(props) {
  // Cách kết nối react store
  const tasks = useSelector(state => state.tasks)

  const {onUpdateStatus,onDeleteTask,onUpdateTask} = props;

  const [filterName,setFilterName] = useState('')
  const [filterStatus,setFilterStatus] = useState(-1)// all:-1; active:1; deactive:0

  // Filter
  const onChangeFilter = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value
    if(name === 'filterName') setFilterName(value)
    else {setFilterStatus(value)}
    props.onFilter(
      name === 'filterName' ? value : filterName,
      name === 'filterStatus' ? Number(value)  : Number(filterStatus) 
    )
  }


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
            value={filterName}
            onChange={onChangeFilter}
          />
        </td>
        <td>
          <select
            className="form-control"
            name="filterStatus"
            value={filterStatus}
            onChange={onChangeFilter}
          >
            <option value={-1}>Tất cả</option>
            <option value={0}>Ẩn</option>
            <option value={1}>Kích hoạt</option>
          </select>
        </td>
        <td></td>
      </tr>
      {tasks.map((task,index) => <TaskItem key={task.id} task={task}
       index={index} onUpdateStatus={onUpdateStatus}
        onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />)}
    </tbody>
</table>
  );
}

export default TaskList;
