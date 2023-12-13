'use client'
import React from 'react'

export default function Buttons() {
  
      // Click & Alert button         
      const shoot =()=> {
          alert("ALERT on Click Here");
        }
 
    return (
    <>
    <h1>buttons Page</h1> <br/>
<div>

<button onClick={shoot}>Click Here </button>

</div>

    </>
  )
}
