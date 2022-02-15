import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: uuidv4(),
      text: 'This is feedback item 1',
      rating: 10
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem } : item)))
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const deleteFeedback = (id) => {
    if(window.confirm('are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback =(newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext