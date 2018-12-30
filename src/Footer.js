import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <p className="footer__item">{this.props.data.footer.author}</p>
                <p className="footer__item">{this.props.data.footer.service.by}&nbsp;<span className="bold">{this.props.data.footer.service.name}</span></p>
            </footer>
        )
    }
}
export default Footer;