import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

const FilterButtons = () => {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        All
      </button>
      <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
        Active
      </button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
