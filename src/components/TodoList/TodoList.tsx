import type { FC, FormEventHandler } from 'react'
import { useEffect, useState } from 'react'

import type { TodosQuery } from '@/generated/request'
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useTodosQuery,
  useUpdateTodoMutation,
} from '@/generated/request'

export const TodoList: FC = () => {
  const [todoTitle, setTodoTitle] = useState('')
  const [todos, setTodos] = useState<TodosQuery['todos']>([])
  const { loading, error, data, refetch } = useTodosQuery()
  const [addTodoMutation, addTodoMutationResult] = useAddTodoMutation()
  const [updateTodoMutation] = useUpdateTodoMutation()
  const [deleteTodoMutation] = useDeleteTodoMutation()
  useEffect(() => {
    setTodos(data?.todos ?? [])
  }, [data?.todos])

  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>error</div>
  }
  if (!data?.todos) {
    return null
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const { data } = await addTodoMutation({ variables: { title: todoTitle } })
    const addedTodo = data?.addTodo
    if (!addedTodo) {
      return
    }
    setTodos([addedTodo, ...todos])
    setTodoTitle('')
    await refetch()
  }

  const handleChange = async (todoId: string, completed: boolean) => {
    const { data } = await updateTodoMutation({
      variables: { todoId, completed },
    })
    const todo = data?.updateTodo
    if (!todo) {
      return
    }
    const updatedTodos = todos.map((t) => (t?.id === todo.id ? todo : t))
    setTodos(updatedTodos)
  }

  const handleDelete = async (todoId: string) => {
    const isOk = confirm('Are you sure to delete this?')
    if (!isOk) {
      return
    }
    const { data } = await deleteTodoMutation({ variables: { todoId } })
    const todo = data?.deleteTodo
    if (!todo) {
      return
    }
    const deletedTodos = todos.filter((t) => t?.id !== todoId)
    setTodos(deletedTodos)
  }

  return (
    <div className="p-5 border rounded">
      Todo List
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className="p-2 border"
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        ></input>
        <button className="btn btn-primary">Add</button>
      </form>
      <ul className="mt-5">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={`${todo.completed && 'line-through'}`}>
              <span>
                {todo.completed ? '✅' : '👀'} {todo.title}
              </span>
              <input
                className="cursor-pointer"
                type="checkbox"
                checked={todo.completed ?? false}
                onChange={(e) => handleChange(todo.id, e.target.checked)}
              />
              <span> / </span>
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(todo.id)}
              >
                🗑️
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
