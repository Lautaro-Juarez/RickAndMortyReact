import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <div className="container">
        <Link to='/' className="navbar-brand text-uppercase">
          Rick and morty
        </Link>
      </div>
    </nav>
  )
}
