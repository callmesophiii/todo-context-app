import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const TodoItem = ({ todo }: { todo: { id: number; text: string; completed: boolean } }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      />
      <span>{todo.text}</span>
      <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>Delete</button>
    </div>
  );
};

export default TodoItem;
