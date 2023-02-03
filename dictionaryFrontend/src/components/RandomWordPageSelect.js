import React from 'react'
import { useState } from 'react'

export default function RandomWordPageSelect({setPageSelect, randomButtonActive, setRandomButtonActive}) {
    function setPageToRandomWord(){
        console.log("random_word")
        setPageSelect("random_word")
        setRandomButtonActive(true)
    }
  return (
    <div>
        <button onClick={setPageToRandomWord} disabled={randomButtonActive}>Random Word</button>
    </div>
  )
}
