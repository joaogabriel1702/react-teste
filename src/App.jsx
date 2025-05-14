import { useState } from "react";
import styles from './App.module.css'
import TodoItem from './components/TodoItem'

function App() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Aprender React', completed: false},
        {id: 2, text: 'te vira boy', completed: true},
    ])
    const [newTodo, setNewTodo] = useState('')
    
    //adicionar uma nova tarefa
    const addTodo = () => {
        if(newTodo.trim()){
            setTodos([...todos, {
                id: Date.now(),
                text: newTodo,
                completed: false
            }])
            setNewTodo('')
        }
    }

    //excluir tarefa
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //alternar status da tarefa
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
    }
}
