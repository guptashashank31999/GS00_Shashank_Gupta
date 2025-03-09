import React, { useRef, useState } from "react";
import { Col, Container, Input, Row } from "reactstrap";
import { GrUserNew } from "react-icons/gr";
import "./styles.css";
import AddNewStoreModal from "./AddNewStoreModal";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import StoreData from "../../Datas/StoreData.js";
import EditModal from "./EditModal.js";

interface itemType {
  SeqNo: number;
  ID: string;
  Label: string;
  City: string;
  State: string;
}

const Stor: React.FC = () => {
  const [data, setData] = useState(StoreData);

  const ref = useRef<HTMLInputElement | any>(null);
  const editRef = useRef<HTMLInputElement | any>(null);

  const handleEditClick = () => {
    ref.current.openModal();
  };
  const handleDelete = (params: number) => {
    let tempData = [...data];
    tempData.splice(params, 1);
    setData(tempData);
  };
  const handleAddStore = (newStore: itemType) => {
    setData((prevData: any) => [
      ...prevData,
      { ...newStore, SeqNo: prevData.length + 1 },
    ]);
  };
  const handleEditStor = (newStore: itemType) => {


    console.log('newStore',newStore)
    let tempData = [...data];

    let  op = tempData.map((item,index)=> {
      if(item.ID === newStore.ID){
        return {...item, City: newStore.City, ID : newStore.ID, State : newStore.State,Label : newStore.Label
          }
      }else{
        return item
      }
    })
    setData(op);
  };

  const handleEdit = (params:any) => {
    editRef.current.openModal(params);
  }

  return (
    <>
      <Container fluid className="p-4">
        <Row>
          <Col sm="4">
            <h5>Store List</h5>
          </Col>
          <Col sm="8" className="d-flex justify-content-end">
            <GrUserNew
              title="New User"
              size="20"
              className="ms-2 mt-2 cursor-pointer"
              onClick={handleEditClick}
            />{" "}
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <table className="table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Store</th>
              <th>City</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: itemType, index: number) => (
              <tr key={index}>
                <td>{item.SeqNo}</td>
                <td>{item.Label}</td>
                <td>{item.City}</td>
                <td>{item.State}</td>
                <td>
                  <MdDelete className="cursor-pointer" onClick={() => handleDelete(index)} />
                  <MdEdit className="cursor-pointer" onClick={()=> {handleEdit(item)}}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      <AddNewStoreModal ref={ref} handleAddStore={handleAddStore} />
      <EditModal ref={editRef} handleEditStor={handleEditStor}/>
    </>
  );
};

export default Stor;
