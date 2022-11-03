// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { fetchAllQuestions } from '../../../store/questions';
// import QuestionListItem from '../../Questions/QuestionListItem';
// import SearchResults from '../SearchResults';
// import './SearchBar.css';

// function SearchBar({ placeholder, data }) {
//     const [filteredQuestions, setFilteredQuestions] = useState([]);
//     const [wordValue, setWordValue] = useState('')

//     const dispatch = useDispatch();
//     const history = useHistory();

//     const questions = Object.values(useSelector((state) => state.questions));
//     const questArray = Object.values(questions[0]);

//     useEffect(() => {
//         dispatch(fetchAllQuestions())
//     }, [dispatch])

//     const onSearch = (e) => {
//         const search = e.target.value;
//         setWordValue(search);
//         const resArr = []
//         const newFilter = questArray.forEach(value => {
//             console.log('VALUE =', value)
//             if(value?.title.toLowerCase().includes(search.toLowerCase())){
//                 resArr.push(value)
//             }
//         })

//         if (search === ''){
//             setFilteredQuestions([])
//         } else {
//             setFilteredQuestions(resArr)
//         }
        
//     };

//     const onSubmit = () => {
//         setFilteredQuestions([]);
//         setWordValue('');
//         history.push('/search');
//     }

//   return (
//     <div className='search'>
//         <div className='searchInputs'>
//             <input type='text' placeholder='Search questions' value={wordValue} onChange={onSearch}/>
//         </div>
//         <div className='searchIcon'>
//             <button onClick={onSubmit}>Search</button>
//         </div>
//         <SearchResults questions={filteredQuestions}/>
//     </div>
//   )
// }

// export default SearchBar
