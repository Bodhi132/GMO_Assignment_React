import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

interface DepartmentFormProps {
    department: string;
    sub_departments: string[];
  }

const DepartmentForm = ({ department, sub_departments }: DepartmentFormProps) => {

    const checkedArrr = Array.from(Array(sub_departments.length), () => false);
    const [checked, setChecked] = useState(checkedArrr)
    const [subDispaly, setSubDispaly] = useState(false)

    const setAllChecked = (isChecked: boolean) => {
        const newCheckedArray = Array.from(Array(sub_departments.length), () => isChecked);
        setChecked(newCheckedArray);
      };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {
                sub_departments.map((sub_department, index) => {
                    return (
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    checked={checked[index]}
                                    onChange={(e) => {
                                        const newChecked = [...checked];
                                        newChecked[index] = e.target.checked;
                                        setChecked(newChecked);
                                    }}
                                />
                            }
                            label={sub_department}
                        />
                    )
                })
            }
        </Box>
      );

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',alignItems:"center"}}>
        {subDispaly===false?<FiPlus onClick={() => setSubDispaly(!subDispaly)}
        style={{marginRight:'1.25rem',cursor:'pointer'}}/>:
        <LuMinus onClick={() => setSubDispaly(!subDispaly)} style={{marginRight:'1.25rem',cursor:'pointer'}}/>}
        <FormControlLabel
        label={department +" (" + sub_departments.length + ")"}
        control={
          <Checkbox
            checked={checked.every(val => val === true)}
            onChange={(e) => {
                setAllChecked(e.target.checked);
            }}
          />
        }
      />
        </div>
      {subDispaly && children}
    </div>
  )
}

export default DepartmentForm