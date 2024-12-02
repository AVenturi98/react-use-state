// import { useState } from 'react'
import { Buttons } from './components/buttons/Buttons'
import { Card } from './components/card/Card'
import { languages } from './languages'



function App({ title }) {

  // const [textReading, setReadingText] = useState(true)

  function check() {

    console.log({ title })
  }


  return (
    <>
      <div className='container'>
        <h1>Lear Web Development</h1>
      </div>
      <Buttons onClick={check} />



      <Card />
    </>
  )
}

export default App
