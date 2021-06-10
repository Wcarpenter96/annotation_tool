import * as React from "react";
import { DataGrid, GridNoRowsOverlay } from "@material-ui/data-grid";
import FileReader from "./FileReader";
import { useSelector } from "react-redux";
import { DialogTitle } from "@material-ui/core";

// const columns = [
//   { field: "unit_id", headerName: "ID", width: 70 },
//   { field: "image_url", headerName: "image_url", width: 300 },
//   { field: "title", headerName: "title", width: 130 },
//   { field: "description", headerName: "description", width: 130 },
// ];

// const rows = [
//   {
//     id: 1,
//     image_url: "https://miro.medium.com/max/640/0*B1nMAW5C3-S-W0a8.jpg",
//     title: "Test image",
//     description: "This is a test image",
//   },
// ];

const Data = () => {

  const test = [{
    id: 1,
    image_url: "https://miro.medium.com/max/640/0*B1nMAW5C3-S-W0a8.jpg",
    title: "Test image",
    description: "This is a test image",
  }];

  const units = useSelector((state) => state.units.page_0) || test 
      

  const rows = units
  const columns = []
  for (const [key, value] of Object.entries(units[0])) {
    columns.push({
      field:key,
      headerName:key,
      width: 200
    })
  }


  return (
    <div>
      <FileReader/>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
        />
      </div>
    </div>
  );
}


export default Data;
