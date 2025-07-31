import React, { forwardRef, useEffect, useRef, useState } from "react";
import Popover from "../PopOver";
import Keyboard from "./index";

const VirtualKeyboard = forwardRef(function KeyboardContainer(
  {
    show,
    output,
    anchor,
    onClose,
    layoutName,
    changeButtonsDisplay,
    title,
    isTouch = false,
  },
  ref
) {
  const keyboard = useRef();
  const [showKeyboard, setShowKeyboard] = useState(false);

  useEffect(() => {
    if (isTouch) {
      setShowKeyboard(isTouchDevice() ? show : null);
    } else {
      setShowKeyboard(show);
    }
  }, [show, isTouch]);

  const onKeyPress = (btn) => {
    if (output) {
      output(btn);
    }
  };

  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  return (
    <Popover
      open={showKeyboard}
      onClose={onClose}
      position={anchor}
      header={title}
      anchorElement={ref}
    >
      <div>
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          onKeyPress={onKeyPress}
          keyboardLayoutName={layoutName}
          customDisplayBtns={changeButtonsDisplay}
        />
      </div>
    </Popover>
  );
});

export default VirtualKeyboard;
