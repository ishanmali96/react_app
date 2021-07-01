import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="head_top">
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarsExample04">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                {/* <a className="nav-link" href="index.html"> Home  </a> */}
                                                <Link className="nav-link text-primary" to='/'>Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                {/* <a className="nav-link" href="#about">About</a> */}
                                                <Link className="nav-link text-primary" to = '/about'>About</Link>
                                            </li>
                                            <li className="nav-item">
                                                {/* <a className="nav-link text-primary" href="#contact">Contact us</a> */}
                                                <Link className="nav-link text-primary" to ="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                        <div className="sign_btn"><a href="#">Sign in</a></div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Navbar;