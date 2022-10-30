
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateVote, fetchDeleteVote } from '../../store/answers';
import './Votes.css';

const Votes = ({answer, refreshQuestion}) => {

    const dispatch = useDispatch();
    
    const handleClearVote = async (e) => {
        
        e.preventDefault(); 

        return dispatch(fetchDeleteVote(answer?.Votes?.voteId))
        .then(refreshQuestion())
        .then(refreshQuestion()) //double refresh to ensure changes are reflected on Question
        .then(document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
                e => e.style.setProperty('--vote-caret-hover-cursor', 'pointer')
            )
        )
    }

    const handleUpVote = async(e) => {

        return dispatch(fetchCreateVote(answer?.id,"Up"))
        .then(refreshQuestion())
        .then(refreshQuestion())
        .then(document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
                e => e.style.setProperty('--vote-caret-hover-cursor', 'not-allowed')
            )
        ) 
    }

    const handleDownVote = async(e) => {

        return dispatch(fetchCreateVote(answer?.id,"Down"))
        .then(refreshQuestion())
        .then(refreshQuestion())
        .then(document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
                e => e.style.setProperty('--vote-caret-hover-cursor', 'not-allowed')
            )

        )
    }

    return (
        <div className='votes-container'>

            <button disabled={answer?.Votes?.hasVoted} onClick={handleUpVote} className={`vote-caret-container vote-a-${answer.id}`}>
                <i  className="fa-solid fa-caret-up fa-2xl"></i>
            </button>
            <div className='vote-total'>{answer?.Votes?.total}</div>
            <button disabled={answer?.Votes?.hasVoted} onClick={handleDownVote} className={`vote-caret-container down-caret vote-a-${answer.id}`}>
                <i className='fa-solid fa-caret-down fa-2xl'></i>
            </button>
            {answer?.Votes?.hasVoted && 
            <a href='#'  onClick={handleClearVote} className="link">Clear Vote</a>
            }

        </div>
    )

}

export default Votes;