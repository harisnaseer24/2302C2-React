import React from 'react'

const HomePage = ({children}) => {
  return (
    <div className='container' style={{border : '1px solid red' ,width:'95%'}}>
      {children}
    </div>
  )
}

export default HomePage
