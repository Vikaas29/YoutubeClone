import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Navigation } from './components/navigationMenu'
import { VideoCardHolder } from './components/videoCardHolder'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store={appStore}>
     <Outlet></Outlet>
     </Provider>
     
    </>
  )
}

export default App
