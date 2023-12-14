'use client'
import React from 'react'

export default function Buttons() {
  
      // Click & Alert button         
      const shoot =()=> {
          alert("ALERT on Click Button-1");
        }
 
    return (
    <>
    <h1>buttons Page</h1> <br/>
<div>
 <h3>Event or Function Define Above the  return</h3> 
<button onClick={shoot}>Button-1 </button>
</div><br/>

<div>
  <h3>Single Line Event / Action  </h3>
<button onClick={()=> alert("Alert on click Button-2")}>Button-2</button>
</div>

    </>
  )
}
