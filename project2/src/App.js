import {useState} from 'react';
import "./App.css";

import TaskForm from './components/TaskForm'
import Controls from './components/Controls'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản lý công việc</h1>
        <hr></hr>
      </div>

      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* Form */}
            <TaskForm />
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button className="btn btn-primary">
            <span className="fa fa-plus mr-5"></span>Thêm công việc
          </button>

          {/* Search - Sort */}
            <Controls />

            {/* List */}
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
