import React, { useContext, useState } from 'react';
import { DataContext } from '../contexts/dataContext';
import classNames from 'classnames';
import './question.css';
import Button from './Button';

const Question = () => {
    const[answer, setAnswer] = useState<boolean|null>(null)
    const { data: { questions} } = useContext(DataContext);

    if(questions.length < 1) {
        return <div></div>
    }
    const handleClick = (op: string) => () => {
        if(questions[0].questions[0].answer === op) {
            setAnswer(true)
        } else {
            setAnswer(false)
        }
    } 
    console.log(questions[0].questions[0])
    return(
        <div className='Question'>
            <div key={questions[0].questions[0]._id}>
            <h1 className={classNames({
                "Question-title": true,
                "Question-true": answer,
                "Question-false": answer === false,
            })}>{questions[0].questions[0].question}</h1>
            {questions[0].questions[0].options.map((op: any) => 
            <input disabled={answer === false} className={classNames({
                'Question-option': true
            })}
            onClick={handleClick(op)}
            key={op} 
            value={op}
            />)}
            </div>
            {answer && <div className="Question-button" ><Button text="NEXT" /></div>}
        </div>
    )

}
export default Question;