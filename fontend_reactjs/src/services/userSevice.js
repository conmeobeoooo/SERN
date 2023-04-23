import axios from '../axios'


const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUser = (userID) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userID
        }
    })
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/allcode?type=${inputType}`)
}

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUser,
    editUserService,
    getAllCodeService
}