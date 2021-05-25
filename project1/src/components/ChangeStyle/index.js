import {useState} from 'react';

function ChangeStyle(props) {
  const setFontSize = (params) => {
    props.setFontSize(params)
  }

  const onClickReset = () => {
    props.ResetDefault(true)
  }

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size : {props.fontSize}px</h3>
        </div>

        <div className="panel-body">
          <button onClick={() => setFontSize(-2)} type="button" className="btn btn-success">
            Giảm
          </button>
          &nbsp;
          <button onClick={() => setFontSize(2)} type="button" className="btn btn-success">
            Tăng
          </button>
        </div>
      </div>
      <br></br>
      <button type="button" className="btn btn-primary" onClick={onClickReset}>
        RESET
      </button>
    </div>
  );
}

export default ChangeStyle;
