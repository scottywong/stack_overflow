
import './Votes.css';

const Votes = ({answer, refreshQuestion}) => {

    return (
        <div className='votes-container'>

            <i class="fa-solid fa-caret-up"></i>
            
            <div>{answer?.Votes?.total}</div>
            
            <i class="fa-solid fa-caret-down"></i>
        </div>
    )

}

export default Votes;