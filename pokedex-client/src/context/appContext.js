import React, { createContext } from 'react';

const Context = createContext(null);

function appContext({ children }) {
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
}

export { appContext, Context };
