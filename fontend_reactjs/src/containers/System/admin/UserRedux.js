import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userSevice';
import * as actions from "../../../store/actions"
import './UserRedux.scss'
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImg: ''
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getPositionStart()
        this.props.getRoleStart()
    }

    componentDidUpdate(pervProps, prevState, snapshot) {
        if (pervProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (pervProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (pervProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }

    handleOnChangeImage = (e) => {
        let data = e.target.files
        let file = data[0]
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImg: objectUrl
            })
        }
    }
    render() {
        console.log('check poprs', this.state);
        let genders = this.state.genderArr
        let positions = this.state.positionArr
        let roles = this.state.roleArr
        let loadingGender = this.props.isLoadingGender
        return (
            <div className="users-container">

                <div className="user-table mt-4 mx-4">
                    <div className='mb-2'>
                        <button className='btn btn-primary px-4'
                        ><i className="fa-regular fa-plus"></i>Add new user</button>
                    </div>
                </div>
                <div className="container">
                    <h1 className='title col-12'>Thêm mới người dùng</h1>
                    <div>{loadingGender === true ? 'loading gender' : ''}</div>
                    <div className="row">
                        <div className="col-6 mb-4">
                            <label htmlFor="">Email</label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">firstName</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">lastName</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">Phonenumber</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">Address</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-3 mb-4">
                            <label htmlFor="">Gender</label>

                            <select id="inputState" class="form-select">
                                {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option key={index}>{item.valueVi}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="col-3 mb-4">
                            <label htmlFor="">RoleID</label>
                            <select id="inputState" class="form-select">
                                {roles && roles.length > 0 &&
                                    roles.map((item, index) => {
                                        return (
                                            <option key={index}>{item.valueVi}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="col-3 mb-4">
                            <label htmlFor="">Position</label>
                            <select id="inputState" class="form-select">
                                {positions && positions.length > 0 &&
                                    positions.map((item, index) => {
                                        return (
                                            <option key={index}>{item.valueVi}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="col-3 upload-avatar">
                            <label htmlFor="">Ảnh đại diện</label>
                            <div>
                                <input type="file" id='previewImg' hidden
                                    onChange={(e) => this.handleOnChangeImage(e)}
                                />
                                <label className='btn-upload' htmlFor="previewImg">Tải ảnh <i className='fa fa-upload'></i> </label>
                                <div className="previewAvatar"
                                    style={{ backgroundImage: `url(${this.state.previewImg})` }}
                                >
                                </div>
                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <button className='btn btn-primary px-4' type='submit'>Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())
        // processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
