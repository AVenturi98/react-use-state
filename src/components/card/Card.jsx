import { languages } from '../../languages'
import style from './Card.module.css'


export function Card({ item }) {

    const { title, description } = item

    return (
        <>
            <div className="container">
                <div className={style.card}>
                    <div className="cardTitle">
                        <h3 className={style.title}>{title}</h3>
                    </div>
                    <div className="cardBody">
                        <p className={style.description}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}