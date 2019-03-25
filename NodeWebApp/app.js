"use strict";
// update webpack with the following command:
// node_modules\.bin\webpack app.tsx--config webpack - config.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var ReactDOM = require('react-dom');
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    Form.prototype.handleChange = function (e) {
        this.setState({ value: e.target.value });
    };
    Form.prototype.handleSubmit = function (e) {
        alert("A name was submitted: " + this.state.value);
        e.preventDefault();
    };
    Form.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("label", null,
                "Forename: ",
                React.createElement("input", { type: "text", value: this.state.value, onChange: this.handleChange })),
            React.createElement("input", { type: "submit", value: "Submit" })));
    };
    return Form;
}(React.Component));
exports.Form = Form;
ReactDOM.render(React.createElement(Form, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map