import React from 'react'
import {useSelector} from 'react-redux'

import ProductList from '../../components/ProductList'
import ProductItem from '../../components/ProductItem'


function ProductListPage(props) {
    const products = useSelector(state => state.products)

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
            <button type="button" className="btn btn-info">
              Thêm sản phẩm
            </button>
            <ProductList>
                {showProduct(products)}
            </ProductList>
          </div>
    )
}

export default ProductListPage
