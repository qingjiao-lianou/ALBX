// 这个模块主要用于返回用户所请求的页面

// 约定：所有的后台页面请求都添加/admin
// 前台页面
exports.getIndex = (req, res) => {
    res.render('index.ejs')
}

exports.getDetail = (req, res) => {
    res.render('detail.ejs')
}

exports.getList = (req, res) => {
    res.render('list.ejs')
}
// 后台管理页面
exports.getAdminCategories = (req, res) => {
    res.render('admin/categories.ejs')
}

exports.getAdminComments = (req, res) => {
    res.render('admin/comments.ejs')
}

exports.getAdminIndex = (req, res) => {
    res.render('admin/index.ejs')
}

exports.getAdminLogin = (req, res) => {
    res.render('admin/login.ejs')
}

exports.getAdminNavMenus = (req, res) => {
    res.render('admin/nav-menus.ejs')
}

exports.getAdminPasswordReset = (req, res) => {
    res.render('admin/password-reset.ejs')
}

exports.getAdminPostAdd = (req, res) => {
    res.render('admin/post-add.ejs')
}

exports.getAdminPosts = (req, res) => {
    res.render('admin/posts.ejs')
}

exports.getAdminProfile = (req, res) => {
    res.render('admin/profile.ejs')
}

exports.getAdminSettings = (req, res) => {
    res.render('admin/settings.ejs')
}

exports.getAdminSlides = (req, res) => {
    res.render('admin/slides.ejs')
}

exports.getAdminUsers = (req, res) => {
    res.render('admin/users.ejs')
}


