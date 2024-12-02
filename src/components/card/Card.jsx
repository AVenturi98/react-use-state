import { languages } from '../../languages'
import style from './Card.module.css'


export function Card() {

    return (
        <>
            {languages.map((language, lang) =>
                <div key={lang} className="container">
                    <div className={style.card}>
                        <div className="cardTitle">
                            <h3 className={style.title}>{language.title}</h3>
                        </div>
                        <div className="cardBody">
                            <p className={style.description}>{language.description}</p>
                        </div>
                    </div>
                </div>)}
        </>
    )
}