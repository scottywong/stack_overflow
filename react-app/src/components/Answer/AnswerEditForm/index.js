import { useState , useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { useParams,useHistory } from 'react-router-dom';
import { fetchEditAnswer } from "../../../store/answers";
// import './AnswerCreateForm.css'


function AnswerEditForm({ setShowEditModal }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const {questionId} = useParams();

    const [body,setBody] = useState('');
    const [errors,setErrors] = useState([]);


    const onSubmit = async(e) => {

        e.preventDefault();

        const payload = {
            body
        }

        return dispatch(fetchEditAnswer(payload,questionId))
    }

    return (
        <div className="answerCreateForm-container">
            <h2>Edit Answer</h2>
            <ul className="errorMsg">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <form className="answerCreateForm" onSubmit={onSubmit}>
            <label>
            Body
            </label>
            <input
                type='textarea'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            >
            </input>
            <button>Edit</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
            </form>
        </div>
    )


}

export default AnswerEditForm;
