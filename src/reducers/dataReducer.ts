//import * as Questions from '../db.json';


export interface IQuestion {
  id?: string;
  type: string;
  question: string;
  options: string[];
  answer: string;
}

interface IQuest {
  id?: string;
  question: string;
  options: string[];
  answer: string;
}

export interface DataState {
    type: string;
    questions: IQuest[];
}

export const initialDataState: DataState = {
  type: '',
  questions: []
};
export type DataAction = 
| { type: "FETCH_QUESTIONS"; payload: IQuest[] }
| { type: "ADD_QUESTIONS"; payload: IQuest };

export const dataReducer = (state: DataState, action: DataAction) => {
  switch (action.type) {
    case "FETCH_QUESTIONS":
      return { ...state, questions: action.payload };
    case "ADD_QUESTIONS":
      return { ...state, questions: state.questions.concat(action.payload) };
    default:
      return state;
  }
};
