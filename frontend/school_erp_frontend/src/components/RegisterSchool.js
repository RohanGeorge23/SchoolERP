import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import axios from 'axios'
import { Toast } from 'primereact/toast';


function RegisterSchool() {
  const [name, setname] = useState('');
  const [address,setAdress]=useState('')
  const [board,setBoard]=useState('')

  const toast = useRef(null);

  const showSuccess = (msg) => {
    toast.current.show({severity:'success', summary: 'Success', detail:msg ? msg :'Message Content', life: 3000});
  }
  const showError = (msg) => {
    toast.current.show({severity:'error', summary:'Error', detail: msg ? msg : 'Please contact admin !!!', life: 3000});
  }

  const submitSchool = async()=>{
    try {
      if(name&&address&&board !== ''){
        let data = {
          name:name,
          address:address,
          board:board
        }
        axios.post('http://localhost:7000/school/create-school',data)
        showSuccess(`School Data for ${data.name} inserted successfully !`)
        setname('')
        setAdress('')
        setBoard('')
      }else{
        showError('Please Fill all the fields')
      }
    } catch (error) {
      showError()
      console.log('err',error)
    }


  }


  return (
      <div className="m-5">
        <Toast ref={toast} />
        <h1>Welcome to School Registration Page </h1>
        <p>Kindly fill all the details of your school here...</p>
        <div className="d-flex  flex-column w-50 ">
          <label htmlFor="username" className="m-2">School Name</label>
          <InputText value={name} onChange={(e) => setname(e.target.value)} />

          <label htmlFor="username">School Address</label>
          <InputText value={address} onChange={(e) => setAdress(e.target.value)} />


          <label htmlFor="username" className="m-2">School Board</label>
          <InputText value={board} onChange={(e) => setBoard(e.target.value)} />
        </div>
      
        <Button label="Submit" onClick={submitSchool}/>

      </div>
      

  )
}

export default RegisterSchool