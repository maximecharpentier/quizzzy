import React, { Component } from 'react';
import correctSVG from './assets/imgs/correct.svg'
import wrongSVG from './assets/imgs/false.svg'
import QuestionHeader from './QuestionHeader';
import QuestionFooter from './QuestionFooter';
import Question from './Question';
import texts from './data';

let storagePoints = 0;
let storageQuestions = 1;
let storageIndex = 0;
let storageReset = 0;
localStorage.setItem('points', storagePoints);
localStorage.setItem('questions', storageQuestions);
localStorage.setItem('index', storageIndex);
localStorage.setItem('reset', storageReset);
class QuestionTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.loaded ? this.props.apis[localStorage.getItem('category')] : texts.api,
            answer: '',
            trueanswer: '',
            submited: false,
            visual: wrongSVG,
            default: false
        }
    }
    UNSAFE_componentWillMount = () => {
        console.log(this.state.result)
    }
    componentDidMount = () => {
        this.resultID = setInterval(() => this.getResult(), 200);
        this.setState({
            trueanswer: this.state.result.clues[storageIndex].answer
        })
        console.log(this.state.trueanswer)
    };
    componentWillUnmount = () => clearInterval(this.resultID);
    getResult = () => {
        if (localStorage.getItem('default') === 'false') {
            this.setState({
                result: JSON.parse(localStorage.getItem('result')),
            })
            console.log('ok')
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer.toLowerCase() === this.state.trueanswer.toLowerCase()) {
            this.setState({
                visual: correctSVG,
                trueanswer: this.state.result.clues[storageQuestions].answer
            });
            storagePoints++;
            localStorage.setItem('points', storagePoints)
        }
        this.setState({
            answer: '',
            trueanswer: this.state.result.clues[storageQuestions].answer,
            submited: true
        });
        storageQuestions++;
        storageIndex++;
        localStorage.setItem('questions', storageQuestions)
        localStorage.setItem('index', storageIndex)
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
        if (storageQuestions <= 9) {
            return (
                <section className={this.props.style}>
                    <QuestionHeader
                    api={this.state.result} points={storagePoints}
                    question={storageQuestions}/>
                    <Question
                        onSubmit={this.onSubmit}
                        api={this.state.result}
                        onChange={this.onChange}
                        answer={this.state.answer}
                        visual={this.state.visual}
                        question={storageIndex}
                        css={this.state.submited ? 'showed' : 'hidden'}
                        submited={this.state.submited}/>
                    <QuestionFooter
                        api={this.state.result}
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

export default QuestionTile;