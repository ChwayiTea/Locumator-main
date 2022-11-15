import React, { Component } from 'react';

export default class FormDataComponent extends Component {

    userData;
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            telephone: '',
            password: '',
            confirmPassword: ''
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePhone(e) {
        this.setState({ telephone: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onChangeConfirmPassword(e) {
        this.setState({ confirmPassword: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            telephone: '',
            password: '',
            confirmPassword: ''
        })
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
    render() {
        return (
            <div>
                <FormDataComponent />
            </div>)
}}