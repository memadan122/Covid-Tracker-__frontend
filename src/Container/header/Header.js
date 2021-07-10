import React from 'react'
import { Navbar, Brand } from 'react-bootstrap'
import './header.css'

class Header extends Component() {
    logout = () => log(
        localStorage.removeItem('token'),
        localStorage.removeItem('id'),
        window.location.href = '/'
    )
    render() {
        if (localStorage.getItem('token')) {
            var menu =
                <div class="bloc l-bloc none" id="bloc-0">
                    <div class="container bloc-sm none-lg">
                        <div class="row">
                            <div class="col">
                                <nav class="navbar navbar-light row navbar-expand-md" role="navigation">
                                    <a class="navbar-brand" href="index.html"><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/s960x960/214202843_2816226325298462_5266543719808950408_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8MuLXnsn0t4AX8g_5NU&_nc_ht=scontent.fktm3-1.fna&tp=7&oh=e4ce3ab4783dacba535617bbac551229&oe=60EE3D0C" alt="logo" /></a>
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
        }
        else {
            var menu =
                <div class="bloc l-bloc none" id="bloc-0">
                    <div class="container bloc-sm none-lg">
                        <div class="row">
                            <div class="col">
                                <nav class="navbar navbar-light row navbar-expand-md" role="navigation">
                                    <a class="navbar-brand" href="index.html"><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/s960x960/214202843_2816226325298462_5266543719808950408_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8MuLXnsn0t4AX8g_5NU&_nc_ht=scontent.fktm3-1.fna&tp=7&oh=e4ce3ab4783dacba535617bbac551229&oe=60EE3D0C" alt="logo" /></a>
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
                                                <a onClick={this.logout} href='/login' class="btn btn-lg btn-blue-green">Logout</a>
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
        }
        return (
            <div>
                {menu}
            </div>
        )
    }
}

export default Header;
