import DepartmentMenu from '../components/DepartmentMenu'
import DataTable from '../components/DataTable'
import { Stack } from '@mui/material'

const Display = () => {
  return (
    <Stack spacing={2}>
        <DepartmentMenu />
        <DataTable />
    </Stack>
  )
}

export default Display