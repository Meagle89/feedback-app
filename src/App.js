import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App;