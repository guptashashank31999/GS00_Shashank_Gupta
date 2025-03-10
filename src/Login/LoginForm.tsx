import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, FormGroup, Input } from 'reactstrap';

interface FormDataIntr {
    email:string;
    password:string;
}

const LoginForm:React.FC = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataIntr>({
    email:'',
    password:''
  })

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
      const {name , value} = e.target
      setFormData(prev => ({
        ...prev,
        [name] : value
      }))
  }

  const handleClick = async () => {
   localStorage.setItem('user', formData.email)
   localStorage.setItem('password', formData.password);
   navigate('/store')
    
  }


  const disable = () => {
    if (formData.email.trim() === '' || formData.password.trim() === '') {
      return true
    }

    return false
  }


  return (
    <>
         <div>
        <div>
            <img src='/Gsynergy Logo V2 Long Description.png' className='logo-dim-admin'/>
            <h4 className='heading-style'>Data View Application</h4>
            <FormGroup row>
              <Col sm='12' className='mb-2'><Input type='text' placeholder='User Name*' name='email' value={formData.email} onChange={handleChange}/></Col>
              <Col sm='12' className='mb-4'><Input type='password'placeholder='Password*' name ='password' value={formData.password} onChange={handleChange}/></Col>
              <Col sm='12'><Button className='submit-btn-styles cursor-pointer' onClick={handleClick} 
              disabled={disable()}
              >Submit</Button></Col>
            </FormGroup>
        </div>
     </div> 
    </>
  )
}

export default LoginForm
