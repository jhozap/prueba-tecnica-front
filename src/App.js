import React from 'react';
import AuthProvider from './provider/AuthProvider';
import AppRouter from './routers/AppRouter';

import './app.css';

const App = () => {
    return (
      <div className='contenedor'>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </div>
    )
  }

export default App;
