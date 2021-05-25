import {useState} from 'react';

import ColorPicker from './components/ColorPicker'
import ChangeStyle from './components/ChangeStyle'  
import Result from './components/Result'

import './App.css';

function App() {
  const [colorActive,setColorActive] = useState('red')
  const [fontSizeActive,setFontSizeActive] = useState(16)

  const onClickActive = (color) => {
    setColorActive(color)
  }

  const setFontSize = (fontSize) => {
    if(fontSizeActive + fontSize <= 36 && fontSizeActive + fontSize >= 8) {
      setFontSizeActive(fontSizeActive + fontSize)
    }

    // setFontSizeActive(fontSizeActive + fontSize <= 36 && fontSizeActive + fontSize >= 8 ? fontSizeActive + fontSize : fontSizeActive)
  }

  const ResetDefault = (init) => {
    if(init === true) {
      setColorActive('red')
      setFontSizeActive(16)
    }
  }
  
  return (
    <div className="App">
      <div className='container mt-50'>
        <div className='row'>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <ColorPicker color={colorActive} onClickActive = {onClickActive} />
          </div>

          <ChangeStyle fontSize={fontSizeActive} 
          setFontSize={setFontSize} 
          ResetDefault={ResetDefault} />
          <Result color={colorActive} fontSize={fontSizeActive}/>
        </div>
      </div>
    </div>
  );
}

export default App;
