import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions"
import './TableReduxUser.scss'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                userRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser(user) {
        this.props.deleteAUserRedux(user.id)
    }

    render() {
        console.log('check list user', this.props.listUsers);
        console.log('check check state', this.state.userRedux);
        let arrUser = this.state.userRedux
        return (
            <div className="users-container">
                <table id="customers" className='text-center'>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Phonenumber</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>RoleID</th>
                        <th>Position</th>
                        <th colSpan={2}>Option</th>
                    </tr>
                    {
                        arrUser && arrUser.length > 0 &&
                        arrUser.map((user, index) => {
                            return (
                                <tr className=''>
                                    <td>{user.email}</td>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.phonenumber}</td>
                                    <td>{user.address}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.roleId}</td>
                                    <td>{user.positionId}</td>
                                    <td>
                                        <button className='btn-edit'><i className="fa-solid fa-user-pen"></i></button>
                                    </td>
                                    <td>
                                        <button className='btn-delete'
                                            onClick={() => this.handleDeleteUser(user)}
                                        ><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </table>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
