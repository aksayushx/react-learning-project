import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fb from '../assets/FB-icon-black.png';
import twitter from '../assets/Twitter-icon-black.png';
import linkedin from '../assets/linkedin-icon-black.png';
import '../styles/icons.css';

export class Icons extends Component {
    render() {
        return (<div className="row">
            <a href="/"><img className="icon" src={fb} alt="Facebook" /></a>
            <a href="/"><img className="icon" src={linkedin} alt="Linkedin" /></a>
            <a href="/"><img className="icon" src={twitter} alt="Twitter" /></a>
        </div>);
    }
}