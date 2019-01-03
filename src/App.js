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
            questionStyle: 'tile tile__question',
            apis: [],
            loaded: false
        }
    }
    UNSAFE_componentWillMount = () => {
        const apis = [];
        let count = 0;
        texts.categories.map(x => fetch(x.url)
            .then(api => api.json())
            .then(
                result => {
                    apis.push(result);
                    this.setState({apis: apis});
                    count++;
                    if (count === 3) this.setState({loaded: true});
                },
                error => console.log(error)
            )
        )
        
    }
    hideCategory = () => {
       return this.setState({categoryHidden: true})
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
                        data={texts} 
                        style={!this.state.categoryHidden ? `${this.state.categoryStyle} showed` : `${this.state.categoryStyle} hidden`} 
                        click={this.hideCategory}
                        apis={this.state.apis}
                        loaded={this.state.loaded}
                    />
                    <QuestionTile 
                        style={this.state.categoryHidden ? `${this.state.questionStyle} showed` : `${this.state.questionStyle} hidden`} 
                        apis={this.state.apis}
                    />
                    <ResultTile/>
                </section>
                <Footer data={texts}/>
            </section>
        )
    }
}
export default App;