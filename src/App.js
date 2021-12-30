import React from "react"
import { BrowserRouter as Router  ,Route, Routes} from "react-router-dom"
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/feedbackData"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import Card from "./components/shared/Card"
import Post from "./components/Post"




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
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} 
              handleDelete={deletFeedback}/>
            </>
          }>
          </Route>

          <Route path='/about' element={<AboutPage />} />
          <Route path='/post/:id/:name' element={<Post />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App