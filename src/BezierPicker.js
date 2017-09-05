/**
 * Created by azlar on 08/08/2017.
 */


import React from "react";
import * as utils from "./Util/util";

class BezierPicker extends React.Component {
    constructor(props) {
        super(props);


        let max = this.props.max;

        this.options = [
            {
                type: "Default",
                start: {
                    x: 0.25 * max,
                    y: 0.9 * max
                },
                end: {
                    x: 0.25 * max,
                    y: 0
                }
            },
            {
                type: "Ease In",
                start: {
                    x: 0.42 * max,
                    y: max
                },
                end: {
                    x: max,
                    y: 0
                }
            },
            {
                type: "Ease Out",
                start: {
                    x: 0,
                    y: max
                },
                end: {
                    x: 0.58 * max,
                    y: 0
                }
            },
            {
                type: "Ease Both",
                start: {
                    x: 0.42 * max,
                    y: max
                },
                end: {
                    x: 0.58 * max,
                    y: 0
                }
            },
            {
                type: "Linear",
                start: {
                    x: 0,
                    y: max
                },
                end: {
                    x: max,
                    y: 0
                }
            },
            {
                type: "None",
                start: {
                    x: 0,
                    y: max
                },
                end: {
                    x: max,
                    y: 0
                }
            }
        ];

        let option = props.option,
            start = this.options[1].start,
            end = this.options[1].end,
            picked = this.options[1].type;

        if(option) {
            let { validCoord } = utils,
                valid = true;

            let { x1, y1, x2, y2 }  = option;

            valid = validCoord(x1) && validCoord(x2) && validCoord(y1) && validCoord(y2);

            if(valid) {

                start = {
                    x: option.x1 * max,
                    y: (1 - option.y1) * max
                };

                end = {
                    x: option.x2 * max,
                    y: (1 - option.y2) * max
                };

                picked = option.picked || "Self";
            }else {
                console.error("there is something wrong with your default props, use default instead");
            }
        }

        this.state = {
            dragging: false,
            draggingType: "start",
            start: start,
            end: end,

            nowClientRect: null,
            maxX: max,
            maxY: max,
            max: max,

            picked: picked
        };

        this.startDrag = this.startDrag.bind(this);
        this.dragging = this.dragging.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.setPoints = this.setPoints.bind(this);
        this.setOnChange = this.setOnChange.bind(this);
    }

    componentDidMount() {
        this.setOnChange();
    }

    startDrag(type, e) {

        this.setState({
            dragging: true,
            draggingType: type,
            nowClientRect: e.target.parentNode.parentNode.getBoundingClientRect()
        });

        window.addEventListener("mousemove", this.dragging);
        window.addEventListener("mouseup", this.mouseUp);
    }

    dragging(e) {
        if( this.state.dragging && this.state.nowClientRect ) {
            let x = e.clientX - this.state.nowClientRect.left,
                y = e.clientY - this.state.nowClientRect.top;
            x = Math.min(Math.max(0, x), this.state.maxX);
            y = Math.min(Math.max(0, y), this.state.maxY);

            this.setState({
                [this.state.draggingType]: {
                    x,
                    y
                },
                picked: "Self"
            });
        }
    }

    mouseUp(e) {
        this.setState({
            dragging: false,
            draggingType: null
        }, this.setOnChange);

        window.removeEventListener("mousemove", this.dragging);
        window.removeEventListener("mouseup", this.mouseUp);
    }

    setPoints(start, end, name = "Self") {
        this.setState({
            start,
            end,
            picked: name
        }, this.setOnChange);
    }

    setOnChange() {

        let nowOptions = {
            x1: (this.state.start.x / this.state.maxX).toFixed(2),
            y1: ((this.state.maxY - this.state.start.y) / this.state.maxY).toFixed(2),
            x2: (this.state.end.x / this.state.maxX).toFixed(2),
            y2: ((this.state.maxY - this.state.end.y) / this.state.maxY).toFixed(2),
            picked: this.state.picked
        };

        let onChange = this.props.onChange || (d => console.log("now bezier options: ", d));

        onChange(nowOptions);
    }

    _createGrid(max) {
        let d = max / 10,
            line = '';

        for(let i = 1;i <= 10;i++) {
            line += "M" + d * i + " 0 L" + d * i + " " + max + ' ';
        }

        for(let i = 1;i <= 10;i++) {
            line += "M0 " + d * i + " L" + max + " "+ d * i;

            if(i !== 10) {
                line += " "
            }
        }

        return line;
    }

