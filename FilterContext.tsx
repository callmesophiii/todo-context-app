import React, { createContext, type ReactNode, useState } from 'react';

type Filter = 'all' | 'active' | 'completed';

const FilterContext = createContext<{
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}>({ filter: 'all', setFilter: () => {} });

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
