import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash'
class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: ''
        }
        this.listenToEmitter()
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phonenumber: ''
            })
        })
    }

    componentDidMount() {
        let user = this.props.currentUser
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hardcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phonenumber: user.phonenumber
            })
        }
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    checkvalidateInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phonenumber']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("hay nhap " + arrInput[i])
                break
            }
        }
        return isValid
    }

    handleSaveUser = () => {
        let isValid = this.checkvalidateInput()
        if (isValid === true) {
            this.props.editUser(this.state)
        }
    }

    toggle = () => {
        this.props.toggleFromParent()
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className='modal-container'
                size='lg'
            >
                <ModalHeader className='modal-header' toggle={() => this.toggle()}>Edit a user</ModalHeader>
                <ModalBody>
                    <div className="modal-body">
                        <div className="input-container">
                            <label htmlFor="">Email</label>
                            <input type="text" onChange={(event) => this.handleOnChangeInput(event, 'email')} value={this.state.email} disabled />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Password</label>
                            <input type="password" onChange={(event) => this.handleOnChangeInput(event, 'password')} value={this.state.password} disabled />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">First Name</label>
                            <input type="text" onChange={(event) => this.handleOnChangeInput(event, 'firstName')} value={this.state.firstName} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Last Name</label>
                            <input type="text" onChange={(event) => this.handleOnChangeInput(event, 'lastName')} value={this.state.lastName} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Address</label>
                            <input type="text" onChange={(event) => this.handleOnChangeInput(event, 'address')} value={this.state.address} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Phonenumber</label>
                            <input type="text" onChange={(event) => this.handleOnChangeInput(event, 'phonenumber')} value={this.state.phonenumber} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.handleSaveUser()}>
                        Save change
                    </Button>{' '}
                    <Button color="secondary" className='px-3 btn-modal' onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
