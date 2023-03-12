import { useState } from "react"

function FeedbackForm( {onSubmit} ) {

  //handle the state of the name of the user and the feedback
  const [rating, setRating] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  //handle the submitting of the form
    const handleSubmit = (event) => {
        event.preventDefault();//prevent browser from reloading

        //if the user doesn't enter a name or a feedback, don't submit
        if(!name || !feedback) {
          {/*Add a modal to request user to input both fields*/}
          alert("Please enter both a name and feedback.");
          return;
        }
        //on that submit(get the name and the feedback)
        onSubmit(name, feedback);
        //set the feedback
        setName('');
        setFeedback('');

    }


  return (
    <form onSubmit={handleSubmit}>
        <input 
          id="name" 
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name...">
        </input>
        <textarea 
          id="feedback" 
          type="text" 
          value={feedback} 
          placeholder="Feedback..." 
          onChange={(event) => setFeedback(event.target.value)} 
        />
        <button type="submit" className="submit-btn">Submit</button>
    </form>
  )
}

export default FeedbackForm
