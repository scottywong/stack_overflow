
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Votes.css';

const Votes = ({answer, refreshQuestion}) => {

    const dispatch = useDispatch();

    useEffect(()=> {

    },[dispatch]);

    return (
        <div className='votes-container'>

            <i class="fa-solid fa-caret-up"></i>
            
            <div>{answer?.Votes?.total}</div>
            
            <i class="fa-solid fa-caret-down"></i>
        </div>
    )

}

export default Votes;