import React, { useEffect, useState } from 'react'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'



function FeedbackDisplay() {
    const [feedbackData, setFeedbackData] = useState([]);

  return (
    <>
      <div className="comments">
        <FeedbackStats feedback={feedbackData}/>
        {/*Pass in the hook to get the feedbackData */}
        <FeedbackList feedback={feedbackData} />
        </div>
    </>
  )
}

export default FeedbackDisplay
