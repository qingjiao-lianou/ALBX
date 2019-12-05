const express = require('express')
const pagesController = require('./controllers/pagesController')
const userController = require('./controllers/userController')
var router = express.Router()


// 添加路由配置
//  前台页面
router.get('/', pagesController.getIndex)
    .get('/detail', pagesController.getDetail)
    .get('/list', pagesController.getList)
    //  后台页面
    .get('/admin', pagesController.getAdminIndex)
    .get('/admin/categories', pagesController.getAdminCategories)
    .get('/admin/comments', pagesController.getAdminComments)
    .get('/admin/login', pagesController.getAdminLogin)
    .get('/admin/nav-menus', pagesController.getAdminNavMenus)
    .get('/admin/password-reset', pagesController.getAdminPasswordReset)
    .get('/admin/post-add', pagesController.getAdminPostAdd)
    .get('/admin/posts', pagesController.getAdminPosts)
    .get('/admin/profile', pagesController.getAdminProfile)
    .get('/admin/settings', pagesController.getAdminSettings)
    .get('/admin/slides', pagesController.getAdminSlides)
    .get('/admin/users', pagesController.getAdminUsers)
    // 业务逻辑请求
    .post('/login',userController.login)

module.exports = router