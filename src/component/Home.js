import React from 'react'
import './css/Home.css';

export default function Home() {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults( showResults ?  false : true)

  return (
    <div>
   <div className='header'>
<div className='hdesk1'>
<div className='hdesk'>
    <y1> Home</y1>
    <y>Project</y>
    <y>Education</y>
<y>About me</y>
<y>Contact</y>
</div>
</div>

<div className='hmobile'>
<i class="barm  fa-solid fa-bars fa-2xl" type="submit"  onClick={onClick} />
      { showResults ? <Results /> : null }

   </div>

</div>

    </div>
  )
}







const Results = () => (
  <div id="results" className=" mdr">
 
 <p><i class="fa-solid fa-house"></i>  Home </p>
 
 <p><i class="fa-solid fa-list-check"></i> Project</p>
 <p><i class="fa-solid fa-building-columns"></i> Education</p>
 <p><i class="fa-solid fa-address-card"></i> About me</p>
 <p><i class="fa-solid fa-address-book"></i> Contact</p>
 
  </div>
)