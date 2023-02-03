import React from 'react'

export default function SearchWordPageSelect({setPageSelect,randomButtonActive, setRandomButtonActive}) {
  function setPageToSearchWord(){
    console.log("search_word")
    setPageSelect("search_word")
    setRandomButtonActive(false)
}
  return (
    <div>
      <button onClick={setPageToSearchWord} disabled={!randomButtonActive}>Search Word</button>
    </div>
  )
}
