import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import FeedbackForm from "../components/FeedbackForm";
import AboutIconLink from "../components/AboutIconLink";

function HomePage() {

  return (
    <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        <AboutIconLink />
    </div>
  )
}

export default HomePage