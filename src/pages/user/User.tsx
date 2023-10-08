import Single from "../../component/single/Single";
import { singleUser } from "../../data";
import "./user.scss"

const User = () => {
  return(
    <div>
      <Single {...singleUser}/>
    </div>
  )
};

export default User;
