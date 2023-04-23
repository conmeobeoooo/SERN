import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userSevice';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        try {
            let res = await getAllCodeService('gender')
            if (res && res.errCode === 0) {
                this.setState({
                    genderArr: res.data
                })
            }
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        console.log('check state', this.state);
        let genders = this.state.genderArr
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

                            <select id="inputState" class="form-control">
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
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-3 mb-4">
                            <label htmlFor="">Position</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-3 mb-5">
                            <label htmlFor="">Image</label>
                            <input type="text" className='form-control' />
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
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
