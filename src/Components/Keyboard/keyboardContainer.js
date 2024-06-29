import React, { forwardRef, useRef } from 'react';
import DraggablePopover from '../PopOver';
import Keyboard from './index';
/***
* @param {*} showKeyboard To show/hide keyboard
* @param {*} output output from the keyboard
* @param {*} onSubmit This function is called on pressing enter, usually to close the keyboard
* @param {*} anchor Where the keyboard will show up
* @param {*} onClose to hide the keyboard
* @param {*} layout The layout you want, default or numerical
* @param {*} maxLength If the input has a maxlength attribute
* @param {*} range If the keyboard has a max and min value
* @param {*} oldValue If there was any previous value
* @param {*} node Last input name 
 */
const KeyboardContainer = forwardRef(function KeyboardContainer(
  {
    showKeyboard,
    output,
    onSubmit,
    anchor,
    onClose,
    layout,
    maxLength,
    range,
    oldValue,
    node,
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
      open={showKeyboard}
      onClose={onClose}
      position={anchor}
      header={'Virtual Keyboard'}
      anchorElement={ref}
    >
      <div>
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          onKeyPress={onKeyPress}
          onSubmit={onSubmit}
          keyboardLayout={layout}
          maxLength={maxLength}
          range={range}
          oldValue={oldValue}
          node={node}
        />
      </div>
    </DraggablePopover>
  );
});

export default KeyboardContainer;
