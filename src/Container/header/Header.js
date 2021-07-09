import React from 'react'
import {Navbar,Brand} from 'react-bootstrap'
import './header.css'

function Header() { 
    return (
        <div class="bloc l-bloc none" id="bloc-0">
        <div class="container bloc-sm none-lg">
            <div class="row">
                <div class="col">
                    <nav class="navbar navbar-light row navbar-expand-md" role="navigation">
                        <a class="navbar-brand" href="index.html"><img src="logo@1.5x.png" alt="logo" /></a>
                        <button id="nav-toggle" type="button" class="ml-auto ui-navbar-toggler navbar-toggler border-0 p-0" data-toggle="collapse" data-target=".navbar-29362" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse navbar-29362 col-lg-7">
                            <ul class="site-navigation nav navbar-nav ml-auto"> 
                                <li class="nav-item">
                                    <a href="index.html" class="nav-link">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a href="index.html" class="nav-link">Events</a>
                                </li>
                                <li class="nav-item">
                                    <a href="index.html" class="nav-link">FAQ's</a>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-content-area col">
                            <div class="row">
                                <div class="col">
                                    <a href='/login' class="btn btn-lg btn-blue-green">Login</a>
                                </div>
                                <div class="col">
                                    <a href="/register" class="btn btn-lg btn-green-ryb">Donate</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header
