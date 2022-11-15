import FormDataComponent from './components/formData.component';
import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import "./App.scss";
import rectangle5 from "./assets/rect.svg";
import bImage from "./assets/eye2.png"
import Button from "./components/Button";
import {FormErrors} from "./FormErrors";

class App extends Component {
//const App = () => {
    
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            telephone: '',
            password: '',
            confirmPassword: '',
            formErrors: {name: '',email: '', password: '', telephone: '',confirmPassword: '',},
            nameValid: false,
            emailValid: false,
            telephoneValid: false,
            passwordValid: false,
            confirmValid: false,
            formValid: false
        };
    };



    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
           () => { this.validateField(name, value) });
    }
//
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let telephoneValid = this.state.telephoneValid;
        let passwordValid = this.state.passwordValid;
        let confirmValid = this.state.confirmValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length > 0;
                fieldValidationErrors.name = nameValid ? '': ' is too short';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'telephone':
                telephoneValid = value.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
                fieldValidationErrors.telephone = telephoneValid ? '': ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            case 'confirmPassword':
                confirmValid = value.length >= 6;
                fieldValidationErrors.confirmPassword = confirmValid ? '': ' does not match';
                break;
            default:
                break;
        }
        if (this.password !== this.confirmPassword) {
            alert.error('Your password does not match');
            return;
        }
        this.setState({formErrors: fieldValidationErrors,
            nameValid: nameValid,
            emailValid: emailValid,
            telephoneValid: telephoneValid,
            passwordValid: passwordValid,
            confirmValid: confirmValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.telephoneValid && this.state.passwordValid && this.state.confirmValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                telephone: this.userData.telephone,
                password: this.userData.password,
                confirmPassword: this.userData.confirmPassword
            })
        } else {
            this.setState({
                name: '',
                email: '',
                telephone: '',
                password: '',
                confirmPassword: ''
            })
        }
    }
        componentWillUpdate(nextProps, nextState) {
            localStorage.setItem('user', JSON.stringify(nextState));
        }
    

//const Button = () => {
  //const propsData = {
    //button: {
      //learnMore: "Agree & Sign up",
    //};
    render () {
        
   return (
        <div className="sign-up-screen">
                <div className="rectangle-660">

                    <div className="rectangle-661">
              <span className="the-on-demand-all-in">
                The on-demand, all inclusive, healthcare management ecosystem
              </span>

                        <img className="rectangle-5" src={rectangle5} alt=''/>

                    </div>
                    <img className="bImage" src={bImage} alt=''/>
                </div>
            <div className="rectangle-662">
                <span className="create-an-account">Create an Account</span>

                <form className='forms' onSubmit={this.onSubmit} >
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors}/>
                    </div>
                    <span className="name">Name *</span>
                    <input className="rectangle-2" placeholder="Your Name" type="text" name='name' required
                           value={this.state.name}
                           onChange={this.handleUserInput}/>
                    <span className="work-email">Work Email *</span>
                    <input className="rectangle-2-1" placeholder="Your email" type="text" name='email' required value={this.state.email}
                           onChange={this.handleUserInput}/>
                    <span className="telephone">Telephone *</span>
                    <input
                        className="rectangle-2-2"
                        placeholder="+44 01845 501417" name='telephone'
                        type="text" required value={this.state.telephone}
                        onChange={this.handleUserInput}
                    />
                    <span className="password">Password *</span>
                    <input
                        className="rectangle-2-3"
                        placeholder="Your Password" name='password'
                        type="text" required value={this.state.password}
                        onChange={this.handleUserInput}
                    />
                    <span className="confirm-password">Confirm Password *</span>
                    <input
                        className="rectangle-2-4"
                        placeholder="Confirm your password" name='confirmPassword'
                        type="text" required value={this.state.confirmPassword}
                        onChange={this.handleUserInput}
                    />
                    <Button className="button-instance-1"/>
                    <span className="already-have-an-acco">
            Already have an account ? <a href='#'>Sign-in </a>
        </span>
                </form>
            </div>
        </div>
    );
    
}
}
export default App;