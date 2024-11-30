import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
//import Read from './Read';
const Data= [
  {
    "id":1,
    "date":"20/11/2024",
    "amount":"1000",
    "mode":"neft",
    "type":"credit"
  },
  {
    "id":2,
    "date":"10/11/2024",
    "amount":"5000",
    "mode":"upi",
    "type":"debit" 
  },
  {
    "id":3,
    "date":"15/11/2024",
    "amount":1000,
    "mode":"rtgs",
    "type":"debit"
  },
  {
    "id":4,
    "date":"12/11/2024",
    "amount":9000,
    "mode":"online",
    "type":"credit"
  },
  {
    "id":5,
    "date":"18/11/2024",
    "amount":4000,
    "mode":"upi",
    "type":"debit"
  }

]
function Home() {

  const [modelOpen, setModelOpne] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [newdata, setNewData] = useState(Data);
 
  const handleView=(data) =>{
    setSelectedData(data);
       setModelOpne(true);
  }
  function handleDelete(id){
    const x=newdata.filter((e)=>{
      return e.id!=id;
      
    })
    setNewData(x);
 }

  console.log(Data);
  return (
    <div className=' mt-5 w-[100%] flex flex-row'>
     <div className='w-[30%]'>
      {
       // modelOpen && <Read data={selectedData}/>
      } 
      </div> 
      <div className='w-[70%]'>
        <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Mode</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {newdata.map((d,i)=>{
            return (
              <tr key={i}>
              <td>{d.id}</td>
              <td>{d.date}</td>
              <td>{d.amount}</td>
              <td>{d.mode}</td>
              <td>{d.type}</td>
              <td>
                <Link className='btn' to={`/update/${d.id}`}>Update</Link>
                 <button  onClick={()=>handleDelete(d.id)} >Delete</button>
                 <button onClick={()=>{
                   handleView(d);
                 }}>View</button>
              </td>
            </tr>
            )
          }
          )}
        </tbody>
        </table>
      </div>
      
      
    </div>
  )

 
}

export default Home
