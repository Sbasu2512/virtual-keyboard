import React, { useEffect, useState } from 'react';
import './virtualKeyboard.css';

const internalDefaultLayout = {
  'default': [
    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p [ ] \\',
    '{lock} a s d f g h j k l ; \' {enter}',
    '{shift} z x c v b n m , . / {shift}',
    '.com @ {space}'
  ],
  'uppercase': [
    '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{lock} A S D F G H J K L : " {enter}',
    '{shift} Z X C V B N M &lt; &gt; ? {shift}',
    '.com @ {space}'
  ]
}

const VirtualKeyboard = ({
  onKeyPress,
  keyboardLayoutName,
  customLayout,
  customDisplayBtns
}) => {
  const [layout, setLayout] = useState([]);
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    if(customLayout){
      if(customDisplayBtns && Object.entries(customDisplayBtns)){
        setLayout(replaceKeys(customLayout, customDisplayBtns))
      }else{
        setLayout(customLayout)
      }
    } else if(keyboardLayoutName){
      if(keyboardLayoutName === 'default'){
        if(customDisplayBtns && Object.entries(customDisplayBtns)){
          setLayout(replaceKeys(internalDefaultLayout.default, customDisplayBtns))
        }else{
          setLayout(internalDefaultLayout.default)
        }
      } else if(keyboardLayoutName === 'Upper'){
        if(customDisplayBtns && Object.entries(customDisplayBtns)){
          setLayout(replaceKeys(internalDefaultLayout.uppercase, customDisplayBtns))
        } else {
          setLayout(internalDefaultLayout.uppercase)
        }
      }
    } else {
      if(customDisplayBtns && Object.entries(customDisplayBtns)){
        setLayout(replaceKeys(internalDefaultLayout.default, customDisplayBtns))
      }else{
        setLayout(internalDefaultLayout.default)
      }
    }
  }, [keyboardLayoutName, customDisplayBtns]);

  function replaceKeys(array, replacements) {
    return array.map(row => 
      row.split(' ').map(key => replacements[key] || key).join(' ')
    );
  }

  // Function to handle key press
  const handleKeyPress = (key) => {
    setPressedKey(key);
    onKeyPress(key);
    // Remove the class after animation completes
    setTimeout(() => {
      setPressedKey(null);
    }, 300); // Duration should match the CSS animation duration
  };

    return (
    <div className="margin_1">
      <div className='keyboard container-fluid'>
      {layout.map((row,i)=>(
        <>
        <div className={`keyboard_row`} key={i}>
        {
          row.split(" ").map((key,j)=>(
            <button  
            key={j}
            className={`${pressedKey === key ? 'button_styles_clicked' : 'button_styles'} button`} 
            onClick={() => handleKeyPress(key)}>
              {key}
            </button>
          ))
        }
        </div>
        </>
      ))}
      </div>
    </div>
  );
};

export default VirtualKeyboard;
