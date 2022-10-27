import QuestionList from "../Questions/QuestionList";
import './HomePage.css'

const HomePage = () => {

    return (
    <div className="homepage-container">
        <div className='question-nav'>
            <div className='question-nav-header'><h1>All Questions</h1></div>
            <button>Ask Question</button>
        </div>

        <QuestionList/>
    </div>
    )
}

export default HomePage;