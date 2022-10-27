import { useState , useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { fetchCreateAnswer } from "../../../store/answers";
import './AnswerCreateForm.css'


function AnswerCreateForm({ setShowAnswerModal }) {
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

    return dispatch(fetchCreateAnswer(payload, questionId));
  };

  return (
    <div className='answerCreateForm-container'>
        <h2>Post your answer</h2>
      <ul className='errorMsg'>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <form className='answerCreateForm' onSubmit={onSubmit}>
        <label>Body</label>
        <input
          type='text'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></input>
        <button>Submit</button>
        <button onClick={() => setShowAnswerModal(false)}>Cancel</button>
      </form>
    </div>
  );
}

export default AnswerCreateForm;
