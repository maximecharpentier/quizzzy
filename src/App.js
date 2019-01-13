import React, { Component } from 'react';
import data from './data'
import Loader from './Loader'
import Header from './Header';
import CategoryTile from './CategoryTile';
import QuestionTile from './QuestionTile';
import ResultTile from './ResultTile';
import Footer from './Footer';
import brandSVG from './assets/imgs/brand.svg';
import capitalSVG from './assets/imgs/capital.svg';
import animalsSVG from './assets/imgs/cat.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCategoryHidden: false,
            categoryStyle: 'tile tile--category',
            categoryHiddenStyle: 'tile tile--category hidden',
            isResultHidden: true,
            resultStyle: 'tile tile--result',
            resultHiddenStyle: 'tile tile--result hidden',
            isQuestionsHidden: true,
            questionsStyle: 'tile tile--question',
            questionHiddenStyle: 'tile tile--question hidden',
            loaderStyle: 'Loader',
            apis: [],
            SVGs: [capitalSVG, brandSVG, animalsSVG],
            newApis: [],
            isLoaded: false,
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
                    if (this.state.isLoaded) {
                        let news = [];
                        this.state.apis.map((x, i) => {
                            console.log(`${i} - ${x.count}`)
                            news.splice(x.count, 0, x)
                            console.log(news)
                            this.setState({apis : news})
                            console.log(this.state.apis)
                        })
                        console.log('old')
                        console.log(this.state.apis)
                    }
                },
                error => console.error(error)
            )
        )
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
        localStorage.setItem('errors', 0);
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
                        SVGs={this.state.SVGs}
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