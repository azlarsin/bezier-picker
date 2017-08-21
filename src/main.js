/**
 * Created by azlar on 08/08/2017.
 */

import React from 'react';
import ReactDom from 'react-dom';

import BezierPicker from './BezierPicker';

require("../css/main.scss");


const defaultProps = {
    max: 300,
    option: {
        x1: .2,
        y1: .3,
        x2: .7,
        y2: .15,
    }
};

let showData = (nowData) => {

    document.getElementById("data-board").innerHTML = 'now options:'
        + `<span><i>${nowData.picked}</i></span>`
        + `<span>(<i>${nowData.x1}</i>, <i>${nowData.y1}</i>)</span>`
        + `<span>(<i>${nowData.x2}</i>, <i>${nowData.y2}</i>)</span>`
        + `<div><code>transition-timing-function: cubic-bezier(${nowData.x1}, ${nowData.y1}, ${nowData.x2}, ${nowData.y2});</code></div>`
    ;
};

const App = (
    <div className="app">
        <h2>A simple bezier easing picker</h2>
        <div>
            <BezierPicker { ...defaultProps } onChange={ showData } />

            <div id="data-board" className="data-board">
            </div>
        </div>
    </div>
);


ReactDom.render(
    App
    ,
    document.getElementById("asd")
);