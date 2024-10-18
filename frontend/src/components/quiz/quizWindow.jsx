import React from 'react';
import { useQuiz } from './quizContext.jsx';
import QuizSection from './quizSection.jsx';
// import QuizFilters from './quizFilters.jsx';

const QuizWindow = () => {
  const { state } = useQuiz();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Quiz Window Title */}
      <h1 className="text-4xl font-bold text-yellow-800 bg-slate-300 py-2 px-4 rounded-lg shadow-md mb-8">
        Quiz Window
      </h1>

      {/* Quiz Sections */}
      {state.questions?.map((field, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg border border-gray-300 p-6 mb-6 w-full max-w-3xl"
        >
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {field.field} 
            </h2> */}
          <QuizSection field={field} />
        </div>
      ))}
    </div>
  );
};

export default QuizWindow;
