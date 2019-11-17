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
    console.log(questions[0].questions[0].answer)
    return(
        <div className='Question'>
            {questions[0].questions.map((q: any) => 
            <div key={q._id}>
            <h1 className={classNames({
                "Question-title": true,
                "Question-true": answer,
                "Question-false": answer === false,
            })}>{q.question}</h1>
            {q.options.map((op: any) => 
            <input disabled={answer === false} className={classNames({
                'Question-option': true
            })}
            onClick={handleClick(op)}
            key={op} 
            value={op}
            />)}
            </div>
            )}
            {answer && <div className="Question-button" ><Button text="NEXT" /></div>}
        </div>
    )

}
export default Question;