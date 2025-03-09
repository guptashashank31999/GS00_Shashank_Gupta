import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const Planning = () => {
  const [rowData, setRowData] = useState([
    {
      store: "store",
      sku: "SKU-1",
      salesU: 240,
      salesD: "Russia",
      gmD: 2000,
      gmPer: 100,
    },
    {
      store: "Store-1",
      sku: "SKU-2",
      salesU: 241,
      salesD: "Russia",
      gmD: 2000,
      gmPer: 200,
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      headerName: "Feb",
      groupId: "GroupA",
      children: [
        {
          headerName: "Store",
          field: "store",
          width: 150,
          filter: "agTextColumnFilter",
        },
        {
          headerName: "SKU",
          field: "sku",
          width: 150,
          filter: "agTextColumnFilter",
        },
        {
          headerName: "Week-01",
          groupId: "GroupB",
          children: [
            { headerName: "Sales U", field: "salesU", width: 120 },
            { headerName: "Sales Dollar", field: "salesD", width: 120 },
            { headerName: "GM Dollar", field: "gmD", width: 120 },
            { headerName: "GM Percentage", field: "gmPer", width: 120 },
          ],
        },
        {
          headerName: "Week-02",
          groupId: "GroupB",
          children: [
            { headerName: "Sales U", field: "salesU", width: 120 },
            { headerName: "Sales Dollar", field: "salesD", width: 120 },
            { headerName: "GM Dollar", field: "gmD", width: 120 },
            { headerName: "GM Percentage", field: "gmPer", width: 120 },
          ],
        },

        {
          headerName: "Age 2",
          columnGroupShow: "open",
          field: "age",
          width: 90,
          filter: "agNumberColumnFilter",
        },
      ],
    },
    {
      headerName: "Mar",
      columnGroupShow: "open",
      field: "athlete",
      width: 150,
      filter: "agTextColumnFilter",
    },
  ]);
  return (
    <>
      <div style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </>
  );
};

export default Planning;
