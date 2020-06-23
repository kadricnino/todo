const express = require('express')
      , users_controller = require('../controllers/index')
      , todo_controller = require('../controllers/todo')
      , router = express.Router()

// index page - homepage
router.get('/', users_controller.get_home)
      .post('/', users_controller.get_users)

// login page 
router.get('/login', users_controller.get_login)
      .post('/login', users_controller.check_users)

//user page
router.get('/user', todo_controller.get_todo)
      .post('/user', todo_controller.post_todo)

//update
router.get('/update/:id', todo_controller.get_update)
      .post('/update/:id', todo_controller.post_update)

//delete
router.get('/delete/:id', todo_controller.get_delete)

module.exports = router;