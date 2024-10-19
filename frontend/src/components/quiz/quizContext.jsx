import React, { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };

    case 'SET_FILTERED_QUESTIONS':
      return { ...state, filteredQuestions: action.payload };

    case 'SET_ANSWER': // New case to handle setting answers
      const updatedQuestions = state.questions.map((q) => {
        if (q.id === action.payload.questionId) {
          return { ...q, answer: action.payload.answer };
        }
        return q;
      });
      return { ...state, questions: updatedQuestions };

    default:
      return state;
  }
};


export const QuizProvider = ({ children }) => {
  const initialState = {
    questions: [], // Stores all the questions
    filteredQuestions: [], // Stores filtered questions (if any)
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Function to set the questions in the state
  const setQuestions = (questions) => {
    dispatch({ type: 'SET_QUESTIONS', payload: questions });
  };

  // Function to set filtered questions (e.g., by difficulty or subject)
  const setFilteredQuestions = (filteredQuestions) => {
    dispatch({ type: 'SET_FILTERED_QUESTIONS', payload: filteredQuestions });
  };

  // Function to set the answer for a specific question
  const setAnswer = (questionId, answer) => {
    dispatch({
      type: 'SET_ANSWER',
      payload: { questionId, answer },
    });
  };

  return (
    <QuizContext.Provider value={{ state, setQuestions, setFilteredQuestions, setAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
