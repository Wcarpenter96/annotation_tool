import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import FileReader from "./FileReader";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../actions";
import DataHelper from "./DataHelper";


const Data = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, []);

  const units = useSelector((state) => state.units);
  const description = useSelector((state) => state.task.description);

  const fetchColumns = () => {
    const columns = [];
    if (!units.length) {
      return false;
    }
    for (const [key, value] of Object.entries(units[0])) {
      columns.push({
        field: key,
        headerName: key,
        width: 200,
      });
    }
    return columns;
  };

  if (description) {
    return (
      <div >
        <FileReader />
        {units.length ? (
          <div style={{ height: 650, width: "100%" }}>
            <DataGrid
              rows={units}
              columns={fetchColumns()}
              pageSize={10}
              checkboxSelection
            />
          </div>
        ) : (
          <div style={{ margin: 100 }}>
            <DataHelper />
          </div>
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Data;
