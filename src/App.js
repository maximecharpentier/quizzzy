import React, { Component } from 'react';
import theData from './data'
import Header from './Header';
import CategoryTile from './CategoryTile';
import QuestionTile from './QuestionTile';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <section className='App'>
                <Header data={theData}/>
                <CategoryTile data={theData}/>
                <QuestionTile/>
                <Footer data={theData}/>
            </section>
        )
    }
}
export default App;