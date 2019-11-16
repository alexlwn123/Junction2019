import { Dispatch } from 'react';
import axios from 'axios';
import { DataState, DataAction, IQuestion } from '../reducers/dataReducer';

const baseURL = 'http://localhost:3001'


export const useDataService = (state: DataState, dispatch: Dispatch<DataAction>) => {
    const getQuestions = () => {
        axios.get(`${baseURL}/questions`)
        .then(res => {
            dispatch({
                type: 'FETCH_QUESTIONS',
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    };
    const addQuestion = (question: IQuestion) => {
        axios.post(`${baseURL}/questions`, question)
        .then(res => {
            console.log(res.data)
           dispatch({
                type: 'ADD_QUESTIONS',
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    return {
        getQuestions,
        addQuestion
    };
};