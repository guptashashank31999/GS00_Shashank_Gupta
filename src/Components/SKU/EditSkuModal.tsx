import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Button, Col, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


interface formData {
    sno: number;
    sku: string;
    price: number;
    cost: number;
}

const EditSkuModal : React.FC = forwardRef((props, ref) => {
     const [modal, setModal] = useState(false);
        const [formData, setFormData] = useState<formData> ({
            sno: 0,
            sku: "",
            price: 0,
            cost: 0
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
            // if(formData.Label?.trim() == "" || formData.City?.trim() == "" ||  formData.State?.trim() == "" || formData.ID?.trim() == "")  {
            //         return true
            //     }
                return false
            }
    
        const handleSubmit = () => {
            props.handleEditStor({
                cost: formData.cost,
                price: formData.price,
                sku: formData.sku,
                sno: formData.sno,
              });
          
              // Clear the form and close the modal
              setFormData({ cost: 0, price: 0, sku: "", sno: 0 });
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
                <ModalHeader toggle={toggle}>Edit SKU</ModalHeader>
                <ModalBody>
                <FormGroup row className='mb-2'>
                        <Col sm='6'><Input type='text' title='Enter Full Name' placeholder='Enter Cost' name='cost' onChange={handleChange} value={formData.cost}/></Col>
                        <Col sm='6'><Input type='text' title='Enter city' placeholder='Enter price' name='price' onChange={handleChange} value={formData.price}/></Col>
                        </FormGroup>

                        <FormGroup row className='mb-2'> 
                        <Col sm='6'><Input type='text' title= 'Enter sku' placeholder='Enter sku' name='sku' onChange={handleChange} value={formData.sku}/></Col>

                        <Col sm='6'>
                        <Input type='text' title= 'Enter sno' placeholder='Enter sno' name='sno' onChange={handleChange} value={formData.sno}/>
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

export default EditSkuModal
