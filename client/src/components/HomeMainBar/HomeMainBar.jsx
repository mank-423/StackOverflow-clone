import React from 'react'
import './HomeMainBar.css'
import { Link, useLocation } from 'react-router-dom'
import Questions from './Questions';
import QuestionList from './QuestionList';



const HomeMainBar = () => {

  const questionList = [
    {
      id: 1,
      votes: 8,
      noOfAnswers: 3,
      questionTitle: "How to implement authentication in a React app?",
      questionBody: "I'm working on a React project and need guidance on implementing user authentication. Any tips?",
      questionTags: ["reactjs", "authentication", "frontend"],
      userPosted: "mank",
      askedOn: "Feb 15",
    },
    {
      id: 2,
      votes: 12,
      noOfAnswers: 6,
      questionTitle: "Best practices for securing a Node.js API",
      questionBody: "I want to ensure the security of my Node.js API. What are the best practices to follow?",
      questionTags: ["nodejs", "security", "backend"],
      userPosted: "mano",
      askedOn: "Feb 20",
    },
    {
      id: 3,
      votes: 5,
      noOfAnswers: 2,
      questionTitle: "How to deploy a React app to GitHub Pages?",
      questionBody: "I've built a React app and want to showcase it on GitHub Pages. Any step-by-step guide?",
      questionTags: ["reactjs", "deployment", "github"],
      userPosted: "mano",
      askedOn: "Mar 5",
    },
    {
      id: 4,
      votes: 10,
      noOfAnswers: 4,
      questionTitle: "Understanding the use of Redux in a React app",
      questionBody: "Can someone explain the role of Redux in a React application and when to use it?",
      questionTags: ["reactjs", "redux", "state-management"],
      userPosted: "mano",
      askedOn: "Mar 10",
    },
  ];

  const location = useLocation();

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/'
            ?
            <h1>Top Questions</h1>
            :
            <h1>All Questions</h1>
        }

        <Link to="/AskQuestion">
          <button className="ask-btn">
            Ask Question
          </button>
        </Link>
      </div>

      <div>
        {
          questionList === null
            ?
            <h1>Loading..</h1>
            :
            <>
              <p>{questionList.length} questions</p>
              <QuestionList questionList={questionList} />
            </>
        }
      </div>

    </div>
  )
}

export default HomeMainBar
