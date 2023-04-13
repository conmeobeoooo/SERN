import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss'

class HomeHeader extends Component {

    render() {
        return (
            <div className='home-header-container'>
                <div className="home-header-content">
                    <div className="left-content">
                        <i class="fa-sharp fa-solid fa-bars"></i>
                        <div className="header-logo"></div>
                    </div>
                    <ul className="center-content">
                        <li>
                            <a href="#">Chuyên khoa<br />
                                <span>Tìm bác sĩ theo chuyên khoa</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">Cơ sở y tế<br />
                                <span>Chọn bệnh viện phòng khám</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">Bác sĩ<br />
                                <span>Chọn bác sĩ giỏi</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">Gói khám<br />
                                <span>Khám sức khỏe tổng quát</span>
                            </a>
                        </li>
                    </ul>
                    <div className="right-content">
                        <div>
                            <i class="fa-solid fa-circle-question"></i>
                            <span>Hỗ trợ</span>
                        </div>
                        <div className='flag'>VN</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
