import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

let createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordBcrypt = await hashPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })
            resolve('them thanh cong')
        }
        catch (e) {
            reject(e)
        }
    })
}

let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        }
        catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser: createUser
}