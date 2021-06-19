import {useParams} from 'react-router-dom'

function Product(props) {
  const { slug } = useParams();

  return (
    <div>
      Đây là chi tiết sản phẩm: {slug}
    </div>
  );
}

export default Product;
