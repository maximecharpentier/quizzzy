import React, { Component } from 'react';
import data from './data'
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
            isCategoryHidden: false,
            categoryStyle: 'tile tile__category',
            categoryHiddenStyle: 'tile tile__category hidden',
            isResultHidden: true,
            resultStyle: 'tile tile--result',
            resultHiddenStyle: 'tile tile--result hidden',
            isQuestionsHidden: true,
            questionsStyle: 'tile tile__question',
            questionHiddenStyle: 'tile tile__question hidden',
            loaderStyle: 'Loader',
            apis: [],
            isLoaded: false
        }
    }
    UNSAFE_componentWillMount = () => this.loadAPis();
    loadAPis = () => {
        const apis = [];
        let count = 0;
        data.categories.map((x, i) => fetch(x.url)
            .then(api => api.json())
            .then(
                result => {
                    count++;
                    apis.push({result, count: i});
                    this.setState({
                        apis: apis,
                        isLoaded: count === data.categories.length ? true : false
                    });
                    console.log(i)
                    console.log(apis)
                },
                error => console.error(error)
            )
        )
        const newAPis = [];
        apis.map((x, i) => {
            console.log(`${x.count} - ${i}`);
            if (x.i === i) {
                newAPis.push(x);
                console.log(newAPis)
            }
            console.log('wew')
        })
    }
    hideCategory = () => this.setState({
        isCategoryHidden: true,
        isQuestionsHidden: false
    })
    hideQuestions = () => this.setState({
        isQuestionsHidden: true,
        isResultHidden: false
    })
    hideResults = () => {
        this.resetScore();
        return this.setState({
            isResultHidden: true,
            isCategoryHidden: false
        })
    }
    resetScore = () => {
        localStorage.setItem('points', 0);
        localStorage.setItem('questions', 1);
        localStorage.setItem('index', 0);
    }
    render() {
        return (
            <section className='App'>
                <Loader style={this.state.isLoaded ? `${this.state.loaderStyle} invisible` : `${this.state.loaderStyle} showed`}/>
                <Header 
                    apis={this.state.apis}
                />
                <section className='tiles'>
                    <CategoryTile  
                        style={this.state.isCategoryHidden ? this.state.categoryHiddenStyle : this.state.categoryStyle} 
                        click={this.hideCategory}
                        apis={this.state.apis}
                        isLoaded={this.state.isLoaded}
                    />
                    <QuestionTile 
                        style={this.state.isQuestionsHidden ? this.state.questionHiddenStyle : this.state.questionsStyle} 
                        apis={this.state.apis}
                        isLoaded={this.state.isLoaded}
                        loose={this.hideQuestions}
                    />
                    <ResultTile
                        style={this.state.isResultHidden ? this.state.resultHiddenStyle : this.state.resultStyle}
                        click={this.hideResults}
                        isLoaded={this.state.isLoaded}
                        apis={this.state.apis}
                    />
                </section>
                <Footer/>
            </section>
        )
    }
}
export default App;