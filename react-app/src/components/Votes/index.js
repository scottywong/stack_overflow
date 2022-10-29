
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteAnswer } from '../../store/answers';
import './Votes.css';

const Votes = ({answer, refreshQuestion}) => {

    const dispatch = useDispatch();

    const [hasVoted,setHasVoted] = useState(false);

    useEffect(()=> {

    },[dispatch]);
    
    const handleClearVote = async (e) => {
        
        e.preventDefault(); 

        return dispatch(fetchDeleteAnswer(answer?.Votes?.id))
        .then(refreshQuestion())
        .then(refreshQuestion());  //double refresh to ensure changes are reflected on Question

    }

    return (
        <div className='votes-container'>

            <i className="fa-solid fa-caret-up"></i>
            
            <div>{answer?.Votes?.total}</div>
            
            <i className="fa-solid fa-caret-down"></i>

            <a href='#' onClick={handleClearVote} className="clear-Vote">Clear Vote</a>

        </div>
    )

}

export default Votes;