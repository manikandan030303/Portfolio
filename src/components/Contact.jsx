import React from 'react'
import {CONTACT} from '../constants'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <a className='my-4' href={"tel:+919789432788"}>{CONTACT.phoneNo}</a><br />
            <a className='my-4' href={"mailto:"+CONTACT.email}>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact