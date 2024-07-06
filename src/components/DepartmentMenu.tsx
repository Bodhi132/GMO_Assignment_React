import DepartmentForm from './DepartmentForm';
import data from '../department.json'

const DepartmentMenu = () => {
  return (
    <>
    {
      data && data.map((department:{ department: string, sub_departments: string[] },index:number)=>{
        return(
          <DepartmentForm department={department.department} sub_departments={department.sub_departments} key={index}/>
        )
      })
    }
    </>
  )
  
}

export default DepartmentMenu