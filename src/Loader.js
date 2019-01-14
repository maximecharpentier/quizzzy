import React, { Component } from 'react';

class CategoryTile extends Component {
    render() {
        return (
            // hide the loaded if all apis are loaded
            <section className={this.props.style}>
                <svg className='Loader__svg' width="38" height="28" viewBox="0 0 38 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <line className='Loader__svg__line l1' x1="0" y1="2" x2="50" y2="2"/>
                    <line className='Loader__svg__line l2' x1="0" y1="10" x2="50" y2="10"/>
                    <line className='Loader__svg__line l3' x1="0" y1="18" x2="50" y2="18"/>
                    <line className='Loader__svg__line l4' x1="0" y1="26" x2="50" y2="26"/>
                </svg>
            </section>
        );
    };
};
export default CategoryTile;