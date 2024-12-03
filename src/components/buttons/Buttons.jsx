import { useState } from 'react'
import { languages } from '../../languages'
import style from './Buttons.module.css'

export function Buttons({ className, callBack = () => { }, item }) {


    return (
        <>
            <button onClick={callBack} className={`${style.button} ${className}`}>{item}</button>
        </>
    )
}