import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light align-items-center">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                    </div>
                </div>
                <a className="navbar-brand font-weight-bold" href="#">THE WEATHER APP</a>
            </nav>
    )
}
