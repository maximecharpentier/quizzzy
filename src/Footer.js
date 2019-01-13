import React, { Component } from 'react';
import data from './data'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <p className="footer__item">{data.footer.author}</p>
                <p className="footer__item">{data.footer.service.by}&nbsp;<span className="bold">{data.footer.service.name}</span></p>
            </footer>
        );
    };
};
export default Footer;