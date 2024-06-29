import React, { useEffect, useState } from 'react';
import './virtualKeyboard.css';

const VirtualKeyboard = ({
  onKeyPress,
  onSubmit,
  keyboardLayout,
  maxLength,
  range,
  oldValue,
  node,
}) => {
  const [currentInput, setCurrentInput] = useState('');
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [showNumerics, setShowNumerics] = useState(false);
  const [layout, setLayout] = useState('default');
  const [btnClicked1, setBtnClicked1] = useState(false);
  const [btnClicked2, setBtnClicked2] = useState(false);
  const [btnClicked3, setBtnClicked3] = useState(false);
  const [btnClicked4, setBtnClicked4] = useState(false);
  const [btnClicked5, setBtnClicked5] = useState(false);
  const [btnClicked6, setBtnClicked6] = useState(false);
  const [btnClicked7, setBtnClicked7] = useState(false);
  const [btnClicked8, setBtnClicked8] = useState(false);
  const [btnClicked9, setBtnClicked9] = useState(false);
  const [btnClicked0, setBtnClicked0] = useState(false);
  const [btnClickeda, setBtnClickeda] = useState(false);
  const [btnClickedABC, setBtnClickedABC] = useState(false);
  const [btnClickedb, setBtnClickedb] = useState(false);
  const [btnClickedc, setBtnClickedc] = useState(false);
  const [btnClickedd, setBtnClickedd] = useState(false);
  const [btnClickede, setBtnClickede] = useState(false);
  const [btnClickedf, setBtnClickedf] = useState(false);
  const [btnClickedg, setBtnClickedg] = useState(false);
  const [btnClickedh, setBtnClickedh] = useState(false);
  const [btnClickedi, setBtnClickedi] = useState(false);
  const [btnClickedj, setBtnClickedj] = useState(false);
  const [btnClickedk, setBtnClickedk] = useState(false);
  const [btnClickedl, setBtnClickedl] = useState(false);
  const [btnClickedm, setBtnClickedm] = useState(false);
  const [btnClickedn, setBtnClickedn] = useState(false);
  const [btnClickedo, setBtnClickedo] = useState(false);
  const [btnClickedp, setBtnClickedp] = useState(false);
  const [btnClickedq, setBtnClickedq] = useState(false);
  const [btnClickedr, setBtnClickedr] = useState(false);
  const [btnClickeds, setBtnClickeds] = useState(false);
  const [btnClickedt, setBtnClickedt] = useState(false);
  const [btnClickedu, setBtnClickedu] = useState(false);
  const [btnClickedv, setBtnClickedv] = useState(false);
  const [btnClickedw, setBtnClickedw] = useState(false);
  const [btnClickedx, setBtnClickedx] = useState(false);
  const [btnClickedy, setBtnClickedy] = useState(false);
  const [btnClickedz, setBtnClickedz] = useState(false);
  const [btnClickedshift, setBtnClickedshift] = useState(false);
  const [btnClickedDel, setBtnClickedDel] = useState(false);
  const [btnClickedspace, setBtnClickedspace] = useState(false);
  const [btnClickedPeriod, setBtnClickedPeriod] = useState(false);
  const [btnClickedSubmit, setBtnClickedSubmit] = useState(false);
  const [btnClickedDash, setBtnClickedDash] = useState(false);
  const [btnClickedColon, setBtnClickedColon] = useState(false);
  const [targetName, setTargetName] = useState('');

  useEffect(() => {
    if (node) {
      setTargetName((prevState) => {
        if (prevState !== '' && prevState !== node) {
          setCurrentInput('');
          return node;
        } else {
          return node;
        }
      });
    }
    if (oldValue) {
      setCurrentInput(oldValue);
    }
  }, [node, oldValue]);

  useEffect(() => {
    if (keyboardLayout === 'default') {
      setLayout(keyboardLayout);
    } else if (keyboardLayout === 'numerical') {
      setLayout(keyboardLayout);
    } else {
      setLayout('default');
    }
  }, [keyboardLayout]);

  useEffect(() => {
    if (onKeyPress && targetName !== 'acquisition') {
      onKeyPress(currentInput);
    } else if (onKeyPress && targetName === 'acquisition') {
      //handling special case wrt decimal point
      if (currentInput !== 0 || currentInput < 0.0001) {
        onKeyPress(parseFloat(currentInput));
      } else {
        onKeyPress(currentInput);
      }
    }
  }, [currentInput]);

  // Function to handle key press
  const handleKeyPress = (key) => {
    if (
      layout === 'default' &&
      maxLength &&
      maxLength !== 0 &&
      currentInput?.length + 1 < maxLength
    ) {
      setCurrentInput(currentInput + key);
    } else if (
      layout === 'numerical' &&
      range &&
      (range !== null || range !== undefined) &&
      Object.keys(range).length
    ) {
      const min = range.min;
      const max = range.max;

      if (parseFloat(currentInput + key) >= max) {
        setCurrentInput(max.toString());
      } else if (parseFloat(currentInput + key) <= min) {
        setCurrentInput(min.toString());
      } else {
        setCurrentInput(currentInput + key);
      }
    } else if (layout === 'default' && !maxLength) {
      setCurrentInput(currentInput + key);
    } else if (layout === 'numerical' && !range) {
      setCurrentInput(currentInput + key);
    }
  };

  const handleShiftPress = () => {
    setIsUpperCase(!isUpperCase);
  };

  const handleDelete = () => {
    setCurrentInput(currentInput.slice(0, -1));
    if (onKeyPress) {
      onKeyPress(currentInput.slice(0, -1));
    }
  };

  //   Function to clear input
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
    setCurrentInput('');
  };

  const onMouseDown = (k) => {
    if (k === 1) {
      setBtnClicked1(true);
    }
    if (k === 2) {
      setBtnClicked2(true);
    }
    if (k === 3) {
      setBtnClicked3(true);
    }
    if (k === 4) {
      setBtnClicked4(true);
    }
    if (k === 5) {
      setBtnClicked5(true);
    }
    if (k === 6) {
      setBtnClicked6(true);
    }
    if (k === 7) {
      setBtnClicked7(true);
    }
    if (k === 8) {
      setBtnClicked8(true);
    }
    if (k === 9) {
      setBtnClicked9(true);
    }
    if (k === 0) {
      setBtnClicked0(true);
    }
    if (k === 'a') {
      setBtnClickeda(true);
    }
    if (k === 'b') {
      setBtnClickedb(true);
    }
    if (k === 'c') {
      setBtnClickedc(true);
    }
    if (k === 'd') {
      setBtnClickedd(true);
    }
    if (k === 'e') {
      setBtnClickede(true);
    }
    if (k === 'f') {
      setBtnClickedf(true);
    }
    if (k === 'g') {
      setBtnClickedg(true);
    }
    if (k === 'h') {
      setBtnClickedh(true);
    }
    if (k === 'i') {
      setBtnClickedi(true);
    }
    if (k === 'j') {
      setBtnClickedj(true);
    }
    if (k === 'k') {
      setBtnClickedk(true);
    }
    if (k === 'l') {
      setBtnClickedl(true);
    }
    if (k === 'm') {
      setBtnClickedm(true);
    }
    if (k === 'n') {
      setBtnClickedn(true);
    }
    if (k === 'o') {
      setBtnClickedo(true);
    }
    if (k === 'p') {
      setBtnClickedp(true);
    }
    if (k === 'q') {
      setBtnClickedq(true);
    }
    if (k === 'r') {
      setBtnClickedr(true);
    }
    if (k === 's') {
      setBtnClickeds(true);
    }
    if (k === 't') {
      setBtnClickedt(true);
    }
    if (k === 'u') {
      setBtnClickedu(true);
    }
    if (k === 'v') {
      setBtnClickedv(true);
    }
    if (k === 'w') {
      setBtnClickedw(true);
    }
    if (k === 'x') {
      setBtnClickedx(true);
    }
    if (k === 'y') {
      setBtnClickedy(true);
    }
    if (k === 'z') {
      setBtnClickedz(true);
    }
    if (k === 'shift') {
      setBtnClickedshift(true);
    }
    if (k === 'submit') {
      setBtnClickedSubmit(true);
    }
    if (k === 'del') {
      setBtnClickedDel(true);
    }
    if (k === 'abc') {
      setBtnClickedABC(true);
    }
    if (k === '.') {
      setBtnClickedPeriod(true);
    }
    if (k === 'space') {
      setBtnClickedspace(true);
    }
    if (k === '-') {
      setBtnClickedDash(true);
    }
    if (k === ':') {
      setBtnClickedColon(true);
    }
  };

  const onMouseUp = (k) => {
    if (k === '-') {
      setBtnClickedDash(false);
    }
    if (k === ':') {
      setBtnClickedColon(false);
    }
    if (k === 1) {
      setBtnClicked1(false);
    }
    if (k === 2) {
      setBtnClicked2(false);
    }
    if (k === 3) {
      setBtnClicked3(false);
    }
    if (k === 4) {
      setBtnClicked4(false);
    }
    if (k === 5) {
      setBtnClicked5(false);
    }
    if (k === 6) {
      setBtnClicked6(false);
    }
    if (k === 7) {
      setBtnClicked7(false);
    }
    if (k === 8) {
      setBtnClicked8(false);
    }
    if (k === 9) {
      setBtnClicked9(false);
    }
    if (k === 0) {
      setBtnClicked0(false);
    }
    if (k === 'a') {
      setBtnClickeda(false);
    }
    if (k === 'b') {
      setBtnClickedb(false);
    }
    if (k === 'c') {
      setBtnClickedc(false);
    }
    if (k === 'd') {
      setBtnClickedd(false);
    }
    if (k === 'e') {
      setBtnClickede(false);
    }
    if (k === 'f') {
      setBtnClickedf(false);
    }
    if (k === 'g') {
      setBtnClickedg(false);
    }
    if (k === 'h') {
      setBtnClickedh(false);
    }
    if (k === 'i') {
      setBtnClickedi(false);
    }
    if (k === 'j') {
      setBtnClickedj(false);
    }
    if (k === 'k') {
      setBtnClickedk(false);
    }
    if (k === 'l') {
      setBtnClickedl(false);
    }
    if (k === 'm') {
      setBtnClickedm(false);
    }
    if (k === 'n') {
      setBtnClickedn(false);
    }
    if (k === 'o') {
      setBtnClickedo(false);
    }
    if (k === 'p') {
      setBtnClickedp(false);
    }
    if (k === 'q') {
      setBtnClickedq(false);
    }
    if (k === 'r') {
      setBtnClickedr(false);
    }
    if (k === 's') {
      setBtnClickeds(false);
    }
    if (k === 't') {
      setBtnClickedt(false);
    }
    if (k === 'u') {
      setBtnClickedu(false);
    }
    if (k === 'v') {
      setBtnClickedv(false);
    }
    if (k === 'w') {
      setBtnClickedw(false);
    }
    if (k === 'x') {
      setBtnClickedx(false);
    }
    if (k === 'y') {
      setBtnClickedy(false);
    }
    if (k === 'z') {
      setBtnClickedz(false);
    }
    if (k === 'shift') {
      setBtnClickedshift(false);
    }
    if (k === 'submit') {
      setBtnClickedSubmit(false);
    }
    if (k === 'del') {
      setBtnClickedDel(false);
    }
    if (k === 'abc') {
      setBtnClickedABC(false);
    }
    if (k === '.') {
      setBtnClickedPeriod(false);
    }
    if (k === 'space') {
      setBtnClickedspace(false);
    }
  };

  return (
    <div className="margin_1">
      {layout === 'default' ? (
        <div className="keyboard container-fluid">
          {showNumerics ? (
            <div className="keyboard_row">
              <button
                className={
                  btnClicked1
                    ?"button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(1)}
                onMouseUp={() => onMouseUp(1)}
                onClick={() => handleKeyPress(1)}
              >
                1
              </button>
              <button
                className={
                  btnClicked2
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(2)}
                onMouseUp={() => onMouseUp(2)}
                onClick={() => handleKeyPress(2)}
              >
                2
              </button>
              <button
                className={
                  btnClicked3
                    ?"button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(3)}
                onMouseUp={() => onMouseUp(3)}
                onClick={() => handleKeyPress(3)}
              >
                3
              </button>
              <button
                className={
                  btnClicked4
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(4)}
                onMouseUp={() => onMouseUp(4)}
                onClick={() => handleKeyPress(4)}
              >
                4
              </button>
              <button
                className={
                  btnClicked5
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(5)}
                onMouseUp={() => onMouseUp(5)}
                onClick={() => handleKeyPress(5)}
              >
                5
              </button>
              <button
                className={
                  btnClicked6
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(6)}
                onMouseUp={() => onMouseUp(6)}
                onClick={() => handleKeyPress(6)}
              >
                6
              </button>
              <button
                className={
                  btnClicked7
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(7)}
                onMouseUp={() => onMouseUp(7)}
                onClick={() => handleKeyPress(7)}
              >
                7
              </button>
              <button
                className={
                  btnClicked8
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(8)}
                onMouseUp={() => onMouseUp(8)}
                onClick={() => handleKeyPress(8)}
              >
                8
              </button>
              <button
                className={
                  btnClicked9
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(9)}
                onMouseUp={() => onMouseUp(9)}
                onClick={() => handleKeyPress(9)}
              >
                9
              </button>
              <button
                className={
                  btnClicked0
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown(0)}
                onMouseUp={() => onMouseUp(0)}
                onClick={() => handleKeyPress(0)}
              >
                0
              </button>
            </div>
          ) : (
            <></>
          )}
          <div className={`keyboard_row`}>
            <button
              className={
                btnClickedq
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('q')}
              onMouseUp={() => onMouseUp('q')}
              onClick={() =>
                handleKeyPress(showNumerics ? '@' : isUpperCase ? 'Q' : 'q')
              }
            >
              {showNumerics ? '@' : isUpperCase ? 'Q' : 'q'}
            </button>
            <button
              className={
                btnClickedw
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('w')}
              onMouseUp={() => onMouseUp('w')}
              onClick={() =>
                handleKeyPress(showNumerics ? '#' : isUpperCase ? 'W' : 'w')
              }
            >
              {showNumerics ? '#' : isUpperCase ? 'W' : 'w'}
            </button>
            <button
              className={
                btnClickede
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('e')}
              onMouseUp={() => onMouseUp('e')}
              onClick={() =>
                handleKeyPress(showNumerics ? '$' : isUpperCase ? 'E' : 'e')
              }
            >
              {showNumerics ? '$' : isUpperCase ? 'E' : 'e'}
            </button>
            <button
              className={
                btnClickedr
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('r')}
              onMouseUp={() => onMouseUp('r')}
              onClick={() =>
                handleKeyPress(showNumerics ? '_' : isUpperCase ? 'R' : 'r')
              }
            >
              {showNumerics ? '_' : isUpperCase ? 'R' : 'r'}
            </button>
            <button
              className={
                btnClickedt
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('t')}
              onMouseUp={() => onMouseUp('t')}
              onClick={() =>
                handleKeyPress(showNumerics ? '&' : isUpperCase ? 'T' : 't')
              }
            >
              {showNumerics ? '&' : isUpperCase ? 'T' : 't'}
            </button>
            <button
              className={
                btnClickedy
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('y')}
              onMouseUp={() => onMouseUp('y')}
              onClick={() =>
                handleKeyPress(showNumerics ? '-' : isUpperCase ? 'Y' : 'y')
              }
            >
              {showNumerics ? '-' : isUpperCase ? 'Y' : 'y'}
            </button>
            <button
              className={
                btnClickedu
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('u')}
              onMouseUp={() => onMouseUp('u')}
              onClick={() =>
                handleKeyPress(showNumerics ? '+' : isUpperCase ? 'U' : 'u')
              }
            >
              {showNumerics ? '+' : isUpperCase ? 'U' : 'u'}
            </button>
            <button
              className={
                btnClickedi
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('i')}
              onMouseUp={() => onMouseUp('i')}
              onClick={() =>
                handleKeyPress(showNumerics ? '(' : isUpperCase ? 'I' : 'i')
              }
            >
              {showNumerics ? '(' : isUpperCase ? 'I' : 'i'}
            </button>
            <button
              className={
                btnClickedo
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('o')}
              onMouseUp={() => onMouseUp('o')}
              onClick={() =>
                handleKeyPress(showNumerics ? ')' : isUpperCase ? 'O' : 'o')
              }
            >
              {showNumerics ? ')' : isUpperCase ? 'O' : 'o'}
            </button>
            <button
              className={
                btnClickedp
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('p')}
              onMouseUp={() => onMouseUp('p')}
              onClick={() =>
                handleKeyPress(showNumerics ? '/' : isUpperCase ? 'P' : 'p')
              }
            >
              {showNumerics ? '/' : isUpperCase ? 'P' : 'p'}
            </button>
          </div>
          <div className={`keyboard_row`}>
            <button
              className={
                btnClickeda
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('a')}
              onMouseUp={() => onMouseUp('a')}
              onClick={() =>
                handleKeyPress(showNumerics ? '=' : isUpperCase ? 'A' : 'a')
              }
            >
              {showNumerics ? '=' : isUpperCase ? 'A' : 'a'}
            </button>
            <button
              className={
                btnClickeds
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('s')}
              onMouseUp={() => onMouseUp('s')}
              onClick={() =>
                handleKeyPress(showNumerics ? '*' : isUpperCase ? 'S' : 's')
              }
            >
              {showNumerics ? '*' : isUpperCase ? 'S' : 's'}
            </button>
            <button
              className={
                btnClickedd
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('d')}
              onMouseUp={() => onMouseUp('d')}
              onClick={() =>
                handleKeyPress(showNumerics ? ':' : isUpperCase ? 'D' : 'd')
              }
            >
              {showNumerics ? ':' : isUpperCase ? 'D' : 'd'}
            </button>
            <button
              className={
                btnClickedf
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('f')}
              onMouseUp={() => onMouseUp('f')}
              onClick={() =>
                handleKeyPress(showNumerics ? ';' : isUpperCase ? 'F' : 'f')
              }
            >
              {showNumerics ? ';' : isUpperCase ? 'F' : 'f'}
            </button>
            <button
              className={
                btnClickedg
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('g')}
              onMouseUp={() => onMouseUp('g')}
              onClick={() =>
                handleKeyPress(showNumerics ? '!' : isUpperCase ? 'G' : 'g')
              }
            >
              {showNumerics ? '!' : isUpperCase ? 'G' : 'g'}
            </button>
            <button
              className={
                btnClickedh
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('h')}
              onMouseUp={() => onMouseUp('h')}
              onClick={() =>
                handleKeyPress(showNumerics ? '?' : isUpperCase ? 'H' : 'h')
              }
            >
              {showNumerics ? '?' : isUpperCase ? 'H' : 'h'}
            </button>
            <button
              className={
                btnClickedj
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('j')}
              onMouseUp={() => onMouseUp('j')}
              onClick={() =>
                handleKeyPress(showNumerics ? '{' : isUpperCase ? 'J' : 'j')
              }
            >
              {showNumerics ? '{' : isUpperCase ? 'J' : 'j'}
            </button>
            <button
              className={
                btnClickedk
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('k')}
              onMouseUp={() => onMouseUp('k')}
              onClick={() =>
                handleKeyPress(showNumerics ? '}' : isUpperCase ? 'K' : 'k')
              }
            >
              {showNumerics ? '}' : isUpperCase ? 'K' : 'k'}
            </button>
            <button
              className={
                btnClickedl
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('l')}
              onMouseUp={() => onMouseUp('l')}
              onClick={() =>
                handleKeyPress(showNumerics ? ',' : isUpperCase ? 'L' : 'l')
              }
            >
              {showNumerics ? ',' : isUpperCase ? 'L' : 'l'}
            </button>
          </div>
          <div className={`keyboard_row`}>
            <button
              className={
                btnClickedshift
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('shift')}
              onMouseUp={() => onMouseUp('shift')}
              onClick={() => handleShiftPress('shift')}
            >
              shift
            </button>
            <button
              className={
                btnClickedz
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('z')}
              onMouseUp={() => onMouseUp('z')}
              onClick={() =>
                handleKeyPress(showNumerics ? '[' : isUpperCase ? 'Z' : 'z')
              }
            >
              {showNumerics ? '[' : isUpperCase ? 'Z' : 'z'}
            </button>
            <button
              className={
                btnClickedx
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('x')}
              onMouseUp={() => onMouseUp('x')}
              onClick={() =>
                handleKeyPress(showNumerics ? ']' : isUpperCase ? 'X' : 'x')
              }
            >
              {showNumerics ? ']' : isUpperCase ? 'X' : 'x'}
            </button>
            <button
              className={
                btnClickedc
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('c')}
              onMouseUp={() => onMouseUp('c')}
              onClick={() =>
                handleKeyPress(showNumerics ? '`' : isUpperCase ? 'C' : 'c')
              }
            >
              {showNumerics ? '`' : isUpperCase ? 'C' : 'c'}
            </button>
            <button
              className={
                btnClickedv
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('v')}
              onMouseUp={() => onMouseUp('v')}
              onClick={() =>
                handleKeyPress(showNumerics ? '~' : isUpperCase ? 'V' : 'v')
              }
            >
              {showNumerics ? '~' : isUpperCase ? 'V' : 'v'}
            </button>
            <button
              className={
                btnClickedb
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('b')}
              onMouseUp={() => onMouseUp('b')}
              onClick={() =>
                handleKeyPress(showNumerics ? '^' : isUpperCase ? 'B' : 'b')
              }
            >
              {showNumerics ? '^' : isUpperCase ? 'B' : 'b'}
            </button>
            <button
              className={
                btnClickedn
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('n')}
              onMouseUp={() => onMouseUp('n')}
              onClick={() =>
                handleKeyPress(showNumerics ? '|' : isUpperCase ? 'N' : 'n')
              }
            >
              {showNumerics ? '|' : isUpperCase ? 'N' : 'n'}
            </button>
            <button
              className={
                btnClickedm
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('m')}
              onMouseUp={() => onMouseUp('m')}
              onClick={() =>
                handleKeyPress(showNumerics ? '\\' : isUpperCase ? 'M' : 'm')
              }
            >
              {showNumerics ? '\\' : isUpperCase ? 'M' : 'm'}
            </button>
            <button
              className={
                btnClickedDel
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('del')}
              onMouseUp={() => onMouseUp('del')}
              onClick={() => handleDelete('del')}
            >
              Del
            </button>
          </div>
          <div className={`keyboard_row`}>
            <button
              className={
                btnClickedABC
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('abc')}
              onMouseUp={() => onMouseUp('abc')}
              onClick={() => setShowNumerics(!showNumerics)}
            >
              {showNumerics ? 'ABC' : '123'}
            </button>
            <button
              className={
                btnClickedspace
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('space')}
              onMouseUp={() => onMouseUp('space')}
              onClick={() => handleKeyPress(' ')}
            >
              space
            </button>
            <button
              className={
                btnClickedPeriod
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('.')}
              onMouseUp={() => onMouseUp('.')}
              onClick={() => handleKeyPress('.')}
            >
              .
            </button>
            <button
              className={
                btnClickedSubmit
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('submit')}
              onMouseUp={() => onMouseUp('submit')}
              onClick={() => handleSubmit()}
            >
              enter
            </button>
          </div>
        </div>
      ) : (
        <div className={`container-fluid keyboard`}>
          <div className={`keyboard_row`}>
            <button
              className={
                btnClicked1
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(1)}
              onMouseUp={() => onMouseUp(1)}
              onClick={() => handleKeyPress(1)}
            >
              1
            </button>
            <button
              className={
                btnClicked2
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(2)}
              onMouseUp={() => onMouseUp(2)}
              onClick={() => handleKeyPress(2)}
            >
              2
            </button>
            <button
              className={
                btnClicked3
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(3)}
              onMouseUp={() => onMouseUp(3)}
              onClick={() => handleKeyPress(3)}
            >
              3
            </button>
          </div>
          <div className={`keyboard_row`}>
            <button
              className={
                btnClicked4
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(4)}
              onMouseUp={() => onMouseUp(4)}
              onClick={() => handleKeyPress(4)}
            >
              4
            </button>
            <button
              className={
                btnClicked5
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(5)}
              onMouseUp={() => onMouseUp(5)}
              onClick={() => handleKeyPress(5)}
            >
              5
            </button>
            <button
              className={
                btnClicked6
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(6)}
              onMouseUp={() => onMouseUp(6)}
              onClick={() => handleKeyPress(6)}
            >
              6
            </button>
          </div>
          <div className={`keyboard_row`}>
            <button
              className={
                btnClicked7
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(7)}
              onMouseUp={() => onMouseUp(7)}
              onClick={() => handleKeyPress(7)}
            >
              7
            </button>
            <button
              className={
                btnClicked8
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(8)}
              onMouseUp={() => onMouseUp(8)}
              onClick={() => handleKeyPress(8)}
            >
              8
            </button>
            <button
              className={
                btnClicked9
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown(9)}
              onMouseUp={() => onMouseUp(9)}
              onClick={() => handleKeyPress(9)}
            >
              9
            </button>
          </div>
          <div className={`keyboard_row`}>
            
              <button
                className={
                  btnClickedSubmit
                    ? "button_styles_clicked"
                    : "button_styles"
                }
                onMouseDown={() => onMouseDown('submit')}
                onMouseUp={() => onMouseUp('submit')}
                onClick={() => handleSubmit()}
              >
                enter
              </button>
           
              
                <button
                  className={
                    btnClicked0
                      ? "button_styles_clicked"
                    : "button_styles"
                  }
                  onMouseDown={() => onMouseDown(0)}
                  onMouseUp={() => onMouseUp(0)}
                  onClick={() => handleKeyPress(0)}
                >
                  0
                </button>
              
            <button
              className={
                btnClickedDel
                  ? "button_styles_clicked"
                    : "button_styles"
              }
              onMouseDown={() => onMouseDown('del')}
              onMouseUp={() => onMouseUp('del')}
              onClick={() => handleDelete('del')}
            >
              Del
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualKeyboard;
