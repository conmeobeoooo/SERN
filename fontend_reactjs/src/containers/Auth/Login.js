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
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.usename, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        }
        catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
        }
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
                        <h3 className='col-12 text-login'>Login</h3>
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
                        <div className="col-12" style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='text-center'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Log In</button>
                        </div>
                        <div className="col-12 text-center forget-password">
                            <span>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-otherlogin'>Or login with</span>
                        </div>
                        <ul className="col12 social-login mt-3 ">
                            <i className="fa-brands fa-google google"></i>
                            <i className="fa-brands fa-facebook-f facebook"></i>
                        </ul>
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
