import { Link } from "react-router-dom";

export default function Header()
{
    return(
        <header>
        <Link to="/" className="logo">Travelcations</Link>
        <nav>
          <Link to="/login">Login</Link>
          
        </nav>
      </header> 
    );
}