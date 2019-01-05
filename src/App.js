import React, { Component } from 'react';
import texts from './data'
import Loader from './Loader'
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
            loaderStyle: 'Loader',
            apis: [],
            isLoaded: false
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
                        isLoaded: i === texts.categories.length - 1 ? true : false
                    });
                },
                error => console.error(error)
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
                <Loader style={this.state.isLoaded ? `${this.state.loaderStyle} invisible` : `${this.state.loaderStyle} showed`}/>
                <Header 
                    data={texts} 
                    apis={this.state.apis}
                />
                <section className='tiles'>
                    <CategoryTile  
                        style={!this.state.categoryHidden ? `${this.state.categoryStyle} showed` : `${this.state.categoryStyle} hidden`} 
                        hideCategory={this.hideCategory}
                        apis={this.state.apis}
                        isLoaded={this.state.isLoaded}
                        data={texts}
                    />
                    <QuestionTile 
                        style={this.state.categoryHidden ? `${this.state.questionStyle} showed` : `${this.state.questionStyle} hidden`} 
                        apis={this.state.apis}
                        isLoaded={this.state.isLoaded}
                    />
                    <ResultTile
                        style={!this.state.resultHidden ? `${this.state.resultStyle} showed` : `${this.state.resultStyle} hidden`} 
                        goBack={this.hideResults}
                    />
                </section>
                <Footer data={texts}/>
            </section>
        )
    }
}
export default App;