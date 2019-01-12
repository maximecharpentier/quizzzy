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
            categoryStyle: 'tile tile__category',
            categoryHiddenStyle: 'tile tile__category hidden',
            resultHidden: true,
            resultStyle: 'tile tile--result',
            resultHiddenStyle: 'tile tile--result hidden',
            questionsHidden: true,
            questionStyle: 'tile tile__question',
            questionHiddenStyle: 'tile tile__question hidden',
            loaderStyle: 'Loader',
            apis: [],
            isLoaded: false
        }
    }
    UNSAFE_componentWillMount = () => {
        this.loadAPis();
        // if (localStorage.getItem('points')) this.hideCategory();
    };
    loadAPis = () => {
        const apis = [];
        let count = 0
        texts.categories.map((x, i) => fetch(x.url)
            .then(api => api.json())
            .then(
                result => {
                    count++;
                    apis.push(result);
                    this.setState({
                        apis: apis,
                        isLoaded: count === texts.categories.length ? true : false
                    });
                },
                error => console.error(error)
            )
        )
    }
    hideCategory = () => {
       return this.setState({
            categoryHidden: true,
            questionsHidden: false
        })
    }
    hideQuestions = () => {
        return this.setState({
            questionsHidden: true,
            resultHidden: false
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
    wow = () => alert('wow')
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
                        style={this.state.categoryHidden ? this.state.categoryHiddenStyle : this.state.categoryStyle} 
                        click={this.hideCategory}
                        apis={this.state.apis}
                        isLoaded={this.state.isLoaded}
                        data={texts}
                    />
                    <QuestionTile 
                        style={this.state.questionsHidden ? this.state.questionHiddenStyle : this.state.questionStyle} 
                        apis={this.state.apis}
                        isLoaded={this.state.isLoaded}
                        loose={this.hideQuestions}
                    />
                    <ResultTile
                        style={this.state.resultHidden ? this.state.resultHiddenStyle : this.state.resultStyle}
                        click={this.hideResults}
                        isLoaded={this.state.isLoaded}
                        apis={this.state.apis}
                        data={texts}
                    />
                </section>
                <Footer data={texts}/>
            </section>
        )
    }
}
export default App;