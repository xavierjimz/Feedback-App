import React, { useState } from 'react'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackDisplay from './FeedbackDisplay';



function Home() {
     //create a useState to pass the feedback info from the FeedbackData component
     const [feedbackData, setFeedbackData] = useState([]);
     //handle the submission of the feedback textarea and change the setFeedbackData
     const handleSubmit = (name, feedback) => {
     //once feedback is submitted pass it onto "feedback"
     const newFeedback = {name: name, text: feedback};
     //then change the state
     setFeedbackData([...feedbackData, newFeedback])
 
     const deleteFeedback = (id) => {
         console.log('app', id)
     }
}

  return (
    <>
        <div className="container">
            <div className="bg-title">
                <div className="logo">
                    <h1>Tell us what you think.</h1> 
                </div>
            </div>
            <h2>What kind of feedback do you have?</h2>
                <div className="rating-container">
                {/*Add 1-5 for rating*/}
            
                </div>
                    
            {/*Call the FeedbackForm component */}
            {/*Create if user submits a form trigger and alert -testing purposes*/}
                <FeedbackForm onSubmit={handleSubmit}/>
        </div>
    </>
  )
}

export default Home
