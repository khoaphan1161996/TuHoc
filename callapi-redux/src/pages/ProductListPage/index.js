import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ProductList from '../../components/ProductList'
import ProductItem from '../../components/ProductItem'
import callAPi from '../../utils/CallApi'

function ProductListPage(props) {
    const [products,setProducts] = useState([])

    useEffect(() => {
        callAPi('products','GET',null).then( res => {
            setProducts(res.data)
        })
    }, [])

    const showProduct = (products) => {
        let result = null
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} />
            })
        }
        return result 
    }

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/product/add" className="btn btn-info">
              Thêm sản phẩm
            </Link>
            <ProductList>
                {showProduct(products)}
            </ProductList>
          </div>
    )
}

export default ProductListPage
