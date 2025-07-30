// App.js — Demo/Test Only
import { useState } from "react";
import "./App.css";
import VirtualKeyboard from "./Components/Keyboard/keyboardContainer";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showVK, setShowVK] = useState(false);
  const [focusedInputName, setFocusedInputName] = useState("");
  const [layoutName, setLayoutName] = useState("default");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = (e) => {
    if (e.target.name) {
      setFocusedInputName(e.target.name);
      setShowVK(true);
    }
  };

  const onKeyPress = (btn) => {
    if (btn === "{shift}") {
      setLayoutName((prev) => (prev === "default" ? "Upper" : "default"));
      return;
    }

    setInputValue((prev) => prev + btn); // Append input
  };

  const handleVKClose = () => {
    setShowVK(false);
  };

  return (
    <div className="App">
      <header className="App-header">VK Demo</header>
      <div>
        <p>Input Text</p>
        <input
          type="text"
          name="dummy1"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
        />

        <VirtualKeyboard
          changeButtonsDisplay={{
            "{bksp}": "backspace",
            "{enter}": "< enter",
            "@": "at",
            "{space}": "space",
          }}
          layoutName={layoutName}
          onClose={handleVKClose}
          show={showVK}
          output={onKeyPress}
        />
      </div>
    </div>
  );
}

export default App;
