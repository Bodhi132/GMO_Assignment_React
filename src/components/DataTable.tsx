import React from 'react'
import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataTable = () => {

  const [Data, setData] = useState<User[] | undefined>([])

  const fetchData = async () => {

    try {
      const response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');

      const responseData: User[] = response.data;

      setData(responseData)

      console.log(responseData);

    } catch (error) {
      console.log(error);
    }
  }

  const columns: GridColDef<User>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userId',
      headerName: 'User ID',
      width: 150,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      type: 'number',
      width: 400,
      editable: true,
    }
  ];

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={Data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default DataTable