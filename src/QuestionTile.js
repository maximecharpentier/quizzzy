import React, { Component } from 'react';
import correctSVG from './assets/imgs/correct.svg'
import wrongSVG from './assets/imgs/false.svg'
import QuestionHeader from './QuestionHeader';
import QuestionFooter from './QuestionFooter';
import Question from './Question';
import texts from './data';

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
        this.storagePoints = 0;
        this.storageQuestions = 1;
        this.storageIndex = 0;
        this.storageReset = 0;
    }
    UNSAFE_componentWillMount = () => {

        localStorage.setItem('points', this.storagePoints);
        localStorage.setItem('questions', this.storageQuestions);
        localStorage.setItem('index', this.storageIndex);
        localStorage.setItem('reset', this.storageReset);
    }
    componentDidMount = () => this.resultID = setInterval(() => this.getResult(), 200);
    componentWillUnmount = () => clearInterval(this.resultID);
    getResult = () => {
        this.setState({
            result: this.props.loaded ? this.props.apis[localStorage.getItem('category')] : texts.api,
            trueanswer: this.state.result.clues[this.storageIndex].answer
        })
        // console.clear()
        // console.log(this.state.result)
        // console.log(this.state.trueanswer)
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer.toLowerCase() === this.state.trueanswer.toLowerCase()) {
            this.setState({
                visual: correctSVG,
                trueanswer: this.state.result.clues[this.storageQuestions].answer
            });
            this.storagePoints++;
            localStorage.setItem('points', this.storagePoints)

        }
        this.setState({
            answer: '',
            trueanswer: this.state.result.clues[this.storageQuestions].answer,
            submited: true
        });
        this.storageQuestions++;
        this.storageIndex++;
        localStorage.setItem('questions', this.storageQuestions)
        localStorage.setItem('index', this.storageIndex)
        console.log('oui')
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
        this.storagePoints = 0;
        this.storageQuestions = 1;
        this.storageIndex = 0;
        this.storageReset++;
        localStorage.setItem('points', 0);
        localStorage.setItem('questions', 1);
        localStorage.setItem('index', 0);
        localStorage.setItem('reset', this.storageReset);
        this.setState({
            answer: '',
            trueanswer: this.state.result.clues[this.storageIndex].answer,
        })
    }
    render() {
        if (this.storageQuestions <= 9) {
            return (
                <section className={this.props.style}>
                    <QuestionHeader
                        points={this.storagePoints}
                        question={this.storageQuestions}/>
                    <Question
                        onSubmit={this.onSubmit}
                        api={this.state.result}
                        onChange={this.onChange}
                        answer={this.state.answer}
                        visual={this.state.visual}
                        question={this.storageIndex}
                        css={this.state.submited ? 'showed' : 'hidden'}
                        submited={this.state.submited}
                        apis={this.props.apis}
                        loaded={this.props.loaded}/>
                        
                    <QuestionFooter
                        api={this.state.result}
                        reset={this.storageReset}
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