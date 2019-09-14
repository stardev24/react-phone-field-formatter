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
      var formatedPhoneNumber = ('' + phoneNumStr ).replace(/\D/g, '')
      var pattern = formatedPhoneNumber.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
      if (pattern) {
        var interlCode = (pattern[1] ? '+1 ' : '')
        return [interlCode, '(', pattern[2], ') ', pattern[3], '-', pattern[4]].join('')
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