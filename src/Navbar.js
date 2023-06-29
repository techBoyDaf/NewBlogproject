import { Link } from "react-router-dom/cjs/react-router-dom";


const Navbar = () => {
    return ( 
        <div className="top_section">
            <nav className="navbar">
<h1>My Blog</h1>
<div className="links">
    <Link to="/">Home</Link>
    <Link to="/create" style={{
        color:'white',
        backgroundColor: '#f1356d',
        borderRadius: '8px'
    }}>New Blog</Link>
    <Link to="/about" style={{
        color:'white',
        backgroundColor: '#f1356d',
        borderRadius: '8px'
    }}>About us</Link>
   
       
</div>


</nav>



        </div>

     );
}
 
export default Navbar;