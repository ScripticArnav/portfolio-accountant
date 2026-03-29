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

import Rules from './pages/knowledgeBank/Rules.jsx'
import Acts from './pages/knowledgeBank/Acts.jsx'
import Links from './pages/knowledgeBank/Links.jsx'
import Utilities from './pages/knowledgeBank/Utilities.jsx'
import Bulletins from './pages/knowledgeBank/Bulletins.jsx'
import Forms from './pages/knowledgeBank/Forms.jsx'
import Blogs from './pages/knowledgeBank/Blogs.jsx'

import GSTCalculator from './pages/calculators/GSTCalculator.jsx'
import EMICalculator from './pages/calculators/EMICalculator.jsx'
import IncomeTaxCalculator from './pages/calculators/IncomeTaxCalculator.jsx'
import SIPCalculator from './pages/calculators/SIPCalculator.jsx'
import TDSCalculator from './pages/calculators/TDSCalculator.jsx'
import HRACalculator from './pages/calculators/HRACalculator.jsx'

import Account from './pages/services/Account'
import Finance from './pages/services/Finance'
import Taxation from './pages/services/Taxation'
import Payroll from './pages/services/Payroll'
import CorporateCompliance from './pages/services/CorporateCompliance'
import BusinessSetup from './pages/services/BusinessSetup'
import Loans from './pages/services/Loans'
import RiskAssessment from './pages/services/RiskAssessment'
import Advisory from './pages/services/Advisory'
import BusinessAuxiliary from './pages/services/BusinessAuxiliary'

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

      <Route path='knowledge-bank/forms' element={<Forms/>}/>
      <Route path='knowledge-bank/rules' element={<Rules/>}/>
      <Route path='knowledge-bank/acts' element={<Acts/>}/>
      <Route path='knowledge-bank/links' element={<Links/>}/>
      <Route path='knowledge-bank/utilities' element={<Utilities/>}/>
      <Route path='knowledge-bank/bulletins' element={<Bulletins/>}/>
      <Route path='knowledge-bank/blogs' element={<Blogs/>}/>

      <Route path='calculators/gst' element={<GSTCalculator/>}/>
      <Route path='calculators/emi' element={<EMICalculator/>}/>
      <Route path='calculators/income-tax' element={<IncomeTaxCalculator/>}/>
      <Route path='calculators/sip' element={<SIPCalculator/>}/>
      <Route path='calculators/tds' element={<TDSCalculator/>}/>
      <Route path='calculators/hra' element={<HRACalculator/>}/>

      <Route path='services/account' element={<Account/>}/>
      <Route path='services/finance' element={<Finance/>}/>
      <Route path='services/taxation' element={<Taxation/>}/>
      <Route path='services/payroll' element={<Payroll/>}/>
      <Route path='services/corporate-compliance' element={<CorporateCompliance/>}/>
      <Route path='services/business-setup' element={<BusinessSetup/>}/>
      <Route path='services/loans' element={<Loans/>}/>
      <Route path='services/risk-assessment' element={<RiskAssessment/>}/>
      <Route path='services/advisory' element={<Advisory/>}/>
      <Route path='services/business-auxiliary' element={<BusinessAuxiliary/>}/>
      
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
