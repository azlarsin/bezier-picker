module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by azlar on 05/09/2017.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BezierPicker = __webpack_require__(2);

var _BezierPicker2 = _interopRequireDefault(_BezierPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(5);

exports.default = _BezierPicker2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(4);

var utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by azlar on 08/08/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BezierPicker = function (_React$Component) {
    _inherits(BezierPicker, _React$Component);

    function BezierPicker(props) {
        _classCallCheck(this, BezierPicker);

        var _this = _possibleConstructorReturn(this, (BezierPicker.__proto__ || Object.getPrototypeOf(BezierPicker)).call(this, props));

        var max = _this.props.max;

        _this.options = [{
            type: "Default",
            start: {
                x: 0.25 * max,
                y: 0.9 * max
            },
            end: {
                x: 0.25 * max,
                y: 0
            }
        }, {
            type: "Ease In",
            start: {
                x: 0.42 * max,
                y: max
            },
            end: {
                x: max,
                y: 0
            }
        }, {
            type: "Ease Out",
            start: {
                x: 0,
                y: max
            },
            end: {
                x: 0.58 * max,
                y: 0
            }
        }, {
            type: "Ease Both",
            start: {
                x: 0.42 * max,
                y: max
            },
            end: {
                x: 0.58 * max,
                y: 0
            }
        }, {
            type: "Linear",
            start: {
                x: 0,
                y: max
            },
            end: {
                x: max,
                y: 0
            }
        }, {
            type: "None",
            start: {
                x: 0,
                y: max
            },
            end: {
                x: max,
                y: 0
            }
        }];

        var option = props.option,
            start = _this.options[1].start,
            end = _this.options[1].end,
            picked = _this.options[1].type;

        if (option) {
            var validCoord = utils.validCoord,
                valid = true;
            var x1 = option.x1,
                y1 = option.y1,
                x2 = option.x2,
                y2 = option.y2;


            valid = validCoord(x1) && validCoord(x2) && validCoord(y1) && validCoord(y2);

            if (valid) {

                start = {
                    x: option.x1 * max,
                    y: (1 - option.y1) * max
                };

                end = {
                    x: option.x2 * max,
                    y: (1 - option.y2) * max
                };

                picked = option.picked || "Self";
            } else {
                console.error("there is something wrong with your default props, use default instead");
            }
        }

        _this.state = {
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

        _this.startDrag = _this.startDrag.bind(_this);
        _this.dragging = _this.dragging.bind(_this);
        _this.mouseUp = _this.mouseUp.bind(_this);
        _this.setPoints = _this.setPoints.bind(_this);
        _this.setOnChange = _this.setOnChange.bind(_this);
        return _this;
    }

    _createClass(BezierPicker, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setOnChange();
        }
    }, {
        key: "startDrag",
        value: function startDrag(type, e) {

            this.setState({
                dragging: true,
                draggingType: type,
                nowClientRect: e.target.parentNode.parentNode.getBoundingClientRect()
            });

            window.addEventListener("mousemove", this.dragging);
            window.addEventListener("mouseup", this.mouseUp);
        }
    }, {
        key: "dragging",
        value: function dragging(e) {
            if (this.state.dragging && this.state.nowClientRect) {
                var _setState;

                var x = e.clientX - this.state.nowClientRect.left,
                    y = e.clientY - this.state.nowClientRect.top;
                x = Math.min(Math.max(0, x), this.state.maxX);
                y = Math.min(Math.max(0, y), this.state.maxY);

                this.setState((_setState = {}, _defineProperty(_setState, this.state.draggingType, {
                    x: x,
                    y: y
                }), _defineProperty(_setState, "picked", "Self"), _setState));
            }
        }
    }, {
        key: "mouseUp",
        value: function mouseUp(e) {
            this.setState({
                dragging: false,
                draggingType: null
            }, this.setOnChange);

            window.removeEventListener("mousemove", this.dragging);
            window.removeEventListener("mouseup", this.mouseUp);
        }
    }, {
        key: "setPoints",
        value: function setPoints(start, end) {
            var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Self";

            this.setState({
                start: start,
                end: end,
                picked: name
            }, this.setOnChange);
        }
    }, {
        key: "setOnChange",
        value: function setOnChange() {

            var nowOptions = {
                x1: (this.state.start.x / this.state.maxX).toFixed(2),
                y1: ((this.state.maxY - this.state.start.y) / this.state.maxY).toFixed(2),
                x2: (this.state.end.x / this.state.maxX).toFixed(2),
                y2: ((this.state.maxY - this.state.end.y) / this.state.maxY).toFixed(2),
                picked: this.state.picked
            };

            var onChange = this.props.onChange || function (d) {
                return console.log("now bezier options: ", d);
            };

            onChange(nowOptions);
        }
    }, {
        key: "_createGrid",
        value: function _createGrid(max) {
            var d = max / 10,
                line = '';

            for (var i = 1; i <= 10; i++) {
                line += "M" + d * i + " 0 L" + d * i + " " + max + ' ';
            }

            for (var _i = 1; _i <= 10; _i++) {
                line += "M0 " + d * _i + " L" + max + " " + d * _i;

                if (_i !== 10) {
                    line += " ";
                }
            }

            return line;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var path = "M0 " + this.state.maxY + " C" + this.state.start.x + " " + this.state.start.y + " " + this.state.end.x + ", " + this.state.end.y + ", " + this.state.maxX + ", 0",
                grid = this._createGrid(this.state.maxX);

            if (this.state.picked === 'None') {
                path = '';
            }

            var timeFunction = "cubic-bezier(" + this.state.start.x / this.state.maxX + "," + (this.state.maxY - this.state.start.y) / this.state.maxY + "," + this.state.end.x / this.state.maxX + "," + (this.state.maxY - this.state.end.y) / this.state.maxY + ")";

            return _react2.default.createElement(
                "div",
                { className: "bezier-creator" },
                _react2.default.createElement(
                    "div",
                    { className: "options" },
                    this.options.map(function (option) {
                        return _react2.default.createElement(
                            "div",
                            { className: "bezier-option", key: "bezier-option" + option.type },
                            _react2.default.createElement(
                                "div",
                                { className: "radio" },
                                _react2.default.createElement("input", {
                                    type: "radio",
                                    onClick: _this2.setPoints.bind(_this2, option.start, option.end, option.type),
                                    checked: _this2.state.picked === option.type,
                                    onChange: function onChange(e) {}
                                })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "name" },
                                option.type
                            )
                        );
                    }),
                    _react2.default.createElement(
                        "div",
                        { className: "bezier-option", key: "bezier-option" },
                        _react2.default.createElement(
                            "div",
                            { className: "radio" },
                            _react2.default.createElement("input", {
                                type: "radio",
                                checked: this.state.picked === "Self",
                                onChange: function onChange(e) {}
                            })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "name" },
                            "Self"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "board" },
                    _react2.default.createElement(
                        "svg",
                        {
                            width: this.state.maxX,
                            height: this.state.maxY
                        },
                        _react2.default.createElement("path", { d: grid, strokeWidth: "1px", stroke: "#eee" }),
                        _react2.default.createElement("path", { d: path, strokeWidth: "1px", stroke: "#000", strokeLinecap: "round", fill: "none" }),
                        _react2.default.createElement(
                            "g",
                            null,
                            _react2.default.createElement("line", {
                                x1: 0,
                                y1: this.state.maxY,
                                x2: this.state.start.x,
                                y2: this.state.start.y,
                                style: { strokeWidth: "1", stroke: "rgba(255, 0, 0, .7)" },
                                strokeDasharray: 2
                            }),
                            _react2.default.createElement("line", {
                                x1: this.state.maxX,
                                y1: 0,
                                x2: this.state.end.x,
                                y2: this.state.end.y,
                                style: { strokeWidth: "1", stroke: "rgba(0, 0, 255, .7)" },
                                strokeDasharray: 2
                            })
                        ),
                        _react2.default.createElement(
                            "g",
                            null,
                            _react2.default.createElement("circle", {
                                cx: this.state.start.x,
                                cy: this.state.start.y,
                                r: "4",
                                stroke: "rgba(255, 0, 0, .7)",
                                strokeWidth: "1",
                                fill: "#fff",
                                onMouseDown: this.startDrag.bind(this, "start")
                            }),
                            _react2.default.createElement("circle", {
                                cx: this.state.end.x,
                                cy: this.state.end.y,
                                r: "4",
                                stroke: "rgba(0, 0, 255, .7)",
                                strokeWidth: "1",
                                fill: "#fff",
                                onMouseDown: this.startDrag.bind(this, "end")
                            })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "info" },
                        _react2.default.createElement(
                            "div",
                            null,
                            (this.state.start.x / this.state.maxX).toFixed(2) + " - " + ((this.state.maxY - this.state.start.y) / this.state.maxY).toFixed(2)
                        ),
                        _react2.default.createElement(
                            "div",
                            null,
                            (this.state.end.x / this.state.maxX).toFixed(2) + " - " + ((this.state.maxY - this.state.end.y) / this.state.maxY).toFixed(2)
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "demo" + (this.state.picked === "none" ? " disabled" : "") },
                    _react2.default.createElement(
                        "svg",
                        {
                            className: "car",
                            viewBox: "0 0 1024 1024",
                            style: { animationTimingFunction: timeFunction }
                        },
                        _react2.default.createElement("path", { d: "M17.488 652.256c11.728-35.648 25.76-91.84 58-132.016 48.288-60.112 71.456-67.392 88.464-117.184 0 0 42.896-199.472 311.696-199.472 229.04 0 324.784 213.808 324.784 213.808S1009.76 454.416 1009.76 594.176c0 139.76-78.528 148.048-78.528 148.048l-5.664 0c-14.992 39.248-52.848 67.152-97.216 67.152s-82.24-27.904-97.216-67.152l-451.536 0.112c-15.008 39.232-52.848 67.04-97.216 67.04-44.304 0-82.128-27.808-97.136-67.04L58.064 742.336C58.064 742.336 0.112 705.088 17.488 652.256L17.488 652.256zM505.824 438.24l231.52 0c0 0-31.104-59.536-93.92-104.608-64.432-46.24-137.6-64.464-137.6-64.464L505.824 438.24 505.824 438.24zM437.792 438.992l0-168.64c0 0-85.36 7.424-145.776 52.032-60.912 44.944-86.416 116.592-86.416 116.592L437.792 438.976 437.792 438.992zM437.792 438.992" }),
                        _react2.default.createElement("path", { d: "M1008.544 681.776 1008.544 681.776 1008.544 681.776 1008.544 681.776z" })
                    )
                )
            );
        }
    }]);

    return BezierPicker;
}(_react2.default.Component);

