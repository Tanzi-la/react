import Layout from './layout/Layout'
import Home from './Home'
import Contact from './Contact'
import { createBrowserRouter } from 'react-router-dom'


export const myrouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
           {
            path: '/',
            element: <Home/>
           },
           {
            path:'/contact',
            element: <Contact/>
           }
        ]
    }
])