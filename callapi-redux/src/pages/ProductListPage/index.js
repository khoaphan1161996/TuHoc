import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ProductList from '../../components/ProductList'
import ProductItem from '../../components/ProductItem'
import callAPi from '../../utils/CallApi'
import * as Config from '../../constants/Config'

function ProductListPage(props) {
    const [products,setProducts] = useState([])

    // Load trang thì load dữ liệu về
    useEffect(() => {
        callAPi('products','GET',null).then( res => {
            setProducts(res.data)
        })
    }, [])

    // Khi nhận được id truyền lên thì tiến hành xóa trên sever và xóa trên array hiện tại để giao diện cập nhập
    const onDelete = (id) => {
        axios.delete(`${Config.API_URL}/products/${id}`).then( res => {
            if(res.status===200) {
                const newProducts = products.filter(product => product.id !== id)
                setProducts(newProducts)
            }
        })
    }

    // Truyền các ProductItem vào ProductList dưới dạng Children
    const showProduct = (products) => {
        let result = null
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} 
                onDelete={onDelete} />
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
