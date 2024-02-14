import { FC } from 'react'
import { NavLink } from 'react-router-dom'
// import cn from 'classnames'
import styles from './Header.module.css'
import { useAppSelector } from '../../app/hooks'

const Header: FC = () => {
  const { products } = useAppSelector(state => state.products)
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        {/* встречаем путь в элементах <NavLink> с аттрибутом 'to', который соответствует path в <Route> */}
        {/* <NavLink to='/'>Product page</NavLink> */}
        <NavLink to='/React-RTK-router'>Product page</NavLink>
        <NavLink to='products'>Products</NavLink>
        <NavLink to='city-toggle'>Change city</NavLink>
        <NavLink to='sandwich'>Make a sandwich</NavLink>
        <span>Сейчас в магазине <span style={{ color: 'lightgrey' }}>{products.length}</span> товаров</span>
      </div>
    </div>
  )
}

export default Header
