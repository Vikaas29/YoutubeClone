import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Error } from './components/Error.jsx';
import { lazy,Suspense } from 'react'

let LandingPage= lazy(()=> import('./components/LandingPage.jsx') );
let SignUp= lazy(()=> import('./components/SignUp.jsx') );
let Login= lazy(()=> import('./components/Login.jsx') );
let VideoPlayerPage=lazy(()=> import('./components/VideoPlayerPage.jsx') );
let AdminPage=lazy(()=> import('./components/AdminPage.jsx') );
let UserPage=lazy(()=>import('./components/UserPage.jsx'));
let CreateChannel=lazy(()=>import('./components/CreateChannel.jsx'));
let AddVideo=lazy(()=>import('./components/AddVideo.jsx'));

const appRouter=createBrowserRouter([
    {
        path:"/",
    element: <App/>,
    children : [
      {
        path:"/",
        element:<Suspense fallback={<div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src="/UI/loading.png" alt="" className="loading" />
          </div>}><LandingPage></LandingPage></Suspense>,
      },
      {
        path:"/signup",
        element:<Suspense fallback={<div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src="/UI/loading.png" alt="" className="loading" />
          </div>}><SignUp></SignUp></Suspense>
      },
      {
        path:"/login",
        element:<Suspense fallback={<div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src="/UI/loading.png" alt="" className="loading" />
          </div>}><Login></Login></Suspense>
      },
      {
        path:"/video/:id",
        element:<Suspense fallback={<div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src="/UI/loading.png" alt="" className="loading" />
          </div>}><VideoPlayerPage></VideoPlayerPage></Suspense>
      },
      {
        path:"/mainadmin",
        element:<Suspense fallback={<div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src="/UI/loading.png" alt="" className="loading" />
          </div>}><AdminPage></AdminPage></Suspense>
      },
      {
        path:"/userpage",
        element:<Suspense fallback={<div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src="/UI/loading.png" alt="" className="loading" />
          </div>}><UserPage></UserPage></Suspense>
      },
      {
        path:"/createchannel",
        element:<Suspense fallback={<div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src="/UI/loading.png" alt="" className="loading" />
          </div>}><CreateChannel></CreateChannel></Suspense>
      },
      {
        path:"/addvideo",
        element:<Suspense fallback={<div className="w-[100%] h-[100vh] flex justify-center items-center">
          <img src="/UI/loading.png" alt="" className="loading" />
          </div>}><AddVideo></AddVideo></Suspense>
      }

    ],
    errorElement:<Error></Error>
    }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={appRouter}/>
 ,
)
