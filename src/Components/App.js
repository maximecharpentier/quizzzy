import React, { Component } from 'react';
import data from '../data/data'
import Loader from './App/Loader'
import Header from './App/Header';
import CategoryTile from './App/CategoryTile';
import QuestionTile from './App/QuestionTile';
import ResultTile from './App/ResultTile';
import Footer from './App/Footer';
import ErrorMessage from './App/ErrorMessage';
import brandSVG from '../assets/imgs/brand.svg';
import capitalSVG from '../assets/imgs/capital.svg';
import animalsSVG from '../assets/imgs/cat.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // CategoryTile bool, default style and hidden style
            isCategoryHidden: false,
            categoryStyle: 'tile tile--category',
            categoryHiddenStyle: 'tile tile--category hidden',
            // QuestionTile bool, default style and hidden style
            isQuestionsHidden: true,
            questionsStyle: 'tile tile--question',
            questionHiddenStyle: 'tile tile--question hidden',
            // ResultTile bool, default style and hidden style
            isResultHidden: true,
            resultStyle: 'tile tile--result',
            resultHiddenStyle: 'tile tile--result hidden',
            // ResultTile bool, default style and hidden style
            isLoaded: false,
            loaderStyle: 'Loader showed',
            loaderHiddenStyle: 'Loader invisible',
            // apis which'll contain all questions and answers
            apis: [],
            // visuals for each category
            SVGs: [capitalSVG, brandSVG, animalsSVG],
            loadedError: false,
        }
    }
    // load apis before the render
    UNSAFE_componentWillMount = () => this.loadAPis();
    loadAPis = () => {
        // use a counter because the heavier the API is, the longer it will take to load and to be pushed in apis
        const apis = [];
        let count = 0;
        // fetch url for each api
        data.categories.map((x, i) => fetch(x.url)
            // then convert to JSON
            .then(api => api.json())
            .then(
                result => {
                    // then increment the counter,
                    count++;
                    // push to apis with counter
                    apis.push({result, count: i});
                    // update to state
                    this.setState({
                        apis,
                        // set isLoaded to true if this is the last api loaded
                        isLoaded: count === data.categories.length ? true : false
                    });
                    // next, if all apis are loaded,
                    if (this.state.isLoaded) {
                        let newApis = [];
                        // re-sort apis array with counter
                        this.state.apis.map((x, i) => {
                            newApis.splice(x.count, 0, x);
                            return this.setState({apis : newApis});
                        })
                        // now we have new apis array with right order
                    };
                },
                // if any of api is not loaded, display the error message
                error => this.setState({loadedError: true})
            )
        )
    };
    hideCategory = () => this.setState({
        // change bool to hide category and menu, and show questions
        isCategoryHidden: true,
        isQuestionsHidden: false,
        isMenuHidden: true,
    });
    hideQuestions = () => {
        // reset all the score, excepted points
        this.resetScores();
        // change bool to hide questions and show results
        this.setState({
            isQuestionsHidden: true,
            isResultHidden: false
        });
    };
    hideResults = () => {
        // reset all the score, excepted points
        this.resetScores();
        localStorage.setItem('points', 0);
        // change bool to hide results and show categories and menu
        return this.setState({
            isResultHidden: true,
            isCategoryHidden: false,
            isMenuHidden: false,
        });
    };
    resetScores = () => {
        // reset all the score, excepted points
        localStorage.setItem('questions', 1);
        localStorage.setItem('index', 0);
        localStorage.setItem('errors', 0);
        localStorage.setItem('reset', 0);
    };
    goHome = () => {
        // hide questions and result, because we can go home from questions and results
        this.hideQuestions();
        this.hideResults();  
    };
    render() {
        return (
            <section className='App'>
                <ErrorMessage
                    isLoaded={this.state.loadedError}
                />
                <Loader 
                // update style in terms of display bool
                    style={this.state.isLoaded ? this.state.loaderHiddenStyle : this.state.loaderStyle}
                />
                <Header
                    apis={this.state.apis}
                    click={this.goHome}
                    isMenuHidden={this.state.isMenuHidden}
                />
                <section className='tiles'>
                    <CategoryTile
                        // update style in terms of display bool
                        style={this.state.isCategoryHidden ? this.state.categoryHiddenStyle : this.state.categoryStyle}
                        click={this.hideCategory}
                        apis={this.state.apis}
                        isLoaded={this.state.isLoaded}
                        SVGs={this.state.SVGs}
                    />
                    <QuestionTile
                        // update style in terms of display bool
                        style={this.state.isQuestionsHidden ? this.state.questionHiddenStyle : this.state.questionsStyle}
                        apis={this.state.apis}
                        isLoaded={this.state.isLoaded}
                        goToResult={this.hideQuestions}
                    />
                    <ResultTile
                        // update style in terms of display bool
                        style={this.state.isResultHidden ? this.state.resultHiddenStyle : this.state.resultStyle}
                        click={this.hideResults}
                        isLoaded={this.state.isLoaded}
                        apis={this.state.apis}
                    />
                </section>
                <Footer/>
            </section>
        );
    };
};
export default App;