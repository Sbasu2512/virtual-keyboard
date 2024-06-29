import React from 'react';
import Draggable from 'react-draggable';
import  './popover.css'; // Import your CSS for styling

const DraggablePopover = ({
  open,
  onClose,
  anchorElement,
  position,
  children,
  header,
}) => {
  const calculatePosition = () => {
    if (position) {
      return {
        x: position.x || 0,
        y: position.y || 0,
      };
    } else if (anchorElement) {
      const anchorRect = anchorElement.getBoundingClientRect();
      return {
        x: anchorRect.left,
        y: anchorRect.bottom,
      };
    } else {
      return { x: 0, y: 0 };
    }
  };

  return (
    <>
      {open && (
        <Draggable defaultPosition={calculatePosition()}>
          <div className="popover">
            <div className="popover_header">
              {header ? <h3>{header}</h3> : <></>}
              <button className="close_btn" onClick={onClose}>
                X
              </button>
            </div>
            <div className="popover_body">{children}</div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default DraggablePopover;
