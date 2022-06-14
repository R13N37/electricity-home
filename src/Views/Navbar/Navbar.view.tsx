import React from 'react'

import classes from './Navbar.module.css'
import LanguageSettings from '../LanguageSettings/LanguageSettings'

const NavbarView = () => {
  return (
    <div> <header>
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="javascript:void(0)">
                        <img className="img-fluid" src="images/logo.png" alt="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="lnr lnr-menu"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="index-2.html#overview">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index-2.html#shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index-2.html#works">How It Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index-2.html#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index-2.html#support">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index-2.html#contact-us">Contact</a>
                            </li>
                        </ul>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <div className="iq-search">
                                    <a className="search-btn not_click" href="javascript:void(0);"> <span>Search Button</span></a>
                                    <div className="search-box not-click">
                                        <input type="email" className="form-control not-click" id="exampleInputEmail11"
                                        placeholder="Search here...."/>
                                        <i className="lnr lnr-magnifier"></i>
                                    </div>
                                </div>
                            </li>
                            <div className={classes["languageSelect"]}>
            <LanguageSettings></LanguageSettings>
          </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header></div>
  )
}

export default NavbarView