import Product from './Product'
import {useSelector} from 'react-redux'

function Products() {
  const products = useSelector(state => state.products)

  const showProduct = (products) => {
    let result = null
    if(products.length > 0) {
      result = products.map(product => 
        <Product key={product.id} product={product}/>)
    }

    return result 
  }

  return (
    <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
            {showProduct(products)}  
        </div>
    </section>
  )
}

export default Products;
