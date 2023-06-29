import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return (
        <div className="not_found">
            <h2>Sorry</h2>
            <p>This page does not exist!!</p>
            <Link to="/"  style={{
        
                
        }}>Click here to go back home</Link>
        </div>
      );
}
 
export default NotFound;