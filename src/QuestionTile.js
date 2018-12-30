import React, { Component } from 'react';
import correctSVG from './assets/imgs/correct.svg'
import wrongSVG from './assets/imgs/false.svg'
import QuestionHeader from './QuestionHeader';
import QuestionFooter from './QuestionFooter';
import Question from './Question';
import texts from './data'


let storagePoints = 0;
let storageQuestions = 1;
let storageIndex = 0;
let storageReset = 0;
localStorage.setItem('points', storagePoints)
localStorage.setItem('questions', storageQuestions)
localStorage.setItem('index', storageIndex)
localStorage.setItem('reset', storageReset)
class QuestionTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            result: {},
            answer: '',
            trueanswer: '',
            submited: false,
            visual: wrongSVG,
            category: 0
        }
    }
    componentDidMount = () => {
        this.categoryID = setInterval(() => this.getPoints(), 200);
    }
    componentWillUnmount= () => {
        clearInterval(this.categoryID);
    }
    getPoints = () => {
        return this.setState({
            category: localStorage.getItem('category')
        })
    }
    componentDidMount = () => {
        fetch(texts.categories[this.state.category].url)
        .then(api => api.json())
        .then(
        (result) => {
            this.setState({
                isLoaded: true,
                result,
            });
            console.log(result)
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
        .then(() => this.setState({
            trueanswer: this.state.result.clues[storageIndex].answer
        }))
        .then(() => console.log(this.state));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer.toLowerCase() === this.state.trueanswer.toLowerCase()) {
            this.setState({
                visual: correctSVG,
                trueanswer: this.state.result.clues[storageQuestions].answer
            });
            storagePoints++;
            localStorage.setItem('points', storagePoints)
            console.log(texts)
            console.log('win');

        }
        console.log('loose');
        this.setState({
            answer: '',
            trueanswer: this.state.result.clues[storageQuestions].answer,
            submited: true
        });
        storageQuestions++;
        storageIndex++;
        localStorage.setItem('questions', storageQuestions)
        localStorage.setItem('index', storageIndex)
        console.log(this.state)
    }
    onChange = (e) => {
        this.setState({
            answer: e.target.value,
            submited: false,
            visual: wrongSVG
        })
        console.clear();
        console.log(this.state.trueanswer)
    }
    resetScore = () => {
        storagePoints = 0;
        storageQuestions = 1;
        storageIndex = 0;
        storageReset++;
        localStorage.setItem('points', 0);
        localStorage.setItem('questions', 1);
        localStorage.setItem('index', 0);
        localStorage.setItem('reset', storageReset);
        this.setState({
            answer: '',
            trueanswer: this.state.result.clues[storageIndex].answer,
        })
    }
    render() {
        const { error, isLoaded, result } = this.state;

        if (error) {
          return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded) {
          return <div>Loading...</div>;
        } 
        else {
            if (storageQuestions <= 9) {
                return (
                    <section className={this.props.style}>
                        <QuestionHeader
                        api={result} points={storagePoints}
                        question={storageQuestions}/>
                        <Question
                            onSubmit={this.onSubmit}
                            api={result}
                            onChange={this.onChange}
                            answer={this.state.answer}
                            visual={this.state.visual}
                            question={storageIndex}
                            css={this.state.submited ? 'showed' : 'hidden'}
                            submited={this.state.submited}/>
                        <QuestionFooter
                            api={result}
                            reset={storageReset}
                            resetScore={this.resetScore}/>
                    </section>
                )
            }
            else {
                return (
                <p className="hidden">result</p>
                )
            }
        }
    }
}

export default QuestionTile;