import React from "react";
import "./popover.css";

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
        left: position.horizontal || 0,
        top: position.vertical || 0,
      };
    } else if (anchorElement) {
      const anchorRect = anchorElement.getBoundingClientRect();
      return {
        left: anchorRect.left,
        top: anchorRect.bottom,
      };
    } else {
      return { left: 0, top: 0 };
    }
  };

  const style = {
    position: "absolute",
    ...calculatePosition(),
  };

  return (
    <>
      {open && (
        <div className="popover" style={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="popover_header">
              {header ? <h3>{header}</h3> : null}
            </div>
            <div className="handle">
              <button className="close_btn" onClick={onClose}>
                X
              </button>
            </div>
          </div>
          <div className="popover_body">{children}</div>
        </div>
      )}
    </>
  );
};

export default DraggablePopover;
