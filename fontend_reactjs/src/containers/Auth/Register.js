import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userSevice'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usename: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }
    handleOnChangeInput = (event) => {
        this.setState({
            usename: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className="login-content">
                        <h3 className='col-12 text-login'>Register</h3>
                        <div className='col-12 form-group login-input'>
                            <label htmlFor="">Username: </label>
                            <input type="text" className='form-control' placeholder='Enter your username' value={this.state.usename}
                                onChange={(event) => this.handleOnChangeInput(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label htmlFor="">Password: </label>
                            <div className='custom-input-password'>
                                <input className='form-control' placeholder='Enter your password'
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)} />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label htmlFor="">Re-Password: </label>
                            <div className='custom-input-password'>
                                <input className='form-control' placeholder='Enter your password'
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)} />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12" style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='text-center'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
