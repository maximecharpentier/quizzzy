import React, { Component } from 'react';
import correctSVG from './assets/imgs/correct.svg'
import wrongSVG from './assets/imgs/false.svg'
import QuestionHeader from './QuestionHeader';
import QuestionFooter from './QuestionFooter';
import Question from './Question';

class QuestionTile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        result: {},
        points: 0,
        visual: wrongSVG,
        answer: '',
        trueanswer: '',
      }
    }
    componentDidMount = () => {
        fetch('http://jservice.io/api/category?id=78')
        .then(api => api.json())
        .then(
        (result) => {
            this.setState({
                isLoaded: true,
                result: result,
            });
            console.log(result)
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
        .then(() => this.setState({trueanswer: this.state.result.clues[1].answer}))
        .then(() => console.log(this.state));
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
    onChange = (e) => {
        this.setState({
            answer: e.target.value,
            visual: wrongSVG
        })
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
                <Question 
                    submitParam={this.onSubmit} 
                    api={result} 
                    changeParam={this.onChange} 
                    theAnswer={this.state.answer} 
                    theVisual={this.state.visual}/>
                <QuestionFooter api={result}/>
            </section>
        )
    }
}}

export default QuestionTile;