# Virtual Keyboard

This is a hookable virtual keyboard which can be used in react applications.

# About me
Hello, My name is Sayantan Basu. I am a new software developer. After I saw a lack of virtual keyboards for react, I decided to take a shot and create a npm package myself.

# Documentation

Props the keyboard can be passed to.

1. *show* This prop is used to show keyboard. It must be a boolean state.
Usage:
```js
const [showKeyboard, setShowKeyboard] = useState(false);
 <VirtualKeyboard
    show={openVk}
 />
```

2. *output* This function captures the output from the keyboard. It needs to be a function.
Usage:
```js
const onKeyPress = (btn) => {
    console.log(btn)
}

 <VirtualKeyboard
    output={onKeyPress}
/>
```

3. *onClose* This prop is used to hide/close the keyboard. You need to pass a function which manipulates the same state. 
Usage:
```js
const [showKeyboard, setShowKeyboard] = useState(false);
 
 const handleclose = () => {
    setShowKeyboard(false);
  }

 <VirtualKeyboard
    onClose={handleclose}
 />
 ```

4. *layoutName* The layout you want, default or Upper. 
Usage:
```js
<VirtualKeyboard
        layoutName="default"
/>
 ```   

5. *changeButtonsDisplay* If you want to show certain buttons in a more user friendly way. It need to be an object as shown in the example.
```js
<VirtualKeyboard
        changeButtonsDisplay={{'bksp': 'backspace',
                                'enter': '< enter',
                                '@': 'at',
                                "space":"spacebar"
                              }}
  />
```

6. *anchor* The position where the keyboard will show up. It can be numbers or pixels.
Usage
```js
<VirtualKeyboard
        anchor={
            "horizontal":350,
            "vertical": 200,
        }
  />
 

