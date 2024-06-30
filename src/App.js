import { useState } from 'react';
import './App.css';
import KeyboardContainer from './Components/Keyboard/keyboardContainer';

function App() {

  const [dum, setd] = useState("");
  const [openVk, setOpenVK] = useState(false);
  const [input, setInputName] = useState("");
  const [layoutName, setLayoutName] = useState("default")

  const handleChange = (e) => {
    setd(e.target.value)
  }

  const handleClick = (e) => {
    if(e.target.name){
      setOpenVK(true);
      setInputName(e.target.name)
    }
  }

  const onKeyPress=(btn)=>{
    if(btn === "{shift}"){
      const ln = layoutName === "default"? "Upper":"default";
      setLayoutName(ln)
    }
    const e = {target:{name: input, value:btn}}
    handleChange(e);
  }

  const closeVK = () => {
    setOpenVK(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        VK
      </header>
      <div>
        <p>Input text</p>
        <input type="text" name="dummy1" value={dum} onChange={handleChange} onClick={handleClick} />
        <KeyboardContainer
        show={openVk}
        output={onKeyPress}
        onClose={closeVK}
        layoutName={layoutName}
        changeButtonsDisplay={{'{bksp}': 'backspace',
  '{enter}': '< enter',
  '@': 'at',"{space}":"space"}}
        />
      </div>
    </div>
  );
}

export default App;
