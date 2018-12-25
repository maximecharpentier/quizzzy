import React, { Component } from 'react';
import texts from './data'
import Header from './Header';
import CategoryTile from './CategoryTile';
import QuestionTile from './QuestionTile';
import ResultTile from './ResultTile';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <section className='App'>
                <Header data={texts}/>
                <CategoryTile data={texts}/>
                <QuestionTile/>
                <ResultTile/>
                <Footer data={texts}/>
            </section>
        )
    }
}
export default App;