import { useState , useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { useParams,useHistory } from 'react-router-dom';
import { fetchEditAnswer } from "../../../store/answers";
import './AnswerEditForm.css'


function AnswerEditForm({ answer, refreshQuestion, setShowEditModal }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const {questionId} = useParams();

    const [body,setBody] = useState(answer.body);
    const [errors,setErrors] = useState([]);

    const onSubmit = async(e) => {

        e.preventDefault();

        const payload = {
            body
        }

        return dispatch(fetchEditAnswer(payload,answer?.id)).then(
            refreshQuestion()).then(
                setShowEditModal(false))
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
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            >
            </textarea>
            <button>Edit</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
            </form>
        </div>
    )


}

export default AnswerEditForm;
