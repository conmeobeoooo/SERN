import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, createNewUserService } from '../../services/userSevice'
import './UserManage.scss'
import ModalUser from './ModalUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false
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
            }
        } catch (e) {
            console.log(e);
        }
        console.log('check data', data);
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
                <div className='text-center title'>Manage user</div>
                <div className="user-table mt-4 mx-4">
                    <div className='mb-2'>
                        <button className='btn btn-primary px-4'
                            onClick={() => this.handleAddNewUser()}
                        ><i className="fa-regular fa-plus"></i>Add new user</button>
                    </div>
                    <table id="customers" className='text-center'>
                        <tr>
                            <th>ID</th>
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
                                        <td>{user.id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.phonenumber}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className="fa-solid fa-user-pen"></i></button>
                                        </td>
                                        <td>
                                            <button className='btn-delete'><i className="fa-solid fa-trash"></i></button>
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
