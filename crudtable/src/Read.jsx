
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'

function Read({data}) {

  return (
    <div className='container'>
       
        <div className='container p-5 border-orange-950'>
        <p>{data.id}</p>
        <p>{data.date}</p>
        <p>{data.amount}</p>
        <p>{data.mode}</p>
        <p>{data.type}</p>
        <Link to="/">Back</Link>
        </div>
         
    </div>
  )
}

export default Read
