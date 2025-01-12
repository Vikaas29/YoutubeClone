import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Header } from './components/header.jsx';
import { LandingPage } from './components/LandingPage.jsx';
import { SignUp } from './components/SignUp.jsx';
import { Login } from './components/Login.jsx';
import { VideoPlayerPage } from './components/VideoPlayerPage.jsx';
import { AdminPage } from './components/AdminPage.jsx';
import { UserPage } from './components/UserPage.jsx';


const appRouter=createBrowserRouter([
    {
        path:"/",
    element: <App/>,
    children : [
      {
        path:"/",
        element:<LandingPage></LandingPage>,
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/video/:id",
        element:<VideoPlayerPage></VideoPlayerPage>
      },
      {
        path:"/mainadmin",
        element:<AdminPage></AdminPage>
      },
      {
        path:"/userpage",
        element:<UserPage></UserPage>
      }

    ]
    }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={appRouter}/>
 ,
)
