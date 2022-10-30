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
    .then(refreshQuestion()) //double refresh to ensure changes are reflected on Question
    .then( setShowAnswerModal(false));
  };

  return (
    <div className="modal-container">
      <h2 className="modal-form-title">Post Your Answer</h2>
      <ul className="errorMsg">
        {errors.map((error, idx) => (
          <li className='errors' key={idx}>{error}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          className="modal-input-body"
          type="text"
          placeholder="Write answer here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></input>
        <div>
          <button className="modal-btn modal-submit-btn">Submit</button>
          <button className="modal-btn modal-cancel-btn" onClick={() => setShowAnswerModal(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AnswerCreateForm;
