import React from "react"
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/feedbackData"


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

const addFeedback = (newFeedback) => {
  newFeedback.id = uuidv4()
//  console.log(newFeedback)
  setFeedback([newFeedback,...feedback])
}

const deletFeedback = (id) => {
  if(window.confirm('Are you sure you want to delet?')) {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
}

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} 
        handleDelete={deletFeedback}/>
      </div>
    </>
  )
}

export default App