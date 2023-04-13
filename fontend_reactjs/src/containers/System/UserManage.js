import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, createNewUserService, deleteUser, editUserService } from '../../services/userSevice'
import './UserManage.scss'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';
import { Alert } from 'reactstrap';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
            isOpenEditModal: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact()
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            }
            else {
                await this.getAllUsersFromReact()
                this.setState({
                    isOpenModal: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUser(user.id)
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact()
            }
        } catch (e) {
            alert('error message', e)
        }
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenEditModal: true,
            userEdit: user
        })
    }

    toggleEditUserModal = (user) => {
        this.setState({
            isOpenEditModal: !this.state.isOpenEditModal,
        })
    }

    doEditUser = async (user) => {
        try {
            let res = await editUserService(user)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenEditModal: false
                })
                this.getAllUsersFromReact()
            }
            else {
                alert(res.errCode)
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenEditModal &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditModal}
                        toggleFromParent={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }
                <div className='text-center title'>Manage user</div>
                <div className="user-table mt-4 mx-4">
                    <div className='mb-2'>
                        <button className='btn btn-primary px-4'
                            onClick={() => this.handleAddNewUser()}
                        ><i className="fa-regular fa-plus"></i>Add new user</button>
                    </div>
                    <table id="customers" className='text-center'>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phonenumber</th>
                            <th>Address</th>
                            <th colSpan={2}>Option</th>
                        </tr>
                        {
                            arrUsers && arrUsers.map((user, index) => {
                                return (
                                    <tr className='' key={index}>
                                        <td>{user.email}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.phonenumber}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <button onClick={() => this.handleEditUser(user)} className='btn-edit'><i className="fa-solid fa-user-pen"></i></button>
                                        </td>
                                        <td>
                                            <button onClick={() => this.handleDeleteUser(user)} className='btn-delete'><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
