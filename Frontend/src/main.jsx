import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'
import AddStudent from './pages/AddStudent.jsx'
import EditStudent from './pages/EditStudent.jsx'


const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/admindashboard',
      element: <AdminDashboard/>
    },
    {
      path: '/studentdashboard',
      element: <StudentDashboard/>
    },
    {
      path: '/addstudent',
      element: <AddStudent/>
    },
    {
      path: '/editstudent',
      element: <EditStudent/>
    }
])
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
