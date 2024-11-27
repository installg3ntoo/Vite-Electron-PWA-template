import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import AppRoutes from '@routes/AppRoutes'


const isElectron = import.meta.env.VITE_REACT_APP_ENV === 'electron';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isElectron ? (
      <HashRouter>
        <ErrorBoundary fallback={<p>Something went wrong. Try again later.</p>}>
            <AppRoutes />
        </ErrorBoundary>
      </HashRouter>
    ) : (
      <BrowserRouter>
        <ErrorBoundary fallback={<p>Something went wrong. Try again later.</p>}>
            <AppRoutes />
        </ErrorBoundary>
      </BrowserRouter>
    )}
  </React.StrictMode>,
)
