import React from 'react'

const Header = ({money,total}) => {
  return (
    <div>
{
  total > 0 && (
    <>
    harcazacak {money - total } paraniy kaldi
    
    </>
  ) ||(
    <>
     harcayacak para{money}
    
    </>
   
  )
}

    </div>
  )
}

export default Header