import Single from "../../component/single/Single";
import { singleUser } from "../../data";
import "./product.scss"
const Product = () => {
  return(
    <div className="product">
      <Single {...singleUser}/>
    </div>
  )
};

export default Product;
