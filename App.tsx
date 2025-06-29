import { TodoProvider } from './context/TodoContext';
import { FilterProvider } from './context/FilterContext';
import { ThemeProvider } from './context/ThemeContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <div className="app-container">
            <h1>To Do App (Context API)</h1>
            <br></br>
            <ThemeToggleButton />
            <TodoInput />
            <FilterButtons />
            <TodoList />
          </div>
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;

