import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import GlobalServices from './pages/GlobalServices.jsx'
import KnowledgeBank from './pages/KnowledgeBank.jsx'
import Calculators from './pages/Calculators.jsx'
import Blogs from './pages/Blogs.jsx'
import Forms from './pages/Forms.jsx'
import Bulletins from './pages/Bulletins.jsx'
import Careers from './pages/Careers.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import Users from './pages/Users.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='service' element={<Services/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='global-services' element={<GlobalServices/>}/>
      <Route path='knowledge-bank' element={<KnowledgeBank/>}/>
      <Route path='calculators' element={<Calculators/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='forms' element={<Forms/>}/>
      <Route path='bulletins' element={<Bulletins/>}/>
      <Route path='careers' element={<Careers/>}/>
      <Route path='signin' element={<Login/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
