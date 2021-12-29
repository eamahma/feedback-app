import Header from "./components/Header"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/feedbackData"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

const deletFeedback = (id) => {
  if(window.confirm('Are you sure you want to delet?')) {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
}

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} 
        handleDelete={deletFeedback}/>
      </div>
    </>
  )
}

export default App