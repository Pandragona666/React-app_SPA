import React from 'react';
import { Route } from 'react-router-dom'
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            <Route path="/" exact render={() => (
                <p>Jesteś na <span>stronie głownej</span></p>
            )
            } />

            <Route path="/:page" render={props => (
                <p>Jesteś na <span>{props.match.params.page}</span></p>
            )
            } />
        </div>
    );
}

export default Footer;