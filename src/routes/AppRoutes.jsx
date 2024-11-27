import { Routes, Route } from 'react-router-dom'
import TestPage from '@pages/TestPage/TestPage'


function Path () {
    return <h1>404 Not Found</h1>
}

function AppRoutes () {

    const TESTPAGE_ROUTE = import.meta.env.VITE_TESTPAGE_ROUTE


    return (
      <Routes>
        <Route
        path={TESTPAGE_ROUTE}
        element={
            <TestPage />
        }
        />
        <Route path='*' element={<Path />} />
      </Routes>
    )
}

export default AppRoutes
