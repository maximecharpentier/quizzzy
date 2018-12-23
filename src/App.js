import React, { Component } from 'react';
import theData from './data'
import Header from './Header';
import CategoryTile from './CategoryTile';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <section className='App'>
                <Header data={theData}/>
                <CategoryTile data={theData}/>
                <Footer data={theData}/>
            </section>
        )
    }
}
export default App;