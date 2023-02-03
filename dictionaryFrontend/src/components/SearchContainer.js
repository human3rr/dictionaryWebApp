import React from 'react'
import { useEffect, useState } from 'react'
const REACT_APP_BE_PORT = process.env.REACT_APP_BE_PORT || 3000

export default function SearchContainer({setdictionaryRecord}) {
    let [dictionarySearchRecord, setDictionarySearchRecord] = useState("")

    function handleChange(event) {
        console.log(event.target.value);
        setDictionarySearchRecord(event.target.value)
      }

    function getSearchWord(search){
        fetch(`http://localhost:${REACT_APP_BE_PORT}/dictionary/search/${search}`,
        {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors'
        })
         .then((response) => response.json())
         .then((actualData) => {
            if(actualData != null){
                setdictionaryRecord(actualData)
                console.log(actualData)
                console.log(actualData.word)
                console.log(actualData.definition)
            }else{
                setdictionaryRecord({"word":"Not found", "definition": ""})
            }
            
         })//.catch(())
       }
  return (
    <div>
      <div><input name="dictionarySearch" onChange={handleChange}></input><button onClick={() => getSearchWord(dictionarySearchRecord)}>Submit</button></div>
    </div>
  )
}
