import React,{useState} from 'react';

import './style.css'

function ColorPicker(props) {
  const [colors,setColor] = useState(["red","green","blue","#ccc"])

  const showColor = (color) => {
    return {
      backgroundColor: color
    }
  }

  const onClickActive = (color) => {
    props.onClickActive(color)
  }

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Color Picker</h3>
              </div>

              <div className="panel-body">
                 {colors.map((color,ind) => <div 
                      key={ind} 
                      className={props.color === color ? "active box" : 'box'}
                      style={showColor(color)}
                      onClick={() => onClickActive(color)}
                      ></div>)}
                  <hr/>
              </div>
        </div>
    </div>
  );
}

export default ColorPicker;
