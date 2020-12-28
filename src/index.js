import React from 'react'
import { render } from 'react-dom'
import './index.css'

function Bibliography() {
  return (
    <>
      <h2 class='authors'>Isaac Asimov</h2>
      <ul>
        <li>Foundation</li>
        <li>Foundation and Empire</li>
        <li>Second Foundation</li>
        <li>Foundation's Edge</li>
        <li>Foundation and Earth</li>
        <li>I, Robot</li>
        <li>The Positronic Man</li>
        <li>Nemesis</li>
        <li>The Caves of Steel</li>
        <li>The Naked Sun</li>
      </ul>

      <h2 class='authors'>H.G. Wells</h2>
      <ul>
        <li>The Time Machine</li>
        <li>The Invisible Man</li>
        <li>The War of the Worlds</li>
      </ul>
    </>
  )
}

render(<Bibliography />, document.querySelector('#root'))