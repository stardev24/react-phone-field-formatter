import React from "react";
import Input from '@material-ui/core/Input';
import "./PhoneNumberInput.css";


class PhoneNumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',validationError:''};

    this.handleChange = this.handleChange.bind(this);
    this.formatPhoneNumber = this.formatPhoneNumber.bind(this);
    this.validateNumber = this.validateNumber.bind(this)
  }
  formatPhoneNumber(phoneNumStr){
      let formatedPhoneNumber = ('' + phoneNumStr ).replace(/\D/g, '')
      let pattern = formatedPhoneNumber.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
      if (pattern) {
        let interlCode = (pattern[1] ? '+1 ' : '')
        return [interlCode, '(', pattern[2], ') ', pattern[3], '-', pattern[4]].join('')
      }
      return null
  }
  validateNumber(phoneNumStr){
    console.log("Validaton is in progress")
    let incorrectPattern = /^[a-zA-Z._@#$%&*!~]+$/i
    let inValid = incorrectPattern.match(phoneNumStr)
    return inValid ? this.setState({validationError:'Please enter valid phone number'}) : false

  }
  handleChange(event) {
    let invalidResult = this.validateNumber(event.target.value)
    if(!invalidResult){
      let reformatedPhoneNumber = event? this.formatPhoneNumber(event.target.value) : ''
      this.setState({value: reformatedPhoneNumber});
    }
  }

  render() {
    return (
      <React.Fragment>
        <Input
          type={this.props.type}
          className="simple-text-input"
          value={this.state.value}
          onChange={e => this.handleChange(e)}
          placeholder={this.props.placeholder}
        />
        <p className={this.props.messsageclass} id="notify">{this.state.validationError}</p>
      </React.Fragment>
    );
  }
}

export default PhoneNumberInput;