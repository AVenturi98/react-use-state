import { languages } from '../../languages'
import style from './Buttons.module.css'

export function Buttons() {

    return (
        <>
            <ul>
                {languages.map((language) =>
                    <li key={language.id}>
                        <button className={style.button}>{language.title}</button>
                    </li>)}
            </ul>
        </>
    )
}