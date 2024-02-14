import { FC, FormEvent, useState } from 'react'
// import cn from 'classnames'
import styles from './ProductForm.module.css'
import { useAppDispatch } from '../../../app/hooks';
import { addProduct } from '../productAction';
import IProduct from '../types/Product';

const ProductForm: FC = () => {

  const dispatch = useAppDispatch()

  //прописываем стейт на каждый input
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const [error, setError] = useState('');

  // делаем функцию обработчик, в которой обращаемся к параметру event (или 'e')
  // и предотвращаем перезагрузку по умолчанию по нажатию (как в обычном js)

  function valideateInputs(): boolean {
    const linkPattern = /^(https?:\/\/)?([\w.-]+\.\w{2,})(\/\S*)?$/;
    if (title.trim() === '') {
      setError('title is not valid')
      return false
    }
    if (description.trim() === '') {
      setError('description is not valid')
      return false
    }
    if (category.trim() === '') {
      setError('category is not valid')
      return false
    }
    if (price.trim() === '' || (Number.isNaN(Number(price)))) {

      setError('price is not valid')
      return false
    }
    if (!linkPattern.test(image)) {
      setError('url is not valid')
      return false
    }
    return true
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    const data: IProduct = {
      title,
      description,
      category,
      price: Number(price),
      image
    }
    if (valideateInputs()) {
      dispatch(addProduct(data))
    }
  }


  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit} action="">
          <label>Добавить новый продукт:</label>
          <input onChange={(e) => setTitle(e.target.value)} placeholder='title' type="text" value={title} />
          <input onChange={(e) => setDescription(e.target.value)} placeholder='description' type="text" value={description} />
          <input onChange={(e) => setCategory(e.target.value)} placeholder='category' type="text" value={category} />
          <input onChange={(e) => setPrice(e.target.value)} placeholder='price' type="text" value={price} />
          <input onChange={(e) => setImage(e.target.value)} placeholder='image' type="text" value={image} />
          <button className={styles.button} type='submit'>Добавить файл</button>
        </form>
      </div>
      <div style={{ textAlign: 'center' }}>
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </div>
    </>
  )
}

export default ProductForm
