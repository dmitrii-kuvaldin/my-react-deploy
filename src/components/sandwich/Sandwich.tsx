import { FC, useState } from 'react'

/// подключение css модулей через переменную
import style from './Sandwich.module.css'


const Sandwich: FC = () => {

  const [sandwich, setSandwich] = useState('Бутерброд: ');

  function addBread() {
    setSandwich(`${sandwich} хлеб`)
  }
  function addKolbasa() {
    setSandwich(`${sandwich} колбаса`)
  }
  function addCheese() {
    setSandwich(`${sandwich} сыр`)
  }

  return (
    <div>
      <h1 style={{ color: 'red' }}>Sandwich</h1>
      <p>{sandwich}</p>
      <button className={style.btn1} onClick={addBread}>добавить хлеб</button>
      <button className={style.btn2} onClick={addKolbasa}>добавить колбасу</button>
      <button onClick={addCheese}>добавить сыр</button>
    </div>
  )
}

export default Sandwich

