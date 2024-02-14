import { FC, useEffect, useState } from 'react'
// import cn from 'classnames'
import styles from './ProductPage.module.css'

import { Link } from 'react-router-dom'
import MyButton from '../../../components/myButton/MyButton'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { deleteProduct, loadProducts } from '../productAction'
import ProductForm from '../productForm/ProductForm'
import Loader from '../../../components/loader/Loader'

const ProductPage: FC = () => {
  const dispatch = useAppDispatch()

  const { products, error, isLoading } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  return (
    <div>
      <ProductForm />
      {isLoading && <Loader />}
      {error && <h4 style={{ color: 'red' }}>Error {error}</h4>}
      {!isLoading && (
        <ul className={styles.productList}>
          {products.map(el => (
            <li key={el.id} className={styles.productCard}>
              <span className={styles.title}>{el.title}</span>
              <div className={styles.imgWrapper}>
                <img src={el.image} alt="" />
              </div>
              <Link to={String(el.id)}><MyButton text='To product' /></Link>
              <MyButton text='Delete' onClick={() => dispatch(deleteProduct(el.id))} />
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default ProductPage
