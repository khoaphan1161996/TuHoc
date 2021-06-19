import { BrowserRouter as Router, Route, NavLink, useRouteMatch } from "react-router-dom";

import Product from "../Product"

function Products(props) {
  const { path, url } = useRouteMatch()

  const products = [
    {
      id: 1,
      slug: "iphone",
      name: "IphoneX",
      price: 35000000,
    },
    {
      id: 2,
      slug: "samsung",
      name: "Samsung Galaxy S7",
      price: 12000000,
    },
    {
      id: 3,
      slug: "oppo",
      name: "Oppo F1s",
      price: 7000000,
    },
  ];
  
  const result = products.map((product, index) => {
    return (
      <li className="list-group-item" key={index}>
        <NavLink className="link" to={`${url}/${product.slug}`}>
          {product.id} - {product.name} - {product.price}
        </NavLink>
      </li>
    );
  });

  return (
    <Router className="container">
      <h1>Danh sách sản phẩm</h1>
      <div className="row">
        <ul className="list-group">
            {result}
        </ul>
      </div>

      <div className="row">
          <Route path={`${path}/:slug`} component={Product} />
      </div>
    </Router>
  );
}

export default Products;
