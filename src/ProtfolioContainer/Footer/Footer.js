import React from 'react'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <div>
<footer className='bg-light text-center text-lg-start'>
<div class="text-center p-3">
All rights reserved ©{year} Mudassar Bagwan
   
  </div>

</footer>
</div>
  )
}

export default Footer