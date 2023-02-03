import React from 'react'
import SearchContainer from './SearchContainer';
import '../styles/SearchOrNewWordContainer.css'

const REACT_APP_BE_PORT  = process.env.REACT_APP_BE_PORT || 3000

export default function SearchOrNewWordContainer({setdictionaryRecord, pageSelect}) {

    function getRandomWord(){
        fetch(`http://localhost:${REACT_APP_BE_PORT}/dictionary/random`,
        {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors'
        })
         .then((response) => response.json())
         .then((actualData) => {
            setdictionaryRecord(actualData)
            console.log(actualData.word)
            console.log(actualData.definition)
         });
       }
  return (
    <div className='searchOrNewWordContainer'>
      {pageSelect == "random_word" ? (
        <button onClick={getRandomWord}>Get Random Word</button> 
      ): (<SearchContainer setdictionaryRecord={setdictionaryRecord}/> )
      }
    </div>
  )
}
