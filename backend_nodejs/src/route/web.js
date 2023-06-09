import express from "express";
import homeController from "../controllers/homeController";
import userController from '../controllers/userController'
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/product', homeController.getProductPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/api/login', userController.handleLogin);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.get('/allcode', userController.getAllCode);
    return app.use("/", router);
}

module.exports = initWebRoutes;