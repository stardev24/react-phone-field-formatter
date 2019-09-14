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
      var cleaned = ('' + phoneNumStr ).replace(/\D/g, '')
      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        var intlCode = (match[1] ? '+1 ' : '')
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
      }
      return null
  }
  validateNumber(){
    console.log("Validaton is in progress")
  }
  handleChange(event) {
    let reformatedPhoneNumber = event? this.formatPhoneNumber(event.target.value) : ''
    this.setState({value: reformatedPhoneNumber,validationError:''});
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