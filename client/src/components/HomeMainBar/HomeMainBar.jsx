import React from 'react'
import './HomeMainBar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Questions from './Questions';
import QuestionList from './QuestionList';



const HomeMainBar = () => {


  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  var questionList = [
    {
      _id: '1',
      upVotes: 8,
      downVotes:3,
      noOfAnswers: 2,
      questionTitle: "How to implement authentication in a React app?",
      questionBody: "I'm working on a React project and need guidance on implementing user authentication. Any tips?",
      questionTags: ["reactjs", "authentication", "frontend"],
      userPosted: "mank",
      userId:1,
      askedOn: "Feb 15",
      answer:[
        {
          answerBody: "Answer",
          userAnswered: "vijay",
          answeredOn: "Feb 20",
          userId:2,
        }
      ]
    },
    {
      id: '2',
      upVotes: 2,
      downVotes:0,
      noOfAnswers: 2,
      questionTitle: "Best practices for securing a Node.js API",
      questionBody: "I want to ensure the security of my Node.js API. What are the best practices to follow?",
      questionTags: ["nodejs", "security", "backend"],
      userPosted: "mank",
      userId: 1,
      askedOn: "Feb 20",
      answer:[
        {
          answerBody: "Answer",
          userAnswered: "vijay",
          answeredOn: "Feb 20",
          userId:2,
        }
      ]
    },
    {
      _id: '3',
      upVotes: 5,
      downVotes: 1,
      noOfAnswers: 1,
      questionTitle: "How to deploy a React app to GitHub Pages?",
      questionBody: "I've built a React app and want to showcase it on GitHub Pages. Any step-by-step guide?",
      questionTags: ["reactjs", "deployment", "github"],
      userPosted: "mank",
      userId: 1,
      askedOn: "Mar 5",
      answer:[
        {
          answerBody: "Answer",
          userAnswered: "vijay",
          answeredOn: "Feb 20",
          userId:2,
        }
      ]
    },
    {
      _id: '4',
      upVotes: 10,
      downVotes: 1,
      noOfAnswers: 0,
      questionTitle: "Understanding the use of Redux in a React app",
      questionBody: "Can someone explain the role of Redux in a React application and when to use it?",
      questionTags: ["reactjs", "redux", "state-management"],
      userPosted: "mank",
      userId: 1,
      askedOn: "Mar 10",
      answer:[
        {
          answerBody: "Answer",
          userAnswered: "vijay",
          answeredOn: "Feb 20",
          userId:2,
        }
      ]
    },
  ];

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate('/Auth');
    } else {
      navigate('/AskQuestion')
    }
  }

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


        <button className="ask-btn" onClick={checkAuth}>
          Ask Question
        </button>

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
