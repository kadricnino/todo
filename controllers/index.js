let data = []


//index page
exports.get_home = (req, res) => {
    res.render('index', { title: 'Let\'s To Do' })
}
exports.get_users = (req, res) => {
    data.push(req.body)
    console.log(data)
    res.render('login', { title: 'Let\'s To Do' })
}

//login page
exports.get_login = (req, res) => {
    res.render('login', { title: 'login' })
}
exports.check_users = (req, res) => {

    let td = req.body

    data.forEach(td => {
        if (td.email == data.email && td.password == data.password) {
            res.render('todo')
        }
        else {
            res.render('index')
        }
    })
    }