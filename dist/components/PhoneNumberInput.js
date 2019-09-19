import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from "react";
import Input from '@material-ui/core/Input';
import "./PhoneNumberInput.css";

var PhoneNumberInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PhoneNumberInput, _React$Component);

  function PhoneNumberInput(props) {
    var _this;

    _classCallCheck(this, PhoneNumberInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhoneNumberInput).call(this, props));
    _this.state = {
      value: '',
      validationError: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.formatPhoneNumber = _this.formatPhoneNumber.bind(_assertThisInitialized(_this));
    _this.validateNumber = _this.validateNumber.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PhoneNumberInput, [{
    key: "formatPhoneNumber",
    value: function formatPhoneNumber(phoneNumStr) {
      var formatedPhoneNumber = ('' + phoneNumStr).replace(/\D/g, '');
      var pattern = formatedPhoneNumber.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

      if (pattern) {
        var interlCode = pattern[1] ? '+1 ' : '';
        return [interlCode, '(', pattern[2], ') ', pattern[3], '-', pattern[4]].join('');
      }

      return null;
    }
  }, {
    key: "validateNumber",
    value: function validateNumber(phoneNumStr) {
      if (phoneNumStr === "") {
        this.setState({
          validationError: ""
        });
      } else {
        var correctPattern = /^[\d ()+-]+$/;
        var isValid = correctPattern.test(phoneNumStr);
        this.setState(isValid ? {
          validationError: ''
        } : {
          validationError: 'Please enter valid phone number'
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var invalidResult = this.validateNumber(event.target.value);

      if (!invalidResult) {
        var reformatedPhoneNumber = event ? this.formatPhoneNumber(event.target.value) : '';
        this.setState({
          value: reformatedPhoneNumber
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(React.Fragment, null, React.createElement(Input, {
        type: this.props.type,
        className: "simple-text-input",
        value: this.state.value,
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: this.props.placeholder
      }), React.createElement("p", {
        className: this.props.messsageclass,
        id: "notify"
      }, this.state.validationError));
    }
  }]);

  return PhoneNumberInput;
}(React.Component);

export default PhoneNumberInput;