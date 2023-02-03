import React from 'react'
import '../styles/WordContainer.css'
export default function WordContainer({word}) {
  return (
    <div className='wordDefinition'>
      {word}
    </div>
  )
}
