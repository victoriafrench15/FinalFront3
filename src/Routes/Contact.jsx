import React from 'react'
import Form from '../Components/Form'


const Contact = () => {
  return (
    <div className='title container'>
      <div className='container_contact'>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default Contact