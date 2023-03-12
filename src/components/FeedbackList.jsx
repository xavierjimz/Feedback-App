
import FeedbackItem from './FeedbackItem'

function FeedbackList( {feedback, handleDelete} ) {
    //if there is no feeedback then don't display
    if(!feedback || feedback.length === 0) 
    {
        //return a test text
        return <p>No Feedback Yet.</p>
    }

 //if there is, then map through the "feedback" and display each one of them
  return (
    <div>
      <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item}
            handleDelete={handleDelete}
            />
        ))}
      </div>
    </div>
  )
}

export default FeedbackList
