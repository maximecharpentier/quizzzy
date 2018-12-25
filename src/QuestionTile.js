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
        question: 1,
        reset: 0,
        answer: '',
        trueanswer: '',
        visual: wrongSVG
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
        .then(() => this.setState({
            trueanswer: this.state.result.clues[0].answer
        }))
        .then(() => console.log(this.state));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer.toLowerCase() === this.state.trueanswer.toLowerCase()) {
            console.log(this.state.points);
            this.setState({
                visual: correctSVG,
                points: this.state.points + 1,
                question: this.state.question + 1
            })
            console.log(this.state.points);
            console.log(this.state.trueanswer);
            this.setState({
                trueanswer: this.state.result.clues[this.state.question].answer
            });
            console.log(this.state.trueanswer);
            console.log('win');
        }
        else console.log('loose');
        console.log(this.state)
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
                <QuestionHeader 
                api={result} points={this.state.points}
                question={this.state.question}/>
                <Question 
                    onSubmit={this.onSubmit} 
                    api={result} 
                    onChange={this.onChange} 
                    answer={this.state.answer} 
                    visual={this.state.visual}
                    question={this.state.question}/>
                <QuestionFooter 
                    api={result}
                    reset={this.state.reset}/>
            </section>
        )
    }
}}

export default QuestionTile;