const fs = require('fs')
const { Command } = require('commander')

const program = new Command()
const file = 'todos.json'

program
    .name('fs-todo-cli')
    .description('Filesystem based todo list cli')
    .version('0.3.0')

program.command('add')
    .description('add todo')
    .argument('<todo>', 'task to be added in todos: ')
    .action(function (todo){
        
        // get the data and convert to js object from json
        const data = fs.readFileSync(file, 'utf-8')
        const todos = JSON.parse(data)

        console.log(todos)

        // push or add the new todo
        todos.push({
            task: todo,
            done: false
        })
        
        // nwrite the whole new todos back to json
        fs.writeFileSync(file, JSON.stringify(todos, null, 2))
        console.log('Todo added!')
    })

program.command('done')
    .description('mark specific todo as done')
    .argument('<index>', 'task to be updated: ')
    .action(function (index){
        
        // get the data and convert to js object from json
        const data = fs.readFileSync(file, 'utf-8')
        const todos = JSON.parse(data)

        console.log(todos)
        index = index -1
        // push or add the new todo
        todos[index].done = true
        
        // nwrite the whole new todos back to json
        fs.writeFileSync(file, JSON.stringify(todos, null, 2))
        console.log('Todo marked as done')
    })


program.command('delete')
    .description('delete task in todo')
    .argument('<index>', 'index of the task to be deleted in todos: ')
    .action(function (index){
        const data = fs.readFileSync(file, 'utf-8')
        const todos = JSON.parse(data)

        index = index - 1
        todos.splice(index, 1)
        fs.writeFileSync(file, JSON.stringify(todos, null, 2))
        console.log('Todo deleted!')
    })

program.command('view')
    .description('view all todos: ')
    .action(function(){
        const data = fs.readFileSync(file, 'utf-8')
        const todos = JSON.parse(data)

        console.log(todos)
        // as it's a js object so we are using foreach function
        todos.forEach((t, i) => {
            console.log(`${i+1}. ${t.task} : [${t.done ? 'done' : 'not done'}]`)
        });
    })

    program.parse()