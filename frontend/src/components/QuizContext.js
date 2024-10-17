import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a QuizContext
const QuizContext = createContext();


// const fetchQuestion = async (id) => {
//   const temp={
//     id
//   }
//   const res = await axios.get('http://localhost:5001/api/v1/quiz/make',temp);
//   console.log(res);
// }
const QuizProvider = ({ children }) => {
  const id=5;
  // fetchQuestion(id);

  const [questions] = useState([
    {
      text: "Annie and Alexei are running a race. When the race starts, Alexei starts running 9 ft. per second...",
      options: [
        "Statement (I) ALONE is sufficient, but statement (II) is not.",
        "Statement (II) ALONE is sufficient, but statement (I) is not.",
        "Both statements together are sufficient...",
        "Each statement ALONE is sufficient.",
        "Statements (I) and (II) TOGETHER are not sufficient."
      ],
      correctAnswer: "Statement (II) ALONE is sufficient, but statement (I) is not.",
      type: "Subject Specific", // Question type: Behavioral or Subject Specific
      subtype: "Single Correct", // Subtype: Subjective, Single Correct, Multiple Correct, Integer Answer
      difficulty: "Medium", // Difficulty: Easy, Medium, Hard
      subject: "Mathematics", // Subject
      topic: "Algebra", // Topic
      subtopic: "Quadratic Equations",
    },
    {
      text: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris",
      type: "Behavioral", // Example: Behavioral question
      subtype: "Single Correct",
      difficulty: "Easy",
      subject: "General Knowledge",
      topic: "Geography",
      subtopic: "European Capitals",
    },
    {
      text: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
      type: "Subject Specific",
      subtype: "Integer Answer",
      difficulty: "Easy",
      subject: "Mathematics",
      topic: "Arithmetic",
      subtopic: "Addition",
    },
    // Add more questions as needed...
  ]);

  // State to store filtered questions
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  // State for selected answers
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  // Function to update selected answers
  const setSelectedAnswer = (questionIndex, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  // Filter questions based on selected criteria
  const filterQuestions = (filters) => {
    let filtered = questions;

    // Apply type filter
    if (filters.type) {
      filtered = filtered.filter(q => q.type === filters.type);
    }

    // Apply difficulty filter
    if (filters.difficulty) {
      filtered = filtered.filter(q => q.difficulty === filters.difficulty);
    }

    // Apply subject filter
    if (filters.subject) {
      filtered = filtered.filter(q => q.subject === filters.subject);
    }

    // Update the filteredQuestions state
    setFilteredQuestions(filtered);
  };

  const calculateAccuracyBySubject = () => {
    const subjectAccuracy = {};

    questions.forEach((question, index) => {
      const isCorrect = selectedAnswers[index] === question.correctAnswer;
      if (!subjectAccuracy[question.subject]) {
        subjectAccuracy[question.subject] = { correct: 0, total: 0 };
      }

      subjectAccuracy[question.subject].total += 1;
      if (isCorrect) {
        subjectAccuracy[question.subject].correct += 1;
      }
    });

    // Convert to accuracy percentage
    const accuracyData = Object.keys(subjectAccuracy).map(subject => {
      const { correct, total } = subjectAccuracy[subject];
      return {
        subject,
        accuracy: Math.round((correct / total) * 100)
      };
    });

    console.log(accuracyData);
    return accuracyData;
  };

  return (
    <QuizContext.Provider value={{
      questions,
      filteredQuestions, // Provide filtered questions
      selectedAnswers,
      setSelectedAnswer,
      filterQuestions,
      calculateAccuracyBySubject // Provide the filterQuestions function
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
