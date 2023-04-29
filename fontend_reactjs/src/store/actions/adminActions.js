import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, deleteUser, editUserService } from '../../services/userSevice';
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService('gender')
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            }
            else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('error', e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SECCESS,
    data: genderData,
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SECCESS,
    data: positionData,
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SECCESS,
    data: roleData,
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService('position')
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            }
            else {
                dispatch(fetchPositionFailed())
            }
        } catch (e) {
            dispatch(fetchPositionFailed())
            console.log('error', e);
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService('role')
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            }
            else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed())
            console.log('error', e);
        }
    }
}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode === 0) {
                dispatch(saveUserSuccess())
                toast.success("Tạo mới người dùng thành công");
                dispatch(fetchAllUserStart())
            }
            else {
                dispatch(saveUserFailed())
                toast.error("lỗi thêm người dùng hoặc email đã tồn tại");
            }
        } catch (e) {
            toast.error('loi');
            dispatch(saveUserFailed())
            console.log('error', e);
        }
    }
}

export const saveUserSuccess = () => ({
    type: 'CREATE_USER_SUCCESS'
})

export const saveUserFailed = () => ({
    type: 'CREATE_USER_FAILED'
})

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllUsers('ALL')
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()))
            }
            else {
                dispatch(fetchAllUserFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed())
            console.log('error', e);
        }
    }
}

export const fetchAllUserSuccess = (data) => ({
    type: 'FETCH_ALL_USER_SUCCESS',
    users: data
})

export const fetchAllUserFailed = () => ({
    type: 'FETCH_ALL_USER_FAILED'
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUser(userId)
            if (res && res.errCode === 0) {
                dispatch(deleteUserSeccess())
                toast.success("Xóa người dùng thành công");
                dispatch(fetchAllUserStart())
            }
            else {
                dispatch(deleteUserFailed())
                toast.error("lỗi");
            }
        } catch (e) {
            toast.error("lỗi");
            dispatch(deleteUserFailed())
            console.log('error', e);
        }
    }
}

export const deleteUserSeccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,

})


export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data)
            if (res && res.errCode === 0) {
                dispatch(editUserSeccess())
                toast.success("Sửa người dùng thành công");
                dispatch(fetchAllUserStart())
            }
            else {
                dispatch(editUserFailed())
                toast.error("lỗi");
            }
        } catch (e) {
            toast.error("lỗi");
            dispatch(editUserFailed())
            console.log('error', e);
        }
    }
}

export const editUserSeccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS

})


export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})