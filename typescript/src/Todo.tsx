
interface TodoType{
    title: string,
    description: string,
    done: boolean
}

interface TodoInput {
    todo: TodoType
}

const Todo = ({todo} : TodoInput) => {
  return (
    <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
    </div>
  )
}

export default Todo