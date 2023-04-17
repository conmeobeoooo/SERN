import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl'
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions/appActions';
class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className="home-header-content">
                        <div className="left-content">
                            <i class="fa-sharp fa-solid fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <ul className="center-content">
                            <li>
                                <a href="#"><FormattedMessage id="homeheader.speciality" /><br />
                                    <span><FormattedMessage id="homeheader.searchdoctor" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#"><FormattedMessage id="homeheader.health-facilities" /><br />
                                    <span><FormattedMessage id="homeheader.choose-hospital-clinic" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#"><FormattedMessage id="homeheader.doctor" /><br />
                                    <span><FormattedMessage id="homeheader.choose-a-good-doctor" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#"><FormattedMessage id="homeheader.examination-package" /><br />
                                    <span><FormattedMessage id="homeheader.general-health-check" /></span>
                                </a>
                            </li>
                        </ul>
                        <div className="right-content">
                            <div>
                                <i class="fa-solid fa-circle-question"></i>
                                <span className='ho-tro'><FormattedMessage id="homeheader.support" /></span>
                            </div>
                            <div className='language-vi'>
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                                    VN
                                </span>
                            </div>
                            <div className='language-en'>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                                    EN
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="banner-search">
                        <div>
                            <h1 className='banner-title'><FormattedMessage id="homeheader.medical-background" /><br />
                                <b>
                                    <FormattedMessage id="homeheader.comprehensive-health-care" />
                                </b>
                            </h1>
                            <div className="search-from">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='tìm chuyển khoa khám bệnh' />
                            </div>
                            <div className="down-app">
                                <img src="https://bookingcare.vn/assets/icon/google-play-badge.svg" className='down-app-icon' alt="" />
                                <img src="https://bookingcare.vn/assets/icon/app-store-badge-black.svg" className='down-app-icon' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="choose">
                        <ul>
                            <li>
                                <a href="">
                                    <div className="banner-choose-item">
                                        <img src="https://cdn.bookingcare.vn/fo/2021/12/08/133537-khamchuyenkhoa.png" alt="" />
                                    </div>
                                    Khám<br />
                                    Chuyên Khoa
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='banner-choose-item'>
                                        <img src="https://cdn.bookingcare.vn/fo/2021/12/08/133657-khamtuxa.png" alt="" />
                                    </div>
                                    Khám<br />
                                    từ xa
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='banner-choose-item'>
                                        <img src="https://cdn.bookingcare.vn/fo/2021/12/08/133744-khamtongquat.png" alt="" />
                                    </div>
                                    Khám<br />
                                    tổng quá
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='banner-choose-item'>
                                        <img src="https://cdn.bookingcare.vn/fo/2021/12/08/133744-dichvuxetnghiem.png" alt="" />

                                    </div>
                                    Xét nghiệm<br />
                                    y học
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='banner-choose-item'>
                                        <img src="https://cdn.bookingcare.vn/fo/2021/12/08/133744-suckhoetinhthan.png" alt="" />

                                    </div>
                                    Sức khỏe<br />
                                    tinh thần
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='banner-choose-item'>
                                        <img src="https://cdn.bookingcare.vn/fo/2022/05/19/104635-khamnhakhoa.png" alt="" />

                                    </div>
                                    Khám<br />
                                    nha khoa
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='banner-choose-item'>
                                        <img src="https://cdn.bookingcare.vn/fo/2022/05/16/151930-phau-thuat.jpg" alt="" />

                                    </div>
                                    Gói<br />
                                    phẫu thuật
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='banner-choose-item'>
                                        <img src="https://cdn.bookingcare.vn/fo/2021/12/08/133744-khamtainha.png" alt="" />

                                    </div>
                                    Sản phẩm<br />
                                    y tế
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='banner-choose-item'>
                                        <img src="https://cdn.bookingcare.vn/fo/2022/07/29/101157-icon-lich-su.jpg" alt="" />

                                    </div>
                                    Sức khỏe<br />
                                    Doanh Nghiệp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
