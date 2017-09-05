# bezier-picker
A simple bezier easing picker, you can use it to create a user-define [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function).

![](https://blog.azlar.cc/images/bezier-picker.png)

## How to use
1. install 
    ```shell
    npm install --save bezier-picker
    ```
    
2. use

    ```javascript
    import React from 'react';
    import BezierPicker from 'bezier-picker';
    
    const defaultProps = {
      max: 300,
      option: {
          x1: .2,
          y1: .3,
          x2: .7,
          y2: .15,
      }
    };
    
    export class YourComponent extends React.Component{
      render() {
        return (
          <BezierPicker { ...defaultProps } onChange={ yourOnChange } />
        )
      }
    }  
    ```

## Api
1. `max`: will be used as a svg-drag-zone size(width == height).

2. `option`: an object contains (x1, y1) and (x2, y2), it will set default like: 
    ```javascript
    const defaultOption = {
      x1: .2,
      y1: .3,
      x2: .7,
      y2: .15,
    };
    ```
3. `onChange`: fired when user chose an radio or a dragend.

## demo
[https://blog.azlar.cc/demos/bezier_picker/](https://blog.azlar.cc/demos/bezier_picker/).

or

```javascript
git clone git@github.com:azlarsin/bezier-picker.git
cd bezier-picker
npm install
npm start
```
