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
            resultHidden: false,
            categoryStyle: 'tile tile__category',
            questionStyle: 'tile tile__question',
            resultStyle: 'tile tile--result',
            apis: [],
            loaded: false
        }
    }
    UNSAFE_componentWillMount = () => {
        const apis = [];
        texts.categories.map((x, i) => fetch(x.url)
            .then(api => api.json())
            .then(
                result => {
                    apis.push(result);
                    this.setState({
                        apis: apis,
                        loaded: i === 2 ? true : false
                    });
                },
                error => console.log(error)
            )
        )
        
    }
    hideCategory = () => {
       return this.setState({
            resultHidden: false,
            categoryHidden: true
        })
    }
    hideResults = () => {
        localStorage.setItem('points', 0);
        localStorage.setItem('questions', 1);
        localStorage.setItem('index', 0);
        return this.setState({
            resultHidden: true,
            categoryHidden: false
        })

    }
    render() {
        return (
            <section className='App'>
                <Header 
                    data={texts} 
                    apis={this.state.apis}
                />
                <section className='tiles'>
                    <CategoryTile  
                        style={!this.state.categoryHidden ? `${this.state.categoryStyle} showed` : `${this.state.categoryStyle} hidden`} 
                        click={this.hideCategory}
                        apis={this.state.apis}
                        loaded={this.state.loaded}
                        data={texts}
                    />
                    <QuestionTile 
                        style={this.state.categoryHidden ? `${this.state.questionStyle} showed` : `${this.state.questionStyle} hidden`} 
                        apis={this.state.apis}
                        loaded={this.state.loaded}
                    />
                    <ResultTile
                        style={!this.state.resultHidden ? `${this.state.resultStyle} showed` : `${this.state.resultStyle} hidden`} 
                        click={this.hideResults}
                    />
                </section>
                <Footer data={texts}/>
            </section>
        )
    }
}
export default App;