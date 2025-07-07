import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import FilterContext from '../context/FilterContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      {filteredTodos.length > 0 ? (
        filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>Nothing yet! Add one 👆</p>
      )}
    </div>
  );
};

export default TodoList;
