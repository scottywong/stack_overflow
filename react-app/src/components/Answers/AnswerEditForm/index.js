import { useState , useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { useParams,useHistory } from 'react-router-dom';
import { fetchEditAnswer } from "../../../store/answers";
import './AnswerEditForm.css'


function AnswerEditForm({ answer, refreshQuestion, setShowEditModal }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const {questionId} = useParams();

    const [body,setBody] = useState(answer?.body);
    const [errors,setErrors] = useState([]);

    const onSubmit = async(e) => {

        e.preventDefault();

        const payload = {
            body
        }

        return dispatch(fetchEditAnswer(payload, answer?.id))
          .then(refreshQuestion())
          .then(refreshQuestion())
          .then(setShowEditModal(false))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }

    return (
      <div className='modal-container'>
        <h2 className='modal-form-title'>Edit Answer</h2>
        <form className='answerCreateForm' onSubmit={onSubmit}>
          <textarea
            className='modal-input-body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
          <ul className='errorMsg'>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <button className='modal-btn modal-submit-btn'>Confirm</button>
          <button
            className='modal-btn modal-cancel-btn'
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    );


}

export default AnswerEditForm;
