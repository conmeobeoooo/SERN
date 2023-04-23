import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Doctor.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Doctor extends Component {

    render() {
        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,

        };
        return (
            <div className='section-doctor'>
                <div className='doctor-content'>
                    <div className='doctor-header'>
                        <h3 className='doctor-header-title text-center'>Bác sĩ phổ biến</h3>
                        <button className='doctor-header-btn'>Xem thêm</button>
                    </div>
                    <Slider {...settings}>
                        <div className='d-flex doctor-items'>
                            <div className='doctor-item'>
                                <a href="#">
                                    <img className='doctor-item-img' src="https://cdn.bookingcare.vn/fr/w200/2017/12/22/155419nguyen-thi-kim-loan.jpg" alt="" />
                                    <h4 className='doctor-item-title'>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</h4>
                                    <p className='doctor-item-des'>Cơ Xương Khớp</p>
                                </a>
                            </div>
                            <div className='doctor-item'>
                                <a href="#">
                                    <img className='doctor-item-img' src="https://cdn.bookingcare.vn/fr/w200/2017/12/22/155419nguyen-thi-kim-loan.jpg" alt="" />
                                    <h4 className='doctor-item-title'>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</h4>
                                    <p className='doctor-item-des'>Cơ Xương Khớp</p>
                                </a>
                            </div>
                            <div className='doctor-item'>
                                <a href="#">
                                    <img className='doctor-item-img' src="https://cdn.bookingcare.vn/fr/w200/2017/12/22/155419nguyen-thi-kim-loan.jpg" alt="" />
                                    <h4 className='doctor-item-title'>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</h4>
                                    <p className='doctor-item-des'>Cơ Xương Khớp</p>
                                </a>
                            </div>
                            <div className='doctor-item'>
                                <a href="#">
                                    <img className='doctor-item-img' src="https://cdn.bookingcare.vn/fr/w200/2017/12/22/155419nguyen-thi-kim-loan.jpg" alt="" />
                                    <h4 className='doctor-item-title'>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</h4>
                                    <p className='doctor-item-des'>Cơ Xương Khớp</p>
                                </a>
                            </div>
                        </div>
                        <div className='d-flex doctor-items'>
                            <div className='doctor-item'>
                                <a href="#">
                                    <img className='doctor-item-img' src="https://cdn.bookingcare.vn/fr/w200/2017/12/22/155419nguyen-thi-kim-loan.jpg" alt="" />
                                    <h4 className='doctor-item-title'>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</h4>
                                    <p className='doctor-item-des'>Cơ Xương Khớp</p>
                                </a>
                            </div>
                            <div className='doctor-item'>
                                <a href="#">
                                    <img className='doctor-item-img' src="https://cdn.bookingcare.vn/fr/w200/2017/12/22/155419nguyen-thi-kim-loan.jpg" alt="" />
                                    <h4 className='doctor-item-title'>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</h4>
                                    <p className='doctor-item-des'>Cơ Xương Khớp</p>
                                </a>
                            </div>
                            <div className='doctor-item'>
                                <a href="#">
                                    <img className='doctor-item-img' src="https://cdn.bookingcare.vn/fr/w200/2017/12/22/155419nguyen-thi-kim-loan.jpg" alt="" />
                                    <h4 className='doctor-item-title'>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</h4>
                                    <p className='doctor-item-des'>Cơ Xương Khớp</p>
                                </a>
                            </div>
                            <div className='doctor-item'>
                                <a href="#">
                                    <img className='doctor-item-img' src="https://cdn.bookingcare.vn/fr/w200/2017/12/22/155419nguyen-thi-kim-loan.jpg" alt="" />
                                    <h4 className='doctor-item-title'>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</h4>
                                    <p className='doctor-item-des'>Cơ Xương Khớp</p>
                                </a>
                            </div>
                        </div>
                    </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);

