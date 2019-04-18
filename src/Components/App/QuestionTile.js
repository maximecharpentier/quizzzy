import React, { Component } from 'react';
import correctSVG from '../../assets/imgs/correct.svg'
import wrongSVG from '../../assets/imgs/false.svg'
import QuestionHeader from './QuestionTile/QuestionHeader';
import QuestionFooter from './QuestionTile/QuestionFooter';
import Question from './QuestionTile/Question';
import data from '../../data/data';

class QuestionTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // first, when it's not loaded, it's fake data to avoid errors
            result: this.props.isLoaded ? this.props.apis[localStorage.getItem('category')] : data.api,
            // answers and true answers are empty by default
            answer: '',
            trueanswer: '',
            // same for visuals and submit bool
            isSubmitted: false,
            visual: wrongSVG,
            default: false
        };
        // set all scores to default
        this.storagePoints = 0;
        this.storageQuestions = 1;
        this.storageIndex = 0;
        this.storageReset = 0;
        this.storageErrors = 0;
    };
    UNSAFE_componentWillMount = () => {
        localStorage.setItem('points', this.storagePoints);
        localStorage.setItem('questions', this.storageQuestions);
        localStorage.setItem('index', this.storageIndex);
        localStorage.setItem('reset', this.storageReset);
        localStorage.setItem('errors', this.storageErrors);
        clearInterval(this.resultID);
    };
    // require category index every 200ms
    componentDidMount = () => this.resultID = setInterval(() => this.getResult(), 200);
    // update apis in terms of category index
    getResult = () => this.setState({
        result: this.props.isLoaded ? this.props.apis[localStorage.getItem('category')].result : data.api,
        trueanswer: this.state.result.clues[this.storageIndex].answer
    });
    onSubmit = (e) => {
        e.preventDefault();
        // if input value corresponds to the expected answer
        if (this.state.answer.toLowerCase() === this.state.trueanswer.toLowerCase()) {
            this.correctUpdate();
            // set visual to correct, reset the answer, set the next expected answer and validate the submit bool
            this.setState({
                visual: correctSVG,
                answer: '',
                trueanswer: this.state.result.clues[this.storageQuestions].answer,
                isSubmitted: true
            });
        }
        else {
            this.wrongUpdate();
            // set visual to wrong, reset the answer, set the next expected answer and validate the submit bool
            this.setState({
                visual: wrongSVG,
                answer: '',
                trueanswer: this.state.result.clues[this.storageQuestions].answer,
                isSubmitted: true
            });
        };
        // if the user make 3 errors
        if (this.storageErrors === 3) {
            this.resultUpdate();
            // reset the reset counter
            this.storageReset = 0;
            localStorage.setItem('reset', this.storageReset);
        }
        if (this.storageIndex === 10) {
            this.resultUpdate();
        };
    };
    correctUpdate = () => {
        // increment points, question and index
        this.storagePoints++;
        this.storageQuestions++;
        this.storageIndex++;
        localStorage.setItem('points', this.storagePoints)
        localStorage.setItem('questions', this.storageQuestions)
        localStorage.setItem('index', this.storageIndex)
    };
    wrongUpdate = () => {
        // increment question, index and errors
        this.storageQuestions++;
        this.storageIndex++;
        this.storageErrors++;
        localStorage.setItem('questions', this.storageQuestions)
        localStorage.setItem('index', this.storageIndex)
        localStorage.setItem('errors', this.storageErrors) 
    };
    resultUpdate = () => {
        this.props.goToResult();
        // set submitted bool to false
        this.setState({isSubmitted: false})
        // reset the scores except points
        this.storageQuestions = 1;
        this.storageIndex = 0;
        this.storageErrors = 0;
        localStorage.setItem('questions', this.storageQuestions);
        localStorage.setItem('index', this.storageIndex);
        localStorage.setItem('errors', this.storageErrors);
    };
    // update answer with targetted value
    onChange = (e) => this.setState({
        answer: e.target.value,
        isSubmitted: false,
        visual: wrongSVG
    });
    resetScores = () => {
        // reset all the scores except reset counter
        this.resultUpdate();
        this.storagePoints = 0;
        localStorage.setItem('points', this.storagePoints);
        // reset answer and expected answer
        this.setState({
            answer: '',
            trueanswer: this.state.result.clues[this.storageIndex].answer,
            isSubmitted: false
        });
    };
    resetAll = () => {
        // reset scores, points and reset counter
        this.resetScores();
        this.storageReset++;
        localStorage.setItem('reset', this.storageReset);
    };
    render() {
        return (
            <section className={this.props.style}>
                <QuestionHeader
                    points={localStorage.getItem('points')}
                    question={localStorage.getItem('questions')}
                />
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
                    click={this.resetAll}
                />
            </section>
        );
    };
};
export default QuestionTile;