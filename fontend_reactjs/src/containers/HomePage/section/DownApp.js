import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './DownApp.scss'
class DownApp extends Component {

    render() {

        return (
            <div className='section-downapp'>
                <div className='downapp-content'>
                    <div className="downapp">
                        <div className='downapp-img'></div>
                        <h1 className='downapp-title'>Tải ứng dụng BookingCare</h1>
                        <ul className='app-feature'>
                            <li>Đặt khám nhanh hơn</li>
                            <li>Nhận thông báo từ hệ thống</li>
                            <li>Nhận hướng dẫn đi khám chi tiết</li>
                        </ul>
                        <div className="downapp-link">
                            <img className='downapp-link-img' src="https://bookingcare.vn/assets/icon/google-play-badge.svg" alt="" />
                            <img className='downapp-link-img' src="https://bookingcare.vn/assets/icon/app-store-badge-black.svg" alt="" />
                        </div>
                        <a href='#' className='downapp-link-auto'> Hoặc mở liên kết: <strong>https://bookingcare.vn/app</strong></a>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DownApp);