    render() {

        let path = "M0 " + this.state.maxY + " C" + this.state.start.x + " " + this.state.start.y + " "
            + this.state.end.x + ", " + this.state.end.y
            + ", " + this.state.maxX + ", 0",
            grid = this._createGrid(this.state.maxX);

        if(this.state.picked === 'None') {
            path = '';
        }

        let timeFunction = "cubic-bezier("
            + this.state.start.x / this.state.maxX + ","
            + (this.state.maxY - this.state.start.y) / this.state.maxY + ","
            + this.state.end.x / this.state.maxX + ","
            + (this.state.maxY - this.state.end.y) / this.state.maxY
            + ")";

        return (
            <div className="bezier-creator">
                <div className="options">
                    {
                        this.options.map(option =>
                            <div className="bezier-option" key={ "bezier-option" + option.type }>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        onClick={ this.setPoints.bind(this, option.start, option.end, option.type) }
                                        checked={ this.state.picked === option.type }
                                        onChange={ (e) => {} }
                                    />
                                </div>
                                <div className="name">
                                    { option.type }
                                </div>
                            </div>
                        )
                    }

                    <div className="bezier-option" key={ "bezier-option"}>
                        <div className="radio">
                            <input
                                type="radio"
                                checked={ this.state.picked === "Self" }
                                onChange={ (e) => {} }
                            />
                        </div>
                        <div className="name">
                            { "Self" }
                        </div>
                    </div>
                </div>

                <div className="board">
                    <svg
                        width={ this.state.maxX }
                        height={ this.state.maxY }
                    >
                        <path d={ grid } strokeWidth={"1px"} stroke="#eee" />
                        <path d={ path } strokeWidth={"1px"} stroke="#000" strokeLinecap={"round"} fill="none" />
                        <g>
                            <line
                                x1={ 0 }
                                y1={ this.state.maxY }
                                x2={ this.state.start.x }
                                y2={ this.state.start.y }
                                style={{ strokeWidth: "1", stroke: "rgba(255, 0, 0, .7)" }}
                                strokeDasharray={ 2 }
                            />

                            <line
                                x1={ this.state.maxX }
                                y1={ 0 }
                                x2={ this.state.end.x }
                                y2={ this.state.end.y }
                                style={{ strokeWidth: "1", stroke: "rgba(0, 0, 255, .7)" }}
                                strokeDasharray={ 2 }
                            />
                        </g>

                        <g>
                            <circle
                                cx={ this.state.start.x }
                                cy={ this.state.start.y }
                                r="4"
                                stroke="rgba(255, 0, 0, .7)"
                                strokeWidth="1"
                                fill="#fff"
                                onMouseDown={ this.startDrag.bind(this, "start") }
                            />
                            <circle
                                cx={ this.state.end.x }
                                cy={ this.state.end.y }
                                r="4"
                                stroke="rgba(0, 0, 255, .7)"
                                strokeWidth="1"
                                fill="#fff"
                                onMouseDown={ this.startDrag.bind(this, "end") }
                            />
                        </g>
                    </svg>

                    <div className="info">
                        <div>
                            {
                                (this.state.start.x / this.state.maxX).toFixed(2)
                                + " - "
                                + ((this.state.maxY - this.state.start.y) / this.state.maxY).toFixed(2)
                            }
                        </div>

                        <div>
                            {
                                (this.state.end.x / this.state.maxX).toFixed(2)
                                + " - "
                                + ((this.state.maxY - this.state.end.y) / this.state.maxY).toFixed(2)
                            }
                        </div>
                    </div>
                </div>

                <div className={ "demo" + (this.state.picked === "none" ? " disabled" : "") }>
                    <svg
                        className="car"
                        viewBox="0 0 1024 1024"
                        style={{ animationTimingFunction: timeFunction }}
                    >
                        <path d="M17.488 652.256c11.728-35.648 25.76-91.84 58-132.016 48.288-60.112 71.456-67.392 88.464-117.184 0 0 42.896-199.472 311.696-199.472 229.04 0 324.784 213.808 324.784 213.808S1009.76 454.416 1009.76 594.176c0 139.76-78.528 148.048-78.528 148.048l-5.664 0c-14.992 39.248-52.848 67.152-97.216 67.152s-82.24-27.904-97.216-67.152l-451.536 0.112c-15.008 39.232-52.848 67.04-97.216 67.04-44.304 0-82.128-27.808-97.136-67.04L58.064 742.336C58.064 742.336 0.112 705.088 17.488 652.256L17.488 652.256zM505.824 438.24l231.52 0c0 0-31.104-59.536-93.92-104.608-64.432-46.24-137.6-64.464-137.6-64.464L505.824 438.24 505.824 438.24zM437.792 438.992l0-168.64c0 0-85.36 7.424-145.776 52.032-60.912 44.944-86.416 116.592-86.416 116.592L437.792 438.976 437.792 438.992zM437.792 438.992" />
                        <path d="M1008.544 681.776 1008.544 681.776 1008.544 681.776 1008.544 681.776z" />
                    </svg>
                </div>

            </div>
        )
    }
}

BezierPicker.defaultProps = {
    max: 200,
};

export default BezierPicker;
