import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'

import ProductList from '../../components/ProductList'
import ProductItem from '../../components/ProductItem'
import callAPi from '../../utils/CallApi'
import {actFetchProducts,actDeleteProduct} from '../../actions'
import * as Config from '../../constants/Config'

function ProductListPage(props) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    // Load trang thì load dữ liệu về
    useEffect(() => {
        callAPi('products','GET',null).then( res => {
            const actionFetch = actFetchProducts(res.data)
            dispatch(actionFetch)
        })
    }, [])

    // Khi nhận được id truyền lên thì tiến hành xóa trên sever và xóa trên store để giao diện cập nhập
    const onDelete = (id) => {
        axios.delete(`${Config.API_URL}/products/${id}`).then( res => {
            if(res.status===200) {
                const actionDeleteProduct = actDeleteProduct(res.data)
                dispatch(actionDeleteProduct)
                
                callAPi('products','GET',null).then( res => {
                    const actionFetch = actFetchProducts(res.data)
                    dispatch(actionFetch)
                })
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
