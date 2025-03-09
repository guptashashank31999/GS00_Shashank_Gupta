import React, { useRef, useState } from "react";
import { Col, Container, Input, Row } from "reactstrap";
import { GrUserNew } from "react-icons/gr";
import "./styles.css";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import SkuData from "./skuData.js";

import AddNewSkuModal from "./AddNewSkuModal.js";
import EditSkuModal from "./EditSkuModal.js";

interface itemType {
  sno: number;
  sku: string;
  price: number;
  cost: number;
}

const Sku: React.FC = () => {
  const [data, setData] = useState(SkuData);

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
      { ...newStore, sno: prevData.length + 1 },
    ]);
  };
  const handleEditStor = (newStore: itemType) => {
    console.log("newStore", newStore);
    let tempData = [...data];

    let op = tempData.map((item, index) => {
      if (item.sno === newStore.sno) {
        return {
          ...item,
          cost: newStore.cost,
          price: newStore.price,
          sku: newStore.sku,
          sno: newStore.sno,
        };
      } else {
        return item;
      }
    });
    setData(op);
  };

  const handleEdit = (params: any) => {
    editRef.current.openModal(params);
  };

  return (
    <>
      <Container fluid className="p-4">
        <Row>
          <Col sm="4">
            <h5>SKU List</h5>
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
              <th>SKU</th>
              <th>Price</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: itemType, index: number) => (
              <tr key={index}>
                <td>{item.sno}</td>
                <td>{item.sku}</td>
                <td>{item.price}</td>
                <td>{item.cost}</td>
                <td>
                  <MdDelete className="cursor-pointer" onClick={() => handleDelete(index)} />
                  <MdEdit
                  className="cursor-pointer"
                    onClick={() => {
                      handleEdit(item);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      <AddNewSkuModal ref={ref} handleAddStore={handleAddStore} />
      <EditSkuModal ref={editRef} handleEditStor={handleEditStor} />
    </>
  );
};

export default Sku;
