class Todo{
    constructor(){
        this.todos = []
    }

    add(t){
        this.todos.push(t)
    }

    remove(indexOfTodo){
        this.todos.splice(indexOfTodo, 1)
    }

    update(i, updatedTodo){
        if(i < 0 || i >= this.todos.length){
            return;
        }

        this.todos[i] = updatedTodo
    }

    getAll(){
        console.log(this.todos)
        return this.todos
    }

    get(indexOfTodo){
        if(indexOfTodo < 0 || indexOfTodo >= this.todos.length){
            return;
        }

        return this.todos[indexOfTodo]
    }

    clear(){
        this.todos = []
    }
}

const todoList = new Todo()

todoList.add('1. Go to the gym')
todoList.add('2. Complete js assignments fast')

let res1 = todoList.get(2)
let res2 = todoList.get(1)
let res3 = todoList.getAll()
console.log(res1, res2, res3)
todoList.remove(1)
todoList.getAll()

todoList.update(0, 'Fuck around and Find out!')
todoList.getAll()

todoList.clear()
todoList.getAll()