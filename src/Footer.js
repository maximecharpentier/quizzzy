import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className='Footer'>
            {Object.values(this.props.data.footer).join(' - ')}
            </footer>
        )
    }
}
export default Footer;