// src/components/ContactForm.tsx
import React, { useState,useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ErrorContext } from '../context/ErrorContext';
import { useNavigate } from 'react-router-dom';

const ContactForm: React.FC = () => {

  const { errorActive, setErrorActive } = useContext(ErrorContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrorActive(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneNumber || !formData.email) {
      setErrorActive(true);
    } else {
      localStorage.setItem('userDetails', JSON.stringify(formData));
      navigate('/display', { replace: true });
    }
  };
  

  return (
    <>
    {errorActive && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Please fill out all fields
        </Alert>
      )}
      <form onSubmit={handleSubmit} >
        <TextField
          label="Name"
          name="name"
          type='text'
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ m: 2 }}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          type='number'
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          required
          sx={{ m: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          type='email'
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ m: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

    </>
  );
};

export default ContactForm;
