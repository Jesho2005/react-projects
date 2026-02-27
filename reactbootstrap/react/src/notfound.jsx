import { Link } from "react-router-dom";
export default function Notfound() {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <Link className="btn btn-danger" to="/Login">Login</Link>
      </div>
    );
}