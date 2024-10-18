import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerticalNavBar from './components/verticalNavBar';
import Landing from './components/Landing';
import QuizProviderComponent from './components/quiz/quizProvider';
import QuizWindow from './components/quiz/quizWindow';
import CounsellorList from './components/CounsellorList';
import CounsLanding from './components/CounsLanding';
import Counsellor_Details_Submission from './components/Counsellor_Details_Submission';
import Student_Details_Submission from './components/Student_Details_Submission';
import CounsellorLogin from './components/CounsellorLogin';
import StudentLogin from './components/StudentLogin';
import StudentLanding from './components/StudentLanding';
import './App.css';

function App() {
  
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <div className="flex-shrink-0 w-64 bg-gray-800 text-white">
        <VerticalNavBar />
      </div>

      {/* Main content on the right */}
      <div className="flex-grow bg-gray-100 p-6 overflow-auto">
        <Router>
          <Routes>
            <Route path="/Home" element={<Landing />} />
            <Route path="/" element={<QuizProviderComponent><QuizWindow /></QuizProviderComponent>} />
            <Route path="/Student_Details_Submission" element={<Student_Details_Submission />} />
            <Route path="/StudentLogin" element={<StudentLogin />} />
            <Route path="/StudentLanding" element={<StudentLanding />} />
            <Route path="/CounsellorLogin" element={<CounsellorLogin />} />
            <Route path="/counsellor" element={<CounsellorList />} />
            <Route path="/Counsellor_Details_Submission" element={<Counsellor_Details_Submission />} />
            <Route path="/counslanding" element={<CounsLanding />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