BezierPicker.defaultProps = {
    max: 200
};

exports.default = BezierPicker;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by azlar on 21/08/2017.
 */

var validCoord = exports.validCoord = function validCoord(x) {
  return Number(x) % 1 !== 0 && x > 0 && x < 1;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./bezier-picker.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./bezier-picker.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".bezier-creator {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: #fff;\n  box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 2px;\n  color: #333;\n  cursor: auto;\n  padding: 10px;\n  padding-bottom: 0;\n  width: fit-content; }\n  .bezier-creator .options {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    user-select: none; }\n    .bezier-creator .options .bezier-option {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      flex: 1; }\n      .bezier-creator .options .bezier-option > div.radio {\n        margin-right: 6px; }\n        .bezier-creator .options .bezier-option > div.radio > input {\n          cursor: pointer; }\n  .bezier-creator .board {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 20px; }\n    .bezier-creator .board svg {\n      overflow: visible;\n      box-shadow: 0 0 0 1px #979797;\n      border-radius: 2px;\n      user-select: none; }\n      .bezier-creator .board svg circle {\n        cursor: move;\n        cursor: -webkit-grabbing; }\n    .bezier-creator .board .info {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-direction: row;\n      margin-top: 15px;\n      padding: 0 10px;\n      text-decoration: underline; }\n      .bezier-creator .board .info > div:last-child {\n        margin-left: auto; }\n  .bezier-creator .demo {\n    width: 100%;\n    height: 50px;\n    margin-top: 20px;\n    box-shadow: 0px -1px 0px 0 rgba(0, 0, 0, 0.2);\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    align-items: center;\n    position: relative;\n    cursor: default;\n    user-select: none; }\n    .bezier-creator .demo > .car {\n      animation-name: bezierDemo;\n      animation-duration: 2s;\n      animation-fill-mode: both;\n      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n      animation-iteration-count: infinite;\n      position: absolute;\n      font-size: 18px;\n      width: 20px;\n      height: 20px; }\n\n@keyframes bezierDemo {\n  from {\n    left: 0;\n    fill: red; }\n  to {\n    left: calc(100% - 18px);\n    fill: blue; } }\n  .bezier-creator .demo.disabled > .car {\n    animation: none; }\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);