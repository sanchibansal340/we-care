import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
                <Link 
                    className="navbar-brand font-weight-bold mx-lg-5 my-1" 
                    to="/"
                >
                    We-Care
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link 
                            className="nav-item nav-link mr-4 text-dark" 
                            to="/"
                        >
                            Home
                        </Link>
                        <Link 
                            className="nav-item nav-link mr-4 text-dark" 
                            to="/about"
                        >
                            About Us
                        </Link>
                        <Link 
                            className="nav-item nav-link mr-4 text-dark" 
                            to="/info"
                        >
                            Info
                        </Link>
                        <Link 
                            className="nav-item nav-link mr-4 text-dark" 
                            to="/treatment"
                        >
                            Treatment
                        </Link>
                        <Link 
                            className="nav-item nav-link mr-4 text-dark" 
                            to="/diet"
                        >
                            Diet
                        </Link>
                        <Link 
                            className="nav-item nav-link text-dark" 
                            to="/quiz"
                        >
                            Quiz
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
