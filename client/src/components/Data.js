import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'unit_id', headerName: 'ID', width: 70 },
  { field: 'image_url', headerName: 'image_url', width: 300 },
  { field: 'title', headerName: 'title', width: 130 },
  { field: 'description', headerName: 'description', width: 130 }
];

const rows = [
  { id: 1, image_url: 'https://miro.medium.com/max/640/0*B1nMAW5C3-S-W0a8.jpg', title: 'Test image', description: 'This is a test image' },
];

export default function () {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}