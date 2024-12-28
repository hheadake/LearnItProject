import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const rows = [
  { id: 1, username: '@MUI', age: 20 },
  { id: 2, username: '@React', age: 25 },
  { id: 3, username: '@Material', age: 30 },
];

const columns = [
  { field: 'username', headerName: 'Username', flex: 1 },
  { field: 'age', headerName: 'Age', flex: 1 },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => alert(`Edit ${params.row.username}`)}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => alert(`Delete ${params.row.username}`)}
        >
          Delete
        </Button>
      </Box>
    ),
  },
];

const CenteredDataGridWithButtons = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          height: 400,
          width: '70%',
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          padding: 2,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
         
        />
      </Box>
    </Box>
  );
};

export default CenteredDataGridWithButtons;