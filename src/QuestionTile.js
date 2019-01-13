import React, { Component } from 'react';
import correctSVG from './assets/imgs/correct.svg'
import wrongSVG from './assets/imgs/false.svg'
import QuestionHeader from './QuestionHeader';
import QuestionFooter from './QuestionFooter';
import Question from './Question';
import data from './data';

class QuestionTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.isLoaded ? this.props.apis[localStorage.getItem('category')] : data.api,
            answer: '',
            trueanswer: '',
            isSubmitted: false,
            visual: wrongSVG,
            default: false
        }
        this.storagePoints = 0;
        this.storageQuestions = 1;
        this.storageIndex = 0;
        this.storageReset = 0;
        this.storageErrors = 0;
    }
    UNSAFE_componentWillMount = () => {

        // if (!localStorage.getItem('points')) 
        localStorage.setItem('points', this.storagePoints);
        //if (!localStorage.getItem('questions')) 
        localStorage.setItem('questions', this.storageQuestions);
        // if (!localStorage.getItem('index')) 
        localStorage.setItem('index', this.storageIndex);
        // if (!localStorage.getItem('reset')) 
        localStorage.setItem('reset', this.storageReset);
        // if (!localStorage.getItem('errors')) 
        localStorage.setItem('errors', this.storageErrors);
        clearInterval(this.resultID);
    }
    componentDidMount = () => this.resultID = setInterval(() => this.getResult(), 200);
    getResult = () => this.setState({
            result: this.props.isLoaded ? this.props.apis[localStorage.getItem('category')].result : data.api,
            trueanswer: this.state.result.clues[this.storageIndex].answer
    });

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer.toLowerCase() === this.state.trueanswer.toLowerCase()) {
            this.correctUpdate();
            this.setState({
                visual: correctSVG,
                answer: '',
                trueanswer: this.state.result.clues[this.storageQuestions].answer,
                isSubmitted: true
            });

        }
        else {
            this.wrongUpdate();
            this.setState({
                visual: wrongSVG,
                answer: '',
                trueanswer: this.state.result.clues[this.storageQuestions].answer,
                isSubmitted: true
            });
        }
        if (this.storageErrors === 3) {
            this.resultUpdate();
            this.storageReset = 0;
            localStorage.setItem('reset', this.storageReset);
        }
        if (this.storageIndex === 10) {
            this.resultUpdate();
        }
    }
    correctUpdate = () => {
        this.storagePoints++;
        this.storageQuestions++;
        this.storageIndex++;
        localStorage.setItem('points', this.storagePoints)
        localStorage.setItem('questions', this.storageQuestions)
        localStorage.setItem('index', this.storageIndex)
    }
    wrongUpdate = () => {
        this.storageQuestions++;
        this.storageIndex++;
        this.storageErrors++;
        localStorage.setItem('questions', this.storageQuestions)
        localStorage.setItem('index', this.storageIndex)
        localStorage.setItem('errors', this.storageErrors) 
    }
    resultUpdate = () => {
        this.props.goToResult();
        this.setState({isSubmitted: false})
        this.storageQuestions = 1;
        this.storageIndex = 0;
        this.storageErrors = 0;
        localStorage.setItem('questions', this.storageQuestions);
        localStorage.setItem('index', this.storageIndex);
        localStorage.setItem('errors', this.storageErrors);
    }
    onChange = (e) => {
        this.setState({
            answer: e.target.value,
            isSubmitted: false,
            visual: wrongSVG
        })
        console.clear();
        console.log(this.state.trueanswer)
    }
    resetScores = () => {
        this.resultUpdate();
        this.storagePoints = 0;
        localStorage.setItem('points', this.storagePoints);
        this.setState({
            answer: '',
            trueanswer: this.state.result.clues[this.storageIndex].answer,
            isSubmitted: false
        });
    }
    resetAll = () => {
        this.resetScores();
        this.storageReset++;
        localStorage.setItem('reset', this.storageReset);
    }
    render() {
            return (
                <section className={this.props.style}>
                    <QuestionHeader
                        points={localStorage.getItem('points')}
                        question={localStorage.getItem('questions')}/>
                    <Question
                        api={this.state.result.clues[this.storageIndex].question}
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        answer={this.state.answer}
                        visual={this.state.visual}
                        question={this.storageIndex}
                        css={this.state.isSubmitted ? 'showed' : 'hidden'}
                    />
                    <QuestionFooter
                        resetCounter={this.storageReset}
                        click={this.resetAll}/>
                </section>
            )
    }
}

export default QuestionTile;