import React from 'react'
import { Link, useParams } from 'react-router-dom';
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer';

const QuestionDetails = () => {

    const { id } = useParams();

    var questionList = [
        {
            _id: '1',
            upVotes: 8,
            downVotes: 3,
            noOfAnswers: 2,
            questionTitle: "How to implement authentication in a React app?",
            questionBody: "I'm working on a React project and need guidance on implementing user authentication. Any tips?",
            questionTags: ["reactjs", "authentication", "frontend"],
            userPosted: "mank",
            userId: 1,
            askedOn: "Feb 15",
            answer: [
                {
                    answerBody: "Answer",
                    userAnswered: "vijay",
                    answeredOn: "Feb 20",
                    userId: 2,
                }
            ]
        },
        {
            id: '2',
            upVotes: 2,
            downVotes: 0,
            noOfAnswers: 2,
            questionTitle: "Best practices for securing a Node.js API",
            questionBody: "I want to ensure the security of my Node.js API. What are the best practices to follow?",
            questionTags: ["nodejs", "security", "backend"],
            userPosted: "mank",
            userId: 1,
            askedOn: "Feb 20",
            answer: [
                {
                    answerBody: "Answer",
                    userAnswered: "vijay",
                    answeredOn: "Feb 20",
                    userId: 2,
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
            answer: [
                {
                    answerBody: "Answer",
                    userAnswered: "vijay",
                    answeredOn: "Feb 20",
                    userId: 2,
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
            answer: [
                {
                    answerBody: "Answer",
                    userAnswered: "vijay",
                    answeredOn: "Feb 20",
                    userId: 2,
                }
            ]
        },
    ];

    return (
        <div className='question-details-page'>
            {
                questionList === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionList.filter(question => question._id === id).map((question) => (
                                <div key={question._id}>
                                    <section className='question-details-container'>

                                        <h1>{question.questionTitle}</h1>

                                        <div className='question-details-container-2'>
                                            <div className='question-votes'>
                                                <img src={upvote} alt="upVote" width='18' />
                                                <p>{question.upVotes - question.downVotes}</p>
                                                <img src={downvote} alt="downVote" width='18' />
                                            </div>

                                            <div style={{ width: "100%" }}>

                                                <p className='questions-body'>{question.questionBody}</p>

                                                <div className="question-details-tag">
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>

                                                <div className="question-action-user">
                                                    <div>
                                                        <button type="button">Share</button>
                                                        <button type="button">Delete</button>
                                                    </div>
                                                    <div>
                                                        <p>asked {question.askedOn}</p>
                                                        <Link
                                                            to={`/User/${question.userId}`}
                                                            className='user-link'
                                                            style={{ color: '#0086d8' }}
                                                        >
                                                            <Avatar backgroundColor="orange" px="8px" py="5px">
                                                                {question.userPosted.charAt(0).toUpperCase()}
                                                            </Avatar>

                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </section>


                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} answers</h3>
                                                <DisplayAnswer key={question._id} question={question}/>
                                            </section>
                                        )
                                    }


                                    <section className="post-ans-container">
                                        <h3>Your Answer</h3>
                                        
                                        <form action="">
                                            <textarea name="" id="" cols="30" rows="10"></textarea>
                                            <input type="submit" className='post-ans-btn' value="Post your answer" />
                                        </form>

                                        <p>
                                            Browse other questions tagged
                                            {
                                                question.questionTags.map((tag)=>(
                                                    <Link to='/Tags' key={tag} className='ans-tags'>
                                                        {tag}
                                                    </Link>
                                                ))
                                            }  or
                                            <br />
                                            
                                            <Link to='/AskQuestion' style={{textDecoration: 'none', color: '#009dff'}}>
                                                Ask your own question
                                            </Link>
                                        </p>

                                    </section>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionDetails
