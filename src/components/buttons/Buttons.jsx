import { useState } from 'react'
import { languages } from '../../languages'
import style from './Buttons.module.css'

export function Buttons({ onClick }) {


    return (
        <>
            <ul>
                {languages.map((language) =>
                    <li key={language.id}>
                        <button onClick={onClick} className={style.button}>{language.title}</button>
                    </li>)}
            </ul>
        </>
    )
}