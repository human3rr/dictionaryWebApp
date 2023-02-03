import React from 'react'
import RandomWordPageSelect from './RandomWordPageSelect'
import SearchWordPageSelect from './SearchWordPageSelect'
import { useState } from 'react'
import '../styles/PageSelectBox.css'
export default function PageSelectBox({setPageSelect}) {
  let [ randomButtonActive, setRandomButtonActive] = useState(true)

  return (
    <div className='PageSelectBox'>
      <RandomWordPageSelect setPageSelect={setPageSelect} setRandomButtonActive={setRandomButtonActive} randomButtonActive={randomButtonActive}/>
      <SearchWordPageSelect setPageSelect={setPageSelect} setRandomButtonActive={setRandomButtonActive} randomButtonActive={randomButtonActive}/>
    </div>
  )
}
