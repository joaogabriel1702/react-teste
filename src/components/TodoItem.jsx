import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, onDelete, onToggle }) => {
    return(
        <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
            <input 
                type='checkbox'
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span>{todo.text}</span>
            <button
                onClick={ ()=> onDelete(todo.id)}
                className={styles.deleteButton}
            >
                <FaTrash />
            </button>
        </div>
    )
}

export default TodoItem