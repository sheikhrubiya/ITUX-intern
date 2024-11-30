import React from 'react'
import { Link } from 'react-router-dom'
function Read({data}) {

  return (
    <div className='container bg-slate-500'>
       
        <div className='container p-5 border-orange-950 '>
          <div className=''>
             <p>Details for transaction ID {data.id}</p>
             <p>{data.id}</p>
             <p>Date:</p>
             <p>{data.date}</p>
             <p>Amount</p>
             <p>{data.amount}</p>
             <p>Mode</p>
             <p>{data.mode}</p>
             <p>Type</p>
             <p>{data.type}</p>   
          </div>
        
        
        </div>
         
    </div>
  )
}

export default Read
