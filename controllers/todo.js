let todos = []

exports.get_todo = (req, res) => {
    res.render('todo', { todos: todos,})
}
exports.post_todo = (req, res) => {
    let content = {
        todos: todos
    }

    let biggestId= 0
    
    let list = req.body

    todos.forEach(list => {
        if(list.id > biggestId)
        {
            biggestId = list.id
        }
    })

    list.id = biggestId + 1

    todos.push(list)
    console.log(list)
    res.render('todo', content)
}

exports.get_update = (req, res) => {
    let list = todos.find(list => {
        if(list.id == req.params.id)
        {
            return list
        }
    })
    res.render('update', {list: list})
}

exports.post_update = (req, res) => {
    let update = {
        todos: todos
        }
        const list = todos.find(list => {
            if(list.id == req.params.id) {
                return list
            }
        })
    list.title = req.body.title
    list.description = req.body.description
    res.render('todo', update)
}

exports.get_delete = (req, res) => {
    let del = {
        todos: todos
    }
    todos = todos.filter(list => {
        if(list.id != req.params.id)
        {
            return list
        }
    })
    del.todos = todos
    res.render('todo', del)
}