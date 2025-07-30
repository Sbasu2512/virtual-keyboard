import React, { forwardRef, useRef } from "react";
import Popover from "../PopOver";
import Keyboard from "./index";

const VirtualKeyboard = forwardRef(function KeyboardContainer(
  { show, output, anchor, onClose, layoutName, changeButtonsDisplay },
  ref
) {
  const keyboard = useRef();

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
      open={show}
      onClose={onClose}
      position={anchor}
      header={"Virtual Keyboard"}
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
