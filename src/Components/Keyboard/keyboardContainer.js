import React, { forwardRef, useRef } from 'react';
import DraggablePopover from '../PopOver';
import Keyboard from './index';

/***
* @param {*} show To show/hide keyboard
* @param {*} output output from the keyboard
* @param {*} onSubmit This function is called on pressing enter, usually to close the keyboard
* @param {*} anchor Where the keyboard will show up
* @param {*} onClose to hide the keyboard
* @param {*} layoutName The layout you want, default or numerical
* @param {*} changeButtonsDisplay If you want to show certain buttons in a more user friendly way
 */

const VirtualKeyboard = forwardRef(function KeyboardContainer(
  {
    show,
    output,
    anchor,
    onClose,
    layoutName,
    changeButtonsDisplay
  },
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
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  return (
    <DraggablePopover
      open={show}
      onClose={onClose}
      position={anchor}
      header={'Virtual Keyboard'}
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
    </DraggablePopover>
  );
});

export default VirtualKeyboard;
