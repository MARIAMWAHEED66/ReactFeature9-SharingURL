// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";
import { NavLink } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <NavLink
        to={`/products/${product.slug}`}
        className="btn btn-outline-info"
      >
        <img alt={product.name} src={product.image} />
      </NavLink>
      <p>{product.name}</p>

      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
