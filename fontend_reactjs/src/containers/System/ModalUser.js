import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: ''
        }
    }

    componentDidMount() {
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    checkValideInput = () => {
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

    handleAddNewUser = () => {
        let isValid = this.checkValideInput()
        if (isValid === true) {
            console.log('check props ', this.props);
            this.props.createNewUser(this.state, 'abc')
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
                <ModalHeader className='modal-header' toggle={() => this.toggle()}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="modal-body">
                        <div className="input-container">
                            <label htmlFor="">Email</label>
                            <input type="text" onChange={(event) => this.handleOnChangeInput(event, 'email')} value={this.state.email} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Password</label>
                            <input type="text" onChange={(event) => this.handleOnChangeInput(event, 'password')} value={this.state.password} />
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
                    <Button color="primary" className='px-3' onClick={() => this.handleAddNewUser()}>
                        Add new user
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
