import React, { Component } from 'react';
import correctSVG from './assets/imgs/correct.svg'
import wrongSVG from './assets/imgs/false.svg'
import QuestionHeader from './QuestionHeader';
import QuestionFooter from './QuestionFooter';
import Question from './Question';
import texts from './data'


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
        this.storagePoints = 0;
        this.storageQuestions = 1;
        this.storageIndex = 0;
        this.storageReset = 0;
    }
    componentDidMount = () => this.categoryID = setInterval(() => this.getPoints(), 200);
    componentWillUnmount= () => clearInterval(this.categoryID);
    getPoints = () => this.setState({category: localStorage.getItem('category')});
    componentDidMount = () => {
        localStorage.setItem('points', this.storagePoints)
        localStorage.setItem('questions', this.storageQuestions)
        localStorage.setItem('index', this.storageIndex)
        localStorage.setItem('reset', this.storageReset)

        fetch(texts.categories[this.state.category].url)
        .then(api => api.json())
        .then(
        (result) => {
            this.setState({
                isLoaded: true,
                result,
            });
            console.log(result)
        })
        .then(() => this.setState({trueanswer: this.state.result.clues[this.storageIndex].answer}))
        .then((error) => {
            return this.setState({
                isLoaded: true,
                error
            });
        });
    }
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
        const { error, isLoaded, result } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded) {
          return <div>Loading...</div>;
        } 
        else {
            if (this.storageQuestions <= 9) {
                return (
                    <section className={this.props.style}>
                        <QuestionHeader
                            api={result} points={this.storagePoints}
                            question={this.storageQuestions}/>
                        <Question
                            onSubmit={this.onSubmit}
                            api={result}
                            onChange={this.onChange}
                            answer={this.state.answer}
                            visual={this.state.visual}
                            question={this.storageIndex}
                            css={this.state.submited ? 'showed' : 'hidden'}
                            submited={this.state.submited}/>
                        <QuestionFooter
                            api={result}
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
}

export default QuestionTile;