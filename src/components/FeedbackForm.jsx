import { useState } from "react"

function FeedbackForm() {
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }


  return (
    <form>
        <textarea id="feedback" type="text" value={feedback} placeholder="Comment..." onChange={(event) => setFeedback(event.target.value)} />
        <button type="submit">Submit</button>
    </form>
  )
}

export default FeedbackForm
