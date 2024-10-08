import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyFunc from './component'
//import Message from './message'
//import Index from './APPLICATION'
import dev from './PROPS/app'
import Card from './CARD'
import Task from './CARD/todays'
function App() {

 
  return (
    <>
  
     <dev/>
     <Task/>
  
     <Card/>
  
     <Card/>
     <Card/>

      
     </>
      
   
  )
}

export default App
