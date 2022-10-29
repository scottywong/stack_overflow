
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateVote, fetchDeleteVote } from '../../store/answers';
import './Votes.css';

const Votes = ({answer, refreshQuestion}) => {

    const dispatch = useDispatch();
    
    
    const handleClearVote = async (e) => {
        
        e.preventDefault(); 

        return dispatch(fetchDeleteVote(answer?.Votes?.id))
        .then(refreshQuestion())
        .then(refreshQuestion());  //double refresh to ensure changes are reflected on Question
    }

    const handleUpVote = async(e) => {

        return dispatch(fetchCreateVote(answer?.id,"Up"))
        .then(refreshQuestion())
        .then(refreshQuestion())
       
    }

    const handleDownVote = async(e) => {

        return dispatch(fetchCreateVote(answer?.id,"Down"))
        .then(refreshQuestion())
        .then(refreshQuestion());
    }

    return (
        <div className='votes-container'>

            <div onClick={handleUpVote} className='vote-caret-container'>
                <i  className="fa-solid fa-caret-up fa-2xl"></i>
            </div>
            <div className='vote-total'>{answer?.Votes?.total}</div>
            <div onClick={handleDownVote} className='vote-caret-container down-caret'>
                <i className='fa-solid fa-caret-down fa-2xl'></i>
            </div>
            {answer?.Votes?.hasVoted && 
            <a href='#' onClick={handleClearVote} className="clear-Vote">Clear Vote</a>
            }

        </div>
    )

}

export default Votes;