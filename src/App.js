import React, { Component } from 'react';
import texts from './data'
import Header from './Header';
import CategoryTile from './CategoryTile';
import QuestionTile from './QuestionTile';
import ResultTile from './ResultTile';
import Footer from './Footer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryHidden: false,
            categoryStyle: 'tile tile__category',
            questionStyle: 'tile tile__question'
        }
    }
    hideCategory = () => {
       return this.setState({categoryHidden: true})
    }
    render() {
        return (
            <section className='App'>
                <Header data={texts}/>
                <section className='tiles'>
                    <CategoryTile data={texts} style={!this.state.categoryHidden ? `${this.state.categoryStyle} showed` : `${this.state.categoryStyle} hidden`} click={this.hideCategory}/>
                    <QuestionTile style={this.state.categoryHidden ? `${this.state.questionStyle} showed` : `${this.state.questionStyle} hidden`}/>
                    <ResultTile/>
                </section>
                <Footer data={texts}/>
            </section>
        )
    }
}
export default App;