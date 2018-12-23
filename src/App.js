import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import theData from './data'

class App extends Component {
    render() {
        return (
            <section className='App'>
                <Header data={theData}/>
                <Footer/>
            </section>
        )
    }
}
export default App;