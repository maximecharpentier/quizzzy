import React, { Component } from 'react';
import correctSVG from './assets/imgs/correct.svg'
import wrongSVG from './assets/imgs/false.svg'

class QuestionHeader extends Component {
    render() {
        return (
            <header className="QuestionTile__header">
                <span className="QuestionTile__header__counter">Question 1</span>
                <span className="QuestionTile__header__points">0{this.props.points}/10</span>
            </header>
        )
    }
}

class QuestionFooter extends Component {
    render() {
        return (
            <footer className="QuestionTile__footer">
                <span className="QuestionTile__footer__tries">x1</span>
                <button className="QuestionTile__footer__reset">Reset</button>
            </footer>
        )
    }
}

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            trueanswer: this.props.api.clues[1].answer,
            visual: wrongSVG,
            points: 9
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer.toLowerCase() === this.state.trueanswer.toLowerCase()) {
            this.setState({
                visual: correctSVG,
                points: this.state.points + 1
            })
            console.log('win');
        }
        else console.log('loose');
    }
    changeValue = (e) => {
        this.setState({
            answer: e.target.value,
            visual: wrongSVG
        })
    }
    render() {
        return (
            <div className="QuestionTile__question">
                <h3 className="QuestionTile__question__title">{this.props.api.clues[1].question}</h3>
                <form className="QuestionTile__question__form" onSubmit={this.onSubmit}>
                    <input 
                    className="QuestionTile__question__input" 
                    type="text" 
                    value={this.state.answer} 
                    onChange={this.changeValue}
                    placeholder="duh"/>
                    <button className="QuestionTile__question__submit">OK</button>
                    <img src={this.state.visual} alt=""/>
                </form>
            </div>
        )
    }
}

class QuestionTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            result: {},
            points: 2
        }
    }
    componentDidMount = () => {
        fetch('http://jservice.io/api/category?id=78')
        .then(api => api.json())
        .then(
        (result) => {
            this.setState({
                isLoaded: true,
                result: result
            });
            console.log(this.state.result)
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        });
    }
    render() {
        const { error, isLoaded, result } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <section className="QuestionTile">
                <QuestionHeader api={result} points={this.state.points}/>
                <Question api={result}/>
                <QuestionFooter api={result}/>
            </section>
        )
    }
}}


export default QuestionTile;