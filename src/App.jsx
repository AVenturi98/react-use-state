import { useState } from 'react'
import { Buttons } from './components/buttons/Buttons'
import { Card } from './components/card/Card'
import { languages } from './languages'
import style from './components/buttons/Buttons.module.css'




function App({ item }) {

  const [textReading, setReadingText] = useState(0)


  return (
    <>
      <div className='container'>
        <h1>Lear Web Development</h1>
      </div>

      <ul>
        {languages.map((language, i) =>
          <li key={language.id}>
            <Buttons className={i === textReading ? style.btnActive : ''} callBack={() => setReadingText(i)} item={language.title} />
          </li>)}

      </ul>

      <Card item={languages[textReading]} />

    </>
  )
}

export default App

//Se nessun linguaggio è selezionato, la card del dettaglio mostra “nessun linguaggio selezionato”