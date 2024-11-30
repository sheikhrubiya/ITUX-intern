import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
function Update() {
  const {id} = useParams();
  const [inputData, setInputData] = useState({
    id:'',
    date:'',
    amount:'',
    mode:'',
    type:''
  })
  const navigate= useNavigate();
  
  useEffect(()=>{
    axios.get('http://localhost:3000/transactions'+id).then(res => setInputData(res.data)).catch(err => console.log(err))
  },[])
  const handleSubmit = (event)=>{
       event.preventDefault();
       axios.put("http://localhost:3000/transactions"+id,inputData).then(res => {
        alert("Data updated")
        navigate("/")
       })
  }


  return (
    <div className='d-flex w-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
             <div>
              <label htmlFor='name'>ID</label>
              <input type='number' name='id' className='form-control' value={inputData.id} onChange={e => setInputData({...inputData, name: e.target.value})}/>
             </div>
             <div>
              <label htmlFor='mode'>Mode</label>
              <input type='text' name='mode' className='form-control' value={inputData.mode} onChange={e => setInputData({...inputData, name: e.target.value})}/>
             </div>
             <div>
              <label htmlFor='type'>Type</label>
              <input type='text' name='name' className='form-control' value={inputData.type} onChange={e => setInputData({...inputData, name: e.target.value})}/>
             </div>
             <div>
              <label htmlFor='amount'>Amount</label>
              <input type='number' name='amount' className='form-control' value={inputData.type} onChange={e => setInputData({...inputData, name: e.target.value})}/>
             </div>
             <br/>
             <Button>Update</Button>
        </form>
      </div>
    </div>
  )
}

export default Update
