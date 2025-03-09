import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Button, Col, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


interface formData {
    Label: string,
    City: string,
    State: string,
    ID:string,
}

const EditModal : React.FC = forwardRef((props, ref) => {
     const [modal, setModal] = useState(false);
        const [formData, setFormData] = useState<formData> ({
            Label: "",
            City: "",
            State: "",
            ID:""
          })
    
        const toggle = () => setModal(!modal);
        const openModal = (params:any) => {
            setModal(true);
            setFormData(params)
        }
    
    
        const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target
    
            setFormData(prev => (
                {
                    ...prev,
                    [name]: value
                }
            ))
          }
        const handleDisable = (): boolean =>{
            if(formData.Label?.trim() == "" || formData.City?.trim() == "" ||  formData.State?.trim() == "" || formData.ID?.trim() == "")  {
                    return true
                }
                return false
            }
    
        const handleSubmit = () => {
            props.handleEditStor({
                ID: formData.ID,
                Label: formData.Label,
                City: formData.City,
                State: formData.State,
              });
          
              // Clear the form and close the modal
              setFormData({ Label: "", City: "", State: "", ID: "" });
              setModal(false);
        }    
    
        useImperativeHandle(ref, () => {
            return (
                { openModal }
            )
        })
    return (
      <>
           <Modal isOpen={modal} toggle={toggle} backdrop="static" size='lg'>
                <ModalHeader toggle={toggle}>Edit Store</ModalHeader>
                <ModalBody>
                <FormGroup row className='mb-2'>
                        <Col sm='6'><Input type='text' title='Enter Full Name' placeholder='Enter Full Name' name='Label' onChange={handleChange} value={formData.Label}/></Col>
                        <Col sm='6'><Input type='text' title='Enter city' placeholder='Enter Email Id' name='City' onChange={handleChange} value={formData.City}/></Col>
                        </FormGroup>

                        <FormGroup row className='mb-2'> 
                        <Col sm='6'><Input type='text' title= 'Enter state' placeholder='Enter Mobile' name='State' onChange={handleChange} value={formData.State}/></Col>

                        <Col sm='6'>
                        <Input type='text' title= 'Enter ID' placeholder='Enter ID' name='ID' onChange={handleChange} value={formData.ID}/>
                        </Col>
                        </FormGroup>
                </ModalBody>
                <ModalFooter>
                    
                        <Button disabled={handleDisable()} onClick={handleSubmit}  color="primary">Submit</Button>
                </ModalFooter>
            </Modal>
      </>
    )
  }) 

export default EditModal
