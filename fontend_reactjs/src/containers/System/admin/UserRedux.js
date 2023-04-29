import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userSevice';
import * as actions from "../../../store/actions"
import { CRUD_ACTION } from '../../../utils'
import './UserRedux.scss'
import TableReduxUser from './TableReduxUser';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImg: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phonenumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
            action: '',
            id: ''
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getPositionStart()
        this.props.getRoleStart()
    }

    componentDidUpdate(pervProps, prevState, snapshot) {
        if (pervProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if (pervProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : ''
            })
        }
        if (pervProps.roleRedux !== this.props.roleRedux) {
            let arrRole = this.props.roleRedux
            this.setState({
                roleArr: arrRole,
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : ''
            })
        }
        if (pervProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux
            let arrPositions = this.props.positionRedux
            let arrRole = this.props.roleRedux
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phonenumber: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : '',
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : '',
                avatar: '',
                action: CRUD_ACTION.CREATE
            })
        }
    }


    changeLanguage = (language) => {
        this.props.changeLanguageAdminRedux(language)
    }

    handleOnChangeImage = (e) => {
        let data = e.target.files
        let file = data[0]
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImg: objectUrl,
                avatar: file
            })
        }
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return;
        // this.setState({
        //     ...this.state,
        //     isUserCreate: false
        // })

        let { action } = this.state



        if (action === CRUD_ACTION.CREATE) {
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phonenumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                // avatar: this.state.avatar
            })
        }
        if (action === CRUD_ACTION.EDIT) {
            this.props.editUserRedux({
                id: this.state.id,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phonenumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                // avatar: this.state.avatar
            })
        }
    }

    checkValidateInput = () => {
        let isValid = true
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phonenumber', 'address']

        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('hãy nhập ' + arrCheck[i]);
                break
            }
        }
        return isValid

    }

    onChangeInput = (e, id) => {
        let copyState = { ...this.state }

        copyState[id] = e.target.value
        this.setState({
            ...copyState
        })
    }

    handleEditUserFromParent = (user) => {
        console.log('check data: ', user);
        this.setState({
            email: user.email,
            password: 'hardcode',
            firstName: user.firstName,
            lastName: user.lastName,
            phonenumber: user.phonenumber,
            address: user.address,
            gender: user.gender,
            position: user.positionId,
            role: user.roleId,
            action: CRUD_ACTION.EDIT,
            id: user.id
        })
    }


    render() {
        let genders = this.state.genderArr
        let positions = this.state.positionArr
        let roles = this.state.roleArr
        let loadingGender = this.props.isLoadingGender
        let { email, password, firstName, lastName, phonenumber, address, gender, position, role, avatar } = this.state;
        return (
            <div className="users-container">
                <div className="container">
                    <h1 className='title col-12'>Thêm mới người dùng</h1>
                    <div>{loadingGender === true ? 'loading gender' : ''}</div>
                    <div className="row">
                        <div className="col-6 mb-4">
                            <label htmlFor="">Email</label>
                            <input className="form-control" type="email"
                                value={email}
                                onChange={(e) => { this.onChangeInput(e, "email") }}
                            />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">Password</label>
                            <input className="form-control" type="password"
                                value={password}
                                onChange={(e) => this.onChangeInput(e, "password")}
                            />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">firstName</label>
                            <input className="form-control" type="text"
                                value={firstName}
                                onChange={(e) => this.onChangeInput(e, "firstName")}
                            />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">lastName</label>
                            <input className="form-control" type="text"
                                value={lastName}
                                onChange={(e) => this.onChangeInput(e, "lastName")}
                            />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">phonenumber</label>
                            <input className="form-control" type="text"
                                value={phonenumber}
                                onChange={(e) => this.onChangeInput(e, "phonenumber")}
                            />
                        </div>
                        <div className="col-6 mb-4">
                            <label htmlFor="">Address</label>
                            <input className="form-control" type="text"
                                value={address}
                                onChange={(e) => this.onChangeInput(e, "address")}
                            />
                        </div>
                        <div className="col-3 mb-4">
                            <label htmlFor="">gender</label>

                            <select id="inputState" class="form-select"
                                value={gender}
                                onChange={(e) => this.onChangeInput(e, "gender")}
                            >
                                {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option value={item.key} key={index}>{item.valueVi}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="col-3 mb-4">
                            <label htmlFor="">RoleID</label>
                            <select id="inputState" class="form-select"
                                value={role}
                                onChange={(e) => this.onChangeInput(e, "role")}
                            >
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
                            <select id="inputState" class="form-select"
                                value={position}
                                onChange={(e) => this.onChangeInput(e, "position")}
                            >
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
                            <button onClick={() => this.handleAddNewUser()} className={this.state.action === CRUD_ACTION.EDIT ? 'btn btn-warning px-4' :

                                'btn btn-primary px-4'} type='submit'>{this.state.action === CRUD_ACTION.EDIT
                                    ? <FormattedMessage id="manage-user.edit" /> : <FormattedMessage id="manage-user.save" />
                                }</button>
                        </div>
                    </div>
                    <TableReduxUser className="mb-5"
                        action={this.state.action}
                        handleEditUserFromParent={this.handleEditUserFromParent} />
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
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        // processLogout: () => dispatch(actions.processLogout()),
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        editUserRedux: (data) => dispatch(actions.editUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
