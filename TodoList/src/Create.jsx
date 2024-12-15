 import {React,useState} from 'react'
 import axios from 'axios'

const Create = () => {
    const [task,setTask]=useState()
    
    const handleAdd=()=>{
        axios.post('http://localhost:3001/add',{task:task})
        .then(result=>{
          location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
    <input className='create_form input' type="text" name="" id="" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
    <button className='create_form button' type="button" onClick={handleAdd}>Add</button>
     
    </div>
  )
}

export default Create
