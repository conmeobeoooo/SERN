import userSevice from '../service/userService'
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'chua nhap du thong tin'
        })
    }
    let userData = await userSevice.handleUserLogin(email, password)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'loi',
            users: []
        })
    }
    let users = await userSevice.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        users
    })
}

let handleCreateNewUser = async (req, res) => {
    let message = await userSevice.createNewUser(req.body)
    return res.status(200).json(message)
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'hay truyen id'
        })
    }
    let message = await userSevice.deleteUser(req.body.id)
    return res.status(200).json(message)
}

let handleEditUser = async (req, res) => {
    let data = req.body
    let message = await userSevice.editUser(data)
    return res.status(200).json(message)
}
let getAllCode = async (req, res) => {
    try {
        let data = await userSevice.getAllCodeService(req.query.type);
        return res.status(200).json(data)
    } catch (e) {
        console.log('get all code error', e);
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Error from server'
        })
    }
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleDeleteUser: handleDeleteUser,
    handleEditUser: handleEditUser,
    getAllCode: getAllCode
}