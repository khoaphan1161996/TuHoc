import { useState } from "react";

function TaskForm(props) {
  const [name,setName] = useState('')
  const [status,setStatus] = useState(true)

  // Khi onChange setState 
  const onChangeValue = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value
    if(name === 'name') setName(value)
    else setStatus(!!!value)
  }

  // Submit Form
  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(name,status)
    // Clear
    onClear()
    onCloseForm()
  }
  
  // Event khi bấm vào nút hủy
  const onClear = () => {
    setName('')
    setStatus(false)
  }

  // Event khi bấm vào icon close
  const onCloseForm = () => {
    props.onCloseForm()
  }

  return (
    <div className="card card-warning">
      <div className="card-heading bg-warning ms-3">
        <h3 className="card-title">
          Thêm công việc
          <span className="fa fa-times-circle ms-3"
            onClick={onCloseForm}
          ></span>
        </h3>
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Tên :</label>
            <input type="text" className="form-control"
            value={name} onChange={onChangeValue} name="name" />
          </div>
          <label>Trạng Thái :</label>
          <select className="form-control"
          value={status} onChange={onChangeValue} name="status">
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
            <button type="button" className="btn btn-danger"
              onClick={onClear}>
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
