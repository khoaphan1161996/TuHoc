import {useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'

import "./App.css";

import TaskForm from './components/TaskForm'
import Controls from './components/Controls'
import TaskList from './components/TaskList'

function App() {
  const [tasks,setTasks] = useState([])
  const [isDisplayForm, setIsDisplayForm] = useState(true)

  // componentWillMount set List nếu đã có
  useEffect(() => {
    if(sessionStorage && sessionStorage.getItem('tasks')){
      const tasks = JSON.parse(sessionStorage.getItem('tasks'))
      setTasks(tasks)
    }
  },[])

  // Setstate list frist time
  const onGenerateData = () => {
    const  tasks = [
      {
        id: uuidv4(),
        name: 'Học lập trình',
        status: true
      },
      {
        id: uuidv4(),
        name: 'Đi bơi',
        status: false
      },
      {
        id: uuidv4(),
        name: 'Ngủ',
        status: true
      },
    ];
    
    setTasks(tasks)
    sessionStorage.setItem('tasks', JSON.stringify(tasks))
  }

  // Submit add
  const onSubmit = (name,status) => {
    const  newTaskList = [...tasks]
    const  newTask = {
      id: uuidv4(),
      name,
      status
    }

    newTaskList.push(newTask)
    setTasks(newTaskList)
    sessionStorage.setItem('tasks', JSON.stringify(newTaskList))
  }

  // Đóng mở Component Form
  const onToggleForm = () => {
    setIsDisplayForm(!isDisplayForm)
  }

  // Đóng Component Form khi X
  const onCloseForm = () => {
    setIsDisplayForm(false)
  }

  // Update Status
  const onUpdateStatus = (id) => {
    // dùng cách tạo task mới có tất cả phần tử ban đầu với status thay đổi mới
    const newTask = tasks.map((task) => {
      if(task.id === id) {
        return {...task,status:!task.status}
      }
      else {
        return task
      }
    })

    // Nếu newTask có tồn tại (#null và #underfined)
    if(newTask) {
      setTasks(newTask)
      sessionStorage.setItem('tasks', JSON.stringify(newTask))
    }
  }

  // Delete Task
  const onDeleteTask = (id) => {
    const indexDelete = tasks.findIndex(task => task.id === id)

    if(indexDelete < 0) return
    else {
      const newTaskList = [...tasks]
      newTaskList.splice(indexDelete,1)

      setTasks(newTaskList)
      sessionStorage.setItem('tasks', JSON.stringify(newTaskList))
    }
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản lý công việc</h1>
        <hr></hr>
      </div>

      <div className="row">
        <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
          {/* Form */}
            {isDisplayForm ? <TaskForm onCloseForm={onCloseForm} 
            onSubmit={onSubmit} /> : ''}
        </div>

        <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
      'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
          <button className="btn btn-primary" onClick={onToggleForm} >
            <span className="fa fa-plus mr-5"></span>Thêm công việc
          </button>
          <button className="btn btn-danger ml-5" onClick={onGenerateData}>
            Generate Data
          </button>

          {/* Search - Sort */}
            <Controls />

            {/* List */}
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} onUpdateStatus={onUpdateStatus}
                onDeleteTask={onDeleteTask} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
