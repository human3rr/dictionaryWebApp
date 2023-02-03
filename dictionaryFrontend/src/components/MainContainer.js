import React from 'react'
import { useEffect, useState } from 'react'
import PageSelectBox from './PageSelectBox'
import SearchOrNewWordContainer from './SearchOrNewWordContainer'
import WordContainer from './WordContainer'
import DefinitionContainer from './DefinitionContainer'
import '../styles/MainContainer.css'
const REACT_APP_BE_PORT = process.env.REACT_APP_BE_PORT || 3000

  
export default function MainContainer() {
    let [dictionaryRecord, setdictionaryRecord] = useState({})
    let [pageSelect, setPageSelect] = useState("random_word")

    useEffect(() => {
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
       }, []);
  return (
    <div className='MainContainer'>
      <PageSelectBox setPageSelect={setPageSelect}/>
      <SearchOrNewWordContainer  pageSelect={pageSelect} setdictionaryRecord={setdictionaryRecord}/>
      <div className='wordAndDefinitionContainer'>
        <WordContainer word={dictionaryRecord.word}/>
        <DefinitionContainer definition={dictionaryRecord.definition}/>
      </div>
    </div>
  )
}
