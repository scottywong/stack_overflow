import { useState , useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { fetchCreateAnswer } from "../../../store/answers";
import './AnswerCreateForm.css'


function AnswerCreateForm({ refreshQuestion,setShowAnswerModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { questionId } = useParams();

  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      body,
    };

    return dispatch(fetchCreateAnswer(payload, questionId))
    .then(refreshQuestion())
    .then(refreshQuestion())
    .then( setShowAnswerModal(false));
  };

  return (
    <div className="answerCreateForm-container">
      <h2 className="answerCreateForm-h2">Post Your Answer</h2>
      <ul className="errorMsg">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <form className="answerCreateForm" onSubmit={onSubmit}>
        <input
          className="answerCreateForm-input"
          type="text"
          placeholder="Write answer here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></input>
        <button className="submitAnswerCreateForm-button">Submit</button>
        <button onClick={() => setShowAnswerModal(false)}>Cancel</button>
      </form>
    </div>
  );
}

export default AnswerCreateForm;
