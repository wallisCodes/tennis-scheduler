import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Test from './Test.jsx'
import ScheduleWrapper from './components/ScheduleWrapper.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Test /> */}
    <ScheduleWrapper />
  </React.StrictMode>,
)