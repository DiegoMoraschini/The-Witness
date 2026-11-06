import { useState } from 'react'
import "./App.css"
import background from "./assets/ss_fabb0939200a1f2bbb40b775c8e07645f21dc44a.png"

function App() {
  return(
  
  <div style={{ 
      backgroundImage: `url(${background})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '400px' 
    }}>
      <h1>Contenuto sopra lo sfondo</h1>
    </div>
  
)
  
}

export default App
