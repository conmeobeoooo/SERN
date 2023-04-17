import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Specialty.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Specialty extends Component {
    render() {
        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            slickprev: false
        };
        return (
            <div className='section-specialty'>
                <div className='specialty-content'>
                    <Slider {...settings}>
                        <div className='d-flex specialty-items'>
                            <a href="#">
                                <div className='specialty-item'>
                                    <img className='specialty-item-img' src="https://cdn.bookingcare.vn/fo/2022/08/16/141010-cds.png" alt="" />
                                    <label htmlFor="" className='v'>Mới ra mắt</label>
                                    <h2 className='specialty-item-title'>Giải pháp chuyển đổi số toàn diện cho bệnh viện, phòng khám</h2>
                                    <p className='specialty-item-des'>Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng di động và phần mềm quản trị, tích hợp 3 trong 1 nền tảng tiện ích dễ dùng</p>
                                    <div className='specialty-item-detail'>
                                        <p className='item-detail-title'>XEM CHI TIẾT</p>
                                        <i className="fa-solid fa-chevron-right item-detail-icon"></i>
                                    </div>
                                </div>
                            </a>
                            <div className='specialty-item'>
                                <a href="#">
                                    <img className='specialty-item-img' src="https://cdn.bookingcare.vn/fo/2023/04/03/134535-182448-goi-cham-soc-suc-khoa-tai-nha.jpg" alt="" />
                                    <label htmlFor="" className='v'>Dịch vụ</label>
                                    <h2 className='specialty-item-title'>Gói Chăm sóc Sức khỏe Tại nhà dành cho người Rối loạn chuyển hóa</h2>
                                    <p className='specialty-item-des'>Gói Chăm sóc sức khỏe tại nhà của BookingCare phù hợp cho các đối tượng có nhu cầu tầm soát và theo dõi điều trị Nội tiết</p>
                                    <div className='specialty-item-detail'>
                                        <p className='item-detail-title'>XEM CHI TIẾT</p>
                                        <i className="fa-solid fa-chevron-right item-detail-icon"></i>
                                    </div>
                                </a>
                            </div>
                            <div className='specialty-item'>
                                <a href="#">
                                    <img className='specialty-item-img' src="https://cdn.bookingcare.vn/fo/2023/03/07/120406-anh-khuyen-mai-pla.jpg" alt="" />
                                    <label htmlFor="" className='v'>Ưu đãi</label>

                                    <h2 className='specialty-item-title'>Trải nghiệm trị liệu Cơ xương khớp 199k tại Phòng khám Đông y Phúc Lâm An</h2>
                                    <p className='specialty-item-des'>Từ nay đến 22/05/2023, Phòng khám áp dụng ưu đãi Gói trải nghiệm trị liệu chỉ với 199k </p>
                                    <div className='specialty-item-detail'>
                                        <p className='item-detail-title'>XEM CHI TIẾT</p>
                                        <i className="fa-solid fa-chevron-right item-detail-icon"></i>
                                    </div>
                                </a>
                            </div>
                            <div className='specialty-item'>
                                <a href="#">
                                    <img className='specialty-item-img' src="https://cdn.bookingcare.vn/fo/2023/04/11/143126-anh-ctkm-proskin-thang-4.png" alt="" />
                                    <label htmlFor="" className='v'>Ưu đãi</label>
                                    <h2 className='specialty-item-title'>Tháng 4 bao la ưu đãi tại Phòng khám Chuyên khoa Da liễu PROSKIN</h2>
                                    <p className='specialty-item-des'>Trong tháng 4 này, PRO SKIN gửi đến quý khách hàng ưu đãi phí khám và liệu trình điều trị da liễu lên đến 15%.    </p>
                                    <div className='specialty-item-detail'>
                                        <p className='item-detail-title'>XEM CHI TIẾT</p>
                                        <i className="fa-solid fa-chevron-right item-detail-icon"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='d-flex specialty-items '>
                            <div className='specialty-item'>
                                <a href="">
                                    <img className='specialty-item-img' src="https://cdn.bookingcare.vn/fo/2022/12/09/085028-151705-uu-dai-benh-vien-bao-son.jpg" alt="" />
                                    <label htmlFor="" className='v'>Ưu đãi</label>
                                    <h2 className='specialty-item-title'>Khám tổng quát tháng 04 với ưu đãi đến 35% tại Bệnh viện Bảo Sơn</h2>
                                    <p className='specialty-item-des'>Khám tổng quát tháng 04 với ưu đãi đến 35% tại Bệnh viện Bảo Sơn</p>
                                    <div className='specialty-item-detail'>
                                        <p className='item-detail-title'>XEM CHI TIẾT</p>
                                        <i className="fa-solid fa-chevron-right item-detail-icon"></i>
                                    </div>
                                </a>
                            </div>
                            <div className='specialty-item'>
                                <a href="">
                                    <img className='specialty-item-img' src="https://cdn.bookingcare.vn/fo/2023/04/04/095732-ctkm-maia-thang-4.png" alt="" />
                                    <label htmlFor="" className='v'>Ưu đãi</label>
                                    <h2 className='specialty-item-title'>Điều trị da liễu chỉ từ 199k tại Phòng khám Chuyên khoa Da liễu Maia&Maia</h2>
                                    <p className='specialty-item-des'>Điều trị da liễu chỉ từ 199k tại Phòng khám Chuyên khoa Da liễu Maia&Maia</p>
                                    <div className='specialty-item-detail'>
                                        <p className='item-detail-title'>XEM CHI TIẾT</p>
                                        <i className="fa-solid fa-chevron-right item-detail-icon"></i>
                                    </div>
                                </a>
                            </div>
                            <div className='specialty-item'>
                                <a href="">
                                    <img className='specialty-item-img' src="https://cdn.bookingcare.vn/fo/2023/04/11/150038-ctkm-thang-4-thu-cuc.png" alt="" />
                                    <label htmlFor="" className='v'>Ưu đãi</label>
                                    <h2 className='specialty-item-title'>Siêu ưu đãi khám sức khỏe tháng 04/2023 tại Hệ thống Y tế Thu Cúc TCI</h2>
                                    <p className='specialty-item-des'>Hệ thống Y tế Thu Cúc TCI áp dụng hàng loạt các ưu đãi giảm giá gói khám và khám chuyên khoa</p>
                                    <div className='specialty-item-detail'>
                                        <p className='item-detail-title'>XEM CHI TIẾT</p>
                                        <i className="fa-solid fa-chevron-right item-detail-icon"></i>
                                    </div>
                                </a>
                            </div>
                            <div className='specialty-item'>
                                <a href="">
                                    <img className='specialty-item-img' src="https://cdn.bookingcare.vn/fo/2023/04/03/100606-ctkm-nha-khoa-van-anh.png" alt="" />
                                    <label htmlFor="" className='v'>Mới ra mắt</label>
                                    <h2 className='specialty-item-title'>Tặng Voucher 2 triệu đồng khám và chăm sóc răng tại Nha khoa Vân Anh</h2>
                                    <p className='specialty-item-des'>Trong tháng 4/2023, Khách hàng được nhận Voucher khám và lên liệu trình điều trị răng tại Nha khoa Vân Anh</p>
                                    <div className='specialty-item-detail'>
                                        <p className='item-detail-title'>XEM CHI TIẾT</p>
                                        <i className="fa-solid fa-chevron-right item-detail-icon"></i>
                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
