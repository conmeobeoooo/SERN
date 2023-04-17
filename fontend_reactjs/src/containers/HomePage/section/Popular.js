import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Popular.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Popular extends Component {
    render() {
        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className='section-popular'>
                <div className='popular-content'>
                    <div className='popular-header'>
                        <h3 className='popular-header-title text-center'>Chuyên khoa phổ biến</h3>
                        <button className='popular-header-btn'>Xem thêm</button>
                    </div>
                    <Slider {...settings}>
                        <div className='d-flex popular-items'>
                            <a href="#">
                                <div className='popular-item'>
                                    <img className='popular-item-img' src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg" alt="" />
                                    <h3 className='popular-item-title'>Cơ Xương Khớp</h3>
                                </div>
                            </a>
                            <div className='popular-item'>
                                <a href="#">
                                    <img className='popular-item-img' src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg" alt="" />
                                    <h3 className='popular-item-title'>Thần kinh</h3>
                                </a>
                            </div>
                            <div className='popular-item'>
                                <a href="#">
                                    <img className='popular-item-img' src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg" alt="" />
                                    <h3 className='popular-item-title'>Tiêu hóa</h3>
                                </a>
                            </div>
                            <div className='popular-item'>
                                <a href="#">
                                    <img className='popular-item-img' src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg" alt="" />
                                    <h3 className='popular-item-title'>Tim mạch</h3>
                                </a>
                            </div>
                        </div>
                        <div className='d-flex popular-items'>
                            <div className='popular-item'>
                                <a href="">
                                    <img className='popular-item-img' src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121146-tai-mui-hong.jpg" alt="" />
                                    <h3 className='popular-item-title'>Tai mũi họng</h3>
                                </a>
                            </div>
                            <div className='popular-item'>
                                <a href="">
                                    <img className='popular-item-img' src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121215-cot-song.jpg" alt="" />
                                    <h3 className='popular-item-title'>Cột sống</h3>
                                </a>
                            </div>
                            <div className='popular-item'>
                                <a href="">
                                    <img className='popular-item-img' src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121232-y-hoc-co-truyen.jpg" alt="" />
                                    <h3 className='popular-item-title'>Y học cổ truyền</h3>
                                </a>
                            </div>
                            <div className='popular-item'>
                                <a href="">
                                    <img className='popular-item-img' src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121305-cham-cuu.jpg" alt="" />
                                    <h3 className='popular-item-title'>Châm cứu</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Popular);

