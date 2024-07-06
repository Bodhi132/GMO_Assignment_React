import {useContext} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ErrorContext } from '../context/ErrorContext';


const Navigation = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { setErrorActive } = useContext(ErrorContext);


  const handleGoForward = () => {
    const items = JSON.parse(localStorage.getItem('userDetails') as string);
    if(!items) {
      navigate('/');
      setErrorActive(true);
    }
    else
    navigate('/display', { replace: true });
  };

  return (
    <div style={{width:'100%',display:'flex',justifyContent:'flex-end',marginTop:'1rem'}}>
        <Button onClick={handleGoForward} disabled={location.pathname === '/display'} sx={{border:'2px solid #1b91ab'}}>Next</Button>
    </div>
  );
};

export default Navigation;
