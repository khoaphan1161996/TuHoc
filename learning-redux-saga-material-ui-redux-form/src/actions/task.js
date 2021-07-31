import * as taskApis from "../apis/task";
import * as taskConstants from "../constants/task";

// action giao tiếp với axios
export const fetchListTaskRequest = () => {
  return (dispatch) => {
    dispatch(fetchListTaskRequest())
    return taskApis.getList()
      .then((resp) => {
        console.log(resp)
        dispatch(fetchListTaskSuccess(resp.data))
      })
      .catch((err) => {
        dispatch(fetchListTaskFailed(err))
      });
  }
};

// Các actions giao tiếp với store
export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};
