import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbarStyle.css';
import { ContactModal } from './contactModal';

export function Navbar(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (<nav class="navbar navbar-expand-sm float-right" >
        <div className="row my-nav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link item" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link item" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link item" href="#">Careers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link item" onClick={() => setModalShow(true)}>Contact</a>
                </li>
            </ul>
        </div>
        <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
    </nav>);
}
