
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateVote, fetchDeleteVote } from '../../store/answers';
import './Votes.css';

const Votes = ({answer, refreshQuestion}) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const isOwner = sessionUser.id === answer?.userId;
    const voteDirection = answer?.Votes?.voteDirection;

    console.log('voteDirection', voteDirection);

    //Default Owner Style
    // if(isOwner){
    //     document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
    //         e => {
    //             e.setAttribute('disabled','')
    //             e.style.setProperty('background-color', 'white');
    //             e.style.setProperty('--vote-caret-hover-cursor', 'not-allowed');
    //     });
    // }
    
    //Default Null
    if(voteDirection === null){

        document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
            e => {
                e.removeAttribute('disabled');
                e.style.setProperty('color', '#babfc4');
                e.style.setProperty('cursor', 'pointer');  
            }
        )

    } else {

        document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
            e => e.style.setProperty('cursor', 'not-allowed')
        );

        //Default Up
        if(voteDirection === 'Up'){
            document.querySelectorAll("[class*=up-caret-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
                e => {
                    e.style.setProperty('color', 'green');
                    e.setAttribute('disabled', '')
                    e.style.setProperty('background-color', 'white');
                    e.classList.add('.vote-caret-green');
                    
            });
        }

        //Default Down
        if(voteDirection === 'Down'){
            document.querySelectorAll("[class*=down-caret-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
                e => {
                    e.style.setProperty('color', 'red');
                    e.setAttribute('disabled', '')
                    e.style.setProperty('background-color', 'white');
                    e.classList.add('.vote-caret-red');
            });
        }
    }

    const handleClearVote = async (e) => {
        
        e.preventDefault(); 

        return dispatch(fetchDeleteVote(answer?.Votes?.voteId))
        .then(refreshQuestion())
        .then(refreshQuestion()) //double refresh to ensure changes are reflected on Question
        .then(
            document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
                e => {
                    e.removeAttribute('disabled');
                }
            ))
    }

    const handleUpVote = async(e) => {

        return dispatch(fetchCreateVote(answer?.id,"Up"))
        .then(refreshQuestion())
        .then(refreshQuestion())
        .then(document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
                e => e.setAttribute('disabled', '')
            )
        )
         
    }

    const handleDownVote = async(e) => {

        return dispatch(fetchCreateVote(answer?.id,"Down"))
        .then(refreshQuestion())
        .then(refreshQuestion())
        .then(document.querySelectorAll("[class*=vote-a-"+CSS.escape(`${answer.id}`)+"]" ).forEach(
                e => e.setAttribute('disabled', '')
            )

        )
    }

    return (
        <div className='votes-container'>

            <button disabled={answer?.Votes?.hasVoted} onClick={handleUpVote} className={`vote-caret-container up-caret-${answer.id} vote-a-${answer.id}`}>
                <i  className="fa-solid fa-caret-up fa-2xl"></i>
            </button>
            <div className='vote-total'>{answer?.Votes?.total}</div>
            <button disabled={answer?.Votes?.hasVoted} onClick={handleDownVote} className={`vote-caret-container down-caret-${answer.id} vote-a-${answer.id}`}>
                <i className='fa-solid fa-caret-down fa-2xl'></i>
            </button>
            {answer?.Votes?.hasVoted && 
            <a href='#'  onClick={handleClearVote} className="link">Clear Vote</a>
            }

        </div>
    )

}

export default Votes;