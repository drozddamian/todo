import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<string>('')

  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTodo(value)
  }

  const handleAddTodo = () => {
    dispatch(addTodo(todo))
    setTodo('')
  }

  return (
    <div>
      <input
        onChange={updateInput}
        value={todo}
      />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo
