import { useState } from "react"

function FeedbackItem( {item} ) {
    //return the card(feedback) displaying the name and the text
    return (
        <div className="card">
            <div className="rating-display">{item.rating}</div>
            <div className="name-display">{item.name}</div>
            <div className="text-display">{item.text}</div>
        </div>
    )
}

export default FeedbackItem