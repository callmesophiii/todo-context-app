import { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

const TodoInput = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
