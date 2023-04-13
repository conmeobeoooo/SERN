import db from '../models/index'
import CRUDService from '../service/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    }
    catch (e) {
        console.log(e);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getProductPage = (req, res) => {
    return res.render('test/product.ejs')
}

let getHaderPage = (req, res) => {
    return res.render('header/header.ejs')
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createUser(req.body)
    console.log('message', message);
    return res.send('post crud form server')
}


// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getProductPage: getProductPage,
    getHaderPage: getHaderPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}
